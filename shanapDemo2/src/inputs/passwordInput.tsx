import { useState } from "react";
import { inputTypes} from "./textInput";
import { MdRemoveRedEye } from "react-icons/md";
import { IoIosEyeOff } from "react-icons/io";

const PasswordInput=(props:inputTypes) => {

    const [visible, setVisible] = useState(false);

  return (
    <div className="flex flex-col lg:w-5/12 sm:w-full">
                        <div className="font-bold font-mono text-xl">
                          {props.label}
                        </div>
                        <div className=" alo rounded-xl  sm:ml-2 sm:mr-2 lg:ml-0 lg:mr-0 ring-1 ring-gray-500 bg-gray-100 p-4">
                          <input
                            name={props.name}
                            type={visible ? "text" : "password"}
                            placeholder={props.placeholder}
                            className={props.classname}
                            onChange={props.change}
                            value={props.value}
                          />
                          <button type="button"
                            onClick={() => {
                              setVisible(!visible);
                            }}
                            className="relative top-1 lg:left-1 sm:left-7 text-lg"
                          >
                            {visible ? <IoIosEyeOff /> : <MdRemoveRedEye />}
                          </button>
                        </div>
                         <span className="text-red-400">{props.errors}</span>
 
                      </div>
  )
}

export default PasswordInput
