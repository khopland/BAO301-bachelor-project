namespace api.Models;

public class AddCourseToUser
{
    public Guid UserId { get; set; }
    public Guid CourseId { get; set; }
}