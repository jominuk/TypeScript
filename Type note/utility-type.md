# 유틸리티 타입

- 이미 정의 해 놓은 변환할 때 사용하기 좋은 문법
- 기존의 인터페이스, 제네릭 등의 기본 문법으로 충분히 타입을 변환할 수 있지만 <br>
  유틸리티 타입을 사용하면 더 간결한 문법으로 타입을 정의할 수 있음

<br>

## Partial

: 특정 타입의 부분 집합을 만족하는 타입을 정의할 수 있습니다.

```javascript
interface Address {
  email: string;
  address: string;
}

type MayHaveEmail = Partial<Address>;
const me: MayHaveEmail = {}; // 가능
const you: MayHaveEmail = { email: "test@abc.com" }; // 가능
const all: MayHaveEmail = { email: "capt@hero.com", address: "Pangyo" }; //
```

### 응용

```javascript
interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// 1. 상품 목록을 받아오기 위한 API함수
function fetchProduct(): Promise<Product[]> {
  // ...
}

// interface ProductDetail {
//   id: number;
//   name: string;
//   price: number;
// }

// 2. 특정 상품의 상세 정보를 나타내기 위한 함수
type ShoppingItem = Pick<Product, "id" | "name" | "price">;
function displayProductDetail(
  shoppingItem: Pick<Product, "id" | "name" | "price">
) {}
// 내가 사용하고 싶은 타입들만 가져와서 사용이 가능

// interface UpdateProduct {
//   id?: number;
//   name?: string;
//   price?: number;
//   brand?: string;
//   stock?: number;
// }

type UpdateProduct = Partial<Product>;
// 3. 특정 상품 정보를 업데이트 하는 함수
function updateProductItem(productItem: Partial<Product>) {}

// Partial 이라는 유틸리티 타입을 사용해 기존의 Product를 재활용 하는 관점
// VS코드 상에서 UpdateProduct에 포인트를 올려두었을 때 interface로 정의한 옵셔널 체이닝과 같이 보여짐
// 옵셔널 체이닝을 이용할 경우 부분 적으로 일부만 사용 가능
// 따라서 2번과 3번은 동일하게 사용 가능하다는걸 보여줌
```

### 응용2

```javascript
// 4. 유틸리티 타입 구현하기 - Partial

interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}

// interface UserProfileUpdate {
//   username?: string;
//   email?: string;
//   profilePhotoUrl?: string;
// }

// #1 접근 방법
// 이미 정의되어 있는 UserProfile이라는 type을 활용
type UserProfileUpdate = {
  username?: UserProfile["username"];
  email?: UserProfile["email"];
  profilePhotoUrl?: UserProfile["profilePhotoUrl"];
};

// #2 축약 과정
type UserProfileUpdate = {
  [p in "username" | "email" | "profilePhotoUrl"]?: UserProfile[p];
};
//맵드 타입

type UserProfileKeys = keyof UserProfile;

// #3 한번 더 축약 과정
type UserProfileUpdate = {
  [p in keyof UserProfile]?: UserProfile[p];
};
// Partial 에 가까운 타입이 되었음

// #4 최종 Partial을 구현하게 된다면
type Subset<T> = {
  [p in keyof T]?: T[p];
};

const obj : Partial
// 정의를 한 뒤 커서를 올리게 되면 최종 정의된 파셜이 올라온다.
```

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
