import Button from './Button'

function ButtonGrid({ onNumber, onOperation, onEqual, onToggleSign }) {
  const B = Button
  return (
    <div className="buttons">
      <div className="row"> <B onClick={() => onNumber('7')}>7</B> <B onClick={() => onNumber('8')}>8</B> <B onClick={() => onNumber('9')}>9</B> <B onClick={() => onOperation('+')}>+</B> </div>
      <div className="row"> <B onClick={() => onNumber('4')}>4</B> <B onClick={() => onNumber('5')}>5</B> <B onClick={() => onNumber('6')}>6</B> <B onClick={() => onOperation('-')}>-</B> </div>
      <div className="row"> <B onClick={() => onNumber('1')}>1</B> <B onClick={() => onNumber('2')}>2</B> <B onClick={() => onNumber('3')}>3</B> <B onClick={() => onOperation('*')}>*</B> </div>
      <div className="row"> <B onClick={onToggleSign}>±</B> <B onClick={() => onNumber('0')}>0</B> <B onClick={() => onOperation('%')}>%</B> <B onClick={() => onOperation('/')}>/</B> </div>
      <div className="row"> <B onClick={onEqual}>=</B> </div>
    </div>
  )
}

export default ButtonGrid
