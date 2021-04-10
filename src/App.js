import './App.css';
import ReactDOM from "react-dom";

function App(props) {
    //JSX
    //Babel allows us to use this special syntax that looks like HTML, but it isn't
    return (
        <div className="person">
            <h1>{props.name}</h1>
            <p>{props.school}</p>
            <p>{props.cohort}</p>
        </div>
    );
}

var app = (
    <div>
        <App name="John" school="Codeup" cohort="Jupiter" />
        <App name="Jane" school="Codeup" cohort="Jupiter" />
    </div>
);

ReactDOM.render(app, document.querySelector('#root'));

export default App;