namespace Core.Models;

public class Contact
{
    public Guid Id { get; set; }
    public Guid UserId { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string Country { get; set; }
    public string ZipCode { get; set; }
    public string Phone { get; set; }
    public string Email { get; set; }
}
