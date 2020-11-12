const bodyParser = require('body-parser');
const express = require("express");
const app = express();
const fs = require('fs');

app.use(bodyParser.json());
// app.use(express.bodyParser());
// app.use("/pnu/cse",cse);

const LangExtensionMap = {
  c : "c",
  cpp : "cpp",
  python : "py",
  javascript : "js",
};

app.post("/exec",(req,res) => {
  var problemNum = req.body.problemNum;
  var caseNum = req.body.caseNum;
  var lang = req.body.lang;
  var code = req.body.code;

  fs.writeFile(`a.${ LangExtensionMap[lang] }`,code,async (err) => {
    if (err) return console.log(err);

    var inFile = `./problem/${problemNum}/${caseNum}.in`;
    var outFile = `./problem/${problemNum}/${caseNum}.out`;
    
    const compileRunCheck = require(`./${lang}.js`);
    var result = await compileRunCheck.check(inFile,outFile);

    res.send(result);
  });
});
app.get('/',(req,res) => {
  res.sendFile('C:/Users/Semicolons20602/Desktop/personal test/CCM_clean/editor/test.html');
});

app.listen(4000,() => {
  console.log("server is running");
});