const Loading = () => {
  return (
    /*  <div className="absolute left-2/4 top-2/3">

    </div> */

    <div
     
     
        className=" overflow-y-hidden overflow-x-hidden fixed z-100 justify-center items-center w-full h-full bg-gray-900 bg-opacity-25 md:inset-0 h-[calc(100%-1rem)] max-h-full"
      
    >
      <div className="absolute left-2/4 top-2/4 p-4 w-full max-w-md max-h-full h-full overflow-hidden ">
      <div className='loader'>
        </div>
      </div>
    </div>
  );
};

export default Loading;
