import { NextApiRequest, NextApiResponse } from "next";

const sgMail = require("@sendgrid/mail");

export default function sendSupportEmail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  // send confirmation email to user
  const clientMail = sgMail.send({
    from: "mobilewallet.support@mail.getswap.eu",
    personalizations: [
      {
        to: { email: req.query.to },
        // give ourselves access to the email thread so we can respond
        bcc: [{ email: "mobilewallet.support@mail.getswap.eu" }],
        dynamic_template_data: {
          issueTitle: req.query.issueTitle,
          subject: req.query.issueTitle,
        },
      },
    ],
    template_id: process.env.TEMPLATE_ID_USER_SIDE,
  });
  // send the email of the user's complaint and title to the support team
  const supportMail = sgMail.send({
    from: "mobilewallet.support@mail.getswap.eu",
    personalizations: [
      {
        to: { email: "mobilewallet.support@mail.getswap.eu" },
        dynamic_template_data: {
          issueTitle: req.query.issueTitle,
          subject: req.query.issueTitle,
          concerning: req.query.to,
          issueBody: req.query.issueBody,
        },
      },
    ],
    template_id: process.env.TEMPLATE_ID_SUPPORT_SIDE,
  });
  Promise.all([clientMail, supportMail]).then(() => res.status(204).send(""));
}
