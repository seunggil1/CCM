const bodyParser = require('body-parser');
const express = require("express");
const app = express();
const fs = require('fs');

app.use(bodyParser.json());
// app.use("/pnu/cse",cse);

app.post("/exec",async (req,res) => {
  var problemNum = req.body.problemNum;
  var caseNum = req.body.caseNum;
  var lang = req.body.lang;
  var code = req.body.code;

  const compileRunCheck = require(`./compile/${lang}.js`);
  var result = await compileRunCheck.check(
    code,
    `./compile/problem/${problemNum}/${caseNum}.in`,
    `./compile/problem/${problemNum}/${caseNum}.out`
  );
  res.send(result);
});

app.get('/',(req,res) => res.sendFile(__dirname + '/editor/test.html'));

app.listen(4000,() => {
  console.log("server is running");
});