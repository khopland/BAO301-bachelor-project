namespace api.Dtos;

public class CourseDto
{
    public Guid Id { get; set; }
    public string Name { get; set; } = default!;
    public string? Description { get; set; }
    public List<CategoryDto> Categories { get; set; } = new();
    public List<SkillDto> Skills { get; set; } = new();
    public TypeDto Type { get; set; } =default!;
    public ProviderDto Provider { get; set; } = default!;
    public decimal Price { get; set; }
    public List<TagDto> Tags { get; set; } = new ();
    public int Level { get; set; }
    public string Language { get; set; } = default!;
    public TimeSpan Duration { get; set; }
    public string? WbsCode { get; set; }
}