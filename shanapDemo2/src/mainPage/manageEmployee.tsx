import { IoArrowBackOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import ShowEmpList from "./showEmpList";
const ManageEmployee = () => {


  return (
    <div>

<div className="flex flex-row border-2 border-solid border-gray-200">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center w-11/12 lg:w-full p-7">
        <div className="flex lg:pb-0"> 
          <button className="mb-2 text-2xl lg:text-3xl "><IoArrowBackOutline /></button>
          <div className="ml-8 font-bold text-xl lg:text-3xl ">Manage Employees</div>
        </div>

<div className="flex pt-4 lg:pt-0">
            <div className="text-red-500 font-bold lg:text-2xl lg:pr-8 mr-5 ml-5">
              العربية
            </div>
            <button className=" hidden lg:block text-black font-bold lg:text-3xl border-solid border-2 rounded-full border-gray-300 p-2 lg:mr-2  ">
            <IoSettingsOutline />
            </button>

            <button className="flex">
<div className="border-solid border-2 rounded-full border-black bg-black lg:text-2xl p-2 mr-11">......</div>
<div className="flex flex-col mr-0 lg:mr-10"><div className="font-bold text-md">restaurant with rate</div><div className="text-gray-400 text-md">employee - Owner</div></div>
            </button>
            </div>
            

      </div>

      </div>
      <div className="flex justify-center">
      <div className="border-2 rounded-2xl border-solid border-gray-200 mt-10 flex justify-between p-5 w-11/12 items-center">
        <div className="flex">alo</div>
        <button                           className=" bg-red-500  p-4 lg:mr-20 rounded-full ring-1 text-white font-bold hover:bg-white hover:text-red-500 ring-red-500 transition-all duration-500 transform"
>Invite</button>
      </div>
      </div>



     <div>{<ShowEmpList/>}</div>


    </div>
  );
};

export default ManageEmployee;
