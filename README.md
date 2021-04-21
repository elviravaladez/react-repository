# Working with React

This is a repository to document my progress learning React.

## Table of Contents

- [Overview](#overview)
    - [The Objective](#the-objective)
    - [Topics](#topics)
- [My Process](#my-process)
    - [What I Learned](#what-i-learned)
    - [Continued Development](#continued-development)
- [Author](#author)

## Overview

### The Objective

Be able to dive in and learn React.js, Hooks, Redux, React Routing, Animations, Next.js, and more.

### Topics
* React Basics
* Debugging
* Components
* Styling Components
* HTTP Requests
* Routing
* Forms & Validation
* Redux
* Authentication
* Testing (intro)
* Deployment

## My Process

### What I Learned

---

#### Reasons to Use React
1. Makes it easier to manage the UI state of an application
2. Large focus on business logic
3. Has a large ecosystem, active community, and high performance

#### Applications You Can Build with React
* Single Page
  * Content is re-rendered on Client
* Multi-page Page
  * Content is rendered on Server

#### Components

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

As I was learning about React components, I immediately made the connection with JSPs (Java Server Pages) and Thymeleaf because they each allow you to dynamically pass data to the HTML page for the user to see. The syntax also looks very similar.

JSP Syntax
```html
<% request.setAttribute("message", "Hello, World!"); %>
        ...
<h1>Here is the message: ${message}</h1>
```

Thymeleaf Syntax
```html
<!--hello-name.html-->
<h1>Hello, <span th:text="${name}">World</span>!</h1>
```

```java
//HelloNameController.java
@Controller
public class HelloNameController {
    
  @GetMapping("/hello/{name}")
  public String sayHello(@PathVariable String name, Model model) {
      model.addAttribute("name", name);
      return "hello-name";
  }
}
```

#### React & Components
Today I learned that components in React are great because:
* They offer re-usability
* Separation of Concerns
* Allows you to splits large chunks of code into multiple smaller functions 

I also learned that React uses a declarative approach for building components.

The recommendation is to have one file for one component.

When creating a new component file, it is best-practice to follow the following naming convention: NewComponent.js

In React, you can only have one root element per return statement (per JSX code snippet).

EXAMPLE:

Invalid 🚫

```js
function InvalidCode() {
  return <div>Div One</div><div><h1>Div Two</h1><div>Inner Div</div></div>
}
```

Valid ✅
```js
function ValidCode() {
  return (
          <div>
            <div>Div One</div>
            <div>
              <h2>Div Two</h2>
              <div>Inner Div</div>
            </div>
          </div>
  );
}
```

#### Composition ("children props")
Composition refers to building a user interface from smaller building blocks.

Today I learned how to use children props to create a component that serves as a shell around other content. In the
`Expenses.js` example below, the `<Card></Card>` acts as the shell around other content.

```js
//Expenses.js
import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

function Expenses(props) {
  return (
          <Card className="expenses">
            <ExpenseItem
                    title={props.items[0].title}
                    amount={props.items[0].amount}
                    date={props.items[0].date}
            />
            <ExpenseItem
                    title={props.items[1].title}
                    amount={props.items[1].amount}
                    date={props.items[1].date}
            />
            <ExpenseItem
                    title={props.items[2].title}
                    amount={props.items[2].amount}
                    date={props.items[2].date}
            />
            <ExpenseItem
                    title={props.items[3].title}
                    amount={props.items[3].amount}
                    date={props.items[3].date}
            />
          </Card>
  );
}

export default Expenses;

```

I also learned how to use children props to pass content between the opening and closing tags of a component. An example of this can be seen in the `Card.js` code block below.

```js
//Card.js
import './Card.css';

function Card(props) {
    const classes = "card " + props.className;
    return <div className={classes}>{props.children}</div>;
}

export default Card;
```

In the past, developers were required to import React in all React component files.(In all files where JSX was being used.) In the past, the import was needed because the JSX is syntactic sugar. Under the hood, JSX code is transformed to methods that call on the React object.

```js
//js file
import React from 'react';
//remainder of code here
```

### Continued Development

This section will outline areas that I want to continue focusing on in future projects.


## Author

[Elvira Valadez](https://github.com/elviravaladez)