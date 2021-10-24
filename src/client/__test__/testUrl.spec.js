import { validURL } from "../js/checkURL";

describe('Test check URL functionality', () => {

    test('Testing the validURL function', () => {

        expect(validURL).toBeDefined()
    })

    test('checkUrl return false for invalid url', () => {

        expect(validURL('ahmedosman')).toBeFalsy()
    })

    test('checkUrl return true for valid url', () => {
        
        expect(validURL('http://example.com')).toBeTruthy()
    })
})