using Core.Models;

namespace Core.Interfaces;

public interface IUserRepository
{
    public Task<List<User>> GetUsers(CancellationToken cancellationToken);
    public Task<User> CreateUser(User user,CancellationToken cancellationToken);
    public Task<User?> GetUser(Guid userId, CancellationToken cancellationToken);
}