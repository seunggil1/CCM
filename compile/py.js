const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs').promises;

// do it(error check);
exports.check = async (code,inputData,answerData) => {
  let sourceFile;
  try {
    sourceFile = await fs.writeFile('main.py',code);
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
    let pre_time = Date.now();
    let run = await exec(`python3 ./main.py < ./input.in`, { timeout: compileOption.timeLimit * 3 + 2 });
    let cur_time = Date.now();

    try { // 사용한 파일 제거
      await fs.unlink('main.py');
      await fs.unlink('input.in');
    } catch (error) { console.log(error); }

    return {
      time : cur_time - pre_time,
      output : run.stdout,
      success : (run.stdout.trim() == answerData)
    };

  } catch (error) { // 시간 초과 or 런타임 오류
    try {
      await fs.unlink('main.py');
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