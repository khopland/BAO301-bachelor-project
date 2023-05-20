using api.Models;
using Microsoft.AspNetCore.Mvc;

namespace api.Requests;

public class AddInterestsToUserRequest : IHttpRequest
{
    [FromBody]
    public AddInterestsToUser AddInterestsToUser { get; set; }
}   