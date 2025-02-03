import { z } from "zod";
import { isValidPhoneNumber } from "libphonenumber-js";

export const schemaCreateMessage = z.object({
  firstName: z.string().min(2),
  lastName: z.string().optional(),
  email: z.string().email(),
  tel: z.string().refine(isValidPhoneNumber).optional(),
  message: z.string().min(2),
  checkbox: z.string({ message: "This field is required" }),
});

export type TSchemaCreateMessage = z.infer<typeof schemaCreateMessage>;
export type TSchemaCreateMessageError = z.inferFlattenedErrors<
  typeof schemaCreateMessage
>["fieldErrors"];
