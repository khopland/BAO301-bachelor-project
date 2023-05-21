namespace api.Models;

public class AddInterestsToUser
{
    public Guid UserId { get; set; }
    public List<Guid> Interests { get; set; }
}