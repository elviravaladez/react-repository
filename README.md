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

- [ ] React Basics
- [ ] Debugging
- [ ] Components
- [ ] Styling Components
- [ ] HTTP Requests
- [ ] Routing
- [ ] Forms & Validation
- [ ] Redux
- [ ] Authentication
- [ ] Testing (intro)
- [ ] Deployment

## My Process

### What I Learned

---

#### Reasons to Use React
1. Makes it easier to manage the UI state of an application
2. Large focus on business logic
3. Has a large ecosystem, active community, and high performance

#### *NOTE: In React, we write declarative code. It generally expresses logic. It abstracts away the control flow. 

#### Declarative = calling on a function that contains the "under the hood" code needed to make the action you want to do possible.

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
import React from 'react';
```

#### State
By default, regular variables in component functions do not cause the function to re-evaluate. To have a component function to re-evaluate/run again, you need to import the following:

```js
import React, { nameOfReactHookFromReactLibrary } from 'react';
```
 
#### Hooks
React hooks start with ```use```

Example:

```js
import React, { useState } from 'react';
```

Hooks are functions provided by the React Library. To use hooks, you call the hook inside the component function. They SHOULD NOT be called in NESTED functions within a component function.

✅ Correct Way
```js
import React, { useState } from 'react';

const HelloExample = (props) => {
    useState();
    
    //nested function
    const clickHandler = () => {
      //...code continues here...   
    }
  
    //...more code here...
}
```

🚫 Incorrect Way: Example of `useState()` being called in a nested function
```js
import React, { useState } from 'react';

const HelloExample = (props) => {
    
    //nested function
    const clickHandler = () => {
      useState();
    }
    
    //...code continues here...
}
```

#### "useState" Hook

`useState()` always returns an array with TWO elements. The first element is ALWAYS the current state value and the second element is ALWAYS a function for updating the current state value.

```js
const [title, setTitle] = useState(props.title);
```

To update the state value, call the state updating function. In the example below, the function called to update the state value is `setTitle()`.

```js
const [title, setTitle] = useState(props.title);

const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
}
```

Whenever state changes with `useState()`, it is only the component function, and that SPECIFIC INSTANCE where the component is being used where React will re-evaluate. In other words, state is separated on a per component instance basis.

#### Using `const` when using `useState()`

We can use `const` when calling `useState()` because we're not assigning a new value with the `=`. In the example below, we're using the `setTitle` function to update the value.

```js
    const [title, setTitle] = useState(props.title);
  
    const clickHandler = () => {
        setTitle('Updated!');
        console.log(title);
    }
```

To get the updated state value of the `useState()` first element, the component function is re-executed when the state is updated, therefore rerunning the entire function from top to bottom.

In the example below, when we call `setTitle()` within the `clickHandler` function, it calls the `ExpenseItem` component again and updates the `title` element to `Updated!`

```js
import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import './ExpenseItem.css';

const ExpenseItem = props => {
    const [title, setTitle] = useState(props.title);
  
    const clickHandler = () => {
        setTitle('Updated!');
        console.log(title);
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">
                    ${props.amount}
                </div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;
```


#### State

React keeps track of when you call `useState()` in a given component instance for the first time. When calling `useState()` for the first time, `useState()` will take that argument as an initial value.

```js
const [title, setTitle] = useState(props.title);
//in this example, useState() will take whatever the value of props.title is as the initial value
```

However, if a component is re-executed because of an update to the state, React will note that this state has been previously initialized and will update with the updated state value.

The initial value is ONLY considered when the component function is executed the FIRST TIME, for a given component instance.

#### State in Simplified Terms

* You register state with `useState()`
* You ALWAYS get back 2 values
  * The state value
  * The function that updates the state value
* You call the updating function whenever the state needs to change
* You use the first element whenever you want to use the state value
  * Ex: In JSX code
```js
import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import './ExpenseItem.css';

const ExpenseItem = props => {
    //the first element in this example is "title"
    const [title, setTitle] = useState(props.title);
  
    const clickHandler = () => {
        setTitle('Updated!');
        console.log(title);
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
              {/* Using the "title" element in JSX code */}
              <h2>{title}</h2>
                <div className="expense-item__price">
                    ${props.amount}
                </div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;
```

#### Listening to User Input

By default, whenever you listen to the change event for an input, if you read the value of that input element, it will ALWAYS be a string. Because of this, you will initialize all states with a string in the example below:
```js
//Example of Using Multiple States per Component
const [enteredTitle, setEnteredTitle] = useState('');
const[enteredAmount, setEnteredAmount] = useState('');
const[enteredDate, setEnteredDate] = useState('');
//Reminder: By default, whenever you listen to the change event for an input, if you read the value of that input element, it will ALWAYS be a string

const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
};

const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
};

const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
};
```

Note: It's okay to have multiple states per component.

#### Using One State Instead of Multiple

```js
//Example of Using One State
const [userInput, setUserInput] = useState({
  enteredTitle: '',
  enteredAmount: '',
  enteredDate: ''
});

const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
    return {...prevState, enteredTitle: event.target.value};
  });
};

const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
    return {...prevState, enteredAmount: event.target.value};
  });
};

const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
    return {...prevState, enteredDate: event.target.value};
  });
};
```

Whenever you update state, and it depends on the previous state you should use syntax below because it assures you are getting the most up to date previous state:

```js
const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
       return { ...prevState, enteredTitle: event.target.value };
    });
}
```

### Continued Development

This section will outline areas that I want to continue focusing on in future projects.


## Author

[Elvira Valadez](https://github.com/elviravaladez)