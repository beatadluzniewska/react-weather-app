import "./App.css";
import Weather from "./Weather";

function App() {
    return (
        <div className="App">
            <div className="container">
                <h1>Weather app</h1>
                <Weather />
                <footer>
                    <a
                        href="https://github.com/beatadluzniewska/react-weather-app"
                        target="_blank"
                        rel="noreferrer"
                    >
                        open sourced on github
                    </a>
                </footer>
            </div>
        </div>
    );
}

export default App;
