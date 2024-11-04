import React, { useState, FormEvent, ChangeEvent, MouseEvent } from "react";
import { RegisterUserDTO } from "@/app/models/RegisterUserDTO";
import { useRegisterUser } from "@/app/hooks/useRegisterUser";

interface AccountMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

interface RegisterFormData {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  middleName: string;
  sex: string;
  birthDate: string;
  phone: string;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ isOpen, toggleMenu }) => {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  const [currentStep, setCurrentStep] = useState<number>(1);

  const [formData, setFormData] = useState<RegisterFormData>({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    middleName: "",
    sex: "",
    birthDate: "",
    phone: "",
  });

  const { register, isLoading, error } = useRegisterUser();

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const isPasswordValid = formData.password.length >= 6;
  const isConfirmPasswordValid = formData.password === formData.confirmPassword;
  const isPersonalInfoValid =
    formData.firstName !== "" &&
    formData.lastName !== "" &&
    formData.sex !== "" &&
    formData.birthDate !== "" &&
    formData.phone !== "";

  const handleTabSwitch = (tab: "login" | "register") => {
    setActiveTab(tab);
    setCurrentStep(1);
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      middleName: "",
      sex: "",
      birthDate: "",
      phone: "",
    });
  };

  const handleMenuClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegisterSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const registerData: RegisterUserDTO = {
      Name: formData.firstName,
      LastName: formData.lastName,
      MiddleName: formData.middleName,
      Sex: formData.sex.charAt(0),
      BirthDate: new Date(formData.birthDate),
      Mail: formData.email,
      Phone: formData.phone,
      Password: formData.password,
    };

    await register(registerData);
  };

  return (
    <>
      {isOpen && <div className="fixed inset-0 z-40" onClick={toggleMenu} />}

      <div
        className={`max-w-[500px] fixed top-0 right-0 h-full w-full pr-[4rem] md:w-96 bg-white z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
        onClick={handleMenuClick}
      >
        <div className="flex flex-col h-full text-black">
          <h2 className="text-2xl font-bold text-black text-center mt-4 mb-4">
            HALLYU DANCE STUDIO
          </h2>

          <div className="flex justify-center bg-black py-6 mb-4">
            <button
              className={`text-white mx-2 focus:outline-none ${
                activeTab === "login" ? "underline" : ""
              }`}
              onClick={() => handleTabSwitch("login")}
            >
              Войти
            </button>
            <button
              className={`text-white mx-2 focus:outline-none ${
                activeTab === "register" ? "underline" : ""
              }`}
              onClick={() => handleTabSwitch("register")}
            >
              Зарегистрироваться
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4">
            {activeTab === "login" ? (
              <div>
                <form className="flex flex-col space-y-4">
                  <input
                    type="email"
                    placeholder="Эл. почта"
                    className="border border-black p-2 text-black "
                  />
                  <input
                    type="password"
                    placeholder="Пароль"
                    className="border border-black p-2 text-black"
                  />
                  <a href="#" className="text-sm text-black underline self-end">
                    Забыли пароль
                  </a>
                  <button
                    type="submit"
                    className="mt-4 bg-red-500 text-black text-2xl py-2 rounded-xl"
                  >
                    Войти
                  </button>
                </form>
              </div>
            ) : (
              <div>
                <form onSubmit={handleRegisterSubmit}>
                  <div className="mb-6">
                    <div className="flex items-center justify-center mb-4">
                      {[1, 2, 3, 4].map((step) => (
                        <div key={step} className="flex items-center">
                          <div
                            className={`w-8 h-8 flex items-center justify-center border ${
                              currentStep >= step
                                ? "bg-black text-white"
                                : "border-black text-black"
                            } rounded-full transition-all duration-300`}
                          >
                            {currentStep > step ? "✓" : step}
                          </div>
                          {step < 4 && (
                            <div className="w-10 h-px bg-black mx-2"></div>
                          )}
                        </div>
                      ))}
                    </div>

                    <div>
                      {currentStep === 1 && (
                        <div className="animate-fade-in">
                          <label className="block mb-2 text-sm font-medium text-gray-700">
                            Электронная почта
                          </label>
                          <input
                            type="email"
                            name="email"
                            placeholder="Введите ваш email"
                            className="border border-black p-2 w-full"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                          <button
                            type="button"
                            className={`mt-4 w-full bg-red-500 text-white py-2 rounded-xl ${
                              isEmailValid
                                ? ""
                                : "opacity-50 cursor-not-allowed"
                            }`}
                            onClick={handleNextStep}
                            disabled={!isEmailValid}
                          >
                            Далее
                          </button>
                        </div>
                      )}

                      {currentStep === 2 && (
                        <div className="animate-fade-in">
                          <label className="block mb-2 text-sm font-medium text-gray-700">
                            Пароль
                          </label>
                          <input
                            type="password"
                            name="password"
                            placeholder="Введите пароль"
                            className="border border-black p-2 w-full mb-4"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                          />
                          <label className="block mb-2 text-sm font-medium text-gray-700">
                            Подтвердите пароль
                          </label>
                          <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Подтвердите пароль"
                            className="border border-black p-2 w-full"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            required
                          />
                          <div className="flex justify-between mt-4">
                            <button
                              type="button"
                              className={`w-full bg-gray-500 text-white py-2 rounded-xl mr-2`}
                              onClick={handlePrevStep}
                            >
                              Назад
                            </button>
                            <button
                              type="button"
                              className={`w-full bg-red-500 text-white py-2 rounded-xl ${
                                isPasswordValid && isConfirmPasswordValid
                                  ? ""
                                  : "opacity-50 cursor-not-allowed"
                              }`}
                              onClick={handleNextStep}
                              disabled={
                                !isPasswordValid || !isConfirmPasswordValid
                              }
                            >
                              Далее
                            </button>
                          </div>
                        </div>
                      )}

                      {currentStep === 3 && (
                        <div className="animate-fade-in">
                          <label className="block mb-2 text-sm font-medium text-gray-700">
                            Имя
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            placeholder="Введите имя"
                            className="border border-black p-2 w-full mb-4"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                          />
                          <label className="block mb-2 text-sm font-medium text-gray-700">
                            Фамилия
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            placeholder="Введите фамилию"
                            className="border border-black p-2 w-full mb-4"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                          />
                          <label className="block mb-2 text-sm font-medium text-gray-700">
                            Отчество
                          </label>
                          <input
                            type="text"
                            name="middleName"
                            placeholder="Введите отчество"
                            className="border border-black p-2 w-full mb-4"
                            value={formData.middleName}
                            onChange={handleInputChange}
                          />
                          <label className="block mb-2 text-sm font-medium text-gray-700">
                            Пол
                          </label>
                          <select
                            className="border border-black p-2 w-full mb-4"
                            name="sex"
                            value={formData.sex}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="">Выберите пол</option>
                            <option value="М">Мужской</option>
                            <option value="Ж">Женский</option>
                          </select>
                          <label className="block mb-2 text-sm font-medium text-gray-700">
                            Дата рождения
                          </label>

                          <input
                            type="date"
                            name="birthDate"
                            className="border border-black p-2 w-full mb-4"
                            value={formData.birthDate}
                            onChange={handleInputChange}
                            required
                          />
                          <label className="block mb-2 text-sm font-medium text-gray-700">
                            Телефон
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            placeholder="+7 (___) ___-__-__"
                            className="border border-black p-2 w-full"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                          />
                          <div className="flex justify-between mt-4">
                            <button
                              type="button"
                              className={`w-full bg-gray-500 text-white py-2 rounded-xl mr-2`}
                              onClick={handlePrevStep}
                            >
                              Назад
                            </button>
                            <button
                              type="button"
                              className={`w-full bg-red-500 text-white py-2 rounded-xl ${
                                isPersonalInfoValid
                                  ? ""
                                  : "opacity-50 cursor-not-allowed"
                              }`}
                              onClick={handleNextStep}
                              disabled={!isPersonalInfoValid}
                            >
                              Далее
                            </button>
                          </div>
                        </div>
                      )}

                      {currentStep === 4 && (
                        <div className="animate-fade-in">
                          <h3 className="text-xl font-bold mb-4">
                            Подтверждение регистрации
                          </h3>
                          <p className="mb-4">
                            Проверьте введенные данные перед отправкой.
                          </p>
                          <ul className="mb-4">
                            <li>
                              <strong>Email:</strong> {formData.email}
                            </li>
                            <li>
                              <strong>Имя:</strong> {formData.firstName}
                            </li>
                            <li>
                              <strong>Фамилия:</strong> {formData.lastName}
                            </li>
                            <li>
                              <strong>Отчество:</strong> {formData.middleName}
                            </li>
                            <li>
                              <strong>Пол:</strong> {formData.sex}
                            </li>
                            <li>
                              <strong>Дата рождения:</strong>{" "}
                              {formData.birthDate}
                            </li>
                            <li>
                              <strong>Телефон:</strong> {formData.phone}
                            </li>
                          </ul>
                          <div className="flex justify-between mt-4">
                            <button
                              type="button"
                              className={`w-full bg-gray-500 text-white py-2 rounded-xl mr-2`}
                              onClick={handlePrevStep}
                            >
                              Назад
                            </button>
                            <button
                              type="submit"
                              className={`w-full bg-green-500 text-white py-2 rounded-xl`}
                            >
                              Зарегистрироваться
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountMenu;
