const sendMessage = async ({ message, number }) => {
  try {
    // Replace with your Twilio Account SID, Auth Token, and Twilio phone number
    const accountSid = process.env.REACT_APP_TWILIO_ACCOUNT_SID;
    const authToken = process.env.REACT_APP_TWILIO_AUTH_TOKEN;
    const fromNumber = process.env.REACT_APP_TWILIO_PHONE_NUMBER;

    // Replace with the phone number you want to send the message to
    const toNumber = number;

    // Replace with the actual message you want to send
    const message = message;

    // Make an HTTP POST request to the Twilio API to send the message
    const response = await axios.post(
      `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
      {
        To: toNumber,
        From: fromNumber,
        Body: message,
      },
      {
        auth: {
          username: accountSid,
          password: authToken,
        },
      }
    );

    console.log("Message sent successfully:", response.data);
  } catch (error) {
    console.error("Failed to send message:", error);
  }
};
