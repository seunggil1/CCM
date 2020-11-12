const { exec } = require("child_process");
const fs = require('fs');

function compile_run(inFile,outFile){
  exec('gcc a.c -o a.exe', (error, stdout, stderr) => {
    if(error || stderr){
      console.log(`error: ${error.message}`);
      console.log(`stderr: ${stderr}`);
      return;
    }
    
    console.log('compile done');
    exec(`a.exe < ${inFile}`,(error,stdout,stderr) => {
      if(error || stderr){
        console.log(`error: ${error.message}`);
        console.log(`stderr: ${stderr}`);
        return;
      }
      
      check(outFile,stdout);
    });
  });
}

function check(outFile,stdout){
  fs.readFile(outFile, 'utf8' ,(err, data) => {
    if(err){
      console.error(err)
      return;
    }

    if(data == stdout) console.log('correct');
    else console.log('wrong');
    
  });
}

module.exports