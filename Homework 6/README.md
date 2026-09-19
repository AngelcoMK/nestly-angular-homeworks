# Homework 6 - Nestly Authentication & Authorization

## За проектот

Оваа домашна задача е продолжение на Nestly Angular апликацијата од претходните домашни задачи.

Главната цел на Homework 6 е имплементација на Authentication и Authorization со користење на Nestly backend API.

Во апликацијата се додадени регистрација и најава на корисници, одјава, заштитени рути, пристап според улога, JWT access и refresh tokens и Admin Dashboard.

## Функционалности

- Регистрација на нов корисник
- Login на корисник
- Logout
- Authentication state со NgRx Signal Store
- JWT access token
- Refresh token
- Зачувување на корисникот и токените во localStorage
- Автоматско додавање на access token преку HTTP Interceptor
- Автоматско обновување на access token по негово истекување
- Заштитени рути со authGuard
- Admin рути заштитени со adminGuard
- Not Allowed страница за корисници без дозвола
- Навигација според login state и улога
- Admin Dashboard
- ADMIN може да ги прегледува и брише stays
- Најавен USER може да креира нов stay
- Reactive Forms со валидација
- Задржани функционалностите од претходните домашни задачи

## AuthService

За комуникација со authentication API се користи `AuthService`.

Имплементирани се API повици за:

- Register
- Login
- Refresh token
- Logout
- Current user

## AuthStore

Authentication state се управува преку NgRx Signal Store.

`AuthStore` ги чува:

- user
- accessToken
- refreshToken
- isLoading
- error

Store-от има и computed вредности:

- isLoggedIn
- isAdmin

После успешен Login или Register, корисникот и токените се зачувуваат во AuthStore и во localStorage.

Со ова authentication state може да се врати и после refresh на страницата.

## Route Guards

Во апликацијата се користат два functional route guards.

### authGuard

`authGuard` ги заштитува рутите до кои треба да има пристап само најавен корисник.

Пример:

```text
/host/new

Ако корисникот не е најавен, се пренасочува кон Login страницата.

adminGuard

adminGuard ги заштитува рутите достапни само за ADMIN.

Пример:

/admin

Ако обичен USER се обиде да пристапи до Admin Dashboard, се пренасочува кон:

/not-allowed
HTTP Interceptor

Имплементиран е functional HTTP Interceptor за authentication.

Interceptor-от:

Го додава Bearer access token на authenticated API requests
Обработува 401 Unauthorized response
Го користи refresh token за добивање нов access token
Го повторува оригиналниот request со новиот access token
Ако refresh не успее, го чисти authentication state
Го пренасочува корисникот кон Login

На овој начин обновувањето на access token се извршува автоматски.

Login и Register

Login и Register страниците се направени со Angular Reactive Forms.

Формите содржат валидација за:

Задолжителни полиња
Email формат
Password
Минимална должина на password
Потврда на password

После успешен Login или Register, корисникот автоматски се најавува во апликацијата.

Admin Dashboard

Рутата:

/admin

е достапна само за корисник со ADMIN улога.

Admin Dashboard ги прикажува достапните stays и овозможува ADMIN корисникот да избрише stay.

Навигација

Navbar-от се менува во зависност од authentication state и улогата на корисникот.

Корисник кој не е најавен

Се прикажуваат:

Home
Stays
Login
Register
Најавен USER

Се прикажуваат:

Home
Stays
List your stay
Името на корисникот
Logout
Најавен ADMIN

Дополнително се прикажува:

Admin
Demo корисници

Backend-от може да се seed-ува со demo корисници.

ADMIN
Email: admin@nestly.dev
Password: password123
USER
Email: user@nestly.dev
Password: password123
API

Апликацијата го користи Nestly backend API.

Base API:

http://localhost:3000/api

Authentication API:

http://localhost:3000/api/auth

Stays API:

http://localhost:3000/api/stays

Backend серверот треба да биде стартуван локално за API и Authentication функционалностите да работат.

Стартување на проектот

Инсталирање на dependencies:

npm install

Стартување на Angular апликацијата:

ng serve

За целосна функционалност треба да биде стартуван и Nestly backend серверот на port 3000.

Цел на домашната задача

Целта на Homework 6 е да имплементирам целосен Authentication и Authorization flow во Nestly апликацијата со Angular, NgRx Signal Store, Reactive Forms, Route Guards, HTTP Interceptor, JWT access и refresh tokens и role-based permissions.