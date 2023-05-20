using Core.Interfaces;
using Core.Models;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Repository;

public class SegmentRepository : ISegmentRepository
{
    private readonly BachelorDbContext _dbContext;

    public SegmentRepository(BachelorDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<List<Segment>> GetSegments(CancellationToken cancellationToken)
    {
        return await _dbContext.Segments.ToListAsync(cancellationToken);
    }

    public async Task<Segment> CreateSegment(Segment segment, CancellationToken cancellationToken)
    {
        var res = await _dbContext.Segments.AddAsync(segment, cancellationToken);
        await _dbContext.SaveChangesAsync(cancellationToken);
        return res.Entity;
    }
}