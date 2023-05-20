namespace Core.Models;

public class CourseQuery
{
    public ICollection<Guid>? CourseTypeIds { get; set; }
    public Guid? SegmentId { get; set; }
    public ICollection<Guid>? CategoryIds { get; set; }
    public ICollection<Guid>? SkillIds { get; set; }
    public ICollection<Guid>? TagIds { get; set; }
    public int? Level { get; set; }
    public string? Language { get; set; }
    public string? Name { get; set; }
}