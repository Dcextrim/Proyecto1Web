import { useState } from 'react'

export function useCalculator() {
  const [display, setDisplay] = useState('0')
  const [previousValue, setPreviousValue] = useState(null)
  const [pendingOperation, setPendingOperation] = useState(null)
  const [shouldClearDisplay, setShouldClearDisplay] = useState(false)

  const computeResult = (a, b, op) => { let result
switch (op) {
    case '+':
      result = a + b
      break
    case '-':
      result = a - b
      break
    case '*':
      result = a * b
      break
    case '/':
      if (b === 0) return null
      result = a / b
      break
    case '%':
      if (b === 0) return null
      result = a % b
      break
    default:
      return null
  }

  if (result < 0 || result > 999999999) return null

  let resultStr = result.toString()

  if (resultStr.length > 9) {
    resultStr = result.toFixed(8).replace(/\.?0+$/, '')
  }

  if (resultStr.length > 9) {
    resultStr = resultStr.slice(0, 9)
  }

  return parseFloat(resultStr)
}

  const resetState = () => {
    setPreviousValue(null)
    setPendingOperation(null)
    setShouldClearDisplay(false)
  }

  const handleNumber = (num) => {
  if (display === 'ERROR') {
    setDisplay(num === '.' ? '0.' : num)
    resetState()
    return
  }

  if (shouldClearDisplay) {
    setDisplay(num === '.' ? '0.' : num)
    setShouldClearDisplay(false)
  } else {
    if (display.length >= 9) return

    if (num === '.' && display.includes('.')) return

    setDisplay(display === '0' && num !== '.' ? num : display + num)
  }
}


  const handleOperation = (op) => {
  if (display === 'ERROR') return

  const currentValue = parseFloat(display)

  if (pendingOperation) {
    const result = computeResult(previousValue, currentValue, pendingOperation)
    if (result === null) {
      setDisplay('ERROR')
      resetState()
      return
    }

    setPreviousValue(result)
    setDisplay(result.toString().slice(0, 9))
    setPendingOperation(op)
    setShouldClearDisplay(true)
  } else {
    setPreviousValue(currentValue)
    setPendingOperation(op)
    setShouldClearDisplay(true)
  }
}

  const handleEqual = () => {
  if (!pendingOperation) return

  const currentValue = parseFloat(display)
  const result = computeResult(previousValue, currentValue, pendingOperation)

  if (result === null) {
    setDisplay('ERROR')
  } else {
    setDisplay(result.toString().slice(0, 9))
  }

  resetState()
  setShouldClearDisplay(true)
};

const handleToggleSign = () => {
  if (display === 'ERROR') return

  if (display === '0') return

  if (display.startsWith('-')) {
    setDisplay(display.slice(1))
  } else {
    if (display.length < 9) {
      setDisplay('-' + display)
    }
  }
}
return {
    display,
    handleNumber,
    handleOperation,
    handleEqual,
    handleToggleSign,
    resetState,
  }
}