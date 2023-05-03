using Microsoft.AspNetCore.Mvc;
using MailAPI.models;

namespace MailAPI.controllers
{
  [Route("api/mail")]
  [ApiController]
  public class MailController : ApiControllerAttribute
  {
    public static List<MailerModel> mails = new List<MailerModel>();

    [HttpGet]
    public List<MailerModel> getMail() => mails;

    [HttpPost]
    public void createMail() => mails.Add(new MailerModel());

    [HttpGet("{id}")]
    public MailerModel getMailByUuid(Guid id)
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
