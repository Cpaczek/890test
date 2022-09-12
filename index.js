module.exports = function verifyEmail(email){
    console.log("changed on master")
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}
