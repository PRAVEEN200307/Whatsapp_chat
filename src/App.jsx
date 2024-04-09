import { useState } from "react";
import InputText from "./Components/InputText";

function App() {
  const [ContactVal, setContactVal] = useState("");
  const handleContactName = (e) => {
    setContactVal(e.target.value);
  };

  const [ImageUrl, setImageUrl] = useState("");
  const handleImageURl = (e) => {
    setImageUrl(e.target.value);
  };

  const [percentage, setPercentage] = useState("");
  const handleBatteryPercantage = (e) => {
    setPercentage(e.target.value);
  };

  const [time, setTime] = useState("");
  const handleTime = (e) => {
    setTime(e.target.value);
    console.log(e);
  };

  const [states, setStates] = useState(false);
  const handleStates = (e) => {
    setStates(!states);
  };

  const[receive,setreceive] =useState('')
  const handleReceiveMessage = (e) => {
     setreceive(e.target.value)  
  };

  const [senderMessage,setSenderMessage] = useState('')
  const handleMessageSender = (e)=>{
     setSenderMessage(e.target.value)
  }
  return (
    <>
      <header className="bg-green-600 text-white font-serif uppercase text-center px-5 py-5  text-2xl">
        <h1>Fake whatsapp Chats</h1>
      </header>
      <main className=" bg-green-100 max-h-min w-screen flex justify-around  flex-wrap gap-3">
        {/* forms */}
        <div className=" bg-green-200 mt-5 p-10 h-fit">
          <div className="flex gap-4">
            <div>
              <label htmlFor="Enter a Contact Name">Enter a Contact Name</label>{" "}
              <br />
              <input
                type="text"
                name=""
                id="ContactName"
                className="mt-2  rounded px-5 py-2 outline-none"
                placeholder="Praveen"
                onChange={handleContactName}
              />
            </div>
            <div>
              <label htmlFor="Enter a Contact Name">Enter a Image Url</label>{" "}
              <br />
              <input
                type="url"
                name=""
                id="ContactName"
                className="mt-2  rounded px-5 py-2 outline-none"
                placeholder="image url"
                onChange={handleImageURl}
              />
            </div>
          </div>
          <div className="pt-8 flex justify-between items-center">
            <div>
              <label htmlFor="states">Offline or Online</label> <br />
              <div className="check-states">
                <input
                  type="checkbox"
                  name=""
                  id="states"
                  value="online"
                  className="bg-slate-100 appearance-none w-12 h-6 mt-2 rounded-xl "
                  onChange={handleStates}
                />
                <div className="rounded-check"></div>
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="batteryId">Battery percentage</label> <br />
                <input
                  type="number"
                  name=""
                  id="batteryId"
                  className="mt-2 rounded px-5 py-2 outline-none"
                  placeholder="50%"
                  onChange={handleBatteryPercantage}
                  min={2}
                />
              </div>
            </div>
            <div>
              <label htmlFor="">Enter your Time</label> <br />
              <input
                type="time"
                name=""
                id=""
                className="px-5 py-2 outline-none  mt-2"
                placeholder="02:33pm"
                onChange={handleTime}
              />
            </div>
          </div>
          <div className="pt-8 flex  gap-5 items-center">
            <div>
              <label htmlFor="">Send a Message(receiver)</label> <br />
              <textarea
                name=""
                id="receive"
                cols="45"
                rows="8"
                className="mt-4 outline-none pl-4 pt-2"
                placeholder="Enter a Message"
                onChange={handleReceiveMessage}
              ></textarea>
            </div>
            {/* <div className="self-end " onClick={handleReceive}>
              <div className="bg-green-600 rounded-full p-2 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.2em"
                  height="1.2em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#fff"
                    d="M2.01 21L23 12L2.01 3L2 10l15 2l-15 2z"
                  ></path>
                </svg>
              </div>
            </div> */}
          </div>
          <div className="pt-8 flex  gap-5 items-center">
            <div>
              <label htmlFor="">Send a Message(sender)</label> <br />
              <textarea
                name=""
                id=""
                cols="45"
                rows="8"
                className="mt-4 outline-none pl-4 pt-2"
                placeholder="Enter a Message"
                onChange={handleMessageSender}
              ></textarea>
            </div>
            {/* <div className="self-end ">
              <div className="bg-green-600 rounded-full p-2 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.2em"
                  height="1.2em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#fff"
                    d="M2.01 21L23 12L2.01 3L2 10l15 2l-15 2z"
                  ></path>
                </svg>
              </div>
            </div> */}
          </div>
        </div>

        {/* whatsApp ui */}
        <div className="mt-4 whatsapp-ui h-fit">
          <header className="bg-green-700 px-5 py-4 text-white">
            <div className="flex justify-between">
              <div className=" ">{time ? time : "10:00"} pm</div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12.896 3.619a.75.75 0 0 1-1.277.787l-.015-.018a.6.6 0 0 0-.154-.116c-.147-.082-.468-.2-1.065-.091c-.408.075-.62.334-.75.667A2.1 2.1 0 0 0 9.5 5.5v1.25a1 1 0 0 0 1 1h.25a1 1 0 0 0 .968-.75h-.468a.75.75 0 1 1 0-1.5h1.25a.75.75 0 0 1 .75.75v.5a2.5 2.5 0 0 1-2.5 2.5h-.25A2.5 2.5 0 0 1 8 6.75V5.459l.004-.08q.005-.1.026-.263c.029-.212.087-.504.209-.814c.245-.627.783-1.396 1.875-1.597c.913-.167 1.592-.008 2.068.258c.23.129.399.275.513.397a2 2 0 0 1 .19.242l.006.01l.003.004zm-8.168-.558c.596-.724 1.772-.302 1.772.636V6.5h.25a.75.75 0 0 1 0 1.5H6.5v.5a.75.75 0 1 1-1.5 0V8H3.203c-1.014 0-1.57-1.18-.926-1.963zM5 6.5V5.09L3.839 6.5zM20 6a1 1 0 0 1 1 1v13a1 1 0 0 1-2 0V7a1 1 0 0 1 1-1m-4 3c.552 0 1 .446 1 .995v10.01c0 .55-.448.995-1 .995c-.553 0-1-.446-1-.995V9.995c0-.55.447-.995 1-.995m-4 3a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0v-7a1 1 0 0 1 1-1m-4 3c.552 0 1 .445 1 .994v4.012A.997.997 0 0 1 8 21c-.553 0-1-.445-1-.994v-4.012A.997.997 0 0 1 8 15m-4 3c.552 0 1 .44 1 .984v1.032A.99.99 0 0 1 4 21c-.553 0-1-.44-1-.984v-1.032A.99.99 0 0 1 4 18"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="28"
                  viewBox="0 0 14 14"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 5.5A.5.5 0 0 0 13 5h-1V4a1 1 0 0 0-1-1H1.5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1H11a1 1 0 0 0 1-1V9h1a.5.5 0 0 0 .5-.5Zm-10.25 0v3m3-3v3m3-3v3"
                  />
                </svg>
                <span>{percentage ? percentage : "50"}%</span>
              </div>
            </div>
            <div className="mt-2 flex justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={
                    ImageUrl
                      ? ImageUrl
                      : "https://ui-avatars.com/api/?name=John+Doe"
                  }
                  alt="PersonProfile"
                  className="rounded-full"
                  width="54"
                />
                <div>
                  <h1>{ContactVal ? ContactVal : "Brother"}</h1>
                  <span>{states ? "online" : "offline"}</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M2 20V4h16v6.5l4-4v11l-4-4V20z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2"
                  ></path>
                </svg>
              </div>
            </div>
          </header>
          <main className="p-4 backaground-img">
            <div className="flex gap-4 flex-col">
              <span className="mr-auto bg-white px-8 rounded-full py-1">
                {(receive!=''?receive:'hello')}
              </span>
              <span className="ml-auto bg-green-300 px-8 rounded-full py-1">
              {(senderMessage!=''?senderMessage:'hello')}
              </span>
            </div>
            <div className="input-get flex items-center justify-center gap-5 ">
              <div className="relative">
                <input
                  type="text"
                  name=""
                  id=""
                  className="px-10 chat-input py-3 rounded-lg outline-none"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 256 256"
                  className=" absolute top-3 left-2"
                >
                  <path
                    fill="currentColor"
                    d="M171.46 154c-9.55 16.52-25.39 26-43.46 26s-33.91-9.48-43.46-26a4 4 0 0 1 6.92-4c8.21 14.19 21.19 22 36.54 22s28.33-7.81 36.54-22a4 4 0 1 1 6.92 4M228 128A100 100 0 1 1 128 28a100.11 100.11 0 0 1 100 100m-8 0a92 92 0 1 0-92 92a92.1 92.1 0 0 0 92-92M92 116a8 8 0 1 0-8-8a8 8 0 0 0 8 8m72-16a8 8 0 1 0 8 8a8 8 0 0 0-8-8"
                  ></path>
                </svg>
              </div>
              <div className="bg-green-600 rounded-full p-2 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.2em"
                  height="1.2em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#fff"
                    d="M2.01 21L23 12L2.01 3L2 10l15 2l-15 2z"
                  ></path>
                </svg>
              </div>
            </div>
          </main>
        </div>
      </main>
    </>
  );
}

export default App;
