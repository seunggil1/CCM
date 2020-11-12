const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs');

async function compile_run(inFile){
  var compile = await exec("gcc a.c -o a.exe");
  var run = await exec(`a.exe < ${inFile}`);

  // if(compile.stderr || run.stderr){
  //   console.log(compile.stderr);
  //   console.log(run.stderr);

  //   return {
  //     compileError: compile.stderr,
  //     runtimeError: run.stderr
  //   };
  // }
  return run.stdout;
}
function compare(stdout,outFile){
  var ans = fs.readFileSync(outFile,'utf-8');

  return (stdout == ans);
}

exports.check = async (inFile,outFile) => {
  var runResult = await compile_run(inFile);
  var checkResult = compare(runResult,outFile);

  return {
    result : runResult,
    state : checkResult
  };
}