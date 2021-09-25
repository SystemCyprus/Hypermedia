import './App.css';
import Animal from './composants/Animal';

function App() {
  return (
    <div className="App">
      <h1>Evaluation 1</h1>
      <Animal />
      <Animal type="poisson" />
      <Animal type="tigre"/>
    </div>
  );
}

export default App;
