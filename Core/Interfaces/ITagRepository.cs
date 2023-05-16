using Core.Models;

namespace Core.Interfaces;
public interface ITagRepository
{
    Task<List<Tag>> GetAllTags(CancellationToken cancellationToken = default);
}