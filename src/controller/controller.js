exports.renderLoginPage = (req, res) => {
    res.render('login')
}

exports.renderPostReq = (req, res) => {
    const username = req.body.username
    const password = req.body.password
    if (username == "Nihal" && password == "hello") {
        res.send(`Hello ${username}, Your form has been submitted`)
    } else {
        res.send("You are not authorised")
    }
}