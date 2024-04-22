import { api } from "@/lib/axios";

export interface FormBody {
  name: string;
  email: string;
  phone: number;
  origin: string;
  destination: string;
  type: string;
}

export async function handleFormFn({
  name,
  email,
  phone,
  origin,
  destination,
  type,
}: FormBody) {
  await api.post("/cotacao", {
    name,
    email,
    phone,
    origin,
    destination,
    type,
  });
}
