const Fb = () => {
  return (
    <>
      <header className="bg-[rgb(36,37,38)] h-[56px] flex px-2 relative">
        <div className="absolute top-1/2 transform -translate-y-1/2">
          <div className=" flex h-[40px] xl:w-[320px]">
            <img
              className="xl:w-[40px] xl:rounded-full justify-start "
              src="/image/fb/fb-icon.png"
              alt="left-icon"
            />

            <div className="mx-1">&nbsp;</div>
            <div className="flex w-[240px] h-full ">
              <div className="rounded-tl-[50px] bg-[rgb(58,59,60)] text-[#e4e6eb] rounded-bl-[50px] w-[30px] h-full flex justify-end items-center text-[12px]">
                <i className="fa-solid fa-magnifying-glass text-[14px] opacity-70"></i>
              </div>
              <input
                type="text"
                placeholder="Tìm kiếm trên Facebook"
                className="bg-[rgb(58,59,60)] text-[#e4e6eb]  rounded-tr-[50px] rounded-br-[50px] w-full h-full focus-visible:outline-none  text-[14px]  pl-[8px]"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full px-[110px]">
          <ul className=" text-[#b0b3b8]  text-[19px] w-full flex justify-center items-center">
            <li className="min-w-[50px] mx-2 max-w-[130px] w-[130px] flex justify-center items-center h-full border-solid border-b-4 border-w border-[#3374e1]">
              <i className="fa-solid fa-house"></i>
            </li>
            <li className="min-w-[50px] mx-2 max-w-[130px] w-[130px] flex justify-center items-center h-full ">
              <i className="  fa-solid fa-play text-[10px] border-solid border-2 rounded-md border-[#b0b3b8] p-[5px]"></i>
            </li>
            <li className="min-w-[50px] mx-2 max-w-[130px] w-[130px] flex justify-center items-center h-full">
              <i className="fa-solid fa-shop"></i>
            </li>
            <li className="min-w-[50px] mx-2 max-w-[130px] w-[130px] flex justify-center items-center h-full">
              <i className="fa-solid fa-users text-[10px] border-solid border-2 rounded-full border-[#b0b3b8] p-[5px]"></i>
            </li>
            <li className="min-w-[50px] mx-2 max-w-[130px] w-[130px] flex justify-center items-center h-full">
              <i className="fa-solid fa-gamepad"></i>
            </li>
          </ul>
        </div>
        <div className="text-white absolute top-1/2 transform -translate-y-1/2 right-0">
          <div className="flex items-center">
            <div className="pr-3">
              <i className="fa-solid fa-cubes flex justify-center items-center w-[40px] h-[40px] rounded-full text-[18px] bg-[#3f4041]"></i>
            </div>
            <div className="pr-3">
              <i className="fa-solid fa-comment-dots flex justify-center items-center w-[40px] h-[40px] rounded-full text-[18px] bg-[#3f4041]"></i>
            </div>
            <div className="pr-3">
              <i className="fa-solid fa-bell flex justify-center items-center w-[40px] h-[40px] rounded-full text-[18px] bg-[#3f4041]"></i>
            </div>
            <div className="pr-3">
              <img
                className=" w-[40px] h-[40px] rounded-full text-[18px]"
                src="/image/fb/avatar.png"
                alt="img"
              />
            </div>
          </div>
        </div>
      </header>
      <div className="xl:flex xl:justify-between pt-5 px-5 bg-[#18191a] text-white">
        <div className="max-w-[360px] min-w-[280px]">
          <div className="flex  justify-start items-center">
            <img
              className="w-[40px] h-[40px] rounded-full"
              src="/image/fb/avatar.png"
              alt="l-avatar"
            />

            <div className="ml-3">Nguyễn Tiến Cường</div>
          </div>
          <div className="flex pt-3 items-center">
            <i className="fa-solid fa-user-group  flex justify-center items-center w-[40px] h-[40px] rounded-full text-[22px] text-[#56d6c5]"></i>
            <span className="ml-3">Bạn bè</span>
          </div>
          <div className="flex pt-3 items-center">
            <i className="fa-solid fa-clock-rotate-left  flex  justify-center items-center w-[40px] h-[40px] rounded-full text-[22px] text-[#56d6c5]"></i>
            <span className="ml-3">Kỷ niệm</span>
          </div>

          <div className="flex pt-3 items-center">
            <i className="fa-solid fa-bookmark flex  justify-center items-center w-[40px] h-[40px] rounded-full text-[22px] text-[#bb47c9]"></i>
            <span className="ml-3">Đã lưu</span>
          </div>
          <div className="flex pt-3 items-center w-[40px] h-[40px]">
            <i className="fa-solid fa-users flex  justify-center items-center w-[40px] h-[40px] rounded-full text-[22px] text-[#56d6c5] pl-1"></i>
            <span className="ml-3">Nhóm</span>
          </div>
          <div className="flex pt-3 items-center">
            <i className="fa-solid fa-video  flex  justify-center items-center w-[40px] h-[40px] rounded-full text-[22px] text-[#56d6c5]"></i>
            <span className="ml-3">Video</span>
          </div>
          <div className="flex pt-3 items-center">
            <i className="fa-solid fa-chevron-down flex justify-center items-center w-[40px] h-[40px] rounded-full text-[17px] text-[#56d6c5] bg-[#363737]"></i>
            <span className="ml-3">Xem thêm</span>
          </div>
        </div>
        <div className="bg-red-300 xl:w-[680px] xl:max-w-[680px] xl:h-screen max-h-screen  overflow-y-auto">
          <div className="h-[2000px]">abc</div>
          <div>abc</div>
        </div>
        <div className="text-white max-w-[360px] min-w-[280px]">
          <div className="flex">
            <div className="basis-2/3">Người liên hệ</div>
            <div className="right-0">
              <i className="fa-solid fa-magnifying-glass"></i>
              <i className="fa-solid fa-ellipsis"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fb;
