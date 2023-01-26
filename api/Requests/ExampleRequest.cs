namespace backend.Requests;

public class ExampleRequest : IHttpRequest
{
    public int? Age { get; set; } = 0;
    public string Name { get; set; } = default!;
}
