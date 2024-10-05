using System;
using System.ComponentModel.DataAnnotations;

namespace HALLYU.Domain.Entities
{
    public class Choreographies
    {
        public int Id { get; set; }

        /// <summary>
        /// Код хареографии
        /// </summary>
        [Required]
        public string ChoreographiesCode { get; set; }

        /// <summary>
        /// Описание
        /// </summary>
        public string ChoreographiesDescription { get; set; }

        /// <summary>
        /// Дата начала
        /// </summary>
        [Required]
        public DateTime DateBeg { get; set; }

        /// <summary>
        /// Дата конца
        /// </summary>
        public DateTime? DateEnd { get; set; }

        public Schedule Schedule { get; set; }
    }
}
