import { WorkingDetailsModel } from "./WorkingDetailModel";
import * as Yup from "yup";

export type testObjType = {
    test1:string
    test2:string
}



export type RestaurantRegistrationRequest= {
    confirmPassword: string;

    nameAr: string;

    nameEn: string;

    password: string;

    imageUrl: string;

    preferredLocale: string;

    district: string;

    documents: Document[];

    city: string;

    operationRepresentativePhoneNumber: string;

    email: string;

    foodCategories: number[];

    instagramSocialMediaLink: string;

    twitterSocialMediaLink: string;

    bankAccountIban: string;

    managementPhoneNumber: string;

    registrationNumber: string;

    workingDetails: WorkingDetailsModel[];

    operationRepresentativeFullNameAr: string;

    operationRepresentativeFullNameEn: string;

    operationRepresentativeEmailAddress: string;

    mainRestaurantBranchMapsLink: string;

    mainBranchNameEn: string;

    mainBranchNameAr: string;

    longitude: number;

    latitude: number;

    branchAddressName: string;

    branchStreet: string;

    branchAddressDescription: string;

    branchBuildingNumber: string;

    branchDistrict: string;

    branchCountry: string;

    branchCity: string;

}

export interface Document {    documentTypeCode: string;    urls: string[];
}

export const initialValues: RestaurantRegistrationRequest = {
    nameAr: "",

    nameEn: "",

    password: "",

    confirmPassword:"",
    imageUrl: "",

    preferredLocale: "as",

    district: "sa",

    documents: [],

    city: "zas",

    operationRepresentativePhoneNumber: "",

    email: "",

    foodCategories: [],

    instagramSocialMediaLink: "",

    twitterSocialMediaLink: "",

    bankAccountIban: "",

    managementPhoneNumber: "",

    registrationNumber: "",

    workingDetails: [],

    operationRepresentativeFullNameAr: "",

    operationRepresentativeFullNameEn: "",

    operationRepresentativeEmailAddress: "",

    mainRestaurantBranchMapsLink: "asasdas",

    mainBranchNameEn: "",

    mainBranchNameAr: "",

    longitude:10,

    latitude:10,

    branchAddressName: "",

    branchStreet: "",

    branchAddressDescription: "",

    branchBuildingNumber: "",

    branchDistrict: "",

    branchCountry: "aa",

    branchCity: "bb",
    

}


export const validationSchema = Yup.object().shape({
    
    nameAr: Yup.string().required("Please complete this field"),

    nameEn: Yup.string().required("Please complete this field"),

    /* password: Yup.string()
    .required('No password provided.') 
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z0-9{@,!,%,&,*,(,)}{1}]/, 'Password can only contain Latin letters.'), */

        password: Yup.string()
          .required('No password provided.')
          .min(8, 'Password is too short - should be 8 chars minimum.')
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/,
            'Password must have at least one lowercase letter, one uppercase letter, one number, and one symbol or punctuation.'
          ),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password')], 'Passwords must match')
          .required('Password confirmation is required'),
      

    

    


    operationRepresentativePhoneNumber: Yup.string().required("Please complete this field"),

    email:Yup.string()
    .required("Please complete this field")
    .email("Invalid email address"),




    bankAccountIban: Yup.string().required("Please complete this field"),

    managementPhoneNumber: Yup.string().required("Please complete this field"),

    registrationNumber: Yup.string().required("Please complete this field"),


    operationRepresentativeFullNameAr: Yup.string().required("Please complete this field"),

    operationRepresentativeFullNameEn: Yup.string().required("Please complete this field"),

    operationRepresentativeEmailAddress:Yup.string()
    .required("Please complete this field")
    .email("Invalid email address"),

    imageUrl:Yup.string().required("Please complete this field"),

    /* documents: Yup.array().of(
        Yup.object().shape({
        documentTypeCode: Yup.string().required("Please complete this field"),
        urls:Yup.string()
        .required("Please complete this field"), */

/*         foodCategories: Yup.string().required("please complete this field"),
 */    
        

    
    



  });


export interface Base64UploadRequest {
    base: string;
    name: string;
}
export const base64:Base64UploadRequest = {
    base: "",
    name: "",
}
export interface RemoteBlob {
    location: string;
    size: number;
    mimeType: string;
    name: string;
}
export const remoteBlob:RemoteBlob ={
    location: "",
    size: 0,
    mimeType: "",
    name: "",
}

export interface foodType{
    imageUrl: string,
    nameAr:string,
    nameEn:string,
    id:number,
    name:string,
    inactive:boolean

}
export const foodCat:foodType = {
    imageUrl: "",
    nameAr:"",
    nameEn:"",
    id:0,
    name:"",
    inactive:true
}
