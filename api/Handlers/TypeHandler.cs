using api.Requests;
using Core.Interfaces;
using Mediator;

namespace api.Handlers;

public class TypeHandler : IRequestHandler<GetTypesRequest, IResult>, IRequestHandler<CreateTypeRequest,IResult>
{
    private readonly ICourseTypeRepository _typeRepository;

    public TypeHandler(ICourseTypeRepository typeRepository)
    {
        _typeRepository = typeRepository;
    }

    public async ValueTask<IResult> Handle(GetTypesRequest request, CancellationToken cancellationToken)
    {
        return Results.Ok(await _typeRepository.GetCourseTypes(cancellationToken));
    }

    public async ValueTask<IResult> Handle(CreateTypeRequest request, CancellationToken cancellationToken)
    {
        if(request.Type == null){
            return Results.BadRequest();
        }
        return Results.Ok(await _typeRepository.CreateCourseType(request.Type,cancellationToken));
    }
}