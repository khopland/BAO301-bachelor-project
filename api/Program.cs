using api;
using api.Interfaces;
using api.Requests;
using api.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddMediator();
builder.Services.AddSingleton<IWhetherService, WhetherService>();

builder.Services.AddSpaStaticFiles(c => { c.RootPath = "dist"; });

var app = builder.Build();

app.MediateGet<ExampleRequest>("/api/example/{name}");
app.MediateGet<WhetherRequest>("/api/{city}");

app.UseSpaStaticFiles();

app.UseSpa(c =>
{
    if (builder.Environment.IsDevelopment()) c.UseProxyToSpaDevelopmentServer("http://localhost:3000/");
});

app.Run();