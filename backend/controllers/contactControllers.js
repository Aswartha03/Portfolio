let contactModel = require("../models/contact.Model")
const nodemailer = require('nodemailer');
require('dotenv').config();

// Email transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.google_user,
    pass: process.env.google_passkey,
  },
});

const addContact = async (req, res) => {
  try {
    let { email, firstName, lastName, subject, message } = req.body;
    // Trim and sanitize
    email = email?.trim();
    firstName = firstName?.trim();
    lastName = lastName?.trim();
    subject = subject?.trim();
    message = message?.trim();
if (!email || !firstName || !lastName || !subject || !message) {
      return res.status(400).json({ success: false, error: 'All fields are required.' });
    }
    const fullName = `${firstName} ${lastName}`;

    // Send email
    const mailOptions = {
      from: `"${fullName}" <${email}>`,
      to: 'aswarth03@gmail.com',
      subject: subject, // should be a string
      text: `Name: ${fullName}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
      html: `
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    const contactDetails = await contactModel.create({
      email,
      firstName,
      lastName,
      subject,
      message,
    });
    res.status(200).json({ success: true, contactDetails });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { addContact };
