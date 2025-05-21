import ButtonGrid from './ButtonGrid'

export default {
  title: 'Components/ButtonGrid',
  component: ButtonGrid
}

export const Default = () => (
  <ButtonGrid onButton={(val) => console.log('Pressed:', val)} />
)