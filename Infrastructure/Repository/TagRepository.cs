using Core.Interfaces;
using Core.Models;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Repository;


public class TagRepository : ITagRepository
{
    private readonly BachelorDbContext _dbContext;

    public TagRepository(BachelorDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<List<Tag>> GetAllTags(CancellationToken cancellationToken = default)
    {
        return await _dbContext.Tags.ToListAsync(cancellationToken);
    }
}