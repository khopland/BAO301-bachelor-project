using Core.Models;

namespace Core.Interfaces;

public interface ICategoryRepository
{
    public Task<List<Category>> GetCategories(CancellationToken cancellationToken);
    public Task<Category> CreateCategory(Category Category,CancellationToken cancellationToken);
    public Task<bool> CheckIfCategoryExsists(Guid CategoryId,CancellationToken cancellationToken);
}