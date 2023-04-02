
namespace api.Dtos;

public class UserDto
{
    public Guid Id { get; set; }
    public string FirstName { get; set; } = default!;
    public string LastName { get; set; } = default!;
    public string? Position { get; set; }
    public string? Contact { get; set; }
    public ICollection<SkillDto> Skills { get; set; } = new List<SkillDto>();
    public ICollection<EnrollmentDto> Enrollments { get; set; } = new List<EnrollmentDto>();
}