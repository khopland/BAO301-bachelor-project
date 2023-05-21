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
        return await _dbContext.Users
            .Include(u => u.Contact)
            .Include(u => u.Skills)
            .Include(u => u.Interests)
            .Include(x => x.Segment)
            .Include(u => u.Enrollments)
            .ThenInclude(e => e.Course)
            .ThenInclude(c => c.Type)
            .Include(u => u.Enrollments)
            .ThenInclude(e => e.Course)
            .ThenInclude(c => c.Provider)
            .OrderBy(x => x.Id)
            .ToListAsync(cancellationToken);
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
            .Include(x => x.Contact)
            .Include(x => x.Skills)
            .Include(x => x.Interests)
            .Include(x => x.Segment)
            .AsSplitQuery()
            .FirstOrDefaultAsync(x => x.Id == userId, cancellationToken);
    }

    public async Task AddEnrollmentToUser(User user, Course course, CancellationToken cancellationToken)
    {
        var enrollment = new Enrollment { User = user, Course = course, Status = EnrollmentStatus.STARTED, Progress = TimeSpan.Zero };
        user.Enrollments.Add(enrollment);
        await _dbContext.SaveChangesAsync(cancellationToken);
    }

    public async Task CompleteEnrollmentForUser(Guid enrollmentId, CancellationToken cancellationToken)
    {
        var enrollment = await _dbContext.Enrollments.FirstOrDefaultAsync(x => x.Id == enrollmentId, cancellationToken);
        if (enrollment == null) return;
        var course = await _dbContext.Courses.FirstOrDefaultAsync(x => x.Id == enrollment.Course.Id, cancellationToken);
        if (course == null) return;

        enrollment.Status = EnrollmentStatus.COMPLETED;
        enrollment.Progress = course.Duration;

        await _dbContext.SaveChangesAsync(cancellationToken);
    }

    public async Task<User> UpdateUser(User user, CancellationToken cancellationToken)
    {
        _dbContext.Users.Update(user);
        await _dbContext.SaveChangesAsync(cancellationToken);
        return user;
    }
}