using api.Mappers;
using api.Requests;
using Core.Interfaces;
using Mediator;

namespace api.Handlers;

public class UserHandler : IRequestHandler<GetUserRequest, IResult>, IRequestHandler<CreatUserRequest, IResult>,
    IRequestHandler<GetAllUsersRequest, IResult>, IRequestHandler<AddCourseToUserRequest, IResult>
{
    private readonly IUserRepository _userRepository;
    private readonly ICourseRepository _courseRepository;
    private readonly ApiMapper _mapper;
    public UserHandler(IUserRepository userRepository, ICourseRepository courseRepository, ApiMapper mapper)
    {
        _userRepository = userRepository;
        _courseRepository = courseRepository;
        _mapper = mapper;
    }

    public async ValueTask<IResult> Handle(GetUserRequest request, CancellationToken cancellationToken)
    {
        var user = await _userRepository.GetUserById(request.UserId, cancellationToken);
        return user == null 
            ? Results.NotFound() 
            : Results.Ok(_mapper.UserToDto(user));
    }

    public async ValueTask<IResult> Handle(CreatUserRequest request, CancellationToken cancellationToken)
    {
        return request.User == null 
            ? Results.BadRequest("user not defined") 
            : Results.Ok(await _userRepository.CreateUser(_mapper.PostUserToUser(request.User), cancellationToken));
    }

    public async ValueTask<IResult> Handle(GetAllUsersRequest request, CancellationToken cancellationToken)
    {
        var users = await _userRepository.GetUsers(cancellationToken);

        return Results.Ok(users.ConvertAll(u => _mapper.UserToDto(u)));
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
        await _userRepository.AddEnrollmentToUser(user, course, cancellationToken);

        return Results.Ok();
    }
}