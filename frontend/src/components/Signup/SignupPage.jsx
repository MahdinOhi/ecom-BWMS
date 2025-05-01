import React from 'react';
import SignupCardContainer from './SignupCardContainer';

function Signup() {
    return (
        <div
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-800 to-purple-900 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: "url('/img/auth/LoginBG.png')" }}
        >
            <SignupCardContainer />
        </div>
    );
}

export default Signup;
