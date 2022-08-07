## javascript 컴파일러

```
request body
// 요청 보낼때 json에 주석이 있으면 안됩니다.
{
    "lang": "js",
    "code":"var input = require('fs').readFileSync('/dev/stdin').toString().split(' '),a = parseInt(input[0]),b = parseInt(input[1]);console.log(a+b)",
    "testcase" :[
        {
            "input" : "5 10",
            "output" : "15"
        },
        {
            "input" : "1 3",
            "output" : "4"
        },
        {
            "input" :  "1 0",
            "output" : "1"
        }
    ]
}


response body(정상 처리)
{
    "status": "success",
    "result": [
        {
            "time": 1529,
            "output": "15\n",
            "success": true
        },
        {
            "time": 1603,
            "output": "4\n",
            "success": true
        },
        {
            "time": 1575,
            "output": "1\n",
            "success": true
        }
    ]
}

response body(서버 오류)
{
      status : "invalid request",
      result : []
}


response body(런타임 에러)
{
    "status": "success",
    "result": [
        {
            "time": 0,
            "output": "/home/ubuntu/S07P12A304/compiler/main.js:1\nconsole.log(3/0);notDefinedFunc()\n                 ^\n\nReferenceError: notDefinedFunc is not defined\n    at Object.<anonymous> (/home/ubuntu/S07P12A304/compiler/main.js:1:18)\n    at Module._compile (internal/modules/cjs/loader.js:778:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)\n    at Module.load (internal/modules/cjs/loader.js:653:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)\n    at Function.Module._load (internal/modules/cjs/loader.js:585:3)\n    at Function.Module.runMain (internal/modules/cjs/loader.js:831:12)\n    at startup (internal/bootstrap/node.js:283:19)\n    at bootstrapNodeJSCore (internal/bootstrap/node.js:623:3)\n",
            "success": false
        },
        {
            "time": 0,
            "output": "/home/ubuntu/S07P12A304/compiler/main.js:1\nconsole.log(3/0);notDefinedFunc()\n                 ^\n\nReferenceError: notDefinedFunc is not defined\n    at Object.<anonymous> (/home/ubuntu/S07P12A304/compiler/main.js:1:18)\n    at Module._compile (internal/modules/cjs/loader.js:778:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)\n    at Module.load (internal/modules/cjs/loader.js:653:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)\n    at Function.Module._load (internal/modules/cjs/loader.js:585:3)\n    at Function.Module.runMain (internal/modules/cjs/loader.js:831:12)\n    at startup (internal/bootstrap/node.js:283:19)\n    at bootstrapNodeJSCore (internal/bootstrap/node.js:623:3)\n",
            "success": false
        },
        {
            "time": 0,
            "output": "/home/ubuntu/S07P12A304/compiler/main.js:1\nconsole.log(3/0);notDefinedFunc()\n                 ^\n\nReferenceError: notDefinedFunc is not defined\n    at Object.<anonymous> (/home/ubuntu/S07P12A304/compiler/main.js:1:18)\n    at Module._compile (internal/modules/cjs/loader.js:778:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)\n    at Module.load (internal/modules/cjs/loader.js:653:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)\n    at Function.Module._load (internal/modules/cjs/loader.js:585:3)\n    at Function.Module.runMain (internal/modules/cjs/loader.js:831:12)\n    at startup (internal/bootstrap/node.js:283:19)\n    at bootstrapNodeJSCore (internal/bootstrap/node.js:623:3)\n",
            "success": false
        }
    ]
}


response body(시간 초과)
{
    "status": "success",
    "result": [
        {
            "time": 0,
            "output": "실행시간 제한(5초)를 초과했습니다.",
            "success": false
        },
        {
            "time": 0,
            "output": "실행시간 제한(5초)를 초과했습니다.",
            "success": false
        },
        {
            "time": 0,
            "output": "실행시간 제한(5초)를 초과했습니다.",
            "success": false
        }
    ]
}
```