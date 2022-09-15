"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
function requireAuth(req, res, next) {
    var _a;
    if (((_a = req.session) === null || _a === void 0 ? void 0 : _a.loggedIn) === true) {
        return next();
    }
    return res.status(401).send('Not authorized');
}
const router = (0, express_1.Router)();
exports.router = router;
router.get('/login', (req, res) => {
    res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email" />
      </div>
      <div>
        <label>Password</label> 
        <input name="password" type="password" />
      </div>
      <button>Submit</button>
    </form>
  `);
});
router.get('/logout', (req, res) => {
    req.session = undefined;
    res.redirect('/');
});
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email && password && email === 'hi@hi.com' && password === 'password') {
        req.session = { loggedIn: true };
        res.redirect('/');
    }
    else {
        res.send('Invalid email or password');
    }
});
router.get('/', (req, res) => {
    var _a;
    if ((_a = req.session) === null || _a === void 0 ? void 0 : _a.loggedIn) {
        res.send(`
      <div>
        <h1>You're logged in congrats champ!</h1>
        <a href="/logout">Logout</a>
      </div>
    `);
    }
    else {
        res.send(`
      <div>
        <h1>You're not logged in :/</h1>
        <a href="/login">Login</a>
      </div>
    `);
    }
});
router.get('/protected', [requireAuth], (req, res) => {
    return res.send('Welcome to protected route');
});
