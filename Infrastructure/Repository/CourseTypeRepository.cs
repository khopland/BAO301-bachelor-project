using Core.Interfaces;
using Core.Models;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Repository;

public class CourseTypeRepository : ICourseTypeRepository
{
    private readonly BachelorDbContext _dbContext;

    public CourseTypeRepository(BachelorDbContext dbContext)
    {
        _dbContext = dbContext;
    }
    public async Task<bool> CheckIfCourseTypeExsists(Guid courseTypeId, CancellationToken cancellationToken)
    {
        return await _dbContext.CourseTypes.AnyAsync(x => x.Id == courseTypeId, cancellationToken);
    }

    public async Task<CourseType> CreateCourseType(CourseType courseType, CancellationToken cancellationToken)
    {
        var res = await _dbContext.CourseTypes.AddAsync(courseType, cancellationToken);
        await _dbContext.SaveChangesAsync(cancellationToken);
        return res.Entity;
    }

    public async Task<List<CourseType>> GetCourseTypes(CancellationToken cancellationToken)
    {
        return await _dbContext.CourseTypes.ToListAsync(cancellationToken);
    }
}