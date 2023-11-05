const Section = () => {
  return (
    <>
      {/* <section>
        <div className=" left-2/3">
          <img src="/image/pawn.png" alt="pawn" />
        </div>
      </section> */}
      <section className="border-b flex flex-col">
        <div className="flex sm:flex-row w-full h-[500px] items-center relative  ">
          <div className="w-[50%] sm:w-[50%] md:w-[50%] lg:w-[50%] xl:w-[52%]  ">
            <p className=" text-1xl sm:text-4xl z-10 break-words">
              Chess Unleashed: Your Way, Your Moves
            </p>
            <p className="xl:w-4/5 lg:w-4/5 text-[13px] sm:text-[17px] mt-1 z-10">
              Customize your chess experience with unique sets and challenges.
              Dive into endless strategic possibilities where each move defines
              your style. Play it your way.
            </p>
          </div>
          <div className="w-[50%] sm:w-[50%] md:w-[50%] lg:w-[55%] xl:w-[48%]">
            {/* <div className="w-full"></div> */}
            <img
              className="absolute min-w-[30%] w-[250px]  sm:w-[350px] md:w-[450px] lg:w-[650px] xl:w-[825px] h-[250px] sm:h-[350px] md:h-[400px]  lg:h-[500px] xl:h-[650px] z-0 right-0 top-[100px] sm:top-[50px] md:top-0"
              src="/image/footer/move-chess-tb.png"
              alt=""
            />
          </div>
        </div>

        <div className="w-full flex justify-center mb-[30px] sm:mb-[90px]">
          <img
            className="opacity-30 w-[110px]  sm:w-[225px] h-[150px] sm:h-[275px] ml-[-200px] sm:ml-[-500px]"
            src="/image/footer/move-chess-knight.png"
            alt=""
          />
        </div>
        <div className="relative">
          <span className="relative text-1xl sm:text-4xl z-10 flex justify-center text-center">
            Get More Updates
          </span>
          <img
            className="absolute bottom-[-20px] sm:bottom-[-35px] opacity-30  left-1/2 z-0 w-[100px] sm:w-[200px] h-[160px] sm:h-[275px]"
            src="/image/pawn.png"
            alt="pawn"
          />
        </div>

        <span className="flex justify-center w-full text-center mt-3 text-[13px] sm:text-[17px]">
          Submit your email to get more updates from MoveChess.com
        </span>
        <div className="flex justify-center mb-6 mt-3">
          <div className="relative sm:w-3/4 w-full text-[12px] sm:text-[17px]">
            <input
              className="items-center rounded-full p-2 sm:p-4 pl-10 w-full "
              type="text"
              placeholder="Your Email..."
            />
            <button className=" absolute rounded-full  p-1 sm:p-3 w-[50px] sm:w-[100px] h-[25px] sm:h-[50px]  m-[4px] sm:m-[3px] bg-[#000000] right-0">
              I’m In
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
