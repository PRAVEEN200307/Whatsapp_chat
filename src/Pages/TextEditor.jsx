function TextEditor({labelName}) {
  return (
    <div className="pt-8 flex  gap-5 items-center">
      <div>
        <label htmlFor="">labelName</label> <br />
        <textarea
          name=""
          id=""
          cols="45"
          rows="10"
          className="mt-4 outline-none pl-4 pt-2"
        ></textarea>
      </div>
      <div className="self-end ">
        <div className="bg-green-600 rounded-full p-2 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2em"
            height="1.2em"
            viewBox="0 0 24 24"
          >
            <path fill="#fff" d="M2.01 21L23 12L2.01 3L2 10l15 2l-15 2z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default TextEditor