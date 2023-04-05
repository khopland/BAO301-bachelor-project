using Core.Models;

namespace Core.Interfaces;

public interface IUserRepository
{
    public Task<List<User>> GetUsers(CancellationToken cancellationToken);
    public Task<User> CreateUser(User user,CancellationToken cancellationToken);
    public Task<User?> GetUserById(Guid userId, CancellationToken cancellationToken);
    public Task AddEnrollmentToUser(User user,Course course, CancellationToken cancellationToken);
}