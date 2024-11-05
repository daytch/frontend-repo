// src/components/LoginForm.tsx
import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../apis/firebase';

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            setError('');
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.log(error);
            setError('Failed to login');
        }
    };

    return (
        <div>
            <Typography variant="h5">Login</Typography>
            <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth />
            <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} fullWidth />
            {error && <Typography color="error">{error}</Typography>}
            <Button variant="contained" color="primary" onClick={handleLogin}>Login</Button>
        </div>
    );
};

export default LoginForm;
