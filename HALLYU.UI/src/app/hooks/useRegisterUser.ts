import { useState, useCallback } from "react";
import { RegisterUserDTO } from "../models/RegisterUserDTO";
import { registerUserService } from "../services/api";
import { AxiosError } from "axios";

interface UseRegisterUserResult {
  register: (registerData: RegisterUserDTO) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

export function useRegisterUser(): UseRegisterUserResult {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const register = useCallback(async (registerData: RegisterUserDTO) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await registerUserService(registerData);
      console.log("Регистрация успешна:", result);
    } catch (err) {
      console.error("Ошибка при регистрации:", err);
      if (err instanceof AxiosError && err.response) {
        setError(
          err.response.data.message || "Произошла ошибка при регистрации."
        );
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Произошла неизвестная ошибка при регистрации.");
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { register, isLoading, error };
}
