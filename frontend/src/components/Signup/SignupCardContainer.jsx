import react from "react";
import SignUpForm from "./SignUpForm";
import IllustrationPanel from "../Login/IllustrationPanel";

const SignupCardContainer = () => (

  <div className="flex flex-row lg:flex-row min-h-screen md:flex-row md:min-h-[500px] md:shadow-[0_0_25px_5px_rgba(128,0,255,0.5)] md:max-w-xl md:mx-auto md:my-8 md:rounded-3xl  lg:min-h-[600px] lg:rounded-3xl overflow-hidden lg:shadow-[0_0_25px_5px_rgba(128,0,255,0.5)] lg:max-w-6xl lg:mx-auto lg:my-8">
    <div className="bg-white flex-1 order-2 lg:order-1 md:order-1 overflow-y-auto">
      <SignUpForm />
    </div>
    <div className="bg-white/5 backdrop-blur-sm flex-1 order-1 lg:order-2 min-h-[200px] lg:min-h-auto md:min-h-auto">
      <IllustrationPanel />
    </div>
  </div>
);

export default SignupCardContainer;
