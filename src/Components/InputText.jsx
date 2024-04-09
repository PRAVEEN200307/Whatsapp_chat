function InputText( { labelName,PlaceHolderName,type="text",idName='none'}) {
     const handleNameInput = (e)=>{
       console.log(e.target.value);
       
     }
  return (
    <div>
      <label htmlFor="">{labelName}</label> <br />
      <input type={type} name="" id={idName} className="mt-2  rounded px-5 py-2 outline-none" 
      placeholder={PlaceHolderName}  onChange={handleNameInput} />
    </div>
  );
}
export default InputText;