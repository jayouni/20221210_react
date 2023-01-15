import logo from './logo.svg';
import './App.css';
import TodoHeader from './components/TodoHeader';
import TodoBody from './components/TodoBody';
import TodoInput from './components/TodoInput';
import Counter from './components/Counter';
import Main from './components/Main';

function App() {
  return (
    <div>
      <TodoHeader />
      <TodoInput />
      <TodoBody />
      <Counter /> 

      <Main />
    </div>
  );
}

export default App;
