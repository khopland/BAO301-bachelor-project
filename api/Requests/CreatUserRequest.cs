using Core;
using Core.Models;
using Microsoft.AspNetCore.Mvc;

namespace api.Requests;

public class CreatUserRequest : IHttpRequest
{
    [FromBody]
    public User? User { get; set; }
}