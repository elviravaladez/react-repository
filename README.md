# Working with React

This is a repository to document my progress learning React.

## Table of Contents

- [Overview](#overview)
    - [The Objective](#the-objective)
- [My Process](#my-process)
    - [What I Learned](#what-i-learned)
    - [Continued Development](#continued-development)
- [Author](#author)

## Overview

### The Objective

Be able to dive in and learn React.js, Hooks, Redux, React Routing, Animations, Next.js, and more.

## My Process

### What I Learned

#### 4/10/21

Today I learned how to set up a React Application in IntelliJ and learned how to create components using React.

```js
//In it's most basic form, a React component is just a function 😊
function Hello(props) {
    return (
        <div className="hello">
            <h1>Hello, {props.name}!</h1>
        </div>
    );
}

var app = (
    <div>
        <App name="World" />
        <App name="fellow Developer" />
    </div>
);

ReactDOM.render(app, document.querySelector('#root'));
```

This component returns the code we want to render to the DOM using a special syntax called JSX (JavaScript Syntax Extension).

As I was learning about React components, I immediately made the connection with JSPs (Java Server Pages) and Thymeleaf because they each allow you to dynamically pass data to the HTML page for the user to see. The syntax is also very similar.

### Continued Development

This section will outline areas that I want to continue focusing on in future projects.


## Author

[Elvira Valadez](https://github.com/elviravaladez)