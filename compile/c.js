const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs').promises;

// do it(error check);
exports.check = async (code,inFile,outFile) => {
  var writefile = await fs.writeFile('a.c',code);
  var compile = await exec("gcc a.c -o a.exe");
  var run = await exec(`a.exe < ${inFile}`);
  var readFile = await fs.readFile(outFile,'utf-8');
  
  await fs.unlink('a.c');
  await fs.unlink('a.exe');
  return {
    result : run.stdout,
    state : (run.stdout == readFile)
  };
}