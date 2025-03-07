// Importer le module HTTP de Node.js
const http = require('http');

// Définir le port du serveur
const PORT = 3000;

// Créer le serveur
const server = http.createServer((req, res) => {
  // Définir le type de contenu de la réponse
  res.setHeader('Content-Type', 'text/html');
  
  // Envoyer la réponse
  res.end('<h1>Hello Node !!!!</h1>\n');
});

// Démarrer le serveur
server.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
