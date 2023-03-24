using System.Globalization;
using Core.Interfaces;
using Core.Models;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Repository;

public class CourseRepository : ICourseRepository
{
    private readonly BachelorDbContext _dbContext;


    public CourseRepository(BachelorDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<Course?> GetCourseById(Guid id, CancellationToken cancellationToken = new())
    {
        return await _dbContext.Courses
            .Include(x => x.Categories)
            .Include(x=> x.Skills)
            .Include(x=> x.Type)
            .Include(x=> x.Provider)
            .Include(x=> x.Tags)
            .FirstOrDefaultAsync(x => x.Id == id, cancellationToken);
    }

    public async Task<List<Course>> GetAllCourses(CancellationToken cancellationToken = new())
    {
        return await _dbContext.Courses
            .Include(x => x.Categories)
            .Include(x=> x.Skills)
            .Include(x=> x.Type)
            .Include(x=> x.Provider)
            .Include(x=> x.Tags)
            .ToListAsync(cancellationToken);
    }

    public async Task<Course> CreateCourse(Course course, CancellationToken cancellationToken = new())
    {
        var res = await _dbContext.AddAsync(course, cancellationToken);
        await _dbContext.SaveChangesAsync(cancellationToken);
        return res.Entity;
    }

    public async Task<List<string>> GetLanguages(CancellationToken cancellationToken = new()){
        return await _dbContext.Courses.Select(x =>x.Language).Distinct().ToListAsync(cancellationToken);
    }

    public async Task<List<Course>> QueryCourses(CourseQuery query, CancellationToken cancellationToken = new())
    {
        var queryable = _dbContext.Courses.AsQueryable();

        if (query.name != null)
            queryable = queryable.Where(x => x.Name.StartsWith(query.name.Trim(),true,CultureInfo.InvariantCulture));

        if (query.CourseTypeId != null)
            queryable = queryable.Where(x => x.Type.Id == query.CourseTypeId);

        if (query.CategoryId != null)
            queryable = queryable.Where(x => x.Categories.Any(c => c.Id == query.CategoryId));

        if (query.SkillId != null)
            queryable = queryable.Where(x => x.Skills.Any(c => c.Id == query.SkillId));

        if (query.TagId != null)
            queryable = queryable.Where(x => x.Tags.Any(c => c.Id == query.TagId));

        if (query.Language != null)
            queryable = queryable.Where(x => x.Language == query.Language);

        return await queryable
            .Include(x => x.Categories)
            .Include(x=> x.Skills)
            .Include(x=> x.Type)
            .Include(x=> x.Provider)
            .Include(x=> x.Tags)
            .ToListAsync(cancellationToken);
    }
}