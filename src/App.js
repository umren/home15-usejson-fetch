import React from "react";
import "./App.css";
import useJsonFetch from "./hooks/useJsonFetch";

// data example
function ComponentData(props) {
  const url = "http://localhost:7070/data";
  const [data, loading, error] = useJsonFetch(url);

  console.log(data);

  return null;
}


function App() {
  return (
    <div className="App">
      <ComponentData />
    </div>
  );
}

export default App;
