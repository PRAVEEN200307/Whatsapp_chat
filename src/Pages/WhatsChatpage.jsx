const WhatsChatpage = () => {
  return (
    <div className="mt-4 w-4/12  h-fit">
      <header className="bg-green-700 px-5 py-4 text-white">
        <div className="flex justify-between">
          <div className=" ">5:00 PM</div>
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
            <span>94%</span>
          </div>
        </div>
        <div className="mt-2 flex justify-between">
          <div className="flex items-center gap-4">
            <img
              src="https://ui-avatars.com/api/?name=John+Doe"
              alt="PersonProfile"
              className="rounded-full"
              width="54"
            />
            <h1>Sindhu Akka</h1>
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
          <span className="mr-auto bg-white px-8 rounded-full py-1">hello</span>
          <span className="ml-auto bg-green-300 px-8 rounded-full py-1">
            Good morning
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
  );
};

export default WhatsChatpage;
