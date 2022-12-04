# Learn-to-test-JavaScript-applications

> Course learn to test javascript applications by Fabio Vedovelli

# My Notes

<br />
<hr />
<br />

## Tools and libs

Jest **(tools)**

```txt
-> Is a test runner;
    -> Locate the files and run the tests;
    -> Allows you to mock and observe methods in libraries;
    -> Allows you to make assertions, such as expect().toBe().
```

Testing Library **(libs)**

```txt
-> It is a library;
    -> Provides utilities to assemble components (React, Vue, Svelte, ...);
    -> Provides tools to interact with components as if you were the user;
    -> Works together with jest;
    -> Does the same role as Enzyme and Vue-test-utils;
    -> Can be used to replace them.
```

Enzyme **(libs)**

```txt
-> It is a library;
    -> Provides utilities to assemble React components;
    -> Provides tools to interact with components as if you were the user;
    -> Allows handling state and testing implementation details.
    -> Works together with jest;
    -> Plays the same role as the Testing Library;
    -> Can be used to replace them.
```

Vue Test Utils **(libs)**

```txt
-> It is a library;
    -> Provides utilities to assemble Vue.js components;
    -> Provides tools to interact with components as if you were the user;
    -> Allows handling state and testing implementation details.
    -> Works together with jest;
    -> Plays the same role as the Testing Library;
    -> Can be used to replace them.
```

Cypress **(tools)**

```txt
-> It is an End to End testing framework;
    -> Runs the application in the browser, as if it were the user;
    -> Allows to run in Chrome, Firefox, Edge and Electron;
    -> A complete tool, no need to be used with jest.
```

<br />
<hr />
<br />

## CI/CD

> The role of tests in modern deployment

Tests are integrated into the Continuous Integration / Continuous Delivery process and are essential for them to exist.

- GitHub Actions;
- CircleCI

<br />
<hr />
<br />

## TDD

```txt
-> Red                  -> Green              -> Blue
-> Write a failing test -> Make the test pass -> Refactor
```

Benefits

- Improves the implementation;
- Facilitates simpler implementations;
- Facilitates the writing of tests;
- Implementation details fresh in mind;
- Less time dedicated to bug fixing.

Challenges

- Learning curve;
- Longer development time;
- Hard to sell to the product team.
