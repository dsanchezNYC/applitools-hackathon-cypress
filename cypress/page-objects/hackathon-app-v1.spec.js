export class HackathonAppV1 {

    visitLoginPageV1(){
        cy.viewport(1440,900)
        cy.visit('https://demo.applitools.com/hackathon.html') //Version 1
    }

    authWrapper(){
        return cy.get('.auth-wrapper')
    }

    logo(){
        return cy.get('.logo-w > a > img')
    }

    logoArea(){
        return cy.get('.logo-w')
    }

    loginFormHeader(){
        return cy.get('.auth-header')
    }

    alertEmpty(){
        return cy.get('#alertEmpty')
    }

    errorUsernamePassword(){
        return cy.get('#random_id_2') //Update for random locator
    }
    

    formArea(){
        return cy.get('form')
    }

    usernameLabel(){
        return cy.get(':nth-child(1) > label')
    }

    usernameField(){
        return cy.get('#username')
    }

    usernameIcon(){
        return cy.get(':nth-child(1) > .pre-icon')
    }

    passwordLabel(){
        return cy.get(':nth-child(2) > label')
    }

    passwordField(){
        return cy.get('#password')
    }

    passwordIcon(){
        return cy.get(':nth-child(2) > .pre-icon')
    }

    loginButton(){
        return cy.get('#log-in')
    }

    rememberMeCheckbox(){
        return cy.get('.form-check-input')
    }

    rememberMeLabel(){
        return cy.get('.form-check-label')
    }
    
    buttonArea(){
        return cy.get('.buttons-w')
    }

    socialButtonArea(){
        return cy.get('[style="text-align:center"]')
    }

    twitterIcon(){
        return cy.get('[style="display: inline-block; margin-bottom:4px;"] > img')
    }

    facebookIcon(){
        return cy.get(':nth-child(2) > img')
    }

    linkedInIcon(){
        return cy.get(':nth-child(3) > img')
    }























}