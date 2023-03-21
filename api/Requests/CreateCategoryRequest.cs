using Core;
using Core.Models;
using Microsoft.AspNetCore.Mvc;

namespace api.Requests;

public class CreateCategoryRequest : IHttpRequest
{
    [FromBody]
    public Category? Category { get; set; }
}