import { useState, useEffect } from 'react';
import axios from 'axios';

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
        <div className="flex justify-center items-center h-screen">
            <h1 className="text-red-600 text-xl font-semibold">{message}</h1>
        </div>
    );

}

export default Signup;
