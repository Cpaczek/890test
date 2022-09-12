module.exports = function verifyEmail(email){
    console.log("on branch feature/foo")
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}
