// /Users/jonatas/Documents/Projects/i-sommelier-react/backend/src/routes/userRoutes.js
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const sendEmail = require('../utils/mailer'); // Importa o módulo de e-mails

const router = express.Router();

const users = [];
const JWT_SECRET = 'your_jwt_secret_key';

// Register route
router.post(
    '/register',
    [
        body('email').isEmail().withMessage('Invalid email'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        // Cria o token de validação
        const verificationToken = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' });

        // Envia o e-mail de validação
        const verificationLink = `http://localhost:4000/api/users/verify/${verificationToken}`;
        await sendEmail(email, 'Verify your email', `Click the link to verify your email: ${verificationLink}`);

        users.push({ email, password: hashedPassword, isVerified: false });
        res.status(201).json({ message: 'User registered. Please verify your email.' });
    }
);

// Email verification route
router.get('/verify/:token', (req, res) => {
    const { token } = req.params;

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        const user = users.find((u) => u.email === decoded.email);

        if (!user) {
            return res.status(400).json({ message: 'Invalid token.' });
        }

        user.isVerified = true; // Marca o usuário como verificado
        res.json({ message: 'Email verified successfully.' });
    } catch (error) {
        res.status(400).json({ message: 'Invalid or expired token.' });
    }
});

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = users.find((u) => u.email === email);
    if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }

    if (!user.isVerified) {
        return res.status(400).json({ message: 'Email not verified. Please check your email.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});

module.exports = router;