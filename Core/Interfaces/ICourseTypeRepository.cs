using Core.Models;

namespace Core.Interfaces;

public interface ICourseTypeRepository
{
    public Task<List<CourseType>> GetCourseTypes(CancellationToken cancellationToken);
    public Task<CourseType> CreateCourseType(CourseType courseType,CancellationToken cancellationToken);
    public Task<bool> CheckIfCourseTypeExsists(Guid courseTypeId,CancellationToken cancellationToken);
}