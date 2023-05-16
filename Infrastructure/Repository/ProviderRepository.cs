using Core.Interfaces;
using Core.Models;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Repository;


public class ProviderRepository : IProviderRepository
{
    private readonly BachelorDbContext _dbContext;

    public ProviderRepository(BachelorDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<List<Provider>> GetAllProviders(CancellationToken cancellationToken)
    {
        return await _dbContext.Providers.ToListAsync(cancellationToken);
    }
}