namespace HALLYU.Domain.Entities
{
    public class Schedule
    {
        public int Id { get; set; }

        /// <summary>
        /// Идентификатор группы
        /// </summary>
        public int GroupId { get; set; }
        public Group Group { get; set; }

        /// <summary>
        /// Время проведения
        /// </summary>
        public string EventTimes { get; set; }

        /// <summary>
        /// Идентификатор хареографии
        /// </summary>
        public int ChoreographiesId { get; set; }
        public Choreographies Choreographies { get; set; }

        /// <summary>
        /// Идентификатор хареографа
        /// </summary>
        public int ChoreographersId { get; set; }

        public Choreographers Choreographers { get; set; }
    }
}
