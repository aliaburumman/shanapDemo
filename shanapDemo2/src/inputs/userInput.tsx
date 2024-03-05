import { RiAccountCircleFill } from "react-icons/ri";

export interface inputTypes {
    name:string
    type:string,
    placeholder:string,
    errors?:string
    change:(e:any)=> void
    label:string
    classname:string
    value:string
}



const UserInput=(props:inputTypes)=> {


  return (
    

        
<div className="flex flex-col lg:w-9/12 sm:w-full">
        <div className="text-xl relative top-11 left-3 z-25">
<RiAccountCircleFill />
</div>

                        <div className="font-bold font-mono text-xl">
                          {props.label}
                        </div>
                        <div className=" alo rounded-xl  sm:ml-2 sm:mr-2 lg:ml-0 lg:mr-0 ring-1 ring-gray-500 bg-gray-100 pt-4 pb-4 pl-8">
                          <input
                            name={props.name}
                            type={props.type}
                            placeholder={props.placeholder}
                            className={props.classname}
                            onChange={props.change}
                            value={props.value}
                          />
                         
                        </div>
                         <span className="text-red-400">{props.errors}</span>
 
                      </div>

   
  )
}

export default UserInput;



