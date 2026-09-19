# Homework 3 - Nestly HTTP & API

## За проектот

Оваа домашна задача е продолжение на Nestly Angular апликацијата од претходните домашни задачи.

Главната цел на Homework 3 е локалните hardcoded податоци за stays да се заменат со вистински податоци добиени од Nestly backend API преку Angular HttpClient.

## Функционалности

- Вчитување на stays од backend API
- Прикажување на сите достапни stays
- Филтрирање и прикажување на Superhost stays
- Вчитување на еден stay според ID
- Stay Details страница
- Loading state додека се вчитуваат податоците
- Error порака ако API не е достапен
- Not Found состојба за непостоечки stay ID
- Favorite функционалност која останува на client side
- Задржани routing и reusable components од претходните задачи

## Angular концепти

Во оваа домашна задача се користени:

- `HttpClient`
- `provideHttpClient()`
- Services
- Dependency Injection
- Observables
- `subscribe()`
- Signals
- API Requests
- Error Handling
- Route Parameters
- Standalone Components

## Stays Service

За комуникација со backend API се користи Angular service.

Service-от е одговорен за HTTP requests поврзани со stays, наместо компонентите директно да комуницираат со API.

На овој начин логиката за API комуникација е одделена од UI логиката.

## API

Апликацијата го користи Nestly backend API.

Base API:

```text
http://localhost:3000/api

Stays endpoint:

http://localhost:3000/api/stays

Backend серверот треба да биде стартуван локално за податоците за stays да можат да се вчитаат.

Loading и Error State

Додека податоците се вчитуваат од API, апликацијата прикажува loading state.

Ако API request не успее, на корисникот му се прикажува соодветна error порака.

Stay Details

При отворање на Stay Details страницата, ID-то од route параметарот се користи за вчитување на конкретниот stay од backend API.

Ако stay со даденото ID не постои, се прикажува Not Found состојба.

Стартување на проектот

Инсталирање на dependencies:

npm install

Стартување на Angular апликацијата:

ng serve

За целосна функционалност треба да биде стартуван и Nestly backend серверот на port 3000.

Цел на домашната задача

Целта на Homework 3 е да ја поврзам Angular апликацијата со backend API и практично да работам со HttpClient, Services, Observables, Dependency Injection, loading states и error handling.