using api.Mappers;
using api.Requests;
using Core.Interfaces;
using Core.Models;
using Mediator;

namespace api.Handlers;

public class RecommendationHandler : IRequestHandler<GetRecommendationRequest, IResult>
{
    private readonly IUserRepository _userRepository;
    private readonly ICourseRepository _courseRepository;
    private readonly ApiMapper _mapper;
    public RecommendationHandler(IUserRepository userRepository, ICourseRepository courseRepository, ApiMapper mapper)
    {
        _userRepository = userRepository;
        _courseRepository = courseRepository;
        _mapper = mapper;
    }
    public async ValueTask<IResult> Handle(GetRecommendationRequest request, CancellationToken cancellationToken)
    {
        var user = await _userRepository.GetUserById(request.UserId, cancellationToken);
        if (user == null) return Results.BadRequest($"Can not find user with ID:{request.UserId}");
        var courses = await _courseRepository.GetAllCourses(cancellationToken);

        var recommendedCourses = courses
            .Where(c => user.Enrollments.All(e => e.Course.Id != c.Id))
            .Select(c => new
            {
                Course = c,
                Score = ScoreCourse(c, user)
            })
            .OrderByDescending(c => c.Score)
            .Select(c => c.Course)
            .Take(10)
            .ToList();

        return Results.Ok(recommendedCourses.ConvertAll(c => _mapper.CourseToDto(c)));
    }

    private static int ScoreCourse(Course course, User user)
    {
        return user.Interests.Where(interest => course.Tags.Any(t => t.Id == interest.Id)).Sum(_ => 3)
               + user.Skills.Where(skill => course.Skills.Any(s => s.Id == skill.Id)).Sum(_ => 2)
               + course.Categories.Count(category => category.Segment.Name == user.Segment.Name);
    }
}