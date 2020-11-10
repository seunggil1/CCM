const { exec } = require("child_process");
const fs = require('fs');

let child = exec("gcc a.c -o a.exe", (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  
  // child.
  console.log('compile done');
  exec("a.exe < input.txt",(error,stdout,stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    
    check(stdout);
  });
});

function check(stdout){
  fs.readFile('./ans.txt', 'utf8' ,(err, data) => {
    if (err){
      console.error(err)
      return;
    }

    // console.log(data);
    // console.log(stdout);
    if(data == stdout) console.log('correct');
    else console.log('wrong');
  });
}