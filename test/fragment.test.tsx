import Nano, { Component, Fragment } from '../lib/index.js'
import { wait } from './helpers.js'

const spy = jest.spyOn(global.console, 'error')

test('should render without errors', async (done) => {
  const Test = () => <Fragment>test</Fragment>
  const Root = () => (
    <div>
      <Test />
    </div>
  )
  const res = Nano.render(<Root />)

  await wait()
  expect(res.outerHTML).toBe('<div>test</div>')
  expect(spy).not.toHaveBeenCalled()
  done()
})

test('should render without errors', async (done) => {
  const Test = () => (
    <Fragment>
      <p>test</p>
    </Fragment>
  )
  const Root = () => (
    <div>
      <Test />
    </div>
  )
  const res = Nano.render(<Root />)

  await wait()
  expect(res.outerHTML).toBe('<div><p>test</p></div>')
  expect(spy).not.toHaveBeenCalled()
  done()
})

test('should render without errors', async (done) => {
  const Test = () => (
    <Fragment>
      <p>line one</p>
      <p>line two</p>
    </Fragment>
  )
  const Root = () => (
    <div>
      <Test />
    </div>
  )
  const res = Nano.render(<Root />)

  await wait()
  expect(res.outerHTML).toBe('<div><p>line one</p><p>line two</p></div>')
  expect(spy).not.toHaveBeenCalled()
  done()
})

test('should render without errors', async (done) => {
  const Name = (props: any) => {
    return <p>{props.name}</p>
  }

  const Test = () => (
    <Fragment>
      <p>John</p>
      <Name name="Suzanne" />
    </Fragment>
  )
  const Root = () => (
    <div>
      <Test />
    </div>
  )
  const res = Nano.render(<Root />)

  await wait()
  expect(res.outerHTML).toBe('<div><p>John</p><p>Suzanne</p></div>')
  expect(spy).not.toHaveBeenCalled()
  done()
})
