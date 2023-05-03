using Microsoft.AspNetCore.Mvc;
using MailAPI.models;

namespace MailAPI.controllers
{
  [Route("api/mail")]
  [ApiController]
  public class MailController : ApiControllerAttribute
  {
    public static List<MailModel> mails = new List<MailModel>();

    [HttpGet]
    public List<MailModel> getMail() => mails;

    [HttpPost]
    public void createMail() => mails.Add(new MailModel());

    [HttpGet("{id}")]
    public MailModel getMailByUuid(Guid id)
    {
      var mail = mails.Find(mail => mail.uuid.Equals(id));

      if (mail == null)
      {
        throw new Exception();
      }

      return mail;
    }
  }
}
