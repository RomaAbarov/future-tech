import { TSchemaCreateMessageError } from "./schema";

export type TMessageFormData = {
  firstName: string;
  lastName?: string;
  email: string;
  tel?: string;
  message: string;
  checkbox: string;
};

export type FormResult = {
  success: boolean;
  message: string;
  errors?: TSchemaCreateMessageError;
  inputs?: TMessageFormData;
};
