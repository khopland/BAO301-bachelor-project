using System.Diagnostics.CodeAnalysis;
using api.Requests;
using Mediator;

namespace api;

public static class MinimalExtensions
{
    public static IEndpointRouteBuilder MediateGet<TRequest>(this IEndpointRouteBuilder app, [StringSyntax("route")] string template)
        where TRequest : IHttpRequest
    {
        app.MapGet(template,
            async (IMediator mediator, [AsParameters] TRequest request) => await mediator.Send(request))
            .WithOpenApi();
        return app;
    }

    public static IEndpointRouteBuilder MediatePost<TRequest>(this IEndpointRouteBuilder app, [StringSyntax("route")] string template)
        where TRequest : IHttpRequest
    {
        app.MapPost(template,
            async (IMediator mediator, [AsParameters] TRequest request) => await mediator.Send(request))
            .WithOpenApi();
        return app;
    }

    public static IEndpointRouteBuilder MediatePut<TRequest>(this IEndpointRouteBuilder app, [StringSyntax("route")] string template)
        where TRequest : IHttpRequest
    {
        app.MapPut(template,
            async (IMediator mediator, [AsParameters] TRequest request) => await mediator.Send(request))
            .WithOpenApi();
        return app;
    }
}