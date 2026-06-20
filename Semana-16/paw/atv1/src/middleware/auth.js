function auth(req, res, next) {
    if (!req.session.user) {
        return res.redirect('/unauthorized');
    }

    next();
}

module.exports = auth;