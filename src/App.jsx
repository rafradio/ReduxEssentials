import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { Counter } from './features/Counter';
import { CounterNew } from './features/CounterAnother';
import { useDispatch, useSelector } from 'react-redux';
import { newEncryment } from './features/mainSlice';
import { selectNewValue } from './features/mainSlice'

function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const valueItem = useSelector(selectNewValue);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(() => dispatch(newEncryment()))}>
          count is {valueItem}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Counter />
      <CounterNew />
    </>
  )
}

export default App
