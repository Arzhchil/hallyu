using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace HALLYU.Domain.Entities
{
    public class Group
    {
        public int Id { get; set; }

        /// <summary>
        /// Код группы
        /// </summary>
        [Required]
        public string GroupCode { get; set; }

        /// <summary>
        /// Категория
        /// </summary>
        [Required]
        public string Category { get; set; }

        /// <summary>
        /// Уровень сложности
        /// </summary>
        [Required]
        public string DiffLevel { get; set; }

        /// <summary>
        /// Связь пользователь-группа
        /// </summary>
        [JsonIgnore]
        public IEnumerable<UsersGroup> UsersGroup { get; set; }
    }
}
