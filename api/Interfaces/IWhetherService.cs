using backend.Services;

namespace backend.Interfaces
{
    public interface IWhetherService
    {
        public IEnumerable<WeatherForecast> GetWhether(string city, int days);
    }
}
