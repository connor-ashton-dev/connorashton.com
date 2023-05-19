const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const who = searchParams.get('requester');
  if (who) {
    console.log(who.slice(8));
    client.messages
      .create({
        body: `${who} looked at your resume`,
        from: process.env.TWILIO_FROM_NUMBER,
        to: process.env.TWILIO_TO_NUMBER,
      })
      .then((message: any) => console.log(message.sid));
  }
}
