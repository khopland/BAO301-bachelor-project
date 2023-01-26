using backend.Requests;
using Mediator;

namespace backend.Handlers;

public class ExampleHandler : IRequestHandler<ExampleRequest, IResult>
{
    public async ValueTask<IResult> Handle(ExampleRequest request, CancellationToken cancellationToken)
    {
        await Task.Delay(10, cancellationToken);
        return Results.Ok(new { message = $"name is {request.Name} and age is {request.Age}" });
    }
}
