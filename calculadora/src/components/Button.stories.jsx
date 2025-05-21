export default {
  title: 'Components/Button',
}

export const NumberButton = () => (
  <button onClick={() => alert('Pressed 7')}>7</button>
)

export const OperationButton = () => (
  <button onClick={() => alert('Pressed +')}>+</button>
)