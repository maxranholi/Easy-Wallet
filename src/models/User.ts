import { Interface } from "readline";

export type AuthenticationData = {
  id: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export interface UserDTO {
  name: string;
  email: string;
  password: string;
}
