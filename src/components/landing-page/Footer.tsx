const Footer = () => {
  return (
    <>
      <footer className="mt-5">
        <div>
          <img 
          className="w-[65px] sm:w-[105px] sm:h-[74px]"
            src={"/image/footer/chess-logo.png"}
            alt="abc"
          />
        </div>
        <div className="mt-6 text-[12px] sm:text-[17px]">
          <p className="break-words">
            MoveChess, the inaugural chess platform on the blockchain ecosystem.
          </p>
          <p className="break-words mt-2">
            An arena for users to indulge in intellectual gaming entertainment.
          </p>
        </div>
        <div className="mt-[70px]">
          <img
            className="w-[240px] sm:w-[340px] sm:h-[35px]"
            src={"/image/footer/social-icon.png"}
            alt="icon"
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;
