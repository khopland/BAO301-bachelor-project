namespace Core.Models;

public class Tag
{
    public Guid Id { get; set; }
    public string Name { get; set; } = default!;
    public ICollection<Course> Courses { get; set; } = new List<Course>();
}