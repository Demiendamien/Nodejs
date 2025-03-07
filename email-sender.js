const nodemailer = require('nodemailer');

// Configurer le transporteur SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mon.email@gmail.com',
    pass: 'mon_mot_de_passe'
  }
});

// Définir les options de l'email
const mailOptions = {
  from: 'mon.email@gmail.com',
  to: 'destinataire.email@example.com',
  subject: 'Test d\'envoi d\'email avec Node.js',
  text: 'Ceci est un test d\'envoi d\'email en utilisant Nodemailer avec Node.js !'
};

// Envoyer l'email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Erreur lors de l\'envoi de l\'email:', error);
  }
  console.log('Email envoyé: ' + info.response);
});
