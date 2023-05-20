namespace Core.Models;

public class Segment
{
    public Guid Id { get; set; }
    public string Name { get; set; } = default!;
    public string? Description { get; set; }
    public ICollection<Category> Categories { get; set; } = new List<Category>();
}