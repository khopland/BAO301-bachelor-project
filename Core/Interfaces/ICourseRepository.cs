using Core.Models;

namespace Core.Interfaces;

public interface ICourseRepository
{
    Task<Course?> GetCourseById(Guid id, CancellationToken cancellationToken = new());
    Task<List<Course>> GetAllCourses(CancellationToken cancellationToken = new());
    Task<Course> CreateCourse(Course course, CancellationToken cancellationToken = new());
    Task<List<Course>> QueryCourses(CourseQuery query, CancellationToken cancellationToken = new());
    Task<List<string>> GetLanguages(CancellationToken cancellationToken = new());
}