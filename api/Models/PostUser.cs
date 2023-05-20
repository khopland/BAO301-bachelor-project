using Core.Models;

namespace api.Models;

public class PostUser
{
    public string FirstName { get; init; } = default!;
    public string LastName { get; init; } = default!;
    public string? Position { get; init; }
    public Contact Contact { get; init; }
    public ICollection<Skill> Skills { get; set; } = new List<Skill>();
    public ICollection<Tag> Interests { get; set; } = new List<Tag>();
}