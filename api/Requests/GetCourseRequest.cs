namespace api.Requests;

public class GetCourseRequest : IHttpRequest
{
    public Guid CourseId { get; set; }
}