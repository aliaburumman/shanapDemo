import { useFormik } from "formik";
//import { MdOutlineFileDownload } from "react-icons/md";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import PhoneInput from "react-phone-number-input";
//import { submitOnChange, submitTests } from "./registerSlice";
import { implementLoading } from '../../components/loadingSlice';
import {
  initialValues,
  validationSchema,
  //RestaurantRegistrationRequest,
  //base64,
  Base64UploadRequest,
  //remoteBlob,
  RemoteBlob,
  foodType,
  foodCat,
  RestaurantRegistrationRequest,
} from "../requests/RestaurantRegistrationRequest";
import { Key, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import axios from "axios";
import { MultiSelect } from "primereact/multiselect";
import TextInput from "../../inputs/textInput";
import PasswordInput from "../../inputs/passwordInput";
import UploadInput from "../../inputs/uploadInput";
import { default_base_url } from "../../env";
import usePost from "../../app/customHooks/usePost";

const RegisterView = () => {
  const handleInput = async (e: any) => {
    const fileBase = await toBase64(e);
    const body: Base64UploadRequest = {
      base: fileBase,
      name: e.target.files[0].name,
    };
    e.preventDefault();
    const res = await axios.post<RemoteBlob>(
      default_base_url + `blobs/upload`,
      body
    );
    if (res.data.location) {
      return res.data.location;
    }

    // axios
    //   .post<RemoteBlob>(`https://app-stg.shnp.me/api/blobs/upload`, body)
    //   .then((response) => {
    //     console.log("response",response)
    //     return response.data.location;
    //   })
    //   .catch((error) => {
    //     console.log(error,'error');
    //   });
  };

  const [modalShow2, setModalShow2] = useState(false);
  const [modalShow3, setModalShow3] = useState(false);
  interface details {
    day: string;
    from: string;
    to: string;
  }
  const [workingDetail, setWorkingDetail] = useState<details>({
    day: "",
    from: "",
    to: "",
  });
  const [workingDetailModify, setWorkingDetailModify] = useState<details>({
    day: "",
    from: "",
    to: "",
  });

  const [workingDetailSave, setWorkingDetailSave] = useState<details>({
    day: "",
    from: "",
    to: "",
  });

  const [showPopupT, setShowPopupT] = useState(false);
  const [showPopupF, setShowPopupF] = useState(false);

  const [data, setData] = useState<any>([]);
  const fetchData = async () => {
    const response = await axios.get<foodType>(
      default_base_url + "meta/foodcategories?lookup=true"
    );
    return setData(response.data);
  };
  const storeInOptions = () => {
    return data.map((data: foodType, index: foodType) => {
      return {
        value: data.id,

        label: data.nameEn,
      };
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const formik = useFormik({
    initialValues,
    validateOnChange: false,
    validateOnBlur: false,
    

    onSubmit: (values:RestaurantRegistrationRequest) => {
      callQuery()
     },
 
     validationSchema: validationSchema,
   });
   const callQuery=usePost(default_base_url + "restaurants",formik.values,formik.resetForm)

  

 

  const toBase64 = async (e: any) => {
    const file: File = e.target.files[0];
    const base64: any = await convertBase64(file);
    return base64;
  };

  const convertBase64 = async (file: any): Promise<string | undefined> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        let encoded = reader.result?.toString().replace(/^data:(.*,)?/, "");
        if (encoded)
          if (encoded.length % 4 > 0) {
            encoded += "=".repeat(4 - (encoded.length % 4));
          }
        resolve(encoded);
      };
      reader.onerror = (error) => reject(error);
    });


  const onUpload = async (e: any) => {
    const s = await handleInput(e);
    if (s) {
  
      return s;
    }
  };

  const [divShow, setDivShow] = useState(false);
  const handleDeleteDetail = (indexToDelete: number) => {
    const updatedDetails = formik.values.workingDetails.filter(
      (detail: any, index: number) => index !== indexToDelete
    );

    formik.setFieldValue("workingDetails", updatedDetails);

  };

  let incrementNum:number=0;

  return (
    <div className="flex flex-col">

      



       




      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit(e);
        }}
      >
        <div className="flex lg:flex-row justify-between p-10 leading-9 text-3xl ">
          <h1 className="font-bold  font-mono lg:w-10/12 	">
            Create a Restaurant Account
          </h1>
          <div className="lg:w-2/12 flex justify-center sm:pl-4 text-red-500 font-bold text-2xl">
            العربية
          </div>
        </div>
        <div className="flex justify-center  ">
          <div className="  rounded-3xl ring-1 ring-gray-300 lg:w-11/12 flex-col sm:w-full ml-10 mr-10">
            <div className="flex justify-center flex-col ">
              {/* //fill out */}
              {/* column for mobile to tae full width (12), for others to take 6 */}

              <div className="flex flex-col  w-full  lg:flex-row p-4 lg:divide-x-2">
                <div className="flex flex-col lg:flex-col lg:w-full">
                  <div className="flex  lg:items-center flex-row lg:justify-evenly mb-5 ">
                    <div className="sm:mr-12 rounded-full ring-2 ring-red-500 text-red-500 font-bold text-xl w-10 text-center p-1.5 mr-7 ">
                      1
                    </div>
                    <h1 className="font-bold text-2xl font-mono  leading-7  lg:w-10/12 ">
                      Fill Out Restaurant Registeration Form
                    </h1>
                  </div>
                  <div className="flex lg:flex-col sm:w-full lg:items-center text-xl ">
                    Fill out your personal information to create an account tied
                    to a Restaurant and Continue
                  </div>
                  <button type="button" onClick={()=>{
                    formik.setFieldValue("bankAccountIban","jk")
                    formik.setFieldValue("nameEn","jk")
                    formik.setFieldValue("nameAr","jk")
                    formik.setFieldValue("branchDistrict","jk")
                    formik.setFieldValue("instagramSocialMediaLink","jk")
                    formik.setFieldValue("twitterSocialMediaLink","jk")
                    formik.setFieldValue("operationRepresentativeFullNameAr","jk")
                    formik.setFieldValue("operationRepresentativeFullNameEn","jk")
                    formik.setFieldValue("branchBuildingNumber","jk")
                    formik.setFieldValue("branchAddressDescription","jk")
                    formik.setFieldValue("branchStreet","jk")
                    formik.setFieldValue("branchAddressName","jk")
                    formik.setFieldValue("mainBranchNameAr","jk")
                    formik.setFieldValue("mainBranchNameEn","jk")
                    formik.setFieldValue("branchCountry","jk")
                    formik.setFieldValue("operationRepresentativeEmailAddress","airuman"+incrementNum++ +"@gmail.com")
                    formik.setFieldValue("email","alo"+ incrementNum +"@gmail.com")
                    formik.setFieldValue("operationRepresentativePhoneNumber","+96612345678")
                    formik.setFieldValue("managementPhoneNumber","+96612345678")
                    formik.setFieldValue("registrationNumber","12278"+incrementNum+"9789")
                    formik.setFieldValue("password","@Li123456")
                    formik.setFieldValue("confirmPassword","@Li123456")
                  }}>Click</button>

                  <div className="flex lg:w-full flex-col sm:w-full">
                    <div className="flex lg:w-full flex-col justify-around p-2 lg:flex-row sm:w-full">
                      <TextInput
                        value={formik.values.nameEn}
                        type="text"
                        label="Restaurant Name in English*"
                        name="nameEn"
                        placeholder="Enter your restaurant's name in english"
                        classname="rounded-2xl p-4 ring-1 ring-gray-300 text-md bg-gray-100"
                        change={(e) => formik.handleChange(e)}
                        errors={formik.errors.nameEn?.toString()}
                      />

                      <TextInput
                        value={formik.values.nameAr}
                        type="text"
                        label="Restaurant Name in Arabic*"
                        name="nameAr"
                        placeholder="Enter your restaurant's name in arabic"
                        classname="rounded-2xl p-4 ring-1 ring-gray-300 text-md bg-gray-100"
                        change={(e) => formik.handleChange(e)}
                        errors={formik.errors.nameAr?.toString()}
                      />
                    </div>

                    <div className="flex lg:w-full flex-col justify-around p-2 lg:flex-row sm:w-full">
                      <TextInput
                        value={formik.values.email}
                        type="email"
                        label="Email*"
                        name="email"
                        placeholder="Enter the email"
                        classname="rounded-2xl p-4 ring-1 ring-gray-300 text-md bg-gray-100"
                        change={(e) => formik.handleChange(e)}
                        errors={formik.errors.email?.toString()}
                      />

                      <TextInput
                        value={formik.values.bankAccountIban}
                        type="text"
                        label="Bank Account IBAN*"
                        name="bankAccountIban"
                        placeholder="Enter your banck account iban"
                        classname="rounded-2xl p-4 ring-1 ring-gray-300 text-md bg-gray-100"
                        change={(e) => formik.handleChange(e)}
                        errors={formik.errors.bankAccountIban?.toString()}
                      />
                    </div>

                    <div className="flex lg:w-full flex-col justify-around lg:p-2 lg:flex-row sm:w-full">
                      <PasswordInput
                        value={formik.values.password}
                        type="password"
                        label="Password*"
                        name="password"
                        placeholder="Enter your password"
                        classname=" pl-1 w-11/12 text-md bg-gray-100 passw"
                        change={(e) => formik.handleChange(e)}
                        errors={formik.errors.password?.toString()}
                      />

                      <PasswordInput
                        value={formik.values.confirmPassword}
                        type="password"
                        label="Confirm password*"
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        classname=" pl-1 w-11/12 text-md bg-gray-100 passw"
                        change={(e) => formik.handleChange(e)}
                        errors={formik.errors.confirmPassword?.toString()}
                      />
                    </div>

                    <div className="flex lg:w-full flex-col justify-around p-2 lg:flex-row sm:w-full">
                      <div className="flex flex-col lg:w-5/12 sm:w-full">
                        <div className="font-bold font-mono text-xl">
                          Restaurant Type*
                        </div>

                        <MultiSelect
                          name="foodCategories"
                          className="selectDiv rounded-2xl p-2.5 ring-1 ring-gray-300 text-md bg-gray-100 text-gray-400"
                          placeholder="Select your type of restaurant"
                          options={storeInOptions()}
                          maxSelectedLabels={3}
                          value={formik.values.foodCategories}
                          onChange={(e) => {
                            formik.setFieldValue(
                              "foodCategories",
                              e.target.value
                            );
                          }}
                        />
                        {formik.values.foodCategories == null ? (
                          <div className="text-red-400">
                            {formik.errors.foodCategories?.toString()}
                          </div>
                        ) : (
                          ""
                        )}

                        {/* <MultiSelectComponent
                          className="selectDiv rounded-2xl p-2.5 ring-1 ring-gray-300 text-md bg-gray-100"
                          placeholder="Select your type of restaurant"
                          onChange={(e: { target: { value: any } }) => {
                            formik.setFieldValue("foodCategories", [
                              ...formik.values.foodCategories,
                              e.target.value,
                            ]);
                          }}
                          dataSource={options}
                          popupHeight={200}
                          popupWidth={250}
                        ></MultiSelectComponent> */}
                      </div>

                      <TextInput
                        value={formik.values.registrationNumber}
                        type="text"
                        label="Commercial Registeration Number*"
                        name="registrationNumber"
                        placeholder="Enter registration number consisting of 10 digits"
                        classname="rounded-2xl p-4 ring-1 ring-gray-300 text-md bg-gray-100"
                        change={(e) => formik.handleChange(e)}
                        errors={formik.errors.registrationNumber?.toString()}
                      />
                    </div>

                    <div className="flex lg:w-full flex-col justify-around p-2 lg:flex-row sm:w-full">
                      <TextInput
                        value={
                          formik.values.operationRepresentativeEmailAddress
                        }
                        type="email"
                        label="Operation Representative Email*"
                        name="operationRepresentativeEmailAddress"
                        placeholder="Enter the restaurant rep. email address"
                        classname="rounded-2xl p-4 ring-1 ring-gray-300 text-md bg-gray-100"
                        change={(e) => formik.handleChange(e)}
                        errors={formik.errors.email?.toString()}
                      />

                      <div className="flex flex-col lg:w-5/12 sm:w-full">
                        <div className="font-bold font-mono text-xl">
                          Operation Representative Phone Number*
                        </div>
                        <PhoneInput
                          placeholder="Enter the restaurant rep. phone number"
                          value={
                            formik.values.operationRepresentativePhoneNumber
                          }
                          onChange={(e) => {
                            formik.setFieldValue(
                              "operationRepresentativePhoneNumber",
                              e
                            );
                          }}
                        />
                        {formik.values.operationRepresentativePhoneNumber ==
                          "" && (
                          <div className="text-red-400">
                            {formik.errors.operationRepresentativePhoneNumber?.toString()}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex lg:w-full flex-col justify-around p-2 lg:flex-row sm:w-full">
                      <TextInput
                        value={formik.values.operationRepresentativeFullNameEn}
                        type="text"
                        label="Operation Representative Full Name in english*"
                        name="operationRepresentativeFullNameEn"
                        placeholder="Enter your restaurant operation rep. full name in english"
                        classname="rounded-2xl p-4 ring-1 ring-gray-300 text-md bg-gray-100"
                        change={(e) => formik.handleChange(e)}
                        errors={formik.errors.operationRepresentativeFullNameEn?.toString()}
                      />

                      <TextInput
                        value={formik.values.operationRepresentativeFullNameAr}
                        type="text"
                        label="Operation Representative Full Name in arabic*"
                        name="operationRepresentativeFullNameAr"
                        placeholder="Enter your restaurant operation rep. full name in arabic"
                        classname="rounded-2xl p-4 ring-1 ring-gray-300 text-md bg-gray-100"
                        change={(e) => formik.handleChange(e)}
                        errors={formik.errors.operationRepresentativeFullNameAr?.toString()}
                      />
                    </div>

                    <div className="flex lg:w-full flex-col justify-around p-2 lg:flex-row sm:w-full">
                      <div className="flex flex-col lg:w-5/12 sm:w-full">
                        <div className="font-bold font-mono text-xl">
                          Management phone number*
                        </div>

                        <PhoneInput
                          value={formik.values.managementPhoneNumber}
                          placeholder="Enter the restaurant rep. phone number"
                          name="managementPhoneNumber"
                          onChange={(e) => {
                            formik.setFieldValue("managementPhoneNumber", e);
                          }}
                        />
                        {formik.values.managementPhoneNumber == "" && (
                          <div className="text-red-400">
                            {formik.errors.managementPhoneNumber?.toString()}
                          </div>
                        )}
                      </div>

                      <TextInput
                        value={formik.values.mainBranchNameAr}
                        type="text"
                        label="Main Branch NameAr"
                        name="mainBranchNameAr"
                        placeholder="Enter main branch name in arabic"
                        classname="rounded-2xl p-4 ring-1 ring-gray-300 text-md bg-gray-100"
                        change={(e) => formik.handleChange(e)}
                      />
                    </div>

                    <div className="flex lg:w-full flex-col justify-around p-2 lg:flex-row sm:w-full">
                      <TextInput
                        value={formik.values.mainBranchNameEn}
                        type="text"
                        label="Main Branch Name En"
                        name="mainBranchNameEn"
                        placeholder="Enter main branch name in english"
                        classname="rounded-2xl p-4 ring-1 ring-gray-300 text-md bg-gray-100"
                        change={(e) => formik.handleChange(e)}
                      />

                      <TextInput
                        value={formik.values.branchDistrict}
                        type="text"
                        label="Branch District"
                        name="branchDistrict"
                        placeholder="Enter the branch district"
                        classname="rounded-2xl p-4 ring-1 ring-gray-300 text-md bg-gray-100"
                        change={(e) => formik.handleChange(e)}
                      />
                    </div>

                    <div className="flex lg:w-full flex-col justify-around p-2 lg:flex-row sm:w-full">
                      <TextInput
                        value={formik.values.branchAddressName}
                        type="text"
                        label="Branch Address"
                        name="branchAddressName"
                        placeholder="Enter branch address name"
                        classname="rounded-2xl p-4 ring-1 ring-gray-300 text-md bg-gray-100"
                        change={formik.handleChange}
                      />

                      <TextInput
                        value={formik.values.branchStreet}
                        type="text"
                        label="Branch Street"
                        name="branchStreet"
                        placeholder="Enter branch street"
                        classname="rounded-2xl p-4 ring-1 ring-gray-300 text-md bg-gray-100"
                        change={(e) => formik.handleChange(e)}
                      />
                    </div>

                    <div className="flex lg:w-full flex-col justify-around p-2 lg:flex-row sm:w-full">
                      <TextInput
                        value={formik.values.branchBuildingNumber}
                        type="text"
                        label="Branch Building Number"
                        name="branchBuildingNumber"
                        placeholder="Enter branch building number"
                        classname="rounded-2xl p-4 ring-1 ring-gray-300 text-md bg-gray-100"
                        change={(e) => formik.handleChange(e)}
                      />

                      <TextInput
                        value={formik.values.branchAddressDescription}
                        type="text"
                        label="Branch Address Description"
                        name="branchAddressDescription"
                        placeholder="Enter branch address description"
                        classname="rounded-2xl p-4 ring-1 ring-gray-300 text-md bg-gray-100"
                        change={(e) => formik.handleChange(e)}
                      />
                    </div>

                    <div className="flex lg:w-full flex-col justify-around p-2 lg:flex-row sm:w-full">
                      <TextInput
                        value={formik.values.twitterSocialMediaLink}
                        type="text"
                        label="Twitter Social Media Account"
                        name="twitterSocialMediaLink"
                        placeholder="Enter your restaurant twitter page"
                        classname="rounded-2xl p-4 ring-1 ring-gray-300 text-md bg-gray-100"
                        change={(e) => formik.handleChange(e)}
                      />

                      <TextInput
                        value={formik.values.instagramSocialMediaLink}
                        type="text"
                        label="Instagram Social Media Account"
                        name="instagramSocialMediaLink"
                        placeholder="Enter your restaurant instagram page"
                        classname="rounded-2xl p-4 ring-1 ring-gray-300 text-md bg-gray-100"
                        change={(e) => formik.handleChange(e)}
                      />
                    </div>

                    <div className="flex lg:w-full p-2 flex-row pt-16 sm:mb-10">
                      <div className="lg:w-6/12 flex items-center sm:w-full font-bold font-mono justify-around text-xl  ">
                        Google Maps Location Link:{" "}
                        <button
                          type="button"
                          className="lg:w-3/12  text-black text-1xl text-black flex justify-center items-center bg-red-500 rounded-full p-3 transition-all duration-200 transform hover:bg-white mr-5 ml-5"
                        >
                          <IoAddCircleOutline />
                        </button>
                      </div>
                      <div className="lg:w-6/12 flex items-center sm:w-full font-bold font-mono justify-around text-xl">
                        Working hours:{" "}
                        <button
                          type="button"
                          className="lg:w-3/12  text-black text-1xl text-black flex justify-center items-center bg-red-500 rounded-full p-3 transition-all duration-200 transform hover:bg-white mr-5 ml-5
                        "
                          onClick={() => {
                            setModalShow2(true);
                          }}
                        >
                          <IoAddCircleOutline />
                        </button>
                      </div>
                    </div>
                    <div className="flex lg:w-full p-2 flex-row pt-16 sm:mb-10">
                      <div className="lg:w-6/12 flex items-center sm:w-full font-bold font-mono justify-around text-xl  "></div>
                      <div className="lg:w-6/12 flex items-center sm:w-full font-bold font-mono justify-around text-xl  ">
                        {divShow ? (
                          <div className="border border-solid border-gray-300 bg-gray-300 text-black"></div>
                        ) : (
                          ""
                        )}
                      </div>
                      {divShow ? (
                        <div className="w-8/12">
                          {formik.values.workingDetails.map((detail:any, index: number) => (
                            <div
                              key={index}
                              className="border border-solid border-gray-300 bg-gray-300 text-black sm:w-full lg:w-8/12 mb-10 mr-10 shadow-md font-mono"
                            >
                              <div className="m-4">
                                <div className="text-black flex flex-row justify-between">
                                  <div>
                                    {" "}
                                    <p className="">
                                      <span className="font-bold pr-4">
                                        Day:{" "}
                                      </span>
                                      {detail.day}
                                    </p>{" "}
                                  </div>
                                  <div className="flex">
                                    <button
                                      type="button"
                                      className="text-red-500"
                                      onClick={() => {
                                        setWorkingDetailSave(detail);
                                        handleDeleteDetail(index);
                                        setModalShow3(true);
                                      }}
                                    >
                                      <MdEdit />
                                    </button>
                                    <button
                                      type="button"
                                      className="text-red-500 ml-5 mr-5"
                                      onClick={() => handleDeleteDetail(index)}
                                    >
                                      <FaTrash />
                                    </button>
                                  </div>
                                </div>

                                <div className="text-black flex flex-row">
                                  <span className="font-bold pr-4">From:</span>{" "}
                                  {detail.from}
                                </div>
                                <div className="text-black flex flex-row">
                                  <p className="font-bold pr-8">To:</p>{" "}
                                  {detail.to}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>

                <div className="lg:w-6/12 sm:flex-col">
                  <div className="flex lg:w-full lg:flex-col sm:w-full flex-col">
                    <div className="flex  lg:items-center flex-row lg:justify-evenly sm:mb-5 mt-10 lg:mt-0 mb-5">
                      <div className="sm:mr-12 rounded-full ring-2 ring-red-500 text-red-500 font-bold text-xl w-10 text-center p-1.5 mr-7 ">
                        2
                      </div>
                      <h1 className="font-bold text-1xl font-mono  leading-7  lg:w-10/12 text-2xl">
                        Attach Required Documents
                      </h1>
                    </div>
                    <div className="flex lg:flex-col sm:w-full lg:items-center text-xl ml-5 ">
                      Fill out your personal information to create an account
                      tied to a Restaurant and Continue
                    </div>

                    <div className="flex lg:w-full flex-col p-4  sm:w-full   ">
                      <UploadInput
                        id="dropzone-file1"
                        label="Please download the contract and read it well,Then sign on it and upload the contract here"
                        errors={formik.errors.documents?.toString()}
                        change={async (e) => {
                          if (e.target.files) {
                            formik.setFieldValue("documents", [
                              ...formik.values.documents,
                              {
                                documentTypeCode: "CommercialLicenseNumber",
                                urls: [await handleInput(e)],
                              },
                            ]);
                          }
                        }}
                      />

                      <UploadInput
                        id="dropzone-file2"
                        label="Restaurant Image"
                        errors={formik.errors.imageUrl?.toString()}
                        change={async (e) => {
                          formik.setFieldValue("imageUrl", await onUpload(e));
                        }}
                      />

                      <UploadInput
                        id="dropzone-file3"
                        label="Commercial License Number"
                        errors={formik.errors.documents?.toString()}
                        change={async (e) => {
                          if (e.target.files) {
                            formik.setFieldValue("documents", [
                              ...formik.values.documents,
                              {
                                documentTypeCode: "GovernmentId",
                                urls: [await handleInput(e)],
                              },
                            ]);
                          }
                        }}
                      />

                      <UploadInput
                        id="dropzone-file4"
                        label="Tax Certificate Number"
                        errors={formik.errors.documents?.toString()}
                        change={async (e) => {
                          if (e.target.files) {
                            formik.setFieldValue("documents", [
                              ...formik.values.documents,
                              {
                                documentTypeCode: "TaxCertificateNumber",
                                urls: [await handleInput(e)],
                              },
                            ]);
                          }
                        }}
                      />

                      <div className="flex justify-end">
                        <button
                          type="submit"
                         
                          className=" bg-red-500 mr-14 mt-14 p-4 rounded-full ring-1 text-white font-bold hover:bg-white hover:text-red-500 ring-red-500 transition-all duration-500 transform"
                        >
                          Create Account
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={() => {}}
          className="shadow shadow-gray-300 hover:shadow-lg p-8 mr-5 mb-5 fixed right-0 bottom-0 rounded-full ring-red-500 bg-red-500 ring-1 text-white text-3xl"
        >
          <TiMessages />
        </button>

        <div>
          <div
            id="static-modal"
            data-modal-backdrop="static"
            tabIndex={-1}
            aria-hidden="true"
            className={
              modalShow2
                ? "overflow-y-auto overflow-x-hidden  top-50 right-50 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                : "hidden"
            }
          >
            <div className="absolute sm:left-20 sm:top-1/4 lg:left-1/3 lg:top-1/3 p-4 w-full max-w-2xl max-h-full">
              <div className="absolute bg-white rounded-lg shadow dark:bg-gray-700 border-solid border-4">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Edit working details
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="static-modal"
                    onClick={() => setModalShow2(false)}
                  >
                    <svg
                      className="w-3 h-3"
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
                </div>
                <div className="p-4 md:p-5 space-y-4">
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    If your shift starts in the morning and ends after midnight,
                    you need to divide it into two shifts: The first shift:
                    Starts at x:xx AM. Ends at 11:59 PM. The second shift:
                    Starts at 12:00 AM (midnight).Ends at x:xx AM.{" "}
                  </p>
                </div>
                <div className="flex flex-row justify-around">
                  <select
                    name="workingDetails.day"
                    onChange={(e) => {
                      setWorkingDetail({
                        ...workingDetail,
                        day: e.target.value,
                      });
                    }}
                    className="text-gray-400 border-b-2 border-red-400 outline-none	"
                  >
                    <option value="Sunday">sunday</option>
                    <option value="Monday">monday</option>
                    <option value="Tuesday">tuesday</option>
                    <option value="Wednesday">wednesday</option>
                    <option value="Thursday">thursday</option>
                    <option value="Friday">friday</option>
                    <option value="Saturday">saturday</option>
                  </select>

                  <input
                    type="date"
                    name="workingDetails.from"
                    onChange={(e) => {
                      setWorkingDetail({
                        ...workingDetail,
                        from: e.target.value,
                      });
                    }}
                    className="text-gray-400 border-b-2 border-red-400 outline-none"
                  />
                  <input
                    type="date"
                    name="workingDetails.to"
                    onChange={(e) => {
                      setWorkingDetail({
                        ...workingDetail,
                        to: e.target.value,
                      });
                    }}
                    className="text-gray-400 border-b-2 border-red-400 outline-none"
                  />
                </div>

                <div className="flex justify-center items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button
                    data-modal-hide="static-modal"
                    type="button"
                    onClick={() => setModalShow2(false)}
                    className="text-red-500 bg-pink-200 hover:bg-gray-300 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                  >
                    Cancel
                  </button>
                  <button
                    data-modal-hide="static-modal"
                    type="button"
                    className=" text-white bg-red-500 py-2.5 px-5 ms-3 text-sm font-medium focus:outline-none  rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-red-500 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    onClick={() => {
                      formik.setFieldValue("workingDetails", [
                        ...formik.values.workingDetails,
                        {
                          day: workingDetail.day,
                          from: workingDetail.from,
                          to: workingDetail.to,
                        },
                      ]);
                      setModalShow2(false);
                      setDivShow(true);
                    }}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            id="static-modal"
            data-modal-backdrop="static"
            tabIndex={-1}
            aria-hidden="true"
            className={
              modalShow3
                ? "overflow-y-auto overflow-x-hidden fixed top-50 right-50 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full "
                : "hidden"
            }
          >
            <div className="absolute sm:left-20 sm:top-1/4 lg:left-1/3 lg:top-1/3 p-4 w-full max-w-2xl max-h-full ">
              <div className="absolute bg-white rounded-lg shadow dark:bg-gray-700 border-solid border-4">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Edit working details
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="static-modal"
                    onClick={() => {
                      formik.setFieldValue("workingDetails", [
                        ...formik.values.workingDetails,
                        {
                          day: workingDetailSave.day,
                          from: workingDetailSave.from,
                          to: workingDetailSave.to,
                        },
                      ]);
                      setModalShow3(false);
                    }}
                  >
                    <svg
                      className="w-3 h-3"
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
                </div>
                <div className="p-4 md:p-5 space-y-4">
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    If your shift starts in the morning and ends after midnight,
                    you need to divide it into two shifts: The first shift:
                    Starts at x:xx AM. Ends at 11:59 PM. The second shift:
                    Starts at 12:00 AM (midnight).Ends at x:xx AM.{" "}
                  </p>
                </div>
                <div className="flex flex-row justify-around">
                  <select
                    name="workingDetails.day"
                    onChange={(e) => {
                      setWorkingDetailModify({
                        ...workingDetailModify,
                        day: e.target.value,
                      });
                    }}
                    className="text-gray-400 border-b-2 border-red-400 outline-none	"
                  >
                    <option value="Sunday">sunday</option>
                    <option value="Monday">monday</option>
                    <option value="Tuesday">tuesday</option>
                    <option value="Wednesday">wednesday</option>
                    <option value="Thursday">thursday</option>
                    <option value="Friday">friday</option>
                    <option value="Saturday">saturday</option>
                  </select>

                  <input
                    type="date"
                    name="workingDetails.from"
                    onChange={(e) => {
                      setWorkingDetailModify({
                        ...workingDetailModify,
                        from: e.target.value,
                      });
                    }}
                    className="text-gray-400 border-b-2 border-red-400 outline-none"
                  />
                  <input
                    type="date"
                    name="workingDetails.to"
                    onChange={(e) => {
                      setWorkingDetailModify({
                        ...workingDetailModify,
                        to: e.target.value,
                      });
                    }}
                    className="text-gray-400 border-b-2 border-red-400 outline-none"
                  />
                </div>

                <div className="flex justify-center items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button
                    data-modal-hide="static-modal"
                    type="button"
                    onClick={() => {
                      formik.setFieldValue("workingDetails", [
                        ...formik.values.workingDetails,
                        {
                          day: workingDetailSave.day,
                          from: workingDetailSave.from,
                          to: workingDetailSave.to,
                        },
                      ]);
                      setModalShow3(false);
                    }}
                    className="text-red-500 bg-pink-200 hover:bg-gray-300 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                  >
                    Cancel
                  </button>
                  <button
                    data-modal-hide="static-modal"
                    type="button"
                    className=" text-white bg-red-500 py-2.5 px-5 ms-3 text-sm font-medium focus:outline-none  rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-red-500 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    onClick={() => {
                      setModalShow3(false);
                      formik.setFieldValue("workingDetails", [
                        ...formik.values.workingDetails,
                        {
                          day: workingDetailModify.day,
                          from: workingDetailModify.from,
                          to: workingDetailModify.to,
                        },
                      ]);
                    }}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </form>
      
    </div>
    
  );
};

export default RegisterView;
