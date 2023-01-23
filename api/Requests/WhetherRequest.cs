namespace backend.Requests;

public class WhetherRequest : IHttpRequest
{
    public string City { get; set; }
    public int Days { get; set; }
}
