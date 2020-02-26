import React from "react";
import "./App.css";
import useJsonFetch from "./hooks/useJsonFetch";

// data example
function ComponentData(props) {
  const url = "http://localhost:7070/data";
  const [data, loading, error] = useJsonFetch(url);

  console.log("Data: ", data);

  return <div>{JSON.stringify(data)}</div>;
}

// error example
function ComponentError(props) {
  const url = "http://localhost:7070/error";
  const [data, loading, error] = useJsonFetch(url);

  if (data.hasError) {
    return <div>Error!!!</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
}

// loading example
function ComponentLoading(props) {
  const url = "http://localhost:7070/loading";
  const [data, loading, error] = useJsonFetch(url);

  console.log("Loading: ", data);

  return <div>{JSON.stringify(data)}</div>;
}

function App() {
  return (
    <div className="App">
      <ComponentData />
      <ComponentError />
      <ComponentLoading />
    </div>
  );
}

export default App;
