﻿using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HALLYU.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class UserEmailConfiration1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsEmailConfirmed",
                table: "Users",
                type: "boolean",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsEmailConfirmed",
                table: "Users");
        }
    }
}
