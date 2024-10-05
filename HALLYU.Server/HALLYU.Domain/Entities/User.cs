using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace HALLYU.Domain.Entities
{
    public class User
    {
        /// <summary>
        /// Идентификатор
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Имя пользователя
        /// </summary>
        [Required]
        public string Name { get; set; }

        /// <summary>
        /// Фамилия пользователя
        /// </summary>
        [Required]
        public string LastName { get; set; } = string.Empty;

        /// <summary>
        /// Отчество
        /// </summary>
        public string MiddleName { get; set; } = string.Empty;

        /// <summary>
        /// Пол пользователя
        /// </summary>
        [Required]
        public char Sex { get; set; }

        /// <summary>
        /// Дата рождения пользователя
        /// </summary>
        [Required]
        public DateTime BirthDate { get; set; }

        /// <summary>
        /// Почта пользователя
        /// </summary>
        [Required]
        public string Mail { get; set; } = string.Empty;

        /// <summary>
        /// Номер телефона пользователя
        /// </summary>
        [Required]
        public string Phone { get; set; } = string.Empty;

        /// <summary>
        /// Дата регистрации
        /// </summary>
        [Required]
        public DateTime RegDate { get; set; }

        /// <summary>
        /// Оплата пользователя
        /// </summary>
        [JsonIgnore]
        public Payment Payment { get; set; }

        /// <summary>
        /// Связь пользователь-группа
        /// </summary>
        [JsonIgnore]
        public IEnumerable<UsersGroup> UsersGroup { get; set; }
    }
}
