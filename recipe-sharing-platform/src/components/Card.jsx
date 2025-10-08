function Card({ title, summary, image }) {
  return (
    <div className="card w-[15rem] h-[16rem] bg-gray-300  flex flex-col justify-around items-center rounded-md hover:shadow-xl hover:drop-shadow-xl">
      <div className="bg-orange-400 w-[90%] h-[45%] flex items-center justify-center overflow-hidden">
        <img
          className="h-28 text-center w-28 rounded-[20rem] bg-amber-100 grid place-items-center text-xs hover:scale-120 "
          src={image}
          alt={`${title} Picture`}
        />
      </div>

      <div className="bg-orange-200 w-[90%] h-[45%] flex flex-col items-center  ">
        <div className=" mb-2">
          <h2 className="font-bold text-lg mt-1.5">{title}</h2>
        </div>
        <div className="overflow-hidden">
          <p className="text-xs text-center">{summary}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
