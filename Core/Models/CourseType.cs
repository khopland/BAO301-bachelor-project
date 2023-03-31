namespace Core.Models;

public class CourseType
{
    public Guid Id { get; set; }
    public string Name { get; set; }  = default!;
    public string? Description { get; set; }

}