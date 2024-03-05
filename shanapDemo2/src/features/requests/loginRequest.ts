import * as Yup from "yup";

export type loginRequestType={

    UserName:string;
    password:string;
}
export const LoginRequest:loginRequestType={

    UserName:"",
    password:"",
}

export const validationSchema = Yup.object().shape({  

    UserName:Yup.string()
    .required("Please complete this field"),

    
    password: Yup.string()
    .required('No password provided.'),
    
})