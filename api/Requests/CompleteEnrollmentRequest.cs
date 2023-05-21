using api.Models;
using Microsoft.AspNetCore.Mvc;

namespace api.Requests;

public class CompleteEnrollmentRequest : IHttpRequest
{
    [FromBody]
    public AddCourseToUser CourseToUser { get; set; } = default!;
}