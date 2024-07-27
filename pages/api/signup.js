import { useState } from 'react';
import signUpHandler from './handlers/signUpHandler';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSignup = async () => {
        const result = await signUpHandler(email, password);
        if (result.success) {
            setMessage('User signed up successfully!');
        } else {
            setMessage(`Error: ${result.message}`);
        }
    };

    return (
        <div>
            <h1>Sign Up</h1>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSignup}>Sign Up</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Signup;
