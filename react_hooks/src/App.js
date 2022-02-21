import { useState, useCallback } from "react";
import Info from "./components/Info";

function App() {
  const [color, setColor] = useState("");
  const [movie, setMovie] = useState("");

  console.log("App");
  const onChangeHandler = useCallback((e) => {
    if (e.target.id === "color") setColor(e.target.value);
    else setMovie(e.target.value);
  }, []);

  return (
    <div className="App">
      <h1>hooks 공부하기</h1>
      <label>
        What is you favorie color of rainbow ?
        <input id="color" value={color} onChange={onChangeHandler} />
      </label>
      <div>
        What is you favorite movie among these?
        <label>
          <input
            type="radio"
            name="movie"
            value="Marriage Story"
            onChange={onChangeHandler}
          />
          Marriage Story
          <label>
            <input
              type="radio"
              name="movie"
              value="The Fast And The Furious"
              onChange={onChangeHandler}
            />
            The Fast And The Furious
          </label>
          <input
            type="radio"
            name="movie"
            value="Avengers"
            onChange={onChangeHandler}
          />
          Avengers
        </label>
        <Info color={color} movie={movie} />
      </div>
    </div>
  );
}

export default App;
