using api.Requests;
using Core.Interfaces;
using Mediator;

namespace api.Handlers;

public class CourseHandler : IRequestHandler<GetAllCoursesRequest, IResult>, IRequestHandler<GetCourseRequest, IResult>,
    IRequestHandler<PostQueryCourseRequest, IResult>, IRequestHandler<CreateCourseRequest,IResult>
{
    private readonly ICourseRepository _courseRepository;

    public CourseHandler(ICourseRepository courseRepository)
    {
        _courseRepository = courseRepository;
    }

    public async ValueTask<IResult> Handle(GetAllCoursesRequest request, CancellationToken cancellationToken)
    {
        return Results.Ok(await _courseRepository.GetAllCourses(cancellationToken));
    }

    public async ValueTask<IResult> Handle(GetCourseRequest request, CancellationToken cancellationToken)
    {
        return Results.Ok( await _courseRepository.GetCourseById(request.CourseId,cancellationToken));
    }

    public async ValueTask<IResult> Handle(PostQueryCourseRequest request, CancellationToken cancellationToken)
    {
        return Results.Ok( await _courseRepository.QueryCourses(request.Query,cancellationToken));
    }

    public async ValueTask<IResult> Handle(CreateCourseRequest request, CancellationToken cancellationToken)
    {
        return Results.Ok(await _courseRepository.CreateCourse(request.Course, cancellationToken));
    }
}