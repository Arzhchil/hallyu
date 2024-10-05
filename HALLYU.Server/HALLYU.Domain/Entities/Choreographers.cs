using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace HALLYU.Domain.Entities
{
    public class Choreographers
    {
        public int Id { get; set; }

        /// <summary>
        /// Имя хареографа
        /// </summary>
        [Required]
        public string Name { get; set; }

        /// <summary>
        /// Фамилия
        /// </summary>
        [Required]
        public string LastName { get; set; }

        /// <summary>
        /// Отчество
        /// </summary>
        public string MiddleName { get; set; }

        /// <summary>
        /// Пол
        /// </summary>
        [Required]
        public char Sex { get; set; }

        /// <summary>
        /// Дата рождения
        /// </summary>
        [Required]
        public DateTime BirthDate { get; set; }

        /// <summary>
        /// Почтка
        /// </summary>
        [Required]
        public string Mail { get; set; }

        /// <summary>
        /// Телефон
        /// </summary>
        [Required]
        public string Phone { get; set; }

        /// <summary>
        /// Расписание хареографа
        /// </summary>
        [JsonIgnore]
        public IEnumerable<Schedule> Schedule { get; set; }
    }
}
