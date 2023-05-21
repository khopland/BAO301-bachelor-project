using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AddSegmentToUser : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "SegmentId",
                table: "Users",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_Users_SegmentId",
                table: "Users",
                column: "SegmentId");

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Segments_SegmentId",
                table: "Users",
                column: "SegmentId",
                principalTable: "Segments",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_Segments_SegmentId",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_Users_SegmentId",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "SegmentId",
                table: "Users");
        }
    }
}
