using Core.Models;
using Microsoft.AspNetCore.Mvc;

namespace api.Requests;

public class PostQueryCourseRequest : IHttpRequest
{
    [FromBody]
    public CourseQuery Query { get; set; } = default!;
}