using api.Requests;
using Core.Interfaces;
using Mediator;

namespace api.Handlers;

public class SkillHandler : IRequestHandler<GetSkillsRequest, IResult>, IRequestHandler<CreateSkillRequest,IResult>
{
    private readonly ISkillRepository _skillRepository;

    public SkillHandler(ISkillRepository skillRepository)
    {
        _skillRepository = skillRepository;
    }

    public async ValueTask<IResult> Handle(GetSkillsRequest request, CancellationToken cancellationToken)
    {
        return Results.Ok(await _skillRepository.GetSkills(cancellationToken));
    }

    public async ValueTask<IResult> Handle(CreateSkillRequest request, CancellationToken cancellationToken)
    {
        if(request.skill == null){
            return Results.BadRequest();
        }
        return Results.Ok(await _skillRepository.CreateSkill(request.skill,cancellationToken));
    }
}