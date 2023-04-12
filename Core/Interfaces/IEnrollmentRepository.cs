using Core.Models;

namespace Core.Interfaces;
public interface IEnrollmentRepository
{
    Task<Enrollment?> GetEnrollmentByUserIdAndCourseId(Guid courseId, Guid userId, CancellationToken cancellationToken = default);
}