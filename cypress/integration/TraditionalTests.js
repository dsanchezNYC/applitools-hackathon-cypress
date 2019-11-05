/// <reference types="cypress" />

import { HackathonAppV1 } from "../page-objects/hackathon-app-v1.spec"

describe('Hackathon App V1 tests', () => {

    const lpv1 = new HackathonAppV1

    beforeEach(() => {
        lpv1.visitLoginPageV1()
    })

    it('Login page UI elements test', () => {
        lpv1.authWrapper().should('be.visible')
        lpv1.logo().should('be.visible')
        lpv1.logoArea().should('be.visible')
        lpv1.loginFormHeader().should('be.visible').should('contain.text', 'Login Form')
        lpv1.alertEmpty().should('be.visible')
        lpv1.formArea().should('be.visible')
        lpv1.usernameLabel().should('be.visible').should('contain.text', 'Username')
        lpv1.usernameIcon().should('be.visible')
        lpv1.usernameField().should('be.visible').should('be.enabled')
        lpv1.passwordLabel().should('be.visible').should('contain.text', 'Password')
        lpv1.passwordIcon().should('be.visible')
        lpv1.passwordField().should('be.visible').should('be.enabled')
        lpv1.loginButton().should('be.visible').should('contain.text', 'Log In')
        lpv1.rememberMeLabel().should('be.visible').should('contain.text', 'Remember Me')
        lpv1.rememberMeCheckbox().should('be.visible').should('not.be.checked')
        lpv1.buttonArea().should('be.visible')
        lpv1.socialButtonArea().should('be.visible')
        lpv1.twitterIcon().should('be.visible')
        lpv1.facebookIcon().should('be.visible')
        lpv1.linkedInIcon().should('be.visible')
    })

    it('Data-driven test', () => {
        //a. If you don’t enter the username and password and click the login button, it should throw an error
        lpv1.loginButton().click()
        lpv1.errorUsernamePassword().should('be.visible')

        //b. If you only enter the username and click the login button, it should throw an error
        lpv1.usernameField().type('test')
        lpv1.loginButton().click()

        //c. If you only enter the password and click the login button, it should throw an error
        lpv1.passwordField().type('test')
        lpv1.loginButton().click()

        //d. If you enter both username (any value) and password (any value), it should log you in.
        lpv1.usernameIcon().type('test')
        lpv1.passwordField().type('test')
        lpv1.loginButton().click()

    })

    it('Table sort test', () => {

    })

    it('Canvas chart test', () => {

    })

    it('Dynamic content test', () => {

    })

})