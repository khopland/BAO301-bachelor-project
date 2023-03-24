using api.Models;
using Microsoft.AspNetCore.Mvc;

namespace api.Requests;

public class CreatUserRequest : IHttpRequest
{
    [FromBody] public PostUser? User { get; init; }
}