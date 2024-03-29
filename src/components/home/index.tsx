import { type } from "@testing-library/user-event/dist/type";
import { convertNumber, getFullDateAndTimeToDay } from "helpers/untils";
import React, { KeyboardEvent, useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
let socket: Socket = io("http://localhost:4000/", {
  transports: ["websocket", "polling", "flashsocket"],
  withCredentials: true,
});

export interface KeyValueResDTO {
  key: number;
  value: number;
}

interface EventCompsToCheckDTO {
  num: number;

  win: string;

  team: string;

  place: string;

  compsId: number;

  eventId: number;

  eventCompsId: number;
}

interface EventToCheckDTO {
  eventId: KeyValueResDTO[];

  gWEventId: number;

  feedId: number;

  outcomeAt: Date;

  suspendAt: Date;

  raceState: string;

  meeting: string;

  raceNum: number;

  mapEventCode: string;

  sport: string;

  eventType: number;

  description: string;

  comps: EventCompsToCheckDTO[];
}

const Home = () => {
  const [user, setUser] = useState<string>("");
  const [event, setEvent] = useState<EventToCheckDTO>();

  useEffect(() => {
    // socket.on("events/get", (data: EventToCheckDTO) => {
    //   console.log(data);
    //   setEvent(data);
    // });
    // socket.on("events/update", (eventId: number) => {
    //   if (
    //     event?.eventId[0].value == eventId ||
    //     event?.eventId[1].value == eventId
    //   ) {
    //     console.log("-------", eventId);
    //     socket.emit("events/get", [14605698]);
    //   }
    // if (event?.eventId. === data.eventId) {
    //   setEvent(data);
    // }
    // });
    // socket.on("all-user", (data: string) => {
    //   setUser(data);
    // });
  });
  useEffect(() => {
    socket.emit("events/get", [14605698]);
  }, []);
  const handlOnclick = () => {
    window.open(
      "https://dev.wolfden.bet/verify-success?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMzExNiIsInV1aWQiOiJlYjE4ZmMyNC1mZDMxLTQyMDktYjk1MC0yNGVjYjI0MjcyNjMiLCJyb2xlSWQiOiIzIiwiYWN0aXZlIjoiMSIsImlhdCI6MTY3OTMyNzA3OH0.bMH5eTrXcaZSLKgGCzY4cDjmdh5LysaPUOQLfyQxh4U&email=mexer38004%40huvacliq.com"
    );
  };
  return (
    <>
      <div className="flex justify-center items-center"></div>
      {/* <div>Event: {JSON.stringify(event?.comps)}</div> */}
      {event?.comps?.map(
        (e, i) => (
          <>
            <div key={i * e.num}>
              <span style={{ color: "red" }}>Num</span> :{JSON.stringify(e.num)}
            </div>
            <div key={i * e.num}>
              <span key={i * e.num} style={{ color: "red" }}>
                compsId
              </span>{" "}
              : {JSON.stringify(e.compsId)}
            </div>
            <br></br>
            <div key={i * e.num}>
              <span style={{ color: "red" }}>win : </span> :
              {JSON.stringify(e.win)}
            </div>
            <br></br>
            <div key={i * e.num}>
              <span style={{ color: "red" }}>place</span>
              {JSON.stringify(e.place)}
            </div>
            <br></br>
            <div key={i * e.num}>
              <span style={{ color: "red" }}>team</span>
              {JSON.stringify(e.team)}
            </div>
            <br></br>
            <span>==============================</span>
            <br></br>
          </>
        )
        // <div>
        //   <p>num: {e.num}</p>
        //   <p>place: {e.place}</p>
        //   <p>win: {e.win}</p>
        //   <p>team: {e.team}</p>
        // <div/>
      )}
      <button onClick={handlOnclick}> Back App</button>
    </>
  );
};
export default Home;
