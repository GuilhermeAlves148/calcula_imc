import { useState } from 'react'
import Calculadora from './components/Calculadora';

function App() {
  const [peso, setPeso] = useState('0');
  const [altura, setAltura] = useState('0');

  return (
    <div className='container'>
      <form>
        <h1 className='title'>Calculadora de IMC</h1>
        <ul>
          <li className='topic'>
            <p className='placeholder'>Insira seu peso (KGs) </p>
            <input type="number" onBlur={(e) => setPeso(e.target.value)} />
          </li>
          <li className='topic'>
            <p className='placeholder'>Insira sua altura (Metros) </p>
            <input type="number" onBlur={(e) => setAltura(e.target.value)}/>
          </li>
        </ul>
        <>
          <Calculadora peso={peso} altura={altura} />
        </>
      </form>
    </div>
  )
}

export default App
