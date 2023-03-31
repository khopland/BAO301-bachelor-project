using System.ComponentModel.DataAnnotations;

namespace Core.Models;

public class Course
{
    public Guid Id { get; set; }
    public string Name { get; set; } = default!;
    public string? Description { get; set; }
    public ICollection<Category> Categories { get; set; } = new List<Category>();
    public ICollection<Skill> Skills { get; set; } = new List<Skill>();
    [Required]
    public CourseType Type { get; set; } = default!;
    [Required]
    public Provider Provider { get; set; } = default!;
    public decimal Price { get; set; }
    public ICollection<Tag> Tags { get; set; } = new List<Tag>();
    public int Level { get; set; }
    public string Language { get; set; } = default!;
    public TimeSpan Duration { get; set; }
    public string? WbsCode { get; set; }
}