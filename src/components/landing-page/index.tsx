import Footer from "./Footer";
import Section from "./Section";

const LandingPage = () => {
  return (
    <body>
      <div className=" bg-[#1d1d20] text-white flex justify-center ">
        <div className="p-[15px] sm:p-[82px] max-w-[1536px] min-w-[400px]">
          <Section />
          <Footer />
        </div>
      </div>
    </body>
  );
};

export default LandingPage;
