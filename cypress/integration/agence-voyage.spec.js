// cypress/integration/agence-voyage.spec.js

describe('Scénario Agence de Voyage', () => {
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
          cy.get('[routerLink="destinations"]').click();
          cy.url().should('include', '/destinations');
        });
      
        it('should navigate to offres page', () => {
          cy.visit('/');
          cy.get('[routerLink="offres"]').click();
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
      
  
    
  });
  