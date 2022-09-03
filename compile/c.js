const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs').promises;

// do it(error check);
exports.check = async (code,inputData,answerData) => {
  let sourceFile;
  try {
    sourceFile = await fs.writeFile('main.c',code);
    await fs.writeFile('./input.in', inputData);
  } catch (error) { // 파일 쓰기 실패
    console.log(error);
    return {
      time : 0,
      output : error.stderr,
      success : false
    };
  }

  const compileOption = require('./compileOption.js');
  try {
    await exec("gcc -finput-charset=UTF-8 main.c");
    let pre_time = Date.now();
    let run = await exec(`/usr/bin/time -v ./a.out < ./input.in`, { timeout: compileOption.timeLimit });
    let cur_time = Date.now();

    try { // 사용한 파일 제거
      await fs.unlink('main.c');
      await fs.unlink('a.out');
      await fs.unlink('input.in');
    } catch (error) { console.log(error); }
    console.log(run);
    return {
      time : cur_time - pre_time,
      output : run.stdout,
      success : (run.stdout.trim() == answerData)
    };

  } catch (error) { // 시간 초과 or 컴파일, 런타임 오류
    try {
      await fs.unlink('main.c');
      await fs.unlink('a.out');
      await fs.unlink('input.in');
    } catch (error) {
      console.log(error);
     }

    if(error.killed){
      return {
        time : compileOption.timeLimit,
        output : compileOption.timeLimitMessage,
        success : false
      };
    }else{
      return {
        time : 0,
        output : error.stderr,
        success : false
      };
    }
  }
}