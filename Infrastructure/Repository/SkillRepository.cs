using Core.Interfaces;
using Core.Models;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Repository;

public class SkillRepository : ISkillRepository
{
    private readonly BachelorDbContext _dbContext;

    public SkillRepository(BachelorDbContext dbContext)
    {
        _dbContext = dbContext;
    }
    public async Task<bool> CheckIfSkillExsists(Guid skillId, CancellationToken cancellationToken)
    {
        return await _dbContext.Skills.AnyAsync(x => x.Id == skillId, cancellationToken);
    }

    public async Task<Skill> CreateSkill(Skill skill, CancellationToken cancellationToken)
    {
        var res = await _dbContext.Skills.AddAsync(skill, cancellationToken);
        await _dbContext.SaveChangesAsync(cancellationToken);
        return res.Entity;
    }

    public async Task<List<Skill>> GetSkills(CancellationToken cancellationToken)
    {
        return await _dbContext.Skills.ToListAsync(cancellationToken);
    }
}