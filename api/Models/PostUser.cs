using Core.Models;

namespace api.Models;

public class PostUser
{
    public string FirstName { get; init; } = default!;
    public string LastName { get; init; } = default!;
    public string? Position { get; init; }
    public string? Contact { get; init; }

    public static implicit operator User(PostUser user) => new()
    {
        FirstName = user.FirstName,
        LastName = user.LastName,
        Position = user.Position,
        Contact = user.Contact
    };
}