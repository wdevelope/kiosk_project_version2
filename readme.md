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

### 🧋 food

1. 생성 (POST) = /food
2. 조회 (GET) = 전체 : /food , 타입별 : /food?type=
3. 삭제 (DELETE) = 1차 요청 : /food/:id , 2차 수행 : /food/:id?confirmDelete=
4. 수정 (PUT) = /food/:id

### 🛒 order

1. 생성 (POST) = /order
2. 완료 (PUT) = /order/complete/:orderId
3. 취소 (DELETE) = /order/cancel/:orderId

### 📦 company_order

1. 생성 (POST) = /companyorder
2. 수정 (PUT) = /companyorder/:id
