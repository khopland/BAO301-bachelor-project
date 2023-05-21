using api.Requests;
using Core.Interfaces;
using Mediator;

namespace api.Handlers;

public class ProviderHandler : IRequestHandler<GetProvidersRequest, IResult>
{
    private readonly IProviderRepository _providerRepository;
    public ProviderHandler(IProviderRepository providerRepository)
    {
        _providerRepository = providerRepository;
    }
    public async ValueTask<IResult> Handle(GetProvidersRequest request, CancellationToken cancellationToken)
    {
        return Results.Ok(await _providerRepository.GetAllProviders(cancellationToken));
    }
}