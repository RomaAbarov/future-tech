"use server";

import { createMessage } from "@/shared/api/api";
import { schemaCreateMessage } from "./schema";
import { FormResult, TMessageFormData } from "./types";
import { Value } from "react-phone-number-input";

export async function createMessageAction(
  phone: Value | undefined,
  _: FormResult,
  formData: FormData
): Promise<FormResult> {
  try {
    const data: TMessageFormData = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      tel: phone,
      message: formData.get("message") as string,
      checkbox: formData.get("checkbox") as string,
    };

    const validatedData = schemaCreateMessage.safeParse(data);

    if (!validatedData.success) {
      return {
        success: false,
        message: "Please fix the errors in the form",
        errors: validatedData.error.flatten().fieldErrors,
        inputs: data,
      };
    }

    await createMessage(validatedData.data);

    return {
      success: true,
      message: "Successfully!",
    };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Unknow error occured",
    };
  }
}
