## c 컴파일러

```
request body
// 요청 보낼때 json에 주석이 있으면 안됩니다.
{
    "lang": "c",
    "code": "#include <stdio.h>\n#include<assert.h>\nint main(){\n\tint a,b;\n\tscanf(\"%d\",&a);\n\tscanf(\"%d\",&b);\n\tprintf(\"%d\",a+b);\n\treturn 0;\n}",
    "testcase" :[
        {
            "input" : "1\n3",
            "output" : "4"
        },
        {
            "input" : "5\n10",
            "output" : "15"
        },
        {
            "input" :  "11\n21211",
            "output" : "22\n3"
        }
    ]
}


{
    "status": "success",
    "result": [
        {
            "time": 39,
            "output": "4",
            "success": true
        },
        {
            "time": 39,
            "output": "15",
            "success": true
        },
        {
            "time": 35,
            "output": "21222",
            "success": false
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
            "output": "a.out: main.c:8: main: Assertion `0' failed.\nAborted (core dumped)\n",
            "success": false
        },
        {
            "time": 0,
            "output": "a.out: main.c:8: main: Assertion `0' failed.\nAborted (core dumped)\n",
            "success": false
        },
        {
            "time": 0,
            "output": "a.out: main.c:8: main: Assertion `0' failed.\nAborted (core dumped)\n",
            "success": false
        }
    ]
}


response body(시간 초과)
{
    "status": "success",
    "result": [
        {
            "time": 1000,
            "output": "실행시간 제한(1초)를 초과했습니다.",
            "success": false
        },
        {
            "time": 1000,
            "output": "실행시간 제한(1초)를 초과했습니다.",
            "success": false
        },
        {
            "time": 1000,
            "output": "실행시간 제한(1초)를 초과했습니다.",
            "success": false
        }
    ]
}
```
