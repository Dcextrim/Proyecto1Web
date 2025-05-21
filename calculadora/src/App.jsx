import { useCalculator } from './hooks/usecalculator'
import Display from './components/Display'
import ButtonGrid from './components/ButtonGrid'
import './App.css'


function App() {
  const {display, handleNumber, handleOperation, handleEqual, handleToggleSign} = useCalculator()

  return ( <div className="calculator"> <Display value={display} /> <ButtonGrid onNumber={handleNumber} onOperation={handleOperation} onEqual={handleEqual} onToggleSign={handleToggleSign}/> </div>)}

export default App
