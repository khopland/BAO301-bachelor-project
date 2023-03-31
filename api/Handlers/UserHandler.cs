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
        var user = await _userRepository.GetUser(request.UserId, cancellationToken);
        return Results.Ok(user);
    }

    public async ValueTask<IResult> Handle(CreatUserRequest request, CancellationToken cancellationToken)
    {
        if (request.User == null)
            return Results.BadRequest();

        return Results.Ok(await _userRepository.CreateUser(_mapper.PostUserToUser(request.User), cancellationToken));
    }

    public async ValueTask<IResult> Handle(GetAllUsersRequest request, CancellationToken cancellationToken)
    {
        return Results.Ok(await _userRepository.GetUsers(cancellationToken));
    }
}