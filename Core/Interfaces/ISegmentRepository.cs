using Core.Models;

namespace Core.Interfaces;

public interface ISegmentRepository
{
    public Task<List<Segment>> GetSegments(CancellationToken cancellationToken);
    public Task<Segment> CreateSegment(Segment segment ,CancellationToken cancellationToken);
}