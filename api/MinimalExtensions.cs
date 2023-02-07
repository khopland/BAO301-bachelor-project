using System.Diagnostics.CodeAnalysis;
using api.Requests;
using Mediator;

namespace api;

public static class MinimalExtensions
{
    public static WebApplication MediateGet<TRequest>(this WebApplication app, [StringSyntax("route")] string template)
        where TRequest : IHttpRequest
    {
        app.MapGet(template,
            async (IMediator mediator, [AsParameters] TRequest request) => await mediator.Send(request));
        return app;
    }

    public static WebApplication MediatePost<TRequest>(this WebApplication app, [StringSyntax("route")] string template)
        where TRequest : IHttpRequest
    {
        app.MapPost(template,
            async (IMediator mediator, [AsParameters] TRequest request) => await mediator.Send(request));
        return app;
    }

    public static WebApplication MediatePut<TRequest>(this WebApplication app, [StringSyntax("route")] string template)
        where TRequest : IHttpRequest
    {
        app.MapPut(template,
            async (IMediator mediator, [AsParameters] TRequest request) => await mediator.Send(request));
        return app;
    }
}