using api.Services;

namespace api.Interfaces;

public interface IWhetherService
{
    public IEnumerable<WeatherForecast> GetWhether(string city, int days);
}