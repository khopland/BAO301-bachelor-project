using api.Requests;
using Core.Interfaces;
using Mediator;

namespace api.Handlers;

public class TagHandler : IRequestHandler<GetTagsRequest, IResult>
{
    private readonly ITagRepository _tagRepository;

    public TagHandler(ITagRepository tagRepository)
    {
        _tagRepository = tagRepository;
    }

    public async ValueTask<IResult> Handle(GetTagsRequest request, CancellationToken cancellationToken)
    {
        return Results.Ok(await _tagRepository.GetAllTags(cancellationToken));
    }
}