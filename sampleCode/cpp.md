## c++ 컴파일러

```
request body
// 요청 보낼때 json에 주석이 있으면 안됩니다.
{
    "lang": "cpp",
    "code": "#include <iostream>\nusing namespace std;\nint main(void){\nint a, b;\ncin >> a >> b;\ncout << a + b;\nreturn 0;}",
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
            "time": 45,
            "output": "4",
            "success": true
        },
        {
            "time": 39,
            "output": "15",
            "success": true
        },
        {
            "time": 39,
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


response body(런타임, 컴파일 오류)
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

{
    "status": "success",
    "result": [
        {
            "time": 0,
            "output": "main.cpp: In function ‘int main()’:\nmain.cpp:4:1: error: ‘cin’ was not declared in this scope; did you mean ‘std::cin’?\n    4 | cin >> a >> b;\n      | ^~~\n      | std::cin\nIn file included from main.cpp:1:\n/usr/include/c++/9/iostream:60:18: note: ‘std::cin’ declared here\n   60 |   extern istream cin;  /// Linked to standard input\n      |                  ^~~\nmain.cpp:5:1: error: ‘cout’ was not declared in this scope; did you mean ‘std::cout’?\n    5 | cout << a + b;\n      | ^~~~\n      | std::cout\nIn file included from main.cpp:1:\n/usr/include/c++/9/iostream:61:18: note: ‘std::cout’ declared here\n   61 |   extern ostream cout;  /// Linked to standard output\n      |                  ^~~~\n",
            "success": false
        },
        {
            "time": 0,
            "output": "main.cpp: In function ‘int main()’:\nmain.cpp:4:1: error: ‘cin’ was not declared in this scope; did you mean ‘std::cin’?\n    4 | cin >> a >> b;\n      | ^~~\n      | std::cin\nIn file included from main.cpp:1:\n/usr/include/c++/9/iostream:60:18: note: ‘std::cin’ declared here\n   60 |   extern istream cin;  /// Linked to standard input\n      |                  ^~~\nmain.cpp:5:1: error: ‘cout’ was not declared in this scope; did you mean ‘std::cout’?\n    5 | cout << a + b;\n      | ^~~~\n      | std::cout\nIn file included from main.cpp:1:\n/usr/include/c++/9/iostream:61:18: note: ‘std::cout’ declared here\n   61 |   extern ostream cout;  /// Linked to standard output\n      |                  ^~~~\n",
            "success": false
        },
        {
            "time": 0,
            "output": "main.cpp: In function ‘int main()’:\nmain.cpp:4:1: error: ‘cin’ was not declared in this scope; did you mean ‘std::cin’?\n    4 | cin >> a >> b;\n      | ^~~\n      | std::cin\nIn file included from main.cpp:1:\n/usr/include/c++/9/iostream:60:18: note: ‘std::cin’ declared here\n   60 |   extern istream cin;  /// Linked to standard input\n      |                  ^~~\nmain.cpp:5:1: error: ‘cout’ was not declared in this scope; did you mean ‘std::cout’?\n    5 | cout << a + b;\n      | ^~~~\n      | std::cout\nIn file included from main.cpp:1:\n/usr/include/c++/9/iostream:61:18: note: ‘std::cout’ declared here\n   61 |   extern ostream cout;  /// Linked to standard output\n      |                  ^~~~\n",
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
## 설치방법

sudo apt update

sudo apt install nodejs
sudo apt install npm

npm install

컴파일 및 실행을 원하는 언어의 컴파일러나 언어 자체가 설치되어 있어야 한다.


### Linux

sudo apt install gcc


## 실행방법

node index.js
