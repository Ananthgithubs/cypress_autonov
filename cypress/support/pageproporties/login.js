export class LoginPage {

    getCompanyLogo() {
        return cy.get('[alt="company-branding"]');
    }

    getUserName() {
        return cy.get('[name="username"]')
    }

    getPassWord(){
        return cy.get('[name="password"]')
    }
}