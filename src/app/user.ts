//User Schema
export interface User{
    firstname : string;
    lastname : string;
    email : string;
    password: string;
    repeatpassword?: string;
    roles?: any[];
  }