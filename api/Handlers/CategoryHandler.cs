using api.Requests;
using Core.Interfaces;
using Mediator;

namespace api.Handlers;

public class CategoryHandler : IRequestHandler<GetCategoriesRequest, IResult>, IRequestHandler<CreateCategoryRequest, IResult>
{
    private readonly ICategoryRepository _categoryRepository;

    public CategoryHandler(ICategoryRepository categoryRepository)
    {
        _categoryRepository = categoryRepository;
    }

    public async ValueTask<IResult> Handle(GetCategoriesRequest request, CancellationToken cancellationToken)
    {
        return Results.Ok(await _categoryRepository.GetCategories(cancellationToken));
    }

    public async ValueTask<IResult> Handle(CreateCategoryRequest request, CancellationToken cancellationToken)
    {
        if (request.Category == null)
        {
            return Results.BadRequest();
        }
        return Results.Ok(await _categoryRepository.CreateCategory(request.Category, cancellationToken));
    }
}