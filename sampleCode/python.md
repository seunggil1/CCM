## python 컴파일러

```
request body
// 요청 보낼때 json에 주석이 있으면 안됩니다.
{
    "lang": "py",
    "code": "a=input()\nb=input()\nprint(a+b)",
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
            "output" : "21222\n3"
        }
    ]
}


{
    "status": "success",
    "result": [
        {
            "time": 254,
            "output": "13\n",
            "success": false
        },
        {
            "time": 107,
            "output": "510\n",
            "success": false
        },
        {
            "time": 128,
            "output": "1121211\n",
            "success": false
        }
    ]
}

response body(서버 오류)
{
      status : "invalid request",
      result : []
}


response body(런타임 오류)
{
    "status": "success",
    "result": [
        {
            "time": 0,
            "output": "Traceback (most recent call last):\n  File \"./main.py\", line 4, in <module>\n    print(5/0)\nZeroDivisionError: division by zero\n",
            "success": false
        },
        {
            "time": 0,
            "output": "Traceback (most recent call last):\n  File \"./main.py\", line 4, in <module>\n    print(5/0)\nZeroDivisionError: division by zero\n",
            "success": false
        },
        {
            "time": 0,
            "output": "Traceback (most recent call last):\n  File \"./main.py\", line 4, in <module>\n    print(5/0)\nZeroDivisionError: division by zero\n",
            "success": false
        }
    ]
}



response body(시간 초과)
{
    "status": "success",
    "result": [
        {
            "time": 5000,
            "output": "실행시간 제한(5초)를 초과했습니다.",
            "success": false
        },
        {
            "time": 5000,
            "output": "실행시간 제한(5초)를 초과했습니다.",
            "success": false
        },
        {
            "time": 5000,
            "output": "실행시간 제한(5초)를 초과했습니다.",
            "success": false
        }
    ]
}
```