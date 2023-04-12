using api.Mappers;
using api.Requests;
using Core.Interfaces;
using Mediator;

namespace api.Handlers;

public class UserHandler : IRequestHandler<GetUserRequest, IResult>, IRequestHandler<CreatUserRequest, IResult>,
    IRequestHandler<GetAllUsersRequest, IResult>
{
    private readonly IUserRepository _userRepository;
    private readonly ApiMapper _mapper;
    public UserHandler(IUserRepository userRepository, ApiMapper mapper)
    {
        _userRepository = userRepository;
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
}