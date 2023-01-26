using backend;
using backend.Interfaces;
using backend.Requests;
using backend.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddMediator();
builder.Services.AddSingleton<IWhetherService, WhetherService>();

var app = builder.Build();

app.MediateGet<ExampleRequest>("/example/{name}");
app.MediateGet<WhetherRequest>("/{city}");

app.Run();
