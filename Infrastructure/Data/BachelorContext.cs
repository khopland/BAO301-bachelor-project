using Bogus;
using Core.Models;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data;

public class BachelorDbContext : DbContext
{
    public BachelorDbContext(DbContextOptions options) : base(options)
    {
    }

    public DbSet<User> Users { get; set; } = default!;
    public DbSet<Course> Courses { get; set; } = default!;
    public DbSet<CourseType> CourseTypes { get; set; } = default!;
    public DbSet<Enrollment> Enrollments { get; set; } = default!;
    public DbSet<Category> Categories { get; set; } = default!;
    public DbSet<Segment> Segments { get; set; } = default!;
    public DbSet<Provider> Providers { get; set; } = default!;
    public DbSet<Tag> Tags { get; set; } = default!;
    public DbSet<Skill> Skills { get; set; } = default!;

    public DbSet<Contact> Contacts { get; set; } = default!;

    public void SeedData()
    {

        var strategyAndConsultingSegment = new Segment
        {
            Id = Guid.NewGuid(),
            Name = "Strategy and Consulting",
            Description = "Advising businesses on how to respond to market opportunities and challenges.",
            Categories = new List<Category>
            {
                new() { Id = Guid.NewGuid(), Name = "Business Strategy", Description = "Courses teaching strategic planning, competitive analysis, and business model development." },
                new() { Id = Guid.NewGuid(), Name = "Management Consulting", Description = "Instruction on how to help organizations improve their performance, primarily through the analysis of existing organizational problems and the development of plans for improvement." },
                new() { Id = Guid.NewGuid(), Name = "Financial Analysis", Description = "Courses focused on understanding financial statements, budgeting, forecasting, and financial decision-making." },
                new() { Id = Guid.NewGuid(), Name = "Market Research", Description = "Training in how to gather, analyze, and interpret information about a market, about a product or service to be offered for sale in that market." },
            }
        };

        var interactiveSegment = new Segment
        {
            Id = Guid.NewGuid(),
            Name = "Song",
            Description = "Focuse on customer experience and marketing.",
            Categories = new List<Category>
            {
                new() { Id = Guid.NewGuid(), Name = "Digital Marketing", Description = "Topics like SEO, SEM, content marketing, social media marketing, email marketing, and more." },
                new() { Id = Guid.NewGuid(), Name = "User Experience Design", Description = "Courses teaching design thinking, prototyping, usability testing, and other UX methodologies." },
                new() { Id = Guid.NewGuid(), Name = "Customer Relationship Management", Description = "Training on CRM platforms and strategies to manage the company's interaction with potential and current customers." },
                new() { Id = Guid.NewGuid(), Name = "Social Media Management", Description = "Courses focused on how to create, schedule, analyze, and engage with content posted on social media platforms." },
            }
        };

        var technologySegment = new Segment
        {
            Id = Guid.NewGuid(),
            Name = "Technology",
            Description = "Offer technology solutions to clients.",
            Categories = new List<Category>
            {
                new() { Id = Guid.NewGuid(), Name = "Software Development", Description = "Courses on programming languages, software engineering principles, and development methodologies." },
                new() { Id = Guid.NewGuid(), Name = "IT Operations", Description = "Courses on the management and execution of IT systems and functions." },
                new() { Id = Guid.NewGuid(), Name = "Cyber Security", Description = "Courses on protecting systems, networks, and programs from digital attacks." },
                new() { Id = Guid.NewGuid(), Name = "Cloud Computing", Description = "Instruction on cloud services, platforms, and computing models like IaaS, PaaS, and SaaS." },
            }
        };

        var operationsSegment = new Segment
        {
            Id = Guid.NewGuid(),
            Name = "Operations",
            Description = "Business process services and infrastructure services.",
            Categories = new List<Category>
            {
                new() { Id = Guid.NewGuid(), Name = "Project Management", Description = "Courses teaching how to initiate, plan, execute, control, and close the work of a team to achieve specific goals and meet specific success criteria." },
                new() { Id = Guid.NewGuid(), Name = "Supply Chain Management", Description = "Courses focused on the management of the flow of goods and services, including all processes that transform raw materials into final products." },
                new() { Id = Guid.NewGuid(), Name = "Operational Excellence", Description = "Training on methodologies and strategies for continuous improvement in an organization." },
            }
        };

        var securitySegment = new Segment
        {
            Id = Guid.NewGuid(),
            Name = "Security",
            Description = "Cyber security solutions to protect clients' businesses from threats.",
            Categories = new List<Category>
            {
                new() { Id = Guid.NewGuid(), Name = "Information Security", Description = "Courses on protecting information from unauthorized access, disclosure, modification, or destruction." },
                new() { Id = Guid.NewGuid(), Name = "Network Security", Description = "Instruction on protecting the usability and integrity of your network and data." },
                new() { Id = Guid.NewGuid(), Name = "Risk Management", Description = "Training on identifying, evaluating, and prioritizing risks followed by coordinated and economical application of resources to minimize, monitor, and control the probability or impact of unfortunate events." },
                new() { Id = Guid.NewGuid(), Name = "Ethical Hacking", Description = "Courses teaching how to expose and patch up security vulnerabilities." },
            }
        };

        var otherSegment = new Segment
        {
            Id = Guid.NewGuid(),
            Name = "Other",
            Description = "Everything else.",
            Categories = new List<Category>
            {
                new() { Id = Guid.NewGuid(), Name = "Language and Communication", Description = "Covers different languages as well as business communication, negotiation skills, and presentation skills." },
                new() { Id = Guid.NewGuid(), Name = "Leadership and Management", Description = "Courses on strategic leadership, people management, change management, and decision-making." },
                new() { Id = Guid.NewGuid(), Name = "Diversity and Inclusion", Description = "Courses to promote understanding and respect for diverse cultures, races, genders, sexual orientations, and religions." },
                new() { Id = Guid.NewGuid(), Name = "Personal Development", Description = "Courses on time management, stress management, work-life balance, and other personal growth topics." },
                new() { Id = Guid.NewGuid(), Name = "Wellness and Fitness", Description = "Courses tailored to specific industries that Accenture serves like Banking, Healthcare, Retail, Energy, etc." },
                new() { Id = Guid.NewGuid(), Name = "Industry-Specific Knowledge", Description = "Courses tailored to specific industries that Accenture serves like Banking, Healthcare, Retail, Energy, etc." },
            }
        };

        var segments = new List<Segment>
        {
            strategyAndConsultingSegment,
            interactiveSegment,
            technologySegment,
            operationsSegment,
            securitySegment,
            otherSegment
        };

        var skills = new List<Skill>
        {
            // Business Strategy
            new() { Id = Guid.NewGuid(), Name = "Strategic Planning" },
            new() { Id = Guid.NewGuid(), Name = "Business Analysis" },
            new() { Id = Guid.NewGuid(), Name = "Competitive Analysis" },

            // Management Consulting
            new() { Id = Guid.NewGuid(), Name = "Organizational Development" },
            new() { Id = Guid.NewGuid(), Name = "Business Process Improvement" },

            // Financial Analysis
            new() { Id = Guid.NewGuid(), Name = "Budgeting" },
            new() { Id = Guid.NewGuid(), Name = "Financial Forecasting" },
            new() { Id = Guid.NewGuid(), Name = "Financial Risk Management" },

            // Market Research
            new() { Id = Guid.NewGuid(), Name = "Data Analysis" },
            new() { Id = Guid.NewGuid(), Name = "Qualitative Research" },
            new() { Id = Guid.NewGuid(), Name = "Quantitative Research" },

            //Digital Marketing
            new() { Id = Guid.NewGuid(), Name = "SEO" },
            new() { Id = Guid.NewGuid(), Name = "Online Advertising" },
            
            // User Experience Design
            new() { Id = Guid.NewGuid(), Name = "Prototyping & Wireframing" },
            new() { Id = Guid.NewGuid(), Name = "Usability Testing & User Research" },

            // Customer Relationship Management
            new() { Id = Guid.NewGuid(), Name = "Dynamics 365" },
            new() { Id = Guid.NewGuid(), Name = "CRM Platform Use & Management" },

            // Social Media Management
            new() { Id = Guid.NewGuid(), Name = "Platform-Specific Strategy (Facebook, Instagram, LinkedIn, etc.)" },
            new() { Id = Guid.NewGuid(), Name = "Social Media Content Creation & Curation" },
            
            // Software Development
            new() { Id = Guid.NewGuid(), Name = "Java Programming" },
            new() { Id = Guid.NewGuid(), Name = "Python Programming" },
            new() { Id = Guid.NewGuid(), Name = "C# Programming" },
            new() { Id = Guid.NewGuid(), Name = "JavaScript Programming" },

            // IT Operations
            new() { Id = Guid.NewGuid(), Name = "IT Service Management" },
            new() { Id = Guid.NewGuid(), Name = "Network Management" },

            // Cyber Security
            new() { Id = Guid.NewGuid(), Name = "Ethical Hacking" },
            new() { Id = Guid.NewGuid(), Name = "Information Security Management" },

            // Cloud Computing
            new() { Id = Guid.NewGuid(), Name = "Amazon AWS" },
            new() { Id = Guid.NewGuid(), Name = "Microsoft Azure" },

            // Project Management
            new() { Id = Guid.NewGuid(), Name = "Agile Project Management" },
            new() { Id = Guid.NewGuid(), Name = "Risk Management" },

            // Supply Chain Management
            new() { Id = Guid.NewGuid(), Name = "Logistics" },
            new() { Id = Guid.NewGuid(), Name = "Inventory Management" },

            // Operational Excellence
            new() { Id = Guid.NewGuid(), Name = "Lean Six Sigma" },
            new() { Id = Guid.NewGuid(), Name = "Continuous Improvement" },

            // Information Security
            new() { Id = Guid.NewGuid(), Name = "Cryptography" },
            new() { Id = Guid.NewGuid(), Name = "Security Architecture and Design" },

            // Network Security
            new() { Id = Guid.NewGuid(), Name = "Firewall Administration" },
            new() { Id = Guid.NewGuid(), Name = "Intrusion Detection" },

            // Risk Management
            new() { Id = Guid.NewGuid(), Name = "Risk Assessment" },
            new() { Id = Guid.NewGuid(), Name = "Risk Mitigation" },

            // Ethical Hacking
            new() { Id = Guid.NewGuid(), Name = "Penetration Testing" },
            new() { Id = Guid.NewGuid(), Name = "Vulnerability Assessment" },

            // Language and Communication
            new() { Id = Guid.NewGuid(), Name = "Business Communication" },
            new() { Id = Guid.NewGuid(), Name = "Public Speaking" },

            // Leadership and Management
            new() { Id = Guid.NewGuid(), Name = "Strategic Leadership" },
            new() { Id = Guid.NewGuid(), Name = "Team Management" },

            // Personal Development
            new() { Id = Guid.NewGuid(), Name = "Time Management" },
            new() { Id = Guid.NewGuid(), Name = "Emotional Intelligence" },

            // Industry Specific Knowledge
            new() { Id = Guid.NewGuid(), Name = "Public Sector Relations" },
            new() { Id = Guid.NewGuid(), Name = "Health Care Sector Relations" },
            
            // Wellness and Fitness
            new() { Id = Guid.NewGuid(), Name = "Nutrition" },
            new() { Id = Guid.NewGuid(), Name = "Yoga" },
        };

        var tags = new List<Tag>
        {
            // Business Strategy
            new() { Id = Guid.NewGuid(), Name = "Strategic Planning" },
            new() { Id = Guid.NewGuid(), Name = "Business Growth" },
            
            // Management Consulting
            new() { Id = Guid.NewGuid(), Name = "Business Consulting" },
            new() { Id = Guid.NewGuid(), Name = "Organizational Change" },

            // Financial Analysis
            new() { Id = Guid.NewGuid(), Name = "Financial Modeling" },
            new() { Id = Guid.NewGuid(), Name = "Investment Analysis" },

            // Market Research
            new() { Id = Guid.NewGuid(), Name = "Market Analysis" },
            new() { Id = Guid.NewGuid(), Name = "Consumer Behavior" },

            // Digital Marketing
            new() { Id = Guid.NewGuid(), Name = "Social Media Marketing" },
            new() { Id = Guid.NewGuid(), Name = "Search Engine Optimization (SEO)" },
        
            // User Experience Design
            new() { Id = Guid.NewGuid(), Name = "Design Thinking" },
            new() { Id = Guid.NewGuid(), Name = "Prototyping" },

            // Customer Relationship Management
            new() { Id = Guid.NewGuid(), Name = "Sales Funnels" },
            new() { Id = Guid.NewGuid(), Name = "Customer Data Analysis" },

            // Social Media Management
            new() { Id = Guid.NewGuid(), Name = "Content Creation" },
            new() { Id = Guid.NewGuid(), Name = "Social Media Advertising" },
            
            // Software Development
            new() { Id = Guid.NewGuid(), Name = "Backend Development" },
            new() { Id = Guid.NewGuid(), Name = "Frontend Development" },

            // IT Operations
            new() { Id = Guid.NewGuid(), Name = "IT Infrastructure" },
            new() { Id = Guid.NewGuid(), Name = "IT Compliance" },

            // Cyber Security
            new() { Id = Guid.NewGuid(), Name = "Cyber Threats" },
            new() { Id = Guid.NewGuid(), Name = "Data Privacy" },

            // Cloud Computing
            new() { Id = Guid.NewGuid(), Name = "Cloud Infrastructure" },
            new() { Id = Guid.NewGuid(), Name = "Cloud Security" },

            // Project Management
            new() { Id = Guid.NewGuid(), Name = "Project Coordination" },
            new() { Id = Guid.NewGuid(), Name = "Project Lifecycle" },

            // Supply Chain Management
            new() { Id = Guid.NewGuid(), Name = "Supply Chain Optimization" },
            new() { Id = Guid.NewGuid(), Name = "Supply Chain Risk" },

            // Operational Excellence
            new() { Id = Guid.NewGuid(), Name = "Process Optimization" },
            new() { Id = Guid.NewGuid(), Name = "Operational Efficiency" },

            // Information Security
            new() { Id = Guid.NewGuid(), Name = "Data Protection" },
            new() { Id = Guid.NewGuid(), Name = "Security Compliance" },

            // Network Security
            new() { Id = Guid.NewGuid(), Name = "Network Defense" },
            new() { Id = Guid.NewGuid(), Name = "Network Intrusion" },

            // Risk Management
            new() { Id = Guid.NewGuid(), Name = "Risk Analysis" },
            new() { Id = Guid.NewGuid(), Name = "Risk Control" },

            // Ethical Hacking
            new() { Id = Guid.NewGuid(), Name = "Cyber Security Assessment" },
            new() { Id = Guid.NewGuid(), Name = "Cyber Security Testing" },

            // Language and Communication
            new() { Id = Guid.NewGuid(), Name = "Interpersonal Communication" },
            new() { Id = Guid.NewGuid(), Name = "Public Relations" },

            // Leadership and Management
            new() { Id = Guid.NewGuid(), Name = "Leadership Development" },
            new() { Id = Guid.NewGuid(), Name = "Performance Management" },
            
            // Personal Development
            new() { Id = Guid.NewGuid(), Name = "Self-Improvement" },
            new() { Id = Guid.NewGuid(), Name = "Career Development" },

            // Wellness and Fitness
            new() { Id = Guid.NewGuid(), Name = "Physical Fitness" },
            new() { Id = Guid.NewGuid(), Name = "Mental Wellness" },
            
            // Industry Specific Knowledge
            new() { Id = Guid.NewGuid(), Name = "Public Sector" },
            new() { Id = Guid.NewGuid(), Name = "Health Care Sector" },
        };

        var courseTypes = new List<CourseType>
        {
            new () { Id = Guid.NewGuid(), Name = "Video", Description = "Video courses are pre-recorded and can be watched at any time." },
            new () { Id = Guid.NewGuid(), Name = "Book", Description = "Book courses are self-paced and can be read at any time." },
            new () { Id = Guid.NewGuid(), Name = "Audio", Description = "Audio courses are pre-recorded and can be listened to at any time." },
            new () { Id = Guid.NewGuid(), Name = "Virtual", Description = "Virtual courses are instructor-led and can be attended from anywhere." },
            new () { Id = Guid.NewGuid(), Name = "Classroom", Description = "Classroom courses are instructor-led and must be attended in-person." },
            new () { Id = Guid.NewGuid(), Name = "Webinar", Description = "Webinar courses spanning several days, are instructor-led and must be attended online." },
            new () { Id = Guid.NewGuid(), Name = "Workshop", Description = "Workshop courses are instructor-led and must be attended in-person." },
            new () { Id = Guid.NewGuid(), Name = "Case Study", Description = "Case Study courses are self-paced and can be read at any time." },
            new () { Id = Guid.NewGuid(), Name = "Simulation", Description = "Simulation courses are self-paced and can be completed at any time." },
        };

        var users = new List<User>
        {
            new()
            {
                Id = Guid.NewGuid(),
                FirstName = "Deogratias",
                LastName = "Saidi",
                Position = "Anls, Cloud Engineering",
                Segment = technologySegment,
                Contact = new Contact
                {
                    Id = Guid.NewGuid(),
                    Address = "Rolfsbuktveien 2",
                    City = "Fornebu",
                    Country = "Norway",
                    ZipCode = "1326",
                    Phone = "+47 92284202",
                    Email = "deogratias.saidi@accenture.com"
                },
                Skills = skills.Where(x => new List<string> { "Microsoft Azure", "CRM Platform Use & Management", "IT Service Management"}.Contains(x.Name)).ToList(),
                Interests = tags.Where(x => new List<string> {"Cyber Threats", "Data Privacy", "Cloud Infrastructure", "Cloud Security"}.Contains(x.Name)).ToList()
            }
        };

        var providerFaker = new Faker<Provider>()
            .RuleFor(m => m.Id, _ => Guid.NewGuid())
            .RuleFor(m => m.Name, f => f.Company.CompanyName())
            .RuleFor(m => m.Description, f => f.Lorem.Paragraphs());

        Segments.AddRange(segments);
        Providers.AddRange(providerFaker.Generate(10));
        Tags.AddRange(tags);
        Skills.AddRange(skills);
        Users.AddRange(users);
        CourseTypes.AddRange(courseTypes);
        SaveChanges();

        var faker = new Faker();

        var courses = new List<Course>
        {
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Mastering Strategic Planning",
                Description = "Deep-dive into the process of strategic planning to shape the future of your business, covering industry analysis, goal setting, and strategic decision making." + " " + faker.Lorem.Paragraph(),
                Categories = strategyAndConsultingSegment.Categories.Where(x => x.Name == "Business Strategy").ToList(),
                Skills = skills.Take(3).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Take(2).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Business Analysis Fundamentals",
                Description = "Learn the key principles of business analysis and how to apply them to improve organizational performance and create new business opportunities." + " " + faker.Lorem.Paragraph(),
                Categories = strategyAndConsultingSegment.Categories.Where(x => x.Name == "Business Strategy").ToList(),
                Skills = skills.Take(3).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Take(2).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Advanced Competitive Analysis",
                Description = "Learn to analyze your competition, develop a robust competitive strategy, and position your business for success in a competitive marketplace." + " " + faker.Lorem.Paragraph(),
                Categories = strategyAndConsultingSegment.Categories.Where(x => x.Name == "Business Strategy").ToList(),
                Skills = skills.Take(3).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Take(2).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Growth Strategies for Businesses",
                Description = "Explore various growth strategies and learn how to choose and implement the right ones for your business to ensure sustainable growth." + " " + faker.Lorem.Paragraph(),
                Categories = strategyAndConsultingSegment.Categories.Where(x => x.Name == "Business Strategy").ToList(),
                Skills = skills.Take(3).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Take(2).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Growth Strategies for Businesses",
                Description = "Learn how to drive innovation within your organization and develop a culture that fosters creative problem solving."+ " " + faker.Lorem.Paragraph(),
                Categories = strategyAndConsultingSegment.Categories.Where(x => x.Name == "Business Strategy").ToList(),
                Skills = skills.Take(3).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Take(2).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },

            new()
            {
                Id = Guid.NewGuid(),
                Name = "Essentials of Organizational Development",
                Description = "Understand the theory and practice of organizational development to drive performance, change, and improvement in your organization." + " " + faker.Lorem.Paragraph(),
                Categories = strategyAndConsultingSegment.Categories.Where(x => x.Name == "Management Consulting").ToList(),
                Skills = skills.Skip(3).Take(2).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Skip(2).Take(2).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Management Consulting Techniques",
                Description = "Learn the key skills and techniques used by successful management consultants to solve organizational problems and improve business performance." + " " + faker.Lorem.Paragraph(),
                Categories = strategyAndConsultingSegment.Categories.Where(x => x.Name == "Management Consulting").ToList(),
                Skills = skills.Skip(3).Take(2).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Skip(2).Take(2).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Change Management for Consultants",
                Description = "Learn how to manage and facilitate organizational change effectively, dealing with resistance, and ensuring successful implementation." + " " + faker.Lorem.Paragraph(),
                Categories = strategyAndConsultingSegment.Categories.Where(x => x.Name == "Management Consulting").ToList(),
                Skills = skills.Skip(3).Take(2).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Skip(2).Take(2).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Business Process Improvement Strategies",
                Description = "Gain practical skills to analyze, redesign, and improve business processes for efficiency and effectiveness." + " " + faker.Lorem.Paragraph(),
                Categories = strategyAndConsultingSegment.Categories.Where(x => x.Name == "Management Consulting").ToList(),
                Skills = skills.Skip(3).Take(2).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Skip(2).Take(2).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Consulting Skills for Managers",
                Description = "Develop the consulting skills necessary to analyze business problems, provide solutions, and communicate effectively with stakeholders." + " " + faker.Lorem.Paragraph(),
                Categories = strategyAndConsultingSegment.Categories.Where(x => x.Name == "Management Consulting").ToList(),
                Skills = skills.Skip(3).Take(2).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Skip(2).Take(2).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Consulting Skills for Managers",
                Description = "Develop the consulting skills necessary to analyze business problems, provide solutions, and communicate effectively with stakeholders." + " " + faker.Lorem.Paragraph(),
                Categories = strategyAndConsultingSegment.Categories.Where(x => x.Name == "Management Consulting").ToList(),
                Skills = skills.Skip(3).Take(2).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Skip(2).Take(2).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Fundamentals of Financial Analysis",
                Description = "Learn the basics of financial analysis including analyzing income statements, balance sheets, and cash flow statements." + " " + faker.Lorem.Paragraph(),
                Categories = strategyAndConsultingSegment.Categories.Where(x => x.Name == "Financial Analysis").ToList(),
                Skills = skills.Skip(5).Take(3).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Skip(4).Take(2).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Advanced Financial Decision Making",
                Description = "Improve your financial decision-making abilities by understanding the principles of corporate finance and capital investment." + " " + faker.Lorem.Paragraph(),
                Categories = strategyAndConsultingSegment.Categories.Where(x => x.Name == "Financial Analysis").ToList(),
                Skills = skills.Skip(5).Take(3).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Skip(4).Take(2).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Corporate Budgeting and Forecasting",
                Description = "Understand the process of budgeting and forecasting in corporate finance, including variance analysis and financial modeling techniques." + " " + faker.Lorem.Paragraph(),
                Categories = strategyAndConsultingSegment.Categories.Where(x => x.Name == "Financial Analysis").ToList(),
                Skills = skills.Skip(5).Take(3).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Skip(4).Take(2).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Financial Statement Analysis",
                Description = "Learn to interpret and analyze financial statements for business valuation, performance measurement, and investment decisions." + " " + faker.Lorem.Paragraph(),
                Categories = strategyAndConsultingSegment.Categories.Where(x => x.Name == "Financial Analysis").ToList(),
                Skills = skills.Skip(5).Take(3).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Skip(4).Take(2).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Financial Statement Analysis",
                Description = "Learn to interpret and analyze financial statements for business valuation, performance measurement, and investment decisions." + " " + faker.Lorem.Paragraph(),
                Categories = strategyAndConsultingSegment.Categories.Where(x => x.Name == "Financial Analysis").ToList(),
                Skills = skills.Skip(5).Take(3).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Skip(4).Take(2).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Financial Statement Analysis",
                Description = "Learn to interpret and analyze financial statements for business valuation, performance measurement, and investment decisions." + " " + faker.Lorem.Paragraph(),
                Categories = strategyAndConsultingSegment.Categories.Where(x => x.Name == "Financial Analysis").ToList(),
                Skills = skills.Skip(5).Take(3).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Skip(4).Take(2).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Customer Analytics and Segmentation",
                Description = "Master the techniques of customer analytics and segmentation to understand customer behavior and drive business growth." + " " + faker.Lorem.Paragraph(),
                Categories = strategyAndConsultingSegment.Categories.Where(x => x.Name == "Market Research").ToList(),
                Skills = skills.Skip(8).Take(3).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Skip(6).Take(2).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Fundamentals of Market Research",
                Description = "Grasp the fundamentals of market research, including how to identify market trends, make customer-driven decisions, and differentiate your business." + " " + faker.Lorem.Paragraph(),
                Categories = strategyAndConsultingSegment.Categories.Where(x => x.Name == "Market Research").ToList(),
                Skills = skills.Skip(8).Take(3).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Skip(6).Take(2).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Market Trend Analysis",
                Description = "Learn how to spot and analyze market trends, and use these insights to inform your strategic decision making." + " " + faker.Lorem.Paragraph(),
                Categories = strategyAndConsultingSegment.Categories.Where(x => x.Name == "Market Research").ToList(),
                Skills = skills.Skip(8).Take(3).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Skip(6).Take(2).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Mastering SEO & SEM",
                Description = "Enhance your understanding of Search Engine Optimization and Search Engine Marketing to increase website visibility." + " " + faker.Lorem.Paragraph(),
                Categories = interactiveSegment.Categories.Where(x => x.Name == "Digital Marketing").ToList(),
                Skills = skills.Skip(11).Take(2).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Skip(8).Take(2).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Principles of Design Thinking",
                Description = "Learn the methodology of design thinking to improve product usability and user satisfaction." + " " + faker.Lorem.Paragraph(),
                Categories = interactiveSegment.Categories.Where(x => x.Name == "User Experience Design").ToList(),
                Skills = skills.Skip(13).Take(2).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Skip(10).Take(2).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "CRM Strategies and Platforms",
                Description = "Understand the strategies behind effective customer relationship management and learn to use popular CRM platforms." + " " + faker.Lorem.Paragraph(),
                Categories = interactiveSegment.Categories.Where(x => x.Name == "Customer Relationship Management").ToList(),
                Skills = skills.Skip(15).Take(2).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Skip(12).Take(2).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Effective Social Media Management",
                Description = "Learn to create, schedule, analyze, and engage with content across various social media platforms for maximum impact." + " " + faker.Lorem.Paragraph(),
                Categories = interactiveSegment.Categories.Where(x => x.Name == "Social Media Management").ToList(),
                Skills = skills.Skip(17).Take(2).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Skip(14).Take(2).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Enterprise Software Development with Java",
                Description = "This course is designed to help you master Java, one of the most popular programming languages used in enterprise-level software development." + " " + faker.Lorem.Paragraph(),
                Categories = technologySegment.Categories.Where(x => x.Name == "Software Development").ToList(),
                Skills = skills.Where(x => x.Name == "Java Programming").ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Where(x => x.Name == "Backend Development").ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Building Robust Applications with C# and .NET",
                Description = "This course covers all you need to know to develop robust applications using C#, a versatile language widely used in the .NET framework." + " " + faker.Lorem.Paragraph(),
                Categories = technologySegment.Categories.Where(x => x.Name == "Software Development").ToList(),
                Skills = skills.Where(x => x.Name == "C# Programming").ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Where(x => x.Name == "Backend Development").ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Data Science and Machine Learning with Python",
                Description = "This course covers Python, a powerful and flexible language widely used in data analysis and machine learning." + " " + faker.Lorem.Paragraph(),
                Categories = technologySegment.Categories.Where(x => x.Name == "Software Development").ToList(),
                Skills = skills.Where(x => x.Name == "Python Programming").ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Where(x => x.Name == "Backend Development").ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Interactive Web Development with JavaScript",
                Description = "This course covers JavaScript, the go-to language for front-end web development. You'll learn to make interactive web applications with this essential web technology." + " " + faker.Lorem.Paragraph(),
                Categories = technologySegment.Categories.Where(x => x.Name == "Software Development").ToList(),
                Skills = skills.Where(x => x.Name == "JavaScript Programming").ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Where(x => x.Name == "Frontend Development").ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Mastering IT Operations Management",
                Description = "In this course, you'll learn how to effectively manage and execute IT systems and functions, including infrastructure, compliance, and IT operations strategy." + " " + faker.Lorem.Paragraph(),
                Categories = technologySegment.Categories.Where(x => x.Name == "IT Operations").ToList(),
                Skills = skills.Where(x => new List<string> { "IT Service Management", "Network Management" }.Contains(x.Name)).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Where(x => new List<string> { "IT Infrastructure", "IT Compliance" }.Contains(x.Name)).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Network Management for IT Professionals",
                Description = "This course provides an in-depth understanding of network management, including design, implementation, and troubleshooting of computer networks." + " " + faker.Lorem.Paragraph(),
                Categories = technologySegment.Categories.Where(x => x.Name == "IT Operations").ToList(),
                Skills = skills.Where(x => new List<string> { "Network Management" }.Contains(x.Name)).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Where(x => new List<string> { "IT Infrastructure", "IT Compliance" }.Contains(x.Name)).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Mastering Information Security Management",
                Description = "An advanced course designed to equip you with the necessary skills and knowledge to manage and protect vital information in your organization." + " " + faker.Lorem.Paragraph(),
                Categories = technologySegment.Categories.Where(x => x.Name == "Cyber Security").ToList(),
                Skills = skills.Where(x => new List<string> { "Information Security Management" }.Contains(x.Name)).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Where(x => new List<string> { "Data Privacy" }.Contains(x.Name)).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Ethical Hacking: An Introduction",
                Description = "A comprehensive guide to ethical hacking, where you'll learn how to lawfully compromise systems and use hacking tools." + " " + faker.Lorem.Paragraph(),
                Categories = technologySegment.Categories.Where(x => x.Name == "Cyber Security").ToList(),
                Skills = skills.Where(x => new List<string> { "Ethical Hacking" }.Contains(x.Name)).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Where(x => new List<string> { "Cyber Threats", "Data Privacy" }.Contains(x.Name)).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Exploring Amazon AWS: From Beginner to Pro",
                Description = "This course will take you on a journey through the wide-ranging capabilities of Amazon AWS, equipping you with the skills to deploy and manage applications on the cloud." + " " + faker.Lorem.Paragraph(),
                Categories = technologySegment.Categories.Where(x => x.Name == "Cloud Computing").ToList(),
                Skills = skills.Where(x => new List<string> { "Amazon AWS" }.Contains(x.Name)).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Where(x => new List<string> { "Cloud Infrastructure", "Cloud Security" }.Contains(x.Name)).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Mastering Microsoft Azure: Cloud Solutions for Businesses",
                Description = "Gain in-depth knowledge of Microsoft Azure's services and learn how to architect, deploy, and manage applications on Azure." + " " + faker.Lorem.Paragraph(),
                Categories = technologySegment.Categories.Where(x => x.Name == "Cloud Computing").ToList(),
                Skills = skills.Where(x => new List<string> { "Microsoft Azure" }.Contains(x.Name)).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Where(x => new List<string> { "Cloud Infrastructure", "Cloud Security" }.Contains(x.Name)).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Effective Project Management: Risk and Agile Strategies",
                Description = "This course provides an in-depth exploration of risk management and agile project management methodologies. Learn how to optimize project coordination and navigate the project lifecycle effectively." + " " + faker.Lorem.Paragraph(),
                Categories = operationsSegment.Categories.Where(x => x.Name == "Project Management").ToList(),
                Skills = skills.Where(x => new List<string> { "Risk Management", "Agile Project Management" }.Contains(x.Name)).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Where(x => new List<string> { "Project Coordination", "Project Lifecycle" }.Contains(x.Name)).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Mastering Logistics in Supply Chain Management",
                Description = "This course offers a comprehensive overview of logistics in supply chain management. Understand how to optimize supply chain performance and minimize risks." + " " + faker.Lorem.Paragraph(),
                Categories = operationsSegment.Categories.Where(x => x.Name == "Supply Chain Management").ToList(),
                Skills = skills.Where(x => new List<string> { "Logistics" }.Contains(x.Name)).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Where(x => new List<string> { "Supply Chain Optimization", "Supply Chain Risk" }.Contains(x.Name)).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Effective Inventory Management in Supply Chains",
                Description = "This course provides an in-depth exploration of inventory management within supply chains. Learn techniques to manage stock efficiently and minimize supply chain risks." + " " + faker.Lorem.Paragraph(),
                Categories = operationsSegment.Categories.Where(x => x.Name == "Supply Chain Management").ToList(),
                Skills = skills.Where(x => new List<string> { "Inventory Management" }.Contains(x.Name)).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Where(x => new List<string> { "Supply Chain Optimization", "Supply Chain Risk" }.Contains(x.Name)).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Lean Six Sigma for Operational Excellence",
                Description = "This course provides a deep dive into Lean Six Sigma methodologies for achieving operational excellence. Learn how to eliminate waste, reduce defects, and improve efficiency." + " " + faker.Lorem.Paragraph(),
                Categories = operationsSegment.Categories.Where(x => x.Name == "Operational Excellence").ToList(),
                Skills = skills.Where(x => new List<string> { "Lean Six Sigma" }.Contains(x.Name)).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Where(x => new List<string> { "Process Optimization", "Operational Efficiency" }.Contains(x.Name)).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Continuous Improvement for Operational Success",
                Description = "This course introduces the principles of continuous improvement for operational success. Explore strategies for ongoing process optimization and operational efficiency." + " " + faker.Lorem.Paragraph(),
                Categories = operationsSegment.Categories.Where(x => x.Name == "Operational Excellence").ToList(),
                Skills = skills.Where(x => new List<string> { "Continuous Improvement" }.Contains(x.Name)).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Where(x => new List<string> { "Process Optimization", "Operational Efficiency" }.Contains(x.Name)).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Mastering Cryptography in Information Security",
                Description = "In this course, delve into the world of cryptography and learn how it forms the backbone of secure communications in the field of information security." + " " + faker.Lorem.Paragraph(),
                Categories = securitySegment.Categories.Where(x => x.Name == "Information Security").ToList(),
                Skills = skills.Where(x => new List<string> { "Cryptography" }.Contains(x.Name)).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Where(x => new List<string> { "Data Protection", "Security Compliance" }.Contains(x.Name)).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Security Architecture and Design for Information Security",
                Description = "This course provides an introduction to the fundamental principles of security architecture and design, crucial for maintaining information security in an organization." + " " + faker.Lorem.Paragraph(),
                Categories = securitySegment.Categories.Where(x => x.Name == "Information Security").ToList(),
                Skills = skills.Where(x => new List<string> { "Security Architecture and Design" }.Contains(x.Name)).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Where(x => new List<string> { "Data Protection", "Security Compliance" }.Contains(x.Name)).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Comprehensive Firewall Administration for Network Security",
                Description = "This course equips you with the necessary skills to effectively administer firewalls and secure your organization's network." + " " + faker.Lorem.Paragraph(),
                Categories = securitySegment.Categories.Where(x => x.Name == "Network Security").ToList(),
                Skills = skills.Where(x => new List<string> { "Firewall Administration" }.Contains(x.Name)).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Where(x => new List<string> { "Network Defense", "Network Intrusion" }.Contains(x.Name)).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Intrusion Detection: Protecting Network Security",
                Description = "Learn about the critical role of intrusion detection in maintaining network security, and how to effectively identify and respond to security breaches." + " " + faker.Lorem.Paragraph(),
                Categories = securitySegment.Categories.Where(x => x.Name == "Network Security").ToList(),
                Skills = skills.Where(x => new List<string> { "Intrusion Detection" }.Contains(x.Name)).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Where(x => new List<string> { "Network Defense", "Network Intrusion" }.Contains(x.Name)).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Implementing Network Security with Firewalls and Intrusion Detection",
                Description = "Master the dual skills of firewall administration and intrusion detection to enhance your organization's network security." + " " + faker.Lorem.Paragraph(),
                Categories = securitySegment.Categories.Where(x => x.Name == "Network Security").ToList(),
                Skills = skills.Where(x => new List<string> { "Firewall Administration", "Intrusion Detection" }.Contains(x.Name)).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Where(x => new List<string> { "Network Defense", "Network Intrusion" }.Contains(x.Name)).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Mastering Risk Assessment for Effective Management",
                Description = "Deep-dive into the process of risk assessment and learn how to identify, evaluate, and prioritize risks in any business environment." + " " + faker.Lorem.Paragraph(),
                Categories = securitySegment.Categories.Where(x => x.Name == "Risk Management").ToList(),
                Skills = skills.Where(x => new List<string> { "Risk Assessment" }.Contains(x.Name)).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Where(x => new List<string> { "Risk Analysis", "Risk Control" }.Contains(x.Name)).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Risk Mitigation Strategies for Business Success",
                Description = "Learn how to develop and implement risk mitigation strategies to manage potential threats and ensure business continuity." + " " + faker.Lorem.Paragraph(),
                Categories = securitySegment.Categories.Where(x => x.Name == "Risk Management").ToList(),
                Skills = skills.Where(x => new List<string> { "Risk Mitigation" }.Contains(x.Name)).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Where(x => new List<string> { "Risk Analysis", "Risk Control" }.Contains(x.Name)).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "The Art of Penetration Testing: Ethical Hacking Fundamentals",
                Description = "Learn the key concepts of penetration testing, identify vulnerabilities, and understand how to exploit them ethically." + " " + faker.Lorem.Paragraph(),
                Categories = securitySegment.Categories.Where(x => x.Name == "Ethical Hacking").ToList(),
                Skills = skills.Where(x => new List<string> { "Penetration Testing" }.Contains(x.Name)).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Where(x => new List<string> { "Cyber Security Assessment", "Cyber Security Testing" }.Contains(x.Name)).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Vulnerability Assessment Mastery: From Zero to Ethical Hacker",
                Description = "Master the process of vulnerability assessment and learn how to identify weaknesses in a system or network." + " " + faker.Lorem.Paragraph(),
                Categories = securitySegment.Categories.Where(x => x.Name == "Ethical Hacking").ToList(),
                Skills = skills.Where(x => new List<string> { "Vulnerability Assessment" }.Contains(x.Name)).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Where(x => new List<string> { "Cyber Security Assessment", "Cyber Security Testing" }.Contains(x.Name)).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Mastering Business Communication: From Basics to Brilliance",
                Description = "This course will guide you on how to communicate effectively in a business environment." + " " + faker.Lorem.Paragraph(),
                Categories = otherSegment.Categories.Where(x => x.Name == "Language and Communication").ToList(),
                Skills = skills.Where(x => new List<string> { "Business Communication" }.Contains(x.Name)).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Where(x => new List<string> { "Interpersonal Communication", "Public Relations" }.Contains(x.Name)).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Public Speaking Pro: From Fear to Fearless",
                Description = "Learn the art of public speaking and overcome the fear associated with it." + " " + faker.Lorem.Paragraph(),
                Categories = otherSegment.Categories.Where(x => x.Name == "Language and Communication").ToList(),
                Skills = skills.Where(x => new List<string> { "Public Speaking" }.Contains(x.Name)).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Where(x => new List<string> { "Interpersonal Communication", "Public Relations" }.Contains(x.Name)).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Strategic Leadership: Navigating the Future",
                Description = "This course provides insights into the key aspects of strategic leadership and its importance in modern organizations." + " " + faker.Lorem.Paragraph(),
                Categories = otherSegment.Categories.Where(x => x.Name == "Leadership and Management").ToList(),
                Skills = skills.Where(x => new List<string> { "Strategic Leadership" }.Contains(x.Name)).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Where(x => new List<string> { "Leadership Development", "Performance Management" }.Contains(x.Name)).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Effective Team Management: Unlocking Potential",
                Description = "Learn the skills needed to manage a team effectively and maximize their potential." + " " + faker.Lorem.Paragraph(),
                Categories = otherSegment.Categories.Where(x => x.Name == "Leadership and Management").ToList(),
                Skills = skills.Where(x => new List<string> { "Team Management" }.Contains(x.Name)).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Where(x => new List<string> { "Leadership Development", "Performance Management" }.Contains(x.Name)).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Mastering Time: Efficient Time Management",
                Description = "Learn to better manage your time and achieve more in both your personal and professional life." + " " + faker.Lorem.Paragraph(),
                Categories = otherSegment.Categories.Where(x => x.Name == "Personal Development").ToList(),
                Skills = skills.Where(x => new List<string> { "Time Management" }.Contains(x.Name)).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Where(x => new List<string> { "Self-Improvement", "Career Development" }.Contains(x.Name)).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Emotionally Intelligent Living",
                Description = "Develop your emotional intelligence and learn how to use it in your everyday life." + " " + faker.Lorem.Paragraph(),
                Categories = otherSegment.Categories.Where(x => x.Name == "Personal Development").ToList(),
                Skills = skills.Where(x => new List<string> { "Emotional Intelligence" }.Contains(x.Name)).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Where(x => new List<string> { "Self-Improvement", "Career Development" }.Contains(x.Name)).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Holistic Nutrition: Fueling the Body Right",
                Description = "Explore the role of nutrition in overall health and wellness." + " " + faker.Lorem.Paragraph(),
                Categories = otherSegment.Categories.Where(x => x.Name == "Wellness and Fitness").ToList(),
                Skills = skills.Where(x => new List<string> { "Nutrition" }.Contains(x.Name)).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Where(x => new List<string> { "Physical Fitness", "Mental Wellness" }.Contains(x.Name)).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Yoga for Everyday Living",
                Description = "Learn yoga techniques for improved physical fitness and mental wellness." + " " + faker.Lorem.Paragraph(),
                Categories = otherSegment.Categories.Where(x => x.Name == "Wellness and Fitness").ToList(),
                Skills = skills.Where(x => new List<string> { "Yoga" }.Contains(x.Name)).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Where(x => new List<string> { "Physical Fitness", "Mental Wellness" }.Contains(x.Name)).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
            new()
            {
                Id = Guid.NewGuid(),
                Name = "Understanding the Health Care Sector",
                Description = "Explore how the Norwegian Health Care Sector works, get some tips and tricks, and get to know the ins and outs of the Public Health Care Sector." + " " + faker.Lorem.Paragraph(),
                Categories = otherSegment.Categories.Where(x => x.Name == "Industry-Specific Knowledge").ToList(),
                Skills = skills.Where(x => new List<string> { "Public Sector Relations", "Health Care Sector Relations" }.Contains(x.Name)).ToList(),
                Type = faker.PickRandom(courseTypes),
                Provider = providerFaker.Generate(),
                Price = decimal.Parse(faker.Commerce.Price(120, 350)),
                Tags = tags.Where(x => new List<string> { "Public Sector", "Health Care Sector" }.Contains(x.Name)).ToList(),
                Level = faker.Random.Int(1, 3),
                Language = "English",
                Duration = faker.Date.Timespan(new TimeSpan(12, 0, 0)),
                WbsCode = faker.Random.String2(3).ToUpper() + faker.Random.Int(10, 99)
            },
        };

        AddRange(courses);
        SaveChanges();
    }
}