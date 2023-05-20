using Core.Models;

namespace api.Dtos;

public class EnrollmentDto
{
    public Guid Id { get; set; }
    public CourseDto Course { get; set; } = default!;
    public EnrollmentStatus? Status { get; set; }
    public TimeSpan Progress { get; set; }
}