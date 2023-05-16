using api;
using api.Dtos;
using api.Mappers;
using api.Requests;
using Core.Interfaces;
using Core.Models;
using Infrastructure.Data;
using Infrastructure.Repository;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Any;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);
var configuration = builder.Configuration;

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.MapType<TimeSpan>(() => new OpenApiSchema { Type = "string", Example = new OpenApiString("00:00:00") });
});
builder.Services.AddSpaStaticFiles(c => { c.RootPath = "dist"; });
builder.Services.AddMediator(o => { o.ServiceLifetime = ServiceLifetime.Scoped; });
builder.Services.AddDbContext<BachelorDbContext>(o =>
    o.UseNpgsql(configuration["postgresConnectionString"]));

builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<ICourseRepository, CourseRepository>();
builder.Services.AddScoped<ICategoryRepository, CategoryRepository>();
builder.Services.AddScoped<ISkillRepository, SkillRepository>();
builder.Services.AddScoped<ICourseTypeRepository, CourseTypeRepository>();
builder.Services.AddScoped<IEnrollmentRepository, EnrollmentRepository>();
builder.Services.AddScoped<IProviderRepository, ProviderRepository>();
builder.Services.AddScoped<ITagRepository, TagRepository>();

builder.Services.AddSingleton(new ApiMapper());

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<BachelorDbContext>();
    if (context.Database.GetPendingMigrations().Any())
        context.Database.Migrate();

    if (!context.Courses.Any())
        context.SeedData();
}

app.UseSpaStaticFiles();
app.MapWhen(x => !(x.Request.Path.Value?.StartsWith("/api") ?? false), b =>
{
    b.UseSpa(c =>
    {
        if (builder.Environment.IsDevelopment()) c.UseProxyToSpaDevelopmentServer("http://localhost:3000/");
    });
});

app.UseSwagger(c =>
{
    c.RouteTemplate = "api/swagger/{documentname}/swagger.json";
});
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/api/swagger/v1/swagger.json", "My Cool API V1");
    c.RoutePrefix = "api/swagger";
});

var group = app.MapGroup("/api");

group.MapGet("/hello", () => Results.Json(new { text = "Hello from server!!" }));

group.MediateGet<GetUserRequest>("/user/{userId:guid}", "User", typeof(UserDto));
group.MediateGet<GetAllUsersRequest>("/user", "User", typeof(List<UserDto>));
group.MediatePost<CreatUserRequest>("/user", "User", typeof(UserDto));

group.MediateGet<GetCategoriesRequest>("/category", "Category", typeof(List<CategoryDto>));
group.MediatePost<CreateCategoryRequest>("/category", "Category", typeof(CategoryDto));

group.MediateGet<GetTypesRequest>("/type", "Type", typeof(List<TypeDto>));
group.MediatePost<CreateTypeRequest>("/type", "Type", typeof(TypeDto));

group.MediateGet<GetSkillsRequest>("/skill", "Skill", typeof(List<SkillDto>));
group.MediatePost<CreateSkillRequest>("/skill", "Skill", typeof(SkillDto));

group.MediateGet<GetAllLanguagesRequest>("/language", "Language", typeof(List<string>));

group.MediateGet<GetCourseRequest>("/course/{courseId:guid}", "Course", typeof(CourseDto));
group.MediateGet<GetAllCoursesRequest>("/course", "Course", typeof(List<CourseDto>));
group.MediatePost<PostQueryCourseRequest>("/course/query", "Course", typeof(List<CourseDto>));
group.MediatePost<CreateCourseRequest>("/course", "Course", typeof(CourseDto));

group.MediatePost<AddCourseToUserRequest>("/enrollment", "Enrollment");
group.MediatePost<CompleteEnrollmentRequest>("/enrollment/complete", "Enrollment");
group.MediateGet<GetEnrollmentByUserIdAndCourseId>("/enrollment", "Enrollment", typeof(EnrollmentDto));

group.MediateGet<GetProvidersRequest>("/provider", "Provider", typeof(List<Provider>));

group.MediateGet<GetTagsRequest>("/tag", "Tag", typeof(List<Tag>));

app.Run();
