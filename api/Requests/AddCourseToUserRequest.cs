using api.Models;
using Microsoft.AspNetCore.Mvc;

namespace api.Requests;

public class AddCourseToUserRequest : IHttpRequest
{
    [FromBody] 
    public AddCourseToUser CourseToUser { get; set; }
}