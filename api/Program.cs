using api;
using api.Mappers;
using api.Requests;
using Bogus;
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
builder.Services.AddSingleton(new ApiMapper());

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<BachelorDbContext>();
    if (context.Database.GetPendingMigrations().Any())
        context.Database.Migrate();
    
    if (!context.Courses.Any())
        Seed(context);
}

app.UseSpaStaticFiles();
app.MapWhen(x => !((x.Request.Path.Value?.StartsWith("/api") ?? false)
                 || (x.Request.Path.Value?.StartsWith("/swagger") ?? false)), b =>
{
    b.UseSpa(c =>
    {
        if (builder.Environment.IsDevelopment()) c.UseProxyToSpaDevelopmentServer("http://localhost:3000/");
    });
});

app.UseSwagger();
app.UseSwaggerUI();

var group = app.MapGroup("/api");

group.MapGet("/hello", () => Results.Json(new { text = "Hello from server!!" }));

group.MediateGet<GetUserRequest>("/user/{userId:guid}", "User", typeof(User));
group.MediateGet<GetAllUsersRequest>("/user", "User", typeof(List<User>));
group.MediatePost<CreatUserRequest>("/user", "User", typeof(User));

group.MediateGet<GetCategoriesRequest>("/category", "Category", typeof(List<Category>));
group.MediatePost<CreateCategoryRequest>("/category", "Category", typeof(Category));

group.MediateGet<GetTypesRequest>("/type", "Type", typeof(List<CourseType>));
group.MediatePost<CreateTypeRequest>("/type", "Type", typeof(CourseType));

group.MediateGet<GetSkillsRequest>("/skill", "Skill", typeof(List<Skill>));
group.MediatePost<CreateSkillRequest>("/skill", "Skill", typeof(Skill));

group.MediateGet<GetAllLanguagesRequest>("/language", "Language", typeof(List<string>));

group.MediateGet<GetCourseRequest>("/course/{courseId:guid}", "Course", typeof(Course));
group.MediateGet<GetAllCoursesRequest>("/course", "Course", typeof(List<Course>));
group.MediatePost<PostQueryCourseRequest>("/course/query", "Course", typeof(List<Course>));
group.MediatePost<CreateCourseRequest>("/course", "Course", typeof(Course));

group.MediatePost<AddCourseToUserRequest>("/enrollment","Enrollment");

app.Run();



void Seed(BachelorDbContext context)
{
    var categoriesFaker = new Faker<Category>()
        .RuleFor(m => m.Id, _ => Guid.NewGuid())
        .RuleFor(m => m.Name, f => f.Commerce.Categories(1).First())
        .RuleFor(m => m.Description, f => f.Lorem.Sentence());

    var providerFaker = new Faker<Provider>()
        .RuleFor(m => m.Id, _ => Guid.NewGuid())
        .RuleFor(m => m.Name, f => f.Company.CompanyName())
        .RuleFor(m => m.Description, f => f.Lorem.Sentence());


    var skillFaker = new Faker<Skill>()
        .RuleFor(m => m.Id, _ => Guid.NewGuid())
        .RuleFor(m => m.Name, f => f.Company.CompanyName())
        .RuleFor(m => m.Description, f => f.Lorem.Sentence());

    var tagFaker = new Faker<Tag>()
        .RuleFor(m => m.Id, _ => Guid.NewGuid())
        .RuleFor(m => m.Name, f => f.Company.CompanyName());

    context.Categories.AddRange(categoriesFaker.Generate(10));
    context.Providers.AddRange(providerFaker.Generate(10));
    context.Tags.AddRange(tagFaker.Generate(10));
    context.Skills.AddRange(skillFaker.Generate(10));
    context.CourseTypes.Add(new CourseType { Id = Guid.NewGuid(), Name = "web" });
    context.SaveChanges();

    var course = new Faker<Course>()
        .StrictMode(true)
        .RuleFor(m => m.Id, _ => Guid.NewGuid())
        .RuleFor(m => m.Language, _ => "English")
        .RuleFor(m => m.Type, _ => context.CourseTypes.First())
        .RuleFor(m => m.Description, f => f.Lorem.Paragraph())
        .RuleFor(m => m.Level, f => f.PickRandom(1, 2, 3))
        .RuleFor(m => m.Duration, f => f.Date.Timespan(new TimeSpan(12, 0, 0)))
        .RuleFor(m => m.WbsCode, _ => "abc123")
        .RuleFor(m => m.Name, f => f.Commerce.ProductName())
        .RuleFor(m => m.Categories, f => new List<Category> { f.PickRandom(context.Categories.ToArray()) })
        .RuleFor(m => m.Provider, f => f.PickRandom(context.Providers.ToArray()))
        .RuleFor(m => m.Price, f => f.Commerce.Price(1).First())
        .RuleFor(m => m.Tags, f => new List<Tag> { f.PickRandom(context.Tags.ToArray()) })
        .RuleFor(m => m.Skills, f => new List<Skill> { f.PickRandom(context.Skills.ToArray()) });

    // generate 100 items
    var courses = course.Generate(100);

    context.AddRange(courses);

    context.SaveChanges();
}