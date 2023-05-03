using Microsoft.AspNetCore.Mvc;
using MailerAPI.models;

namespace MailerAPI.controllers
{
  [Route("api/mail")]
  [ApiController]
  public class MailerController : ApiControllerAttribute
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
