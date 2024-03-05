
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



const TextInput=(props:inputTypes)=> {


  return (
    

    <div className="flex flex-col lg:w-5/12 sm:w-full">
      <div className="font-bold font-mono text-xl">
        {props.label}
      </div>

      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        className={props.classname}
        onChange={props.change}
        value={props.value}
         />
  
{ props.value=="" ?<div className='text-red-400'>{props.errors}</div>:""}
    </div>

   
  )
}

export default TextInput;



