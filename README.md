# Nestly - Angular Homeworks

## За проектот

Овој repository ги содржи моите Angular домашни задачи изработени во рамките на Web Developer Academy.

Проектот Nestly се развива постепено низ шест домашни задачи, при што секоја следна задача ги надградува функционалностите и Angular концептите од претходната.

Секоја домашна задача се наоѓа во посебна папка и има сопствен `README.md` со подетално објаснување.

## Домашни задачи

### Homework 1 - Angular Basics

Во првата домашна задача се поставени основите на Nestly апликацијата.

Користени концепти:

- Standalone Components
- Component Inputs и Outputs
- Angular Signals
- Property и Event Binding
- Custom Pipes
- Attribute Directives
- Content Projection
- CurrencyPipe
- Reusable Stay Card компоненти

---

### Homework 2 - Routing

Во втората домашна задача е додадена навигација помеѓу различните страници на апликацијата.

Користени концепти:

- Angular Router
- RouterOutlet
- RouterLink
- RouterLinkActive
- Dynamic Route Parameters
- Lazy Loading
- Redirect Routes
- Wildcard Route
- Home страница
- Stays страница
- Stay Details страница
- Not Found страница

---

### Homework 3 - HTTP & API

Во третата домашна задача Nestly апликацијата е поврзана со backend API.

Користени концепти:

- HttpClient
- Services
- Dependency Injection
- Observables
- subscribe()
- Angular Signals
- API Requests
- Loading State
- Error Handling
- Вчитување на stays од backend API
- Вчитување на stay според ID

---

### Homework 4 - Reactive Forms

Во четвртата домашна задача е додадена форма за креирање нов stay.

Користени концепти:

- ReactiveFormsModule
- FormBuilder
- FormGroup
- Validators
- Custom Validators
- Cross-field Validation
- Validation Messages
- Form Submission
- Испраќање на податоци кон backend API

---

### Homework 5 - NgRx Signal Store

Во петтата домашна задача state management логиката е централизирана со NgRx Signal Store.

Користени концепти:

- NgRx Signal Store
- signalStore()
- withState()
- withComputed()
- withMethods()
- withHooks()
- patchState()
- rxMethod()
- Computed Signals
- Search
- Superhost Filtering
- Loading и Error State

---

### Homework 6 - Authentication & Authorization

Во шестата домашна задача е имплементиран Authentication и Authorization flow.

Користени концепти и функционалности:

- Register
- Login
- Logout
- AuthStore со NgRx Signal Store
- JWT Access Token
- Refresh Token
- localStorage
- Functional Route Guards
- authGuard
- adminGuard
- HTTP Authentication Interceptor
- Automatic Token Refresh
- Role-based Authorization
- USER и ADMIN улоги
- Admin Dashboard
- Delete Stay
- Protected Create Stay Route
- Dynamic Navbar според authentication state

## Структура на repository

```text
nestly-angular-homeworks/
│
├── Homework 1/
├── Homework 2/
├── Homework 3/
├── Homework 4/
├── Homework 5/
└── Homework 6/
```

Секоја папка претставува посебна домашна задача и содржи сопствен Angular проект и README документација.

## Nestly Backend API

Од Homework 3 па натаму, апликацијата користи Nestly backend API.

Base API:

```text
http://localhost:3000/api
```

Stays API:

```text
http://localhost:3000/api/stays
```

Authentication API:

```text
http://localhost:3000/api/auth
```

За функционалностите кои користат API, backend серверот треба да биде стартуван локално.

## Стартување на домашна задача

Прво се влегува во папката на домашната задача.

Пример:

```bash
cd "Homework 6"
```

Потоа се инсталираат dependencies:

```bash
npm install
```

И се стартува Angular development server:

```bash
ng serve
```

Потоа се отвора локалната адреса која Angular ќе ја прикаже во терминалот.

## Технологии

Во проектите се користени:

- Angular
- TypeScript
- HTML
- CSS
- Angular Router
- Angular Reactive Forms
- Angular HttpClient
- Angular Signals
- NgRx Signal Store
- RxJS
- REST API
- JWT Authentication
- Git
- GitHub

## Цел

Целта на овие домашни задачи е постепено да ги применам и надградам Angular концептите преку развој на Nestly апликацијата, почнувајќи од основни компоненти и routing, па сè до API комуникација, Reactive Forms, state management и Authentication/Authorization.