# Homework 1 - Nestly Angular Basics

## За проектот

Nestly е Angular апликација за прикажување на достапни сместувања.

Ова е првата домашна задача од Angular модулот. Главната цел е практична примена на основните Angular концепти преку креирање на reusable components и прикажување на динамички податоци.

## Функционалности

- Прикажување листа на достапни stays
- Stay cards со слика и информации
- Прикажување на име и локација
- Цена по ноќевање
- Rating и број на гости
- Superhost badge
- Favorite копче
- Reusable components
- Custom pipe за скратување на описот
- Custom directive за визуелно означување на stay cards

## Angular концепти

Во оваа домашна задача се користени:

- Standalone Components
- Component Inputs
- Component Outputs
- Signals
- `@for` и `@if` control flow
- Property Binding
- Event Binding
- Attribute Binding
- Custom Pipes
- Attribute Directives
- Content Projection
- Angular `CurrencyPipe`

## Stay Model

`Stay` interface ја дефинира структурата на едно сместување.

Содржи податоци како:

- id
- title
- location
- price
- rating
- imageUrl
- guests
- superhost
- description

## Stay Card Component

`StayCardComponent` е reusable component кој прикажува едно сместување.

Component-от добива stay преку Input и испраќа event преку Output кога корисникот ќе го притисне Favorite копчето.

## Badge Component

`BadgeComponent` се користи за прикажување на `SUPERHOST` badge.

Во component-от се користи и Content Projection.

## Truncate Pipe

Custom `TruncatePipe` се користи за скратување на подолгите описи, со цел stay cards да останат прегледни.

## Highlight Card Directive

Custom `HighlightCardDirective` додава визуелен highlight ефект на stay cards.

## Стартување на проектот

Инсталирање на dependencies:

```bash
npm install
Стартување на Angular апликацијата:

ng serve

Потоа се отвора локалната адреса која Angular ќе ја прикаже во терминалот.

Цел на домашната задача

Целта на Homework 1 е практично да ги применам основните Angular концепти и да изработам reusable компоненти кои понатаму се користат и надградуваат во следните Nestly домашни задачи.