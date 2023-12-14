// cypress/integration/agence-voyage.spec.js


beforeEach(() => {
  // Avant chaque test, assurez-vous que l'application est dans un état initial connu
  // Vous pouvez par exemple réinitialiser la base de données, effacer les cookies, etc.
});

describe('User Navigation', () => {
  it('should navigate to home page', () => {
    cy.visit('/');
    cy.url().should('include', '/');
  });

  
  it('should navigate to destinations page', () => {
    cy.visit('/');
    cy.get('[routerLink="destinations"]').as('destinationsLink').click();
    cy.get('@destinationsLink').should('be.visible');
    cy.url().should('include', '/destinations');
  });
  

  

  it('should navigate to offres page', () => {
    cy.visit('/');
    cy.get('[routerLink="offres"]').first().as('offresLink').should('be.visible').click();
    cy.url().should('include', '/offres');
  });
  
  
  

  it('should navigate to vols page', () => {
    cy.visit('/');
    cy.get('[routerLink="vols"]').click();
    cy.url().should('include', '/vols');
  });

  it('should navigate to login page', () => {
    cy.visit('/');
    cy.get('[routerLink="login"]').click();
    cy.url().should('include', '/login');
  });
});


describe('Destinations Component', () => {
  beforeEach(() => {
    // Assurez-vous que le serveur est démarré et que l'application est accessible
  });

  it('should display destinations section', () => {
    // Vérifiez si la section est présente
    cy.get('.destination').should('exist').within(() => {
      // Vérifiez si le titre de la section est présent
      cy.get('.section-title').should('have.text', 'Choose Your Place');

      // Vérifiez si la liste de destinations est affichée
      cy.get('.destination-list li').should('have.length.gte', 1);
    });
  });

  it('should navigate to offres page when a destination is clicked', () => {
    // Sélectionnez le premier lien de destination et cliquez dessus
    cy.get('.destination-list li [routerLink^="/offres/"]').click();

    // Vérifiez si l'URL a changé pour inclure '/offres'
    cy.url().should('include', '/offres');

  });

});


// cypress/e2e/agence-voyage.cy.js

describe('Offres Component', () => {
  beforeEach(() => {
    // Assurez-vous que le serveur est démarré et que l'application est accessible
  });

  it('should display offres section', () => {
    // Vérifiez si la section est présente
    cy.get('.popular').should('exist').within(() => {
      // Vérifiez si le titre de la section est présent
      cy.get('.section-title').should('have.text', 'Most Popular Tours');

      // Vérifiez si la liste des offres est affichée
      cy.get('.popular-list .popular-card').should('have.length.gte', 1);
    });
  });

  it('should navigate to reserver-offre page when an offre is clicked', () => {
    // Sélectionnez le premier lien d'offre et cliquez dessus
    cy.get('.popular-list .popular-card:first-child [routerLink^="/reserver-offre/"]').click();

    // Vérifiez si l'URL a changé pour inclure '/reserver-offre'
    cy.url().should('include', '/reserver-offre');

  });

});


describe('Vols Component', () => {
  beforeEach(() => {
    // Assurez-vous que le serveur est démarré et que l'application est accessible
    cy.visit('/');
  });

  it('should display vols section', () => {
    // Vérifiez si la section est présente
    cy.get('.package').should('exist').within(() => {
      // Vérifiez si le titre de la section est présent
      cy.get('.section-title').should('have.text', 'Nos Vols');

      // Vérifiez si la liste des vols est affichée
      cy.get('.package-list .package-card').should('have.length.gte', 1);
    });
  });

  it('should navigate to reserver-vol page when "Book Now" button is clicked', () => {
    // Sélectionnez le premier bouton "Book Now" et cliquez dessus
    cy.get('.package-list .package-card:first-child [routerLink^="/reserver-vol/"]').click();

    // Vérifiez si l'URL a changé pour inclure '/reserver-vol'
    cy.url().should('include', '/reserver-vol');

  });

});

// cypress/e2e/agence-voyage.cy.js

describe('ReserverOffre Component', () => {
  beforeEach(() => {
    // Assurez-vous que le serveur est démarré et que l'application est accessible
    cy.visit('/reserver-offre/1'); // Assurez-vous que l'ID de l'offre existe
  });

  it('should display Reserver Offre form', () => {
    // Vérifiez si le formulaire est présent
    cy.get('form#addOffreReservationForm').should('exist');

    // Vérifiez si les champs du formulaire sont présents
    cy.get('select[name="nbPersonne"]').should('exist');
    cy.get('input[type="submit"]').should('exist');
  });

  it('should reserve an offre successfully', () => {
    // Sélectionnez le nombre de personnes
    cy.get('select[name="nbPersonne"]').select('2');

    // Soumettez le formulaire
    cy.get('form#addOffreReservationForm').submit();

    // Vérifiez si une alerte de réservation réussie s'affiche
    cy.on('window:alert', (str) => {
      expect(str).to.equal('reservation effectue avec succes');
    });

  });

});



describe('ReserverVol Component', () => {
  beforeEach(() => {
    // Assurez-vous que le serveur est démarré et que l'application est accessible
    cy.visit('/reserver-vol/1'); // Assurez-vous que l'ID du vol existe
  });

  it('should display Reserver Vol form', () => {
    // Vérifiez si le formulaire est présent
    cy.get('form#addVolReservationForm').should('exist');

    // Vérifiez si les champs du formulaire sont présents
    cy.get('select[name="nbPersonne"]').should('exist');
    cy.get('input[type="submit"]').should('exist');
  });

  it('should reserve a vol successfully', () => {
    // Sélectionnez le nombre de personnes
    cy.get('select[name="nbPersonne"]').select('2');

    // Soumettez le formulaire
    cy.get('form#addVolReservationForm').submit();

    // Vérifiez si une alerte de réservation réussie s'affiche
    cy.on('window:alert', (str) => {
      expect(str).to.equal('reservation effectue avec succes');
    });

  });

});







