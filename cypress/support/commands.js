// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import { LoginPage } from "./pageproporties/login"


const loginpage = new LoginPage()   
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('login', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  loginpage.getCompanyLogo().should('be.visible')
  //cy.get('[alt="company-branding"]').should('be.visible')
  //cy.get('.orangehrm-login-branding').should('exist')     //   .should('have.text', 'company-branding')
  //cy.get('.orangehrm-login-branding').should('be.visible')
  //cy.get('[name="username"]').type("Admin")
  //cy.get('[name="password"]').type("admin123")
  loginpage.getUserName().type("Admin")
  loginpage.getPassWord().type("admin123")
  cy.get('.oxd-button').click()
  cy.get('.oxd-main-menu-item-wrapper .oxd-text.oxd-text--span.oxd-main-menu-item--name').contains("Dashboard").parents().should('have.class', 'oxd-main-menu-item active') // pass
  cy.get('.oxd-brand-banner > img').should('be.visible')
      
})
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })