import  { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";

export interface uploadTypes {
  errors?: string;
  change: (e: any) => void;
  label: string;
  id:string
}
{
  /* 
                        
                        
                        
                        
                          
                        */
}
const UploadInput = (props: uploadTypes) => {
  const [modalShowUpload1, setModalShowUpload1] = useState(false);

  return (
    <div>
        
      <div className="flex flex-col lg:w-full sm:w-full ring-1 ring-gray-100 bg-gray-100 rounded-2xl p-10 mb-3  ">
        <div className="  lg:w-full lg:flex-row flex font-bold font-mono text-xl">
          {props.label}
        </div>
        <div>
          <div>
            {
                props.label ===
                "Please download the contract and read it well,Then sign on it and upload the contract here"?
                  <button className="text-red-500 text-4xl">
                    <MdOutlineFileDownload />
                  </button>
                :""
              }
          </div>
        </div>
        <div className="text-red-400">{props.errors}</div>
        <div>
          <button
            className=" flex ring-1 ring-gray-200 bg-gray-200 rounded-xl w-4/12 justify-center p-12 text-gray-300 text-5xl"
            data-modal-target="default-modal"
            data-modal-toggle="default-modal"
            type="button"
            onClick={() => setModalShowUpload1(true)}
          >
            <IoAddCircleOutline />
          </button>
          <div
            id="default-modal"
            tabIndex={-1}
            aria-hidden="true"
            className={
              modalShowUpload1
                ? "overflow-y-auto overflow-x-hidden absolute justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-gray-900 bg-opacity-25"
                : "hidden"
            }
          >
            <div className="absolute sm:left-20 sm:top-1/3 lg:left-1/3 lg:top-1/3 w-full max-w-2xl max-h-full">
              <div className="bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Upload file
                  </h3>
                </div>
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor={props.id}
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input
                      id={props.id}
                      type="file"
                      className="hidden"
                      name="restaurantObject.documents"
                      onChange={props.change}
                      onClick={() => setModalShowUpload1(false)}
                    />
                  </label>
                </div>
                <div className="flex  items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button
                    data-modal-hide="default-modal"
                    type="button"
                    className="text-red-500 py-2.5 px-5 ms-3 text-lg  focus:outline-none font-bold hover:rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    onClick={() => setModalShowUpload1(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadInput;
