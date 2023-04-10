using Core.Interfaces;
using Core.Models;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Repository;


public class EnrollmentRepository : IEnrollmentRepository
{
    private readonly BachelorDbContext _dbContext;

    public EnrollmentRepository(BachelorDbContext dbContext)
    {
        _dbContext = dbContext;
    }
    public async Task<Enrollment?> GetEnrollmentByUserIdAndCourseId(Guid courseId, Guid userId, CancellationToken cancellationToken = new())
    {
        // noe er feil her
        return await _dbContext.Enrollments
            .Where(x => x.User.Id == userId)
            .Where(x => x.Course.Id == courseId)
            .Include(x => x.User)
            .Include(x => x.Course)
            .ThenInclude(x => x.Type)
            .Include(x => x.Course)
            .ThenInclude(x => x.Provider)
            .FirstOrDefaultAsync(cancellationToken);
    }
}