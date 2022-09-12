const verifyEmail = require('./index')
describe("Test email verification function", () =>{
    it('should return true if email is valid', ()=>{
        const email = 'test@google.com'
        const result = verifyEmail(email)
        expect(result).toBe(true)
    })
    it('should return false if email is invalid', ()=>{
        const email = 'foobar'
        const result = verifyEmail(email)
        expect(result).toBe(false)
    })
})

