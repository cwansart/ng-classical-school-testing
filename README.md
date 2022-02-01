# NgClassicalSchoolTesting

This is a test project to showcase how classical school tests (see (https://freecontent.manning.com/what-is-a-unit-test-part-2-classical-vs-london-schools/) are better suited, cause less work and can be done in Angular's Jasmine tests.

The tests coverage 100 % of the code with just 2 tests. The tests are not implementation dependend, as they would with "London school" tests which mock everything.

The current coverage reports can be found here: https://cwansart.github.io/ng-classical-school-testing/coverage/ng-classical-school-testing/index.html

## Run tests

Run `npm run test` to start the tests. Chrome is required.

After running the tests there will be a coverage folder which contains an index.html.

## Run app locally

First start the mockserver via `npm run mockserver`. Then run the app: `npm start`.
