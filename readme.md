# 🔥 키오스크 프로젝트

- 카페 주문 키오스크앱 개발 프로젝트
- express, javascript 함수화를 사용해서 기본 서버구현
- 기능에 문제 없는 선에서, 최대한 간결하게

<br>

# 🔥 ERD

![ERD](https://ifh.cc/g/Qn26oX.png)

1. food : 음식
2. food_option : 음식 옵션
3. company_order : 음식 발주
4. about_order : 주문 처리
5. customer : 주문 고객

<br>

# 🔥 api 가이드

### 🧋 food (음식)

1. 생성 (POST) = /food
2. 조회 (GET) = 전체 : /food , 타입별 : /food?type=
3. 삭제 (DELETE) = 1차 요청 : /food/:id , 2차 수행 : /food/:id?confirmDelete=
4. 수정 (PUT) = /food/:id

### 🛒 order (주문)

1. 생성 (POST) = /order
2. 완료 (PUT) = /order/complete/:orderId
3. 취소 (DELETE) = /order/cancel/:orderId

### 📦 company_order (발주)

1. 생성 (POST) = /companyOrder
2. 수정 (PUT) = /companyOrder/:id

### 🧩 food_option

1. 옵션 추가 (POST) = /food/option

- size_price: 상품의 size 사이즈 선택시 추가될 요금 (0일 경우 선택 불가)
- shot_price: 상품의 shot 추가 선택시 추가될 요금 (0일 경우 추가 불가)
- hotcoldprice: hot, ice 선택 여부 (true일 경우 hot선택 가능, false일 경우 ice만 가능)
