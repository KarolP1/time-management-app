import jwtDecode from "jwt-decode";

export interface User {
  id: number | null;
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  role: string | null;
}

export const ReadToken = (token: string) => {
  try {
    const data = jwtDecode(token);
    console.log(data);
    return data;
  } catch (error: any) {
    return new Error(error);
  }
};
