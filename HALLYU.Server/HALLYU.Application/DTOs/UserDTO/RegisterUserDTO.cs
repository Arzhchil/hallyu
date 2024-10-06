using System.ComponentModel.DataAnnotations;
using System;

namespace HALLYU.Application.DTOs.UserDTO
{
    public class RegisterUserDTO
    {
        /// <summary>
        /// Имя пользователя
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Фамилия пользователя
        /// </summary>
        public string LastName { get; set; } = string.Empty;

        /// <summary>
        /// Отчество
        /// </summary>
        public string MiddleName { get; set; } = string.Empty;

        /// <summary>
        /// Пол пользователя
        /// </summary>
        public char Sex { get; set; }

        /// <summary>
        /// Дата рождения пользователя
        /// </summary>
        public DateTime BirthDate { get; set; }

        /// <summary>
        /// Почта пользователя
        /// </summary>
        public string Mail { get; set; } = string.Empty;

        /// <summary>
        /// Номер телефона пользователя
        /// </summary>
        public string Phone { get; set; } = string.Empty;

        /// <summary>
        /// Дата регистрации
        /// </summary>
        public DateTime RegDate { get; set; } = DateTime.Now;

        /// <summary>
        /// Пароль пользователя
        /// </summary>
        public string Passhowd { get; set; }
    }
}
