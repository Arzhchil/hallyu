using System;
using System.ComponentModel.DataAnnotations;

namespace HALLYU.Domain.Entities
{
    public class Payment
    {
        public int Id { get; set; }

        /// <summary>
        /// Пользователь совершивший оплату
        /// </summary
        [Required]
        public int UserId { get; set; }
        public User User { get; set; }

        /// <summary>
        /// Цена
        /// </summary>
        [Required]
        public decimal Cost { get; set; }

        /// <summary>
        /// Дата оплаты
        /// </summary>
        [Required]
        public DateTime DateOfPayment { get; set; }
    }
}
