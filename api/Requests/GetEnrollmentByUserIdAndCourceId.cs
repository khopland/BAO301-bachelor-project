using api.Models;
using Microsoft.AspNetCore.Mvc;

namespace api.Requests;

public class GetEnrollmentByUserIdAndCourseId : IHttpRequest
{
    [FromQuery]
    public Guid CourseId { get; set; }

    [FromQuery]
    public Guid UserId { get; set; }
}