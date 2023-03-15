namespace Core.Models;

public class User
{
    public Guid Id { get; set; }
    public string FirstName { get; set; } = default!;
    public string LastName { get; set; } = default!;
    public string? Position { get; set; }
    public string? Contact { get; set; }
    public ICollection<Skill> Skills { get; set; } = default!;
    public ICollection<Enrollment> Enrollments { get; set; } = default!;
}