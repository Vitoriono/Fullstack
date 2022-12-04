
// export interface DbResponse {
//   json(): any;
//   name: string;
//   login: string;
//   email: string;
//   password: string;
// }

export interface IPost {
  category: string;
  title: string;
  photo: string;
  text: string;
  author: string;
  date: any;
}

export interface IRegister {
  msg: string;
  success: string;
  name: string;
  login: string;
  email: string;
  password: string;
}

export interface IAuth {
  login: string;
  password: string;
}


