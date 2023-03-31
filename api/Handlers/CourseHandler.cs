using api.Mappers;
using api.Requests;
using Core.Interfaces;
using Mediator;

namespace api.Handlers;

public class CourseHandler : IRequestHandler<GetAllCoursesRequest, IResult>, IRequestHandler<GetCourseRequest, IResult>,
    IRequestHandler<PostQueryCourseRequest, IResult>, IRequestHandler<CreateCourseRequest, IResult>,
    IRequestHandler<GetAllLanguagesRequest, IResult>
{
    private readonly ICourseRepository _courseRepository;
    private readonly ApiMapper _mapper;

    public CourseHandler(ICourseRepository courseRepository, ApiMapper mapper)
    {
        _courseRepository = courseRepository;
        _mapper = mapper;
    }

    public async ValueTask<IResult> Handle(GetAllCoursesRequest request, CancellationToken cancellationToken)
    {
        var result = await _courseRepository.GetAllCourses(cancellationToken);
        return Results.Ok(result.ConvertAll(c => _mapper.CourseToDto(c)));
    }

    public async ValueTask<IResult> Handle(GetCourseRequest request, CancellationToken cancellationToken)
    {
        var result = await _courseRepository.GetCourseById(request.CourseId, cancellationToken);
        return result == null
            ? Results.NotFound()
            : Results.Ok(_mapper.CourseToDto(result));
    }

    public async ValueTask<IResult> Handle(PostQueryCourseRequest request, CancellationToken cancellationToken)
    {
        var result = await _courseRepository.QueryCourses(request.Query, cancellationToken);
        return Results.Ok(result.ConvertAll(c => _mapper.CourseToDto(c)));
    }

    public async ValueTask<IResult> Handle(CreateCourseRequest request, CancellationToken cancellationToken)
    {
        var result = await _courseRepository.CreateCourse(request.Course, cancellationToken);
        return Results.Ok(_mapper.CourseToDto(result));
    }

    public async ValueTask<IResult> Handle(GetAllLanguagesRequest request, CancellationToken cancellationToken)
    {
        return Results.Ok(await _courseRepository.GetLanguages(cancellationToken));
    }
}