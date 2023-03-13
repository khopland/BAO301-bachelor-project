using System.ComponentModel.DataAnnotations;

namespace Core.Models;

public class Enrollment
{
    public Guid Id { get; set; }
    [Required] public User User { get; set; } = default!;
    [Required] public Course Course { get; set; } = default!;
    public EnrollmentStatus Type { get; set; }
    public TimeSpan Progress { get; set; }
}