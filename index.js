module.exports = function verifyEmail(email){
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}
