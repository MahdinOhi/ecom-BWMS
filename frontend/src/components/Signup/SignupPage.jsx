import { useState, useEffect } from 'react';
import axios from 'axios';
import AuthCardContainer from './AuthCardContainer';

function Signup() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchMessage = async () => {
            try {
                const response = await axios.get('http://localhost:8000/signup/');
                setMessage(response.data.message);
            } catch (err) {
                setMessage('Error fetching message');
            }
        };
        fetchMessage();
    }, []);

    return (
        <div
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-800 to-purple-900 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/img/auth/LoginBG.png')" }}
    >
        <AuthCardContainer />
    </div>
    );

}

export default Signup;
