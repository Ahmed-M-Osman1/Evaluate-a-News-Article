//ReferenceError: regeneratorRuntime is not defined
// reference: https://knowledge.udacity.com/questions/174638

import 'babel-polyfill'

import handleSubmit from '../js/handleSubmit'

describe('Testing the handleSubmit functionality', () => {
    
  test('Testing the handleSubmit function', () => {

    expect(handleSubmit).toBeDefined()
  })
})
