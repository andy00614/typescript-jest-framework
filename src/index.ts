import { greet } from './demo/demo'

const div = document.createElement('div')
div.innerHTML = greet('typescript-jest-framework!')

document.body.appendChild(div)