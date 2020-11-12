const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs').promises;

// do it(error check);
exports.check = async (code,inFile,outFile) => {
  var readFile = await fs.readFile(outFile,'utf-8');
  var writefile = await fs.writeFile('a.py',code);

  var pre_time = Date.now();
  var run = await exec(`a.py < ${inFile}`);
  var cur_time = Date.now();
  
  await fs.unlink('a.c');
  await fs.unlink('a.exe');
  return {
    time : cur_time - pre_time,
    output : run.stdout,
    success : (run.stdout == readFile)
  };
}