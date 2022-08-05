const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs').promises;

// do it(error check);
exports.check = async (code,inputData,answerData) => {
  let sourceFile;
  try {
    sourceFile = await fs.writeFile('main.c',code);
    await fs.writeFile('./input.in', inputData);
  } catch (error) { // ���� ���� ����
    console.log(error);
    return {
      time : 0,
      output : error.stderr,
      success : false
    };
  }

  try {
    await exec("gcc -finput-charset=UTF-8 main.c");
    let pre_time = Date.now();
    let run = await exec(`./a.out < ./input.in`);
    let cur_time = Date.now();

    try { // ����� ���� ����
      await fs.unlink('main.c');
      await fs.unlink('a.out');
      await fs.unlink('input.in');
    } catch (error) { console.log(error); }

    return {
      time : cur_time - pre_time,
      output : run.stdout,
      success : (run.stdout.trim() == answerData)
    };

  } catch (error) { // ������, ��Ÿ�� ����
    console.log(error);
    try {
      await fs.unlink('main.c');
      await fs.unlink('a.out');
      await fs.unlink('input.in');
    } catch (error) {
      console.log(error);
     }

    return {
      time : 0,
      output : error.stderr,
      success : false
    };

  }
}