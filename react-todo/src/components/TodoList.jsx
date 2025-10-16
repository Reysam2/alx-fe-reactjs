function TodoList() {
  return (
    <div className="w-full h-full  bg-amber-100 grid place-content-center ">
     
      <div className="  w-[100vw] overflow-y min-h-screen mt-[10rem] px-1  flex justify-center max-sm:flex gap-x-15 max-sm:flex-col">
    


        {/* card */}
        <div className="flex flex-col justify-around sm:flex sm:justify-around h-[14rem] border bg-amber-100 mb-6 rounded-xl hover:bg-amber-200 hover;shadow-2xl hover:drop-shadow-2xl  transition-all duration-200 ease-in-out text-amber-900">
          {/* todo text */}
          <div className="w-full pl-5 ">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              dolorem.
            </p>
          </div>
          {/* btns */}
          <div className=" flex justify-around ">
            <button className="border rounded-xl py-[1.5%] px-5 cursor-pointer hover:bg-amber-900 hover:text-amber-200">
              Mark Complete
            </button>
            <button className="border rounded-xl  py-[1.5%] px-5 cursor-pointer hover:bg-amber-900 hover:text-amber-200">
              Delete
            </button>
          </div>
        </div>
  


     
      </div>

 
    </div>
  );
}

export default TodoList;
