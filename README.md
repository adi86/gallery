# SwingGallery

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Opis dalszych funkcjonalności

1. strona autora
	dodałbym nową konfiguracje routera, rozszerzył serwis o pobieranie zdjęć autora po jego id, używając tego samego komponentu galerii
2. dodanie wyszukiwarki tak żeby użytkownik mógł wyszukać dowolne zdjęcia (wsparcie dla multi tag)
	dodłbym pole w którym user by mógł wpisać frazę po której szukałbym w API zdjęć
3. Dodanie ngrx, stworzenie store, tak żeby flow danych był w jedną stronę i w miarę jasny.
4. Sortowanie obrazków po dacie lub autorze
	Raczej sortowanie po stronie API, czyli dodatkowy parametr podczas pobierania obrazkow.
