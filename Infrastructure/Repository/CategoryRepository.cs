using Core.Interfaces;
using Core.Models;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Repository;

public class CategoryRepository : ICategoryRepository
{
    private readonly BachelorDbContext _dbContext;

    public CategoryRepository(BachelorDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<bool> CheckIfCategoryExsists(Guid CategoryId, CancellationToken cancellationToken)
    {
        return await _dbContext.Categories.AnyAsync(x => x.Id == CategoryId, cancellationToken);
    }

    public async Task<Category> CreateCategory(Category Category, CancellationToken cancellationToken)
    {
        var res = await _dbContext.Categories.AddAsync(Category, cancellationToken);
        await _dbContext.SaveChangesAsync(cancellationToken);
        return res.Entity;
    }

    public async Task<List<Category>> GetCategories(CancellationToken cancellationToken)
    {
        return await _dbContext.Categories.ToListAsync(cancellationToken);
    }
}