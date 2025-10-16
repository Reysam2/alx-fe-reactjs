function AddTodoForm() {
  return (
    <div className="w-dvw h-screen grid place-content-center bg-amber-100 ">
      <div className="  w-[40rem]">
        <form className="w-full h-full flex justify-center ">
          <div className="w-[28rem]">
            <input className="w-full py-[3%] px-5 outline-none border-[0.1rem] border-r-0 border-orange-800 text-amber-800" type="text" placeholder="Enter a task" />
          </div>
 
          <button className=" border-[0.1rem]  py-[2%] px-5 border-orange-800 text-amber-800 transition duration-200 ease-in-out hover:bg-amber-200 " type="submit"> Add Todo</button>
        </form>
      </div>
    </div>
  );
}

export default AddTodoForm;
