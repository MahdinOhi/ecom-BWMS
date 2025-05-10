import GlassCard from "../GlassCard";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";

const ContactPage = () => {
  return (
    <div className="container mx-auto py-10 px-4 w-[1200px] ">
      <GlassCard>
        <div className="relative w-full flex flex-col md:flex-row">
          {/* White Background Container */}
          <div className="absolute top-0 bottom-0 left-0 w-3/5 bg-white rounded-l-2xl z-0"></div>

          {/* Content Container */}
          <div className="relative z-10 flex flex-col md:flex-row w-full">
            <LeftContainer />
            <RightContainer />
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

export default ContactPage;