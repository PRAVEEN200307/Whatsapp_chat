import InputText from "../Components/InputText";
import TextEditor from "./TextEditor";

function Forms() {
  return (
    <div className=" bg-green-200 mt-5 p-10 h-fit">
      <div className="flex gap-4">
        <InputText
          labelName="Enter a Contact Name"
          PlaceHolderName="Praveen"
          idName="ContactName"
        ></InputText>
        <InputText
          labelName="Enter a Image Url"
          PlaceHolderName="image url"
          type="url"
        ></InputText>
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
            />
            <div className="rounded-check"></div>
          </div>
        </div>
        <div>
          <InputText
            labelName="Enter your Battery"
            PlaceHolderName="50%"
            width="40px"
          ></InputText>
        </div>
        <div>
          <label htmlFor="">Enter your Time</label> <br />
          <input
            type="time"
            name=""
            id=""
            className="px-5 py-2 outline-none  mt-2"
            placeholder="02:33pm"
          />
        </div>
      </div>
       <TextEditor labelName='Send a Message(sender)'></TextEditor>
       <TextEditor labelName='Send a Message(receiver)'></TextEditor>
    </div>
  );
}

export default Forms;
