using api.Requests;
using Mediator;
using System.Diagnostics.CodeAnalysis;

namespace api;

public static class MinimalExtensions
{
    public static IEndpointRouteBuilder MediateGet<TRequest>(this IEndpointRouteBuilder app, [StringSyntax("route")] string template,
        string? groupName = null,
        Type? responseType = null)
        where TRequest : IHttpRequest
    {
        var endpoint = app.MapGet(template,
            async (IMediator mediator, [AsParameters] TRequest request) => await mediator.Send(request));
        if (groupName != null)
            endpoint.WithTags(groupName);

        if (responseType != null)
            endpoint.Produces(200, responseType);
        endpoint.Produces(404);
        endpoint.Produces(500);

        endpoint.WithOpenApi();
        return app;
    }

    public static IEndpointRouteBuilder MediatePost<TRequest>(this IEndpointRouteBuilder app, [StringSyntax("route")] string template,
        string? groupName = null,
        Type? responseType = null)
        where TRequest : IHttpRequest
    {
        var endpoint = app.MapPost(template,
            async (IMediator mediator, [AsParameters] TRequest request) => await mediator.Send(request));
        if (groupName != null)
            endpoint.WithTags(groupName);

        if (responseType != null)
            endpoint.Produces(200, responseType);
        endpoint.Produces(400);
        endpoint.Produces(500);

        endpoint.WithOpenApi();
        return app;
    }

    public static IEndpointRouteBuilder MediatePut<TRequest>(this IEndpointRouteBuilder app, [StringSyntax("route")] string template,
        string? groupName = null,
        Type? responseType = null)
        where TRequest : IHttpRequest
    {
        var endpoint = app.MapPut(template,
           async (IMediator mediator, [AsParameters] TRequest request) => await mediator.Send(request));
        if (groupName != null)
            endpoint.WithTags(groupName);

        if (responseType != null)
            endpoint.Produces(200, responseType);
        endpoint.Produces(400);
        endpoint.Produces(500);

        endpoint.WithOpenApi();
        return app;
    }
}