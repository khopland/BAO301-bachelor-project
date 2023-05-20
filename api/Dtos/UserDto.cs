
using Core.Models;

namespace api.Dtos;

public class UserDto
{
    public Guid Id { get; set; }
    public string FirstName { get; set; } = default!;
    public string LastName { get; set; } = default!;
    public string? Position { get; set; }
    public ContactDto Contact { get; set; } = default!;
    public ICollection<SkillDto> Skills { get; set; } = new List<SkillDto>();
    public ICollection<TagDto> Interests { get; set; } = new List<TagDto>();
    public ICollection<EnrollmentDto> Enrollments { get; set; } = new List<EnrollmentDto>();
}