namespace Core.Models;

public class CourseQuery
{
    public Guid? CourseTypeId { get; set; }
    public Guid? SegmentId { get; set; }
    public Guid? CategoryId { get; set; }
    public Guid? SkillId { get; set; }
    public List<Guid>? TagIds { get; set; }
    public int? Level { get; set; }
    public decimal? price {get; set; }
    public string? Language { get; set; }
    public string? Name { get; set; }
    public bool? sortByPrice { get; set; } = false;
}