# Homework 5 - Nestly NgRx Signal Store

## За проектот

Оваа домашна задача е продолжение на Nestly Angular апликацијата од претходните домашни задачи.

Главната цел на Homework 5 е state management логиката за stays да се премести во NgRx Signal Store.

На овој начин состојбата на апликацијата се управува централизирано, а компонентите остануваат поедноставни и се фокусираат на прикажување на податоците.

## Функционалности

- Вчитување на stays од backend API
- Search на stays преку backend API
- Филтрирање на Superhost stays
- Loading state
- API error state
- Прикажување на вкупниот број на stays
- Задржување на store state при навигација помеѓу страниците
- Favorite функционалност
- Задржани routing и Stay Details функционалностите од претходните задачи

## NgRx Signal Store

Во апликацијата се користи еден root-level `StaysStore`.

Store-от е одговорен за управување со состојбата поврзана со stays.

Во него се чуваат:

- stays
- isLoading
- error
- search
- superhostOnly

## NgRx концепти

Во оваа домашна задача се користени:

- `signalStore()`
- `withState()`
- `withComputed()`
- `withMethods()`
- `withHooks()`
- `patchState()`
- `rxMethod()`
- Computed Signals
- Angular Signals
- RxJS
- HttpClient
- Dependency Injection

## State Management

Наместо секоја компонента посебно да ја управува состојбата за stays, логиката е централизирана во `StaysStore`.

Компонентите можат да ги читаат потребните податоци од store-от и да ги повикуваат неговите methods.

Ова овозможува почиста поделба помеѓу UI логиката и state management логиката.

## Search и Superhost Filter

Search вредноста и Superhost filter состојбата се чуваат во Signal Store.

При промена на филтрите се вчитуваат соодветните податоци од backend API.

## Loading и Error State

Store-от управува и со:

- loading состојбата додека трае API request
- error состојбата доколку request-от не успее

На овој начин компонентите можат директно да ги прикажат соодветните информации во UI.

## API

Апликацијата го користи Nestly backend API.

Base API:

```text
http://localhost:3000/api

Backend серверот треба да биде стартуван локално за stays да можат да се вчитаат.

Стартување на проектот

Инсталирање на dependencies:

npm install

Стартување на Angular апликацијата:

ng serve

За целосна функционалност треба да биде стартуван и Nestly backend серверот.

Цел на домашната задача

Целта на Homework 5 е практично да применам NgRx Signal Store за централизирано управување со state, API requests, loading, errors, search и filtering во Nestly апликацијата.