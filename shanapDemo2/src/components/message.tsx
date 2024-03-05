import React from 'react'
import { useAppSelector,useAppDispatch } from '../app/hooks'
import { implementFailed, implementSuccess } from './MessageSlice';

const Message=() => {

    const dispatch=useAppDispatch();
    const valFailed = useAppSelector((state)=>state.message.failed)
    const valSuccess = useAppSelector((state)=>state.message.success)
  return (
    <div         className=" overflow-y-auto overflow-x-hidden fixed z-20 justify-center items-center w-full h-full bg-gray-900 bg-opacity-25 md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div
          id="popup-modal"
          tabIndex={-1}
          className={
            valFailed
              ? " overflow-y-hidden overflow-x-hidden absolute z-50 justify-center items-center w-full h-full bg-gray-900 bg-opacity-25 md:inset-0 h-[calc(100%-1rem)] max-h-full"
              : "hidden"
          }
        >
          <div className="absolute left-2/4 top-2/4 right-2/4 p-4 w-full max-w-md max-h-full shadow-full shadow shadow-red-300 overflow-auto ">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="popup-modal"
              >
                <svg
                  className="w-3 h-3 bg-red-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-4 md:p-5 text-center">
                <svg
                  className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <h3 className="mb-5 text-lg font-normal text-red-500 dark:text-gray-400">
Unsuccessful,please try again.                </h3>
                <button
                  data-modal-hide="popup-modal"
                  type="button"
                  className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
               onClick={()=>{dispatch(implementFailed(false))}}
               >
                  Okay
                </button>
               
              </div>
            </div>
          </div>
        </div>



        <div
          id="popup-modal"
          tabIndex={-1}
          className={
            valSuccess
              ? " overflow-y-auto overflow-x-hidden absolute z-50 justify-center items-center w-full h-full bg-gray-900 bg-opacity-25 md:inset-0 h-[calc(100%-1rem)] max-h-full"
              : "hidden"
          }
        >
          <div className="absolute left-1/3 top-1/3 p-4 w-full max-w-md max-h-full shadow-full shadow shadow-green-300 overflow-auto ">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="popup-modal"
              >
                <svg
                  className="w-3 h-3 bg-green-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-4 md:p-5 text-center">
                <svg
                  className="mx-auto mb-4 text-green-400 w-12 h-12 dark:text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
Successful</h3>
                <button
                  data-modal-hide="popup-modal"
                  type="button"
                  className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
               onClick={()=>{dispatch(implementSuccess(false));
                }
            }
               >
                  Okay
                </button>
               
              </div>
            </div>
          </div>
        </div>




    </div>
  )
}

export default Message
