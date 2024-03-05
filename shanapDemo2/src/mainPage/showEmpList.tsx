import React, { useEffect, useState } from "react";
import useGet from "../app/customHooks/useGet";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

import TogglePages from "./togglePages";

export interface roles {
  code: string;
  name: string;
  privileges: string[];
}
export type employeeInfoType = {
  fullNameAr: string;
  fullNameEn: string;
  email: string;
  mobile: string;
  owner: boolean;
  accepted: boolean;
  roles: roles[];
};
export const employyeInfo: employeeInfoType = {
  fullNameAr: "",
  fullNameEn: "",
  email: "",
  mobile: "",
  owner: false,
  accepted: false,
  roles: [],
};

const ShowEmpList = () => {
  const [offset, setOffset] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const { data, total } = useGet("restaurantemployees", limit, offset);

  return (
    <div>
      <div className="flex flex-col">
        <div className="flex justify-center">
          <div className="border-2 rounded-2xl border-solid border-gray-200 mt-10 flex  justify-between lg:justify-stretch p-5 w-11/12 items-center divide-x-2">
            <div className="lg:w-4/12  text-center">
              <div className="text-gray-400">Name</div>
            </div>
            <div className="w-2/12 text-center lg:w-4/12">
              <div className="text-gray-400">Email</div>
            </div>
            <div className="w-2/12 text-center lg:w-4/12">
              <div className="text-gray-400">Roles</div>
            </div>
            <div className="w-2/12 text-center lg:w-2/12">
              <div className="text-gray-400">Status</div>
            </div>
            <div className="w-2/12 text-center lg:w-2/12">
              <div className="text-gray-400">Action</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          {data?.map((employee: employeeInfoType, index: number) => (
            <div
              key={index}
              className={
                index % 2 == 0
                  ? "flex justify-center hover:bg-gray-200 lg:pt-10 lg:pb-10 border-2 rounded-2xl border-solid border-gray-200 w-11/12"
                  : "flex justify-center hover:bg-red-200 lg:pt-10 lg:pb-10 border-2 rounded-2xl border-solid border-gray-200 w-11/12"
              }
            >
              <div className=" mt-10 flex p-5 w-full justify-between lg:justify-stretch divide-x-2">
                <div className="lg:w-4/12 text-center">
                  <div className="text-black font-bold text-xs lg:text-lg overflow-y-auto"> {employee.fullNameEn}</div>
                </div>
                <div className="w-2/12 text-center lg:w-4/12">
                  <div className="text-black font-bold text-xs lg:text-lg overflow-y-auto"> {employee.email}</div>
                </div>
                <div className="w-2/12 text-center lg:w-4/12">
                  <div className="text-black font-bold text-xs lg:text-lg">
                    {" "}
                    {employee.roles[0]?.name}
                  </div>
                </div>
                <div className="w-2/12 text-center lg:w-2/12">
                  <div
                    className={
                      employee.accepted
                        ? "lg:w-full  text-green-300 font-bold lg:text-md text-xs lg:text-lg"
                        : "lg:w-full  text-yellow-300 font-bold lg:text-md text-xs lg:text-lg"
                    }
                  >
                    {employee.accepted ? "Accepted" : "Pending"}
                  </div>
                </div>
                <div className="w-2/12 justify-center flex ">
                  <button
                    type="button"
                    className="text-gray-400 lg:w-2/12 text-sm lg:text-4xl hover:rounded-2xl hover:bg-gray-300"
                  >
                    <HiOutlineDotsHorizontal />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {
        <TogglePages
          total={total}
          setLimit={setLimit}
          setOffset={setOffset}
          setPage={setPage}
          page={page}
          limit={limit}
          offset={offset}
        />
      }
    </div>
  );
};

export default ShowEmpList;
