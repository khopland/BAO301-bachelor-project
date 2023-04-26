using api.Models;
using Core.Models;
using Microsoft.AspNetCore.Mvc;

namespace api.Requests;

public class CompleteEnrollmentRequest : IHttpRequest
{
    [FromBody] 
    public AddCourseToUser CourseToUser { get; set; }
}