## java 컴파일러

```
request body
// 요청 보낼때 json에 주석이 있으면 안됩니다.
{
    "lang": "java",
    "code":"import java.util.*;\nimport java.io.*;\n\npublic class Main{\n    public static void main(String[] args) throws IOException {\n        BufferedReader re = new BufferedReader(new InputStreamReader(System.in));\n       \n        int a = Integer.parseInt(re.readLine());\n        int b = Integer.parseInt(re.readLine());\n\n        System.out.println(a+b);\n        re.close();\n    }\n}",
    "testcase" :[
        {
            "input" : "5\n10",
            "output" : "15"
        },
        {
            "input" : "1\n3",
            "output" : "4"
        },
        {
            "input" :  "1\n0",
            "output" : "1"
        }
    ]
}


response body(정상 처리)
{
    "status": "success",
    "result": [
        {
            "time": 4,
            "output": "15\n",
            "success": true
        },
        {
            "time": 4,
            "output": "4\n",
            "success": true
        },
        {
            "time": 3,
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
            "output": "Exception in thread \"main\" java.lang.ArrayIndexOutOfBoundsException: 5\n\tat Main.main(Main.java:11)\n",
            "success": false
        },
        {
            "time": 0,
            "output": "Exception in thread \"main\" java.lang.ArrayIndexOutOfBoundsException: 5\n\tat Main.main(Main.java:11)\n",
            "success": false
        },
        {
            "time": 0,
            "output": "Exception in thread \"main\" java.lang.ArrayIndexOutOfBoundsException: 5\n\tat Main.main(Main.java:11)\n",
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
