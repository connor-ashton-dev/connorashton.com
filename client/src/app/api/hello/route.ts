const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

export async function GET(request: Request) {
  console.log('ouch');
  client.messages
    .create({
      body: 'Someone looked at your resume',
      from: process.env.TWILIO_FROM_NUMBER,
      to: process.env.TWILIO_TO_NUMBER,
    })
    .then((message: any) => console.log(message.sid));
}
