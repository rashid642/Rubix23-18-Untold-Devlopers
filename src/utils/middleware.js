function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect('/login')
}

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/')
    }
    next()
}

function checkIsRetailler(req, res, next) {
    if (req.user.status === "retailler") {
        return next();
    } else {
        res.redirect("/");
    }
}

function checkIsNGO(req, res, next) {
    if (req.user.status !== "ngo") {
        return next();
    } else {
        res.redirect("/");
    }
}

module.exports = {
    checkAuthenticated,
    checkNotAuthenticated,
    checkIsRetailler,
    checkIsNGO
}