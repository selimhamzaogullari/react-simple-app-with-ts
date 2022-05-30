import { render, screen, fireEvent } from '@testing-library/react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step4 from './components/Step4';
import { MainContext } from './context';

test('Check Step1 - only number', async () => {
  render(
    <Step1 />
  )
  const input = screen.getByPlaceholderText('step1.yourHeight') as HTMLInputElement
  fireEvent.change(input, { target: { value: 'selim' } })
  expect(input.value).toBe('')
})

test('Check Step1 - disable next button', async () => {
  render(
    <Step1 />
  )
  const input1 = screen.getByPlaceholderText('step1.yourHeight') as HTMLInputElement
  const input2 = screen.getByPlaceholderText('step1.yourWeight') as HTMLInputElement
  const button = screen.getByText('global.next') as HTMLButtonElement
  fireEvent.change(input1, { target: { value: '' } })
  fireEvent.change(input2, { target: { value: '' } })
  expect(button).toHaveAttribute('disabled')
})

test('Check Step2 - disable days', async () => {
  const page = 1
  const data = { step1: [170, 90] }
  const togglePage = () => { }
  const changeData = () => { }
  render(
    <MainContext.Provider value={{ page, togglePage, data, changeData }}>
      <Step2 />
    </MainContext.Provider>
  )
  const tuesday = screen.getByText('step2.tuesday') as HTMLDivElement
  const thursday = screen.getByText('step2.thursday') as HTMLDivElement
  const friday = screen.getByText('step2.friday') as HTMLDivElement
  expect(tuesday).toHaveClass('disabled')
  expect(thursday).toHaveClass('disabled')
  expect(friday).toHaveClass('disabled')
})

test('Check Step4 - disable next button', async () => {
  const page = 1
  const data = { step1: [170, 90] }
  const togglePage = () => { }
  const changeData = () => { }
  render(
    <MainContext.Provider value={{ page, togglePage, data, changeData }}>
      <Step4 />
    </MainContext.Provider>
  )
  const input1 = screen.getByPlaceholderText('step4.name') as HTMLInputElement
  const input2 = screen.getByPlaceholderText('step4.surname') as HTMLInputElement
  const input3 = screen.getByPlaceholderText('step4.email') as HTMLInputElement
  const input4 = screen.getByPlaceholderText('step4.password') as HTMLInputElement
  const button = screen.getByText('global.save') as HTMLButtonElement
  fireEvent.change(input1, { target: { value: '' } })
  fireEvent.change(input2, { target: { value: '' } })
  fireEvent.change(input3, { target: { value: '' } })
  fireEvent.change(input4, { target: { value: '' } })
  expect(button).toHaveAttribute('disabled')
})

