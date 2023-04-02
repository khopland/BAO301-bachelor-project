using Core;
using Core.Interfaces;
using Core.Models;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Repository;

public class UserRepository : IUserRepository
{
    private readonly BachelorDbContext _dbContext;

    public UserRepository(BachelorDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<List<User>> GetUsers(CancellationToken cancellationToken)
    {
        return await _dbContext.Users.ToListAsync(cancellationToken);
    }

    public async Task<User> CreateUser(User user, CancellationToken cancellationToken)
    {
        var res = await _dbContext.AddAsync(user, cancellationToken);
        await _dbContext.SaveChangesAsync(cancellationToken);
        return res.Entity;
    }

    public async Task<User?> GetUserById(Guid userId, CancellationToken cancellationToken)
    {
        return await _dbContext.Users
            .Include(x => x.Enrollments)
            .ThenInclude(x => x.Course)
            .ThenInclude(x => x.Categories)
            .Include(x => x.Enrollments)
            .ThenInclude(x => x.Course)
            .ThenInclude(x => x.Skills)
            .Include(x => x.Enrollments)
            .ThenInclude(x => x.Course)
            .ThenInclude(x => x.Tags)
            .Include(x => x.Enrollments)
            .ThenInclude(x => x.Course)
            .ThenInclude(x => x.Type)
            .Include(x => x.Enrollments)
            .ThenInclude(x => x.Course)
            .ThenInclude(x => x.Provider)
            .FirstOrDefaultAsync(x => x.Id == userId,
             cancellationToken);
    }

    public async Task AddEnrollmentToUser(User user, Course course, CancellationToken cancellationToken)
    {

        var enrollment = new Enrollment { User = user, Course = course, status = EnrollmentStatus.NOT_STARTED, Progress = TimeSpan.Zero };
        user.Enrollments.Add(enrollment);
        _dbContext.Users.Update(user);
        await _dbContext.Enrollments.AddAsync(enrollment, cancellationToken);
        await _dbContext.SaveChangesAsync(cancellationToken);
    }

}