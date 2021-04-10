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

### Continued Development

This section will outline areas that I want to continue focusing on in future projects.


## Author

[Elvira Valadez](https://github.com/elviravaladez)