import { greet } from './demo/demo'
import { arrOnly } from './arrOnly'


const oriArr = [1,2,2,4]

const div = document.createElement('div')
div.innerHTML = `起始数组是${oriArr}`
const strong = document.createElement('strong')
strong.innerHTML = `去重后的数组是${arrOnly(oriArr)}`


document.body.appendChild(div)
document.body.appendChild(strong)