using Core.Models;

namespace Core.Interfaces;

public interface ISkillRepository
{
    public Task<List<Skill>> GetSkills(CancellationToken cancellationToken);
    public Task<Skill> CreateSkill(Skill skill,CancellationToken cancellationToken);
    public Task<bool> CheckIfSkillExsists(Guid skillId,CancellationToken cancellationToken);
}