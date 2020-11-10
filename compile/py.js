const { exec } = require("child_process");
const fs = require('fs')


exec("a.py < input.txt",(error,stdout,stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  
  // console.log(stdout);
  // check(stdout);
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