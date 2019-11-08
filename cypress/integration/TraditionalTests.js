/// <reference types="cypress" />

import { LoginPageV1 } from "../page-objects/v1-login-page.spec"
import { HomePageV1 } from "../page-objects/v1-home-page.spec"

describe('Hackathon App V1 tests', () => {

    const lpv1 = new LoginPageV1
    const hpv1 = new HomePageV1

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
        //a. If user doesn’t enter the username and password and click the login button, it should throw an error
        lpv1.loginButton().click()
        lpv1.errorUsernamePassword().should('be.visible').should('have.text', 'Both Username and Password must be present ')

        //b. If user only enters the username and clicks the login button, it should throw an error
        lpv1.usernameField().type('test')
        lpv1.loginButton().click()
        lpv1.errorUsernamePassword().should('be.visible').should('have.text', 'Password must be present')

        //c. If user only enters the password and clicks the login button, it should throw an error
        lpv1.usernameField().clear()
        lpv1.passwordField().type('test')
        lpv1.loginButton().click()
        lpv1.errorUsernamePassword().should('be.visible').should('have.text', 'Username must be present')

        //d. If user enters both username (any value) and password (any value), it should log you in.
        lpv1.usernameField().type('test')
        lpv1.passwordField().type('test')
        lpv1.loginButton().click()
        hpv1.financialOverviewHeader().should('be.visible').should('contains.text', 'Financial Overview')
        hpv1.logoIcon().should('be.visible')
    })

    it('Table sort test', () => {

    })

    it('Canvas chart test', () => {

    })

    it('Dynamic content test', () => {

    })

})