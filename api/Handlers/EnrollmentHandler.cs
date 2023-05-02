using api.Mappers;
using api.Requests;
using Core.Interfaces;
using Mediator;

namespace api.Handlers;

public class EnrollmentHandler : IRequestHandler<AddCourseToUserRequest, IResult>,
    IRequestHandler<GetEnrollmentByUserIdAndCourseId, IResult>, IRequestHandler<CompleteEnrollmentRequest, IResult>
{
    private readonly IUserRepository _userRepository;
    private readonly ICourseRepository _courseRepository;
    private readonly IEnrollmentRepository _enrollmentRepository;
    private readonly ApiMapper _mapper;

    public EnrollmentHandler(IUserRepository userRepository, ICourseRepository courseRepository, ApiMapper mapper,
        IEnrollmentRepository enrollmentRepository)
    {
        _userRepository = userRepository;
        _courseRepository = courseRepository;
        _mapper = mapper;
        _enrollmentRepository = enrollmentRepository;
    }

    public async ValueTask<IResult> Handle(AddCourseToUserRequest request, CancellationToken cancellationToken)
    {
        var course = await _courseRepository.GetCourseById(request.CourseToUser.CourseId, cancellationToken);
        if (course == null)
        {
            return Results.BadRequest($"cant find course with id:{request.CourseToUser.CourseId}");
        }

        var user = await _userRepository.GetUserById(request.CourseToUser.UserId, cancellationToken);
        if (user == null)
        {
            return Results.BadRequest($"cant find user with id:{request.CourseToUser.CourseId}");
        }

        if (user.Enrollments.Any(x => x.Course.Id == course.Id))
        {
            return Results.BadRequest($"User already enrolled in course with id:{request.CourseToUser.CourseId}");
        }

        await _userRepository.AddEnrollmentToUser(user, course, cancellationToken);

        return Results.Ok();
    }

    public async ValueTask<IResult> Handle(GetEnrollmentByUserIdAndCourseId request,
        CancellationToken cancellationToken)
    {
        if (request.CourseId == null || request.UserId == null)
            return Results.BadRequest("cant find query parameter userId or courseId");

        var enrollment =
            await _enrollmentRepository.GetEnrollmentByUserIdAndCourseId(request.CourseId, request.UserId,
                cancellationToken);

        return enrollment == null
            ? Results.NotFound()
            : Results.Ok(_mapper.EnrollmentToDto(enrollment));
    }

    public async ValueTask<IResult> Handle(CompleteEnrollmentRequest request, CancellationToken cancellationToken)
    {
        var course = await _courseRepository.GetCourseById(request.CourseToUser.CourseId, cancellationToken);
        if (course == null)
        {
            return Results.BadRequest($"cant find course with id:{request.CourseToUser.CourseId}");
        }

        var user = await _userRepository.GetUserById(request.CourseToUser.UserId, cancellationToken);
        if (user == null)
        {
            return Results.BadRequest($"cant find user with id:{request.CourseToUser.CourseId}");
        }

        var enrollmentId = user.Enrollments.FirstOrDefault(x => x.Course.Id == course.Id)?.Id ?? null;
        if (enrollmentId == null)
        {
            return Results.BadRequest($"cant find enrollment with id:{enrollmentId}");
        }

        await _userRepository.CompleteEnrollmentForUser(enrollmentId ?? Guid.Empty, cancellationToken);

        return Results.Ok();
    }
}