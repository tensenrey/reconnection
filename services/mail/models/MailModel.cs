namespace MailAPI.models
{
  public class MailModel
  {
    public String? Peer { get; set; }
    public String? Message { get; set; }
    public int statusCode { get; }
    public Guid uuid { get; } = Guid.NewGuid();
  }
}
