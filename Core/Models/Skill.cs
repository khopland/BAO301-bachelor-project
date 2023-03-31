namespace Core.Models;

public class Skill
{
    public Guid Id { get; set; }
    public string Name { get; set; } = default!;
    public string? Description { get; set; }
    public ICollection<Course> Courses { get; set; } = new List<Course>();

}