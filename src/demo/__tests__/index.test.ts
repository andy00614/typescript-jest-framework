import { greet } from '../demo'

test('test whether jest is working successful',() => {
  expect(greet('framework')).toBe('Hello framework')
})