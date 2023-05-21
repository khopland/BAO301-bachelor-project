using Core.Models;
using Microsoft.AspNetCore.Mvc;

namespace api.Requests;

public class CreateCourseRequest : IHttpRequest
{
    [FromBody]
    public Course Course { get; set; } = default!;
}