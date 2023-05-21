namespace Core.Models;

public class User
{
    public Guid Id { get; set; }
    public string FirstName { get; set; } = default!;
    public string LastName { get; set; } = default!;
    public string? Position { get; set; }
    public Segment Segment { get; set; } = default!;
    public Contact Contact { get; set; } = default!;
    public ICollection<Skill> Skills { get; set; } = new List<Skill>();
    public ICollection<Tag> Interests { get; set; } = new List<Tag>();
    public ICollection<Enrollment> Enrollments { get; set; } = new List<Enrollment>();
}