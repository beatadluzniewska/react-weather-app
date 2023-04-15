import "./App.css";
import Weather from "./Weather";

function App() {
    return (
        <div className="App">
            <div className="container">
                <Weather defaultCity="Berlin" />
                <footer>
                    Project was coded by{" "}
                    <a
                        href="https://github.com/beatadluzniewska/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Beata Dluzniewska
                    </a>
                    , is{" "}
                    <a
                        href="https://github.com/beatadluzniewska/react-weather-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        open sourced on GitHub{" "}
                    </a>
                    and hosted on Netlify
                </footer>
            </div>
        </div>
    );
}

export default App;
