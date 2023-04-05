using Bogus;
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

    public void SeedData()
    {
        var usersFaker = new Faker<User>()
            .RuleFor(m => m.Id, _ => Guid.NewGuid())
            .RuleFor(m => m.FirstName, f => f.Name.FirstName())
            .RuleFor(m => m.LastName, f => f.Name.LastName())
            .RuleFor(m => m.Position,f => "developer")
            .RuleFor(m => m.Contact,f => f.Phone.PhoneNumber());

        var categoriesFaker = new Faker<Category>()
            .RuleFor(m => m.Id, _ => Guid.NewGuid())
            .RuleFor(m => m.Name, f => f.Commerce.Categories(1).First())
            .RuleFor(m => m.Description, f => f.Lorem.Sentence());

        var providerFaker = new Faker<Provider>()
            .RuleFor(m => m.Id, _ => Guid.NewGuid())
            .RuleFor(m => m.Name, f => f.Company.CompanyName())
            .RuleFor(m => m.Description, f => f.Lorem.Sentence());

        var skillFaker = new Faker<Skill>()
            .RuleFor(m => m.Id, _ => Guid.NewGuid())
            .RuleFor(m => m.Name, f => f.Company.CompanyName())
            .RuleFor(m => m.Description, f => f.Lorem.Sentence());

        var tagFaker = new Faker<Tag>()
            .RuleFor(m => m.Id, _ => Guid.NewGuid())
            .RuleFor(m => m.Name, f => f.Company.CompanyName());

        this.Categories.AddRange(categoriesFaker.Generate(10));
        this.Providers.AddRange(providerFaker.Generate(10));
        this.Tags.AddRange(tagFaker.Generate(10));
        this.Skills.AddRange(skillFaker.Generate(10));
        this.Users.AddRange(usersFaker.Generate(5));
        this.CourseTypes.Add(new CourseType { Id = Guid.NewGuid(), Name = "web" });
        this.SaveChanges();

        var course = new Faker<Course>()
            .StrictMode(true)
            .RuleFor(m => m.Id, _ => Guid.NewGuid())
            .RuleFor(m => m.Language, _ => "English")
            .RuleFor(m => m.Type, _ => this.CourseTypes.First())
            .RuleFor(m => m.Description, f => f.Lorem.Paragraph())
            .RuleFor(m => m.Level, f => f.PickRandom(1, 2, 3))
            .RuleFor(m => m.Duration, f => f.Date.Timespan(new TimeSpan(12, 0, 0)))
            .RuleFor(m => m.WbsCode, _ => "abc123")
            .RuleFor(m => m.Name, f => f.Commerce.ProductName())
            .RuleFor(m => m.Categories, f => new List<Category> { f.PickRandom(this.Categories.ToArray()) })
            .RuleFor(m => m.Provider, f => f.PickRandom(this.Providers.ToArray()))
            .RuleFor(m => m.Price, f => f.Commerce.Price(1).First())
            .RuleFor(m => m.Tags, f => new List<Tag> { f.PickRandom(this.Tags.ToArray()) })
            .RuleFor(m => m.Skills, f => new List<Skill> { f.PickRandom(this.Skills.ToArray()) });

        // generate 100 items
        var courses = course.Generate(100);

        this.AddRange(courses);

        this.SaveChanges();
    }
}