using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HALLYU.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AddHallActivity : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsActive",
                table: "Halls",
                type: "boolean",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsActive",
                table: "Halls");
        }
    }
}
