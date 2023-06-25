import Todo from "./components/Todo";
function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <div className="card">
        <Todo text="Learn React" />
        <Todo text="Learn Blockchain" />
        <Todo text="Learn Off-Chain" />
      </div>
    </div>
  );
}

export default App;
