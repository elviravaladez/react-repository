import './App.css';

function App(props) {
    //JSX
    //Babel allows us to use this special syntax that looks like HTML, but it isn't
    return (
        <div>
            <h1>Hello, friends! This is my first time using React!</h1>

            <div className="person">
                <h1>Jane Doe</h1>
                <p>School: Codeup</p>
                <p>Cohort: Jupiter</p>
            </div>

            <div className="person">
                <h1>{props.name}</h1>
                <p>{props.age}</p>
            </div>

            <div className="person">
                <h1>{props.name}</h1>
                <p>{props.age}</p>
            </div>
        </div>
    );
}

export default App;