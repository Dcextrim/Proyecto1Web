import { render, screen } from '@testing-library/react'
import { useCalculator } from './hooks/usecalculator'
import '@testing-library/jest-dom'
import App from './App'

function click (text) {
  screen.getByText(text).click()
}

test('División de 22 ÷ 7 produce decimales y se recorta correctamente a 9 caracteres', () => {
  render(<App />)
  click('2')
  click('2')
  click('/')
  click('7')
  click('=')
  expect(screen.getByTestId('display').textContent.length).toBeLessThanOrEqual(9)
  expect(screen.getByTestId('display').textContent.startsWith('3.142')).toBe(true)
})


test('El botón "+/-" cambia el número a negativo en medio de una operación', () => {
  render(<App />)
  click('5')
  click('+')
  click('3')
  click('+/-')
  click('=')
  expect(screen.getByTestId('display').textContent).toBe('2')
})


test('No se puede ingresar más de 9 caracteres', () => {
  render(<App />)
  '1234567890'.split('').forEach(n => click(n))
  expect(screen.getByTestId('display').textContent.length).toBe(9)
})


test('La operación 100 % 7 da el resultado correcto', () => {
  render(<App />)
  click('1')
  click('0')
  click('0')
  click('%')
  click('7')
  click('=')
  expect(screen.getByTestId('display').textContent).toBe('2')
})
