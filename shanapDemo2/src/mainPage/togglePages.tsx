import React, { Dispatch, SetStateAction } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'


interface toggleType {
    offset:number,
    limit:number,
    page:number,
    total:number,
    setLimit:(value:number)=>void,
    setPage:(value:number)=>void,
    setOffset:(value:number)=>void,
}
const TogglePages=(props:toggleType)=> { 
    const getPagesNumber=()=>{
        let page:number[]=[]
        let total = props.total
        total=Math.ceil(total);
        total=total/10;
        let i=total;
        total=total-1;
        while(total>=0)
        {
        page.push(i-total)
        total=total-1
        }
        return page
    }

    
  return (
<div className="lg:mt-5 lg:mb-5">
        <nav>
          <ul className="flex-row flex justify-end  w-11/12">
            <button
              type="button"
              disabled={props.page == 1 ? true : false}
              onClick={() => {
                if (props.page != 1) {
                  props.setOffset(props.offset - 10);
                  props.setPage(props.page - 1);
                }
              }}
            >
              {" "}
              <li>
                <div
                  className={
                    props.page == 1
                      ? "border-2 border-gray-300 text-gray-300 lg:text-2xl rounded-2xl p-1 mr-1"
                      : "border-2 border-gray-400 text-black lg:text-2xl rounded-2xl p-1 mr-1 hover:bg-gray-200 transition-all duration-200 transform"
                  }
                >
                  <IoIosArrowBack />
                </div>
              </li>{" "}
            </button>

      {getPagesNumber().map((index:number)=>(
<button type="button" key={index} onClick={() => {
props.setPage(index)
props.setOffset((index-1)*10)
}}>
  {" "}
  <li>
    <div
      className={
        props.page==index
          ? "border-2 border-red-400 bg-red-200 text-red-500 hover:bg-red-300 transition-all duration-200 transform lg:text-2xl rounded-full pr-2 pl-2 mr-1"
          : "border-2 border-gray-400 hover:bg-gray-200 transition-all duration-200 transform lg:text-2xl rounded-full pr-2 pl-2 mr-1"
      }
    >
      {index}
    </div>
  </li>
</button>

      ))}
          <button
              type="button"
              disabled={props.page == Math.ceil(props.total/10) ? true : false}
              onClick={() => {
                if (props.page != Math.ceil(props.total/10)) {
                  props.setOffset(props.offset + 10);

                  props.setPage(props.page + 1);
                }
              }}
            >
              {" "}
              <li>
                <div
                  className={
                    props.page == Math.ceil(props.total/10)
                      ? "border-2 border-gray-300 text-gray-300 lg:text-2xl rounded-2xl p-1 mr-1"
                      : "border-2 border-gray-400 text-black lg:text-2xl rounded-2xl p-1 mr-1 hover:bg-gray-200 transition-all duration-200 transform"
                  }
                >
                  <IoIosArrowForward />{" "}
                </div>
              </li>
            </button>
          </ul>
        </nav>
      
    </div>
  )
}

export default TogglePages
