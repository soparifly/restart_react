import styles from "./App.module.css";
import React, { useEffect, useState } from "react";
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log("render");
  const iRunOnlyOnece = () => {
    console.log("irun only once,");
  };
  useEffect(iRunOnlyOnece, []);

  useEffect(() => {
    console.log("call the api");
  }, []);

  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);
  useEffect(() => {
    console.log("I run when counter changes");
  }, [counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search hear..."
      ></input>
      <h1 className={styles.title}>Welcome back!</h1>
      {/* <Button text={"Continue"} /> */}
      <button onClick={onClick}>click me</button>
      <p>{counter}</p>
    </div>
  );
}

export default App;
