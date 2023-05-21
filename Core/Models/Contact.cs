namespace Core.Models;

public class Contact
{
    public Guid Id { get; set; }
    public Guid UserId { get; set; }
    public string Address { get; set; } = default!;
    public string City { get; set; } = default!;
    public string Country { get; set; } = default!;
    public string ZipCode { get; set; } = default!;
    public string Phone { get; set; } = default!;
    public string Email { get; set; } = default!;
}
