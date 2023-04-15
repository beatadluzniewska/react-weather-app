import "./App.css";
import Weather from "./Weather";

function App() {
    return (
        <div className="App">
            <div className="container">
                <Weather defaultCity="Berlin" />
                <footer>
                    <a
                        href="https://github.com/beatadluzniewska/react-weather-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Open-source code on GitHub{" "}
                    </a>
                    coded by{" "}
                    <a
                        href="https://github.com/beatadluzniewska/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Beata Dluzniewska
                    </a>
                </footer>
            </div>
        </div>
    );
}

export default App;
