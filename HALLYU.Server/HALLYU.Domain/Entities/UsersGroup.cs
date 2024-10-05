namespace HALLYU.Domain.Entities
{
    public class UsersGroup
    {
        public int Id { get; set; }

        /// <summary>
        /// Идентификатор пользователя
        /// </summary>
        public int UserId { get; set; }
        public User User { get; set; }

        /// <summary>
        /// Идентификатор группы
        /// </summary>
        public int GroupId { get; set; }
        public Group Group { get; set; }
    }
}
