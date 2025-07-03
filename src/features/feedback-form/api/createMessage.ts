import { TMessageFormData } from "../model/types";

export function createMessage(data: TMessageFormData) {
  return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
