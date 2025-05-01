import react from "react";
import SignUpForm from "./SignUpForm";
import IllustrationPanel from "../Login/IllustrationPanel";

const AuthCardContainer = () => (

    <div className="flex rounded-3xl overflow-hidden bg-white shadow-[0_0_25px_5px_rgba(128,0,255,0.5)]">
    <SignUpForm />
    <IllustrationPanel />
</div>
);

export default AuthCardContainer;
