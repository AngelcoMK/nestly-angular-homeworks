# Homework 2 - Nestly Routing

## За проектот

Оваа домашна задача е продолжение на Nestly Angular апликацијата од Homework 1.

Главната цел на Homework 2 е да се додадат повеќе страници и навигација со користење на Angular Router.

Апликацијата има Home страница, листа на stays, детали за избран stay и Not Found страница.

## Функционалности

- Home страница
- Stays страница со достапните сместувања
- Stay Details страница
- Dynamic route според ID на stay
- Not Found страница
- Wildcard route за непостоечки URL
- Навигација помеѓу страниците
- Active navigation link
- Redirect од `/` кон `/home`
- Lazy loading со `loadComponent`
- Reusable components од Homework 1

## Angular концепти

Во оваа домашна задача се користени:

- Angular Router
- Routes
- `RouterOutlet`
- `RouterLink`
- `RouterLinkActive`
- Route Parameters
- Lazy Loading со `loadComponent`
- Wildcard Routes
- Redirect Routes
- Standalone Components
- Component Inputs и Outputs
- Custom Pipe
- Attribute Directive
- Content Projection

## Routes

Апликацијата ги користи следните routes:

| Route | Опис |
| --- | --- |
| `/` | Redirect кон Home |
| `/home` | Home страница |
| `/stays` | Ги прикажува сите stays |
| `/stays/:id` | Детали за избраниот stay |
| `**` | Not Found страница |

## Stay Details

Stay Details страницата го користи ID-то од URL адресата за да го пронајде и прикаже избраниот stay.

Пример:

```text
/stays/1

Ако постои stay со тоа ID, се прикажуваат неговите детали.

Ако ID-то не постои, на пример:

/stays/999

се прикажува порака дека stay не е пронајден.

Not Found

За непостоечки URL адреси се користи wildcard route.

На пример:

/anything

ќе ја прикаже Not Found страницата.

Стартување на проектот

Инсталирање на dependencies:

npm install

Стартување на Angular апликацијата:

ng serve

Потоа се отвора локалната адреса која Angular ќе ја прикаже во терминалот.

Цел на домашната задача

Целта на Homework 2 е да ја надградам Nestly апликацијата со Angular Routing, повеќе страници, динамички routes и навигација.