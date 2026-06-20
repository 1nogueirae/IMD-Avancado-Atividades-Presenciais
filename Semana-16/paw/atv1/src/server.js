const express = require('express');
const cookieSession = require('cookie-session');
const path = require('path');

const auth = require('./middleware/auth');

const app = express();
const PORT = 3000;

const users = [
    {
        email: 'admin@email.com',
        password: '1234',
        name: 'Administrador'
    },
    {
        email: 'emanuel@email.com',
        password: 'abcd',
        name: 'Emanuel'
    }
];

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

app.use(
    cookieSession({
        name: 'session',
        keys: ['minha-chave-secreta'],
        maxAge: 24 * 60 * 60 * 1000
    })
);

app.get('/', (req, res) => {
    res.redirect('/login');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const user = users.find(
        u =>
            u.email === email &&
            u.password === password
    );

    if (!user) {
        return res.redirect('/unauthorized');
    }

    req.session.user = {
        email: user.email,
        name: user.name
    };

    res.redirect('/home');
});

app.get('/home', auth, (req, res) => {
    res.render('home', {
        user: req.session.user
    });
});

app.get('/unauthorized', (req, res) => {
    res.render('unauthorized');
});

app.get('/logout', (req, res) => {
    req.session = null;
    res.redirect('/login');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});