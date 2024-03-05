import axios from "axios";
import { default_base_url } from "../../env";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../hooks";
import { implementLoading } from "../../components/loadingSlice";
import { employeeInfoType, employyeInfo } from "../../mainPage/showEmpList";

const useGet = (url: string,limit:number,offset:number) => {
    const [data,setData]=useState<employeeInfoType[]>([employyeInfo])
const [total,setTotal]=useState<number>(0);
    const dispatch=useAppDispatch()
  useEffect(() => {
    axiosGet();
  }, [limit,offset]);
  const axiosGet = () => {
    dispatch(implementLoading(true))
    axios
      .get(default_base_url + url+"?limit="+limit+"&offset="+offset)
      .then((response) => {
        setData(response.data.matches);
        setTotal(response.data.total);
      })
      .catch((error) => console.log(error))

     dispatch(implementLoading(false))

  };
  return {data,total};
};
export default useGet;
