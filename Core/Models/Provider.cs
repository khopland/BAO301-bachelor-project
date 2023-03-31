namespace Core.Models;

public class Provider
{
    public Guid Id { get; set; }
    public string Name { get; set; }  = default!;
    public string? Description { get; set; }

}