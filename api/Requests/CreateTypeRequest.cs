using Core;
using Core.Models;
using Microsoft.AspNetCore.Mvc;

namespace api.Requests;

public class CreateTypeRequest : IHttpRequest
{
    [FromBody]
    public CourseType? Type { get; set; }
}