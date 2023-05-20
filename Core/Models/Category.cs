namespace Core.Models;

public class Category
{
    public Guid Id { get; set; }
    public string Name { get; set; } = default!;
    public string? Description { get; set; }
    public Segment Segment { get; set; } = default!;
    public ICollection<Course> Courses { get; set; } = new List<Course>();
}