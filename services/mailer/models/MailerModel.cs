namespace MailerAPI.models
{
  public class MailerModel
  {
    public String? Peer { get; set; }
    public String? Message { get; set; }
    public int statusCode { get; }

    public Guid uuid { get; } = Guid.NewGuid();
  }
}
