# Homework 4 - Nestly Reactive Forms

## За проектот

Оваа домашна задача е продолжение на Nestly Angular апликацијата од претходните домашни задачи.

Главната цел на Homework 4 е работа со Angular Reactive Forms, валидација на податоци и креирање форма за додавање нов stay.

## Функционалности

- Форма за креирање нов stay
- Reactive Forms
- Валидација на задолжителни полиња
- Minimum и maximum value валидација
- Custom URL validator
- Cross-field validation
- Прикажување validation пораки
- Form submit
- Испраќање на податоците до Nestly backend API
- Задржани функционалностите од претходните домашни задачи

## Angular концепти

Во оваа домашна задача се користени:

- `ReactiveFormsModule`
- `FormBuilder`
- `FormGroup`
- `Validators`
- Custom Validators
- Cross-field Validation
- Form Submission
- `HttpClient`
- Services
- Dependency Injection
- Angular Signals
- Standalone Components

## List Your Stay

Во апликацијата е додадена форма за внесување на ново сместување.

Формата овозможува внесување на потребните информации за stay и ги проверува податоците пред да дозволи нивно испраќање.

Доколку некое поле не е правилно пополнето, на корисникот му се прикажува validation порака.

## Custom Validators

Покрај стандардните Angular validators, користени се и custom validators.

Тие се користат за дополнителна проверка на внесените податоци, вклучувајќи URL validation и проверка на поврзани полиња.

## API

После успешна валидација, податоците за новиот stay се испраќаат до Nestly backend API.

Base API:

```text
http://localhost:3000/api

Stays endpoint:

http://localhost:3000/api/stays

Backend серверот треба да биде стартуван локално за API функционалностите да работат.

Стартување на проектот

Инсталирање на dependencies:

npm install

Стартување на Angular апликацијата:

ng serve

За целосна функционалност треба да биде стартуван и Nestly backend серверот.

Цел на домашната задача

Целта на Homework 4 е практична работа со Angular Reactive Forms, Validators, custom validation и испраќање на валидирани податоци кон backend API.