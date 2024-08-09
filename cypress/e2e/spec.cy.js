describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://staging.fortesza.com/login'); 
    cy.get(':nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
  .type('daphne.c.solis@gmail.com');
  cy.get(':nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
  .type('esFortesza');
  cy.get('#btn-sign-in-page').click();  
  cy.wait(5000)
  cy.url().should('eq', 'https://staging.fortesza.com/app/etf/#/dashboard/home');
  cy.get('.mat-menu-trigger').click(); 
  cy.get('#mat-expansion-panel-header-0 > .mat-content > .mat-expansion-panel-header-title').click(); 
  cy.get('#cdk-accordion-child-0 > .mat-expansion-panel-body > :nth-child(1)').click(); 
  cy.get(':nth-child(2) > .ion-text-right').click();  
  cy.get('#mat-input-3').clear();
  cy.get('#mat-input-3').type('+5712345');
  cy.get('.btn-save').click(); 
  cy.get('.mt-4 > .btn').click(); 
  cy.get('#mat-input-0').type('esFortesza', { delay: 100 }); 
  cy.get('#mat-input-1').type('esForteszas+1', { delay: 100 }); 
  cy.get('#mat-input-2').type('esForteszas+1', { delay: 100 }); 
  cy.get(':nth-child(3) > :nth-child(3)').click(); 
  cy.get('.img-logo').click();
  cy.get('.mat-menu-trigger').click();
  cy.get(':nth-child(7) > .mat-focus-indicator').click(); 











  })
})