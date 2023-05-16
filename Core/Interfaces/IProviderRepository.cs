using Core.Models;

namespace Core.Interfaces;
public interface IProviderRepository
{
    Task<List<Provider>> GetAllProviders(CancellationToken cancellationToken = default);
}