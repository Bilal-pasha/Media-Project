import * as sgMail from "@sendgrid/mail";
export const prerender = false;
export const POST = async ({ request }) => {
  if (request.headers.get("Content-Type") === "application/json") {
    const body = await request.json();
    const BodyValue =
      "First Name : " +
      body.Name +
      "<br/> Last Name : " +
      body.LastName +
      "<br/> Email : " +
      body.Email +
      "<br/> Message : " +
      body.Message;
    const SENDGRID_API_KEY =
      "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";
    sgMail.setApiKey(SENDGRID_API_KEY);
    const msg = {
      to: "billopasho56@gmail.com", // Change to your recipient
      from: "bilal.pasha@techwards.co", // Change to your verified sender
      subject: "Media Advisory Experts",
      text: "Media Advisory Experts",
      html: BodyValue,
    };
    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");
      })
      .catch((error) => {
        console.error(error);
      });
    return new Response(
      JSON.stringify({
        message:
          "Thank you for sending a message. Someone will contact you shortly.",
      }),
      {
        status: 200,
      }
    );
  }
  return new Response(null, { status: 400 });
};
