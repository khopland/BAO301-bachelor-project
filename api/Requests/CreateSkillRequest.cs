using Core.Models;
using Microsoft.AspNetCore.Mvc;

namespace api.Requests;

public class CreateSkillRequest : IHttpRequest
{
    [FromBody]
    public Skill? skill { get; set; }
}