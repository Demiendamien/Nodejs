// Importer le package generate-password
const generatePassword = require('generate-password');

// Créer une fonction pour générer un mot de passe aléatoire
function generateRandomPassword() {
  const password = generatePassword.generate({
    length: 12, // Longueur du mot de passe
    numbers: true, // Inclure des chiffres
    symbols: true, // Inclure des symboles
    uppercase: true, // Inclure des lettres majuscules
    lowercase: true // Inclure des lettres minuscules
  });

  // Afficher le mot de passe généré
  console.log('Mot de passe généré :', password);
}

// Appeler la fonction pour générer un mot de passe
generateRandomPassword();
