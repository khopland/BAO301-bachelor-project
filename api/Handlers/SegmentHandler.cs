using api.Requests;
using Core.Interfaces;
using Mediator;

namespace api.Handlers;

public class SegmentHandler : IRequestHandler<GetSegmentsRequest, IResult>
{
    private readonly ISegmentRepository _segmentRepository;

    public SegmentHandler(ISegmentRepository segmentRepository)
    {
        _segmentRepository = segmentRepository;
    }

    public async ValueTask<IResult> Handle(GetSegmentsRequest request, CancellationToken cancellationToken)
    {
        return Results.Ok(await _segmentRepository.GetSegments(cancellationToken));
    }
}