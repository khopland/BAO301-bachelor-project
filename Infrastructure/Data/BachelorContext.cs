using Core.Models;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data;

public class BachelorDbContext : DbContext
{
    public BachelorDbContext(DbContextOptions options) : base(options)
    {
    }

    public DbSet<User> Users { get; set; } = default!;
    public DbSet<Course> Courses { get; set; } = default!;
    public DbSet<CourseType> CourseTypes { get; set; } = default!;
    public DbSet<Enrollment> Enrollments { get; set; } = default!;
    public DbSet<Category> Categories { get; set; } = default!;
    public DbSet<Provider> Providers { get; set; } = default!;
    public DbSet<Tag> Tags { get; set; } = default!;
    public DbSet<Skill> Skills { get; set; } = default!;
    
}