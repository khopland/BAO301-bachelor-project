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
            .Include(x => x.Skills)
            .Include(x => x.Type)
            .Include(x => x.Provider)
            .Include(x => x.Tags)
            .AsSplitQuery()
            .FirstOrDefaultAsync(x => x.Id == id, cancellationToken);
    }

    public async Task<List<Course>> GetAllCourses(CancellationToken cancellationToken = new())
    {
        return await _dbContext.Courses
            .Include(x => x.Categories)
            .ThenInclude(x => x.Segment)
            .Include(x => x.Skills)
            .Include(x => x.Type)
            .Include(x => x.Provider)
            .Include(x => x.Tags)
            .AsSplitQuery()
            .ToListAsync(cancellationToken);
    }

    public async Task<Course> CreateCourse(Course course, CancellationToken cancellationToken = new())
    {
        _dbContext.Providers.Attach(course.Provider);
        _dbContext.CourseTypes.Attach(course.Type);
        _dbContext.Categories.AttachRange(course.Categories);
        _dbContext.Tags.AttachRange(course.Tags);
        _dbContext.Skills.AttachRange(course.Skills);

        var res = await _dbContext.Courses.AddAsync(course, cancellationToken);
        await _dbContext.SaveChangesAsync(cancellationToken);

        return res.Entity;
    }

    public async Task<List<string>> GetLanguages(CancellationToken cancellationToken = new())
    {
        return await _dbContext.Courses.Select(x => x.Language).Distinct().ToListAsync(cancellationToken);
    }

    public async Task<List<Course>> QueryCourses(CourseQuery query, CancellationToken cancellationToken = new())
    {
        var queryable = _dbContext.Courses.AsQueryable();

        if (query.Name != null)
            queryable = queryable.Where(x => x.Name.ToLower().Contains(query.Name.Trim().ToLower()));

        if (query.CourseTypeIds != null && query.CourseTypeIds.Any())
            queryable = queryable.Where(x => query.CourseTypeIds.Contains(x.Type.Id));

        if (query.SegmentIds != null && query.SegmentIds.Any())
            queryable = queryable.Where(x => x.Categories.Any(c => query.SegmentIds.Contains(c.Segment.Id)));

        if (query.CategoryIds != null && query.CategoryIds.Any())
            queryable = queryable.Where(x => x.Categories.Any(c => query.CategoryIds.Contains(c.Id)));

        if (query.SkillIds != null && query.SkillIds.Any())
            queryable = queryable.Where(x => x.Skills.Any(c => query.SkillIds.Contains(c.Id)));

        if (query.TagIds != null && query.TagIds.Any())
            queryable = queryable.Where(x => x.Tags.Any(c => query.TagIds.Contains(c.Id)));

        if (query.Language != null)
            queryable = queryable.Where(x => x.Language == query.Language);

        if (query.Level != null)
            queryable = queryable.Where(x => x.Level == query.Level);

        return await queryable
            .Include(x => x.Categories)
            .Include(x => x.Skills)
            .Include(x => x.Type)
            .Include(x => x.Provider)
            .Include(x => x.Tags)
            .AsSplitQuery()
            .ToListAsync(cancellationToken);
    }

}