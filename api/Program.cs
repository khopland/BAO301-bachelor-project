using api;
using api.Requests;
using Core.Interfaces;
using Infrastructure.Data;
using Infrastructure.Repository;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
var configuration = builder.Configuration;

builder.Services.AddSpaStaticFiles(c => { c.RootPath = "dist"; });
builder.Services.AddMediator(o => { o.ServiceLifetime = ServiceLifetime.Scoped; });
builder.Services.AddDbContext<BachelorDbContext>(o => 
    o.UseNpgsql(configuration["postgresConnectionString"]));

builder.Services.AddScoped<IUserRepository, UserRepository>();

builder.Services.AddScoped<ICategoryRepository, CategoryRepository>();
builder.Services.AddScoped<ISkillRepository, SkillRepository>();
builder.Services.AddScoped<ICourseTypeRepository, CourseTypeRepository>();

var app = builder.Build();
app.UseSpaStaticFiles();
app.MapWhen(x => !x.Request.Path.Value?.StartsWith("/api") ?? true, b =>
{
    b.UseSpa(c =>
    {
        if (builder.Environment.IsDevelopment()) c.UseProxyToSpaDevelopmentServer("http://localhost:3000/");
    });
});

var group = app.MapGroup("/api");

group.MapGet("/hello", () => Results.Json(new { text = "Hello from server!!" }));

group.MediateGet<GetUserRequest>("/user/{userId:guid}");
group.MediateGet<GetAllUsersRequest>("/user");
group.MediatePost<CreatUserRequest>("/user");

group.MediateGet<GetCategoriesRequest>("/Category");
group.MediatePost<CreateCategoryRequest>("/Category");

group.MediateGet<GetTypesRequest>("/type");
group.MediatePost<CreateTypeRequest>("/type");

group.MediateGet<GetSkillsRequest>("/skill");
group.MediatePost<CreateSkillRequest>("/skill");

app.Run();