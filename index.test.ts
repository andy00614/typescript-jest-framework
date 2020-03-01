import { greet } from './第二章/index'

test('test whether jest is working successful',() => {
  expect(greet('hello framework')).toBe('hello framework')
})