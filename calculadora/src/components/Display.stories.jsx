import Display from './Display'

export default {
  title: 'Components/Display',
  component: Display
}

export const Default = () => <Display value="12345" />
export const Error = () => <Display value="ERROR" />