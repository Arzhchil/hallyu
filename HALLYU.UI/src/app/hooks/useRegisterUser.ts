import { useState } from "react";
import { RegisterUserDTO } from "../models/RegisterUserDTO";
import { registerUserService } from "../services/api";

interface UseRegisterUserResult {
  register: (registerData: RegisterUserDTO) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

export function useRegisterUser(): UseRegisterUserResult {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const register = async (registerData: RegisterUserDTO) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await registerUserService(registerData);
      console.log("Регистрация успешна:", result);
    } catch (error: any) {
      console.error("Ошибка при регистрации:", error);
      setError(error.message || "Произошла ошибка при регистрации.");
    } finally {
      setIsLoading(false);
    }
  };

  return { register, isLoading, error };
}
