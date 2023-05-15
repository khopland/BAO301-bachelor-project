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

        if (query.CourseTypeId != null)
            queryable = queryable.Where(x => x.Type.Id == query.CourseTypeId);

        if (query.SegmentId != null)
            queryable = queryable.Where(x => x.Categories.Any(c => c.Segment.Id == query.SegmentId));

        if (query.CategoryId != null)
            queryable = queryable.Where(x => x.Categories.Any(c => c.Id == query.CategoryId));

        if (query.SkillId != null)
            queryable = queryable.Where(x => x.Skills.Any(c => c.Id == query.SkillId));

        if (query.TagIds != null && query.TagIds.Count > 0)
            queryable = queryable.Where(x => x.Tags.Any(c => query.TagIds.Contains(c.Id)));

        if(query.price != null && query.price > 0.0m)
                queryable = queryable.Where(x => x.Price >= query.price);

        if (query.Language != null)
            queryable = queryable.Where(x => x.Language == query.Language);

        if (query.Level != null)
            queryable = queryable.Where(x => x.Level == query.Level);

        if((query.sortByPrice ?? false) == true)
             queryable = queryable.OrderBy(x => x.Price);

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