using System.ComponentModel.DataAnnotations;

namespace HALLYU.Domain.Entities
{
    public class Hall
    {
        public int Id { get; set; }

        /// <summary>
        /// Идентификатор холла
        /// </summary>
        public string HallCode { get; set; }

        /// <summary>
        /// Описание холла
        /// </summary>
        [Required]
        public string HallDescription { get; set;}

        /// <summary>
        /// Активность холла
        /// </summary>
        public bool IsActive { get; set; } = true;
    }
}
