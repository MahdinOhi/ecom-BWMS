import Footer from "../Footer/Footer";
import TopLeftContent from "./TopLeftContent";
import AboutLogo from "./AboutLogo";
import AboutProductImage from "./AboutProductImage";
import AboutBottom from "./AboutBottom";


const AboutPage = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="w-full  max-w-4xl bg-gradient-to-r  overflow-visible shadow-2xl relative">
          {/* Main Card Container with white curved corners */}
          <div className="rounded-3xl overflow-visible border-4 border-purple-700">
            <div className="bg-white rounded-t-3xl rounded-b-none h-[400px] p-8 pt-12 pb-48 relative">
              <TopLeftContent />
              <AboutLogo />
            </div>
            <AboutProductImage />
            <AboutBottom />
          </div>
        </div>
        <Footer />
      </div>


    </>
  );
};

export default AboutPage;