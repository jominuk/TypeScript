# 맵드 타입

: 기존에 정의되어 있는 타입을 새로운 타입으로 변환해 주는 문법을 의미
: JS의 map() API 함수를 타입에 적용한 것과 같은 효과를 가짐

<br>

## 맵드타입의 기본 문법

```javascript
{ [ P in K ] : T }
{ [ P in K ] ? : T }
{ readonly [ P in K ] : T }
{ readonly [ P in K ] ? : T }
```

```javascript
type Heroes = "Hulk" | "Capt" | "Thor"

type HeroAges = { [K in Heroes] : number}
// in으로 접근하게 되면 각각의 타입들을 반복해서 접근해준다.

const ages : HeroAges = {
    Hulk : 33,
    Capt : 100,
    Thor : 1000,
}
```
