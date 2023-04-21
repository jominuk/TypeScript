## 간단한 변수 타입 지정가능

let 이름 : string = "kim; <br>
(이름이라는 변수에는 string 라는 type만 들어올 수 있습니다 ) <br>
(type에는 number boolean null undefined bigint [] {} 등 올 수 있음)

<br>

let 이름 : string[] = ["kim", "park"]
[] <= array 이라는 뜻을 가지고 있음 <br>
string[] 이라는 의미는 배열 안에 string 이라는 문자열만 올 수 있다고 type을 지정 <br>

<br>

let 이름 : {name? : string} = {name : "kim"} <br>
이렇게 표현하지만 name뒤에 "?" 표식은 name이 들어올 수도 있고 안들어 올 수도 있다는 의미<br>
그렇기에 뒤 쪽 name: kim 이라는 부분에서 빈 {} 만 들어와도 에러를 표시하지 않음

<br>

## 다양한 타입이 들어올 수 있게 한다면

let 이름 :string | number= "JO" (Union type) <br>
이렇게 string 또는 number가 들어올 수 있다는 의미

<br>

## 타입은 변수에 담아 쓸 수 있음

type Name = string | number <br>
let 이름 : Name = "JO"

<br>

## 함수에 타입 지정 가능

```javascript
function 함수(x : number) : number(어떤 값이 리턴 될 것인가를 나타냄) {
    return x * 2
}
// 무조건 넘버라는 파라미터로 넘버라는 리턴값이 나옴
```
