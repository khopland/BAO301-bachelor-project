namespace api.Requests;

public class GetRecommendationRequest : IHttpRequest
{
    public Guid UserId { get; set; }
}