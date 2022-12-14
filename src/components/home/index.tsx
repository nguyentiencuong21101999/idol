import { convertNumber, getFullDateAndTimeToDay } from "helpers/untils";
import React, { KeyboardEvent, useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import { isBuffer } from "util";
let socket: Socket = io("https://realtimeserver.vercel.app", {
  transports: ["websocket", "polling", "flashsocket"],
});
interface CommentDetail {
  message: string;
  time: Date;
}

const Home = () => {
  const [list, setList] = useState<CommentDetail[]>([]);
  const [comment, setComment] = useState<string>("");
  const [totalLike, setTotalLike] = useState<number>(0);

  useEffect(() => {
    socket.on("return-comment-list", (data: CommentDetail[]) => {
      setList(data);
    });

    socket.emit("get-comment-list");
    socket.emit("get-total-like");
    socket.on("return-total-like", (data: number) => {
      setTotalLike(data);
    });
  }, []);

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setComment(value);
  };

  const handleCommentSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const commentDetail: CommentDetail = {
        time: new Date(),
        message: comment,
      };
      if (commentDetail.message.length > 0) {
        const newList = [...list];
        newList.push(commentDetail);
        setList(newList);
        socket.emit("comment", commentDetail);
        setComment("");
      }
    }
  };
  const handleLike = () => {
    const newTotalLike = totalLike + 1;
    setTotalLike(newTotalLike);
    socket.emit("like", newTotalLike);
  };
  return (
    <div className=" bg-slate-200 top-0">
      <div className="pt-10 flex flex-col  xl:flex-row  justify-center max-w-screen-2x min-h-screen w-full ">
        <div className="pr-2 grid basis-auto  xl:justify-items-end justify-center mb-2">
          <div className="w-[360px] h-[684px] relative">
            <div className="absolute z-10 top-1/3 right-1 ">
              <i
                className="fa fa-heart text-5xl text-red-600 cursor-pointer "
                aria-hidden="true"
                onClick={(e) => {
                  e.preventDefault();
                  handleLike();
                }}
              ></i>
              <p className="text-white text-center">
                {convertNumber(totalLike)}
              </p>
            </div>
            <video
              className="border-solid border-red-500  border-2 rounded-lg  focus:border-none"
              width="360"
              height="648"
              controls
              // autoPlay
            >
              <source
                src="https://res.cloudinary.com/cuong/video/upload/v1669707525/image/317685561_9186563411369261_6947683684347151694_n_vjemz0.mp4"
                type="video/mp4"
              ></source>
            </video>
          </div>
        </div>
        <div className="pl-2 pr-2 grid xl:basis-2/4 lg:basis-2/3 xl:justify-items-start justify-center ">
          <div className="h-[648px]  border-solid border-red-500  border-2 xl:basis-2/4 md:w-[720px] w-full min-w-[360px] rounded-lg shadow-2xl  bg-slate-50 relative">
            <div className=" h-[580px] overflow-auto">
              {list.length > 0 &&
                list.map((e, i) => {
                  return (
                    <div key={i} className="flex flex-row p-2 w-full ">
                      <span className="basis-auto leading-7">
                        <span className="border-b-2 w-full rounded-lg border-solid border-red-500 p-1">
                          {getFullDateAndTimeToDay(new Date(e.time))}
                        </span>
                        : {e.message}
                      </span>
                    </div>
                  );
                })}
              <div className="flex flex-col p-2 w-full absolute bottom-1 ">
                <input
                  value={comment}
                  type="text"
                  name="comment"
                  className="border-solid border-2 rounded-lg h-10 p-2 focus:outline-none focus:border-green-500"
                  onChange={(e) => {
                    e.preventDefault();
                    handleOnchange(e);
                  }}
                  onKeyDown={(e) => handleCommentSubmit(e)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
