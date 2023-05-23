<br>

## Pick

: 특정 타입에서 몇 개의 속성을 선택(pick)하여 타입을 정의할 수 있음

```javascript
interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

function fetchProduct(): Promise<Product[]> {
  // ...
}

// interface ProductDetail {
//   id: number;
//   name: string;
//   price: number;
// }
// 이렇게 위와 같은 interface에서 중복된 타입을 불필요하게 정의하지 않고
// 아래와 같이 Pick의 유틸리티 타입을 사용해 중복을 제거해서 사용할 타입만 꺼내 쓸 수 있음

type ShoppingItem = Pick<Product, "id" | "name" | "price">;
function displayProductDetail(
  shoppingItem: Pick<Product, "id" | "name" | "price">
) {}

// type 2가지 방법을 한거 같은데 복습하고 나서 다시 확인해보기
```

<br>

## Omit

: 특정 타입에서 지정된 속성만 제거한 타입을 정의해준다.

```javascript
interface AddressBook {
  name: string;
  phone: number;
  address: string;
  company: string;
}

const phoneBook: Omit<AddressBook, "address"> = {
  // omit을 사용해서 AddressBook의 address를 빼고 나머지를 새로 정의한다.
  name: "재택근무",
  phone: 12342223333,
  company: "내 방",
};
const chingtao: Omit<AddressBook, "address" | "company"> = {
  // omit을 사용해서 AddressBook의 address, company를 빼고 나머지를 새로 정의한다.
  name: "중국집",
  phone: 44455557777,
};
```
