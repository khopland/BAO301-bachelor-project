using backend.Interfaces;
using backend.Requests;
using Mediator;

namespace backend.Handlers;

public class WhetherHandler : IRequestHandler<WhetherRequest, IResult>
{
    private readonly IWhetherService _whetherService;

    public WhetherHandler(IWhetherService whetherService)
    {
        _whetherService = whetherService;
    }

    public async ValueTask<IResult> Handle(WhetherRequest request, CancellationToken cancellationToken)
    {
        return Results.Ok(_whetherService.GetWhether(request.City, request.Days));
    }
}
