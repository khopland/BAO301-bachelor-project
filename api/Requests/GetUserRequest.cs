namespace api.Requests;

public class GetUserRequest : IHttpRequest
{
    public Guid UserId { get; set; }
}