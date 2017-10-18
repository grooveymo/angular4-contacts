# AngularContacts

Background
------------
Sample contacts application built using Angular 4.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.5.

Instructions
-------------
0.) Install mongodb (https://www.mongodb.com/download-center#community)


1.) run npm install


2.) enter the following command to serve the pages

  $ ng serve
  
  Fire up the browser and navigate to http://localhost:4200

3.) Stop the application (CTRL-C). Run the lint command

  $ ng lint

And you'll see errors like: 

Warning: The 'no-use-before-declare' rule requires type information.

- ERROR: /Users/mo/Work/anatwine/angular4-contacts/angular-contacts/src/app/contacts/edit-contact/edit-contact.component.ts[4, 31]: " should be '
- ERROR: /Users/mo/Work/anatwine/angular4-contacts/angular-contacts/src/app/contacts/edit-contact/edit-contact.component.ts[28, 31]: Missing semicolon
- ERROR: /Users/mo/Work/anatwine/angular4-contacts/angular-contacts/src/app/contacts/edit-contact/edit-contact.component.ts[14, 15]: expected nospace before colon in property-declaration

To fix these go into the edit-contact.component.ts file and do the following

- on line 4 replace the double quotes (") with single quotes (')
- on line 28 add a ;
- on line 14 remove the space between 'model' and ':'

Run ng lint again and you should see that the errors have disappeared.

Note
-----

To help generate test data, fire up postman and create requests like the following

http://localhost:9090/api/contacts/generate/<id>

where <id> is some random number


Things to do
--------------
- add unit tests
- add authguard functionality
- implement reactive forms example
- add form validation
- add search capability

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
