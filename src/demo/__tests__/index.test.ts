import { greet } from '../demo'

test('test whether jest is working successful',() => {
  expect(greet('hello framework')).toBe('hello framework')
})