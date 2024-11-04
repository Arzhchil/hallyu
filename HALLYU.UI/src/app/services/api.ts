import { RegisterUserDTO } from "../models/RegisterUserDTO";

export async function registerUserService(
  registerData: RegisterUserDTO
): Promise<any> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ registerUser: registerData }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Не удалось зарегистрировать пользователя");
  }

  return data;
}
