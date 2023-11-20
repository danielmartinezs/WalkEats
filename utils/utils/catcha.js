

const validateHuman = async (token) => {
    console.log("token",token)
    const secret = process.env.GOOGLE_CAPTCHA_PRIVATEKEY
    const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`, 
    {
        method: "POST"
    })
    const data = await response.json()
    console.log("data.success", data.success)
    console.log(data)
    return data.success;
}
module.exports = {
    validateHuman,
}