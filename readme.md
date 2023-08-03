# 키오스크 프로젝트

- express, javascript 함수화 기본 서버구현
- 기능에 문제 없는 선에서 최대한 간결하게

# api 가이드

- food

  1. 생성 = POST

  - http://localhost:3000/food

  2. 조회 = GET

  - 전체 : http://localhost:3000/food
  - 타입별 : http://localhost:3000/food?type=coffee

  3. 삭제 = DELETE /food/:id

  - 1차 요청 : http://localhost:3000/food/1
  - 2차 수행 : http://localhost:3000/food/1?confirmDelete=true

  4.  수정 = PUT /food/:id

# ERD

![ERD](https://ifh.cc/g/Qn26oX.png)
