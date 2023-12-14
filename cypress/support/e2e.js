Cypress.on('uncaught:exception', (err, runnable) => {
    // Permet à Cypress de continuer sans échouer le test
    return false;
  });
  