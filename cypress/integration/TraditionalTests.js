/// <reference types="cypress" />

import { LoginPage } from "../page-objects/login-page.spec"
import { HomePage } from "../page-objects/home-page.spec"
import { ChartPage } from "../page-objects/chart-page.spec"

describe('Traditional tests', () => {

    const lp = new LoginPage
    const hp = new HomePage
    const cp = new ChartPage

    before(() => {
        lp.visitLoginPage()
    })

    it('Login page UI elements test', () => {
        lp.authWrapper().should('be.visible')
        lp.logo().should('be.visible')
        lp.logoArea().should('be.visible')
        lp.loginFormHeader().should('be.visible').should('contain.text', 'Login Form')
        lp.alertEmpty().should('be.visible')
        lp.formArea().should('be.visible')
        lp.usernameLabel().should('be.visible').should('contain.text', 'Username')
        //lp.usernameIcon().should('be.visible') - Removed from V2 version
        lp.usernameField().should('be.visible').should('be.enabled')
        lp.passwordLabel().should('be.visible').should('contain.text', 'PwdRemember Me') //Bug? TBD
        //lp.passwordIcon().should('be.visible') - Removed from V2 version
        lp.passwordField().should('be.visible').should('be.enabled')
        lp.loginButton().should('be.visible').should('contain.text', 'Log In')
        lp.rememberMeLabel().should('be.visible').should('contain.text', 'Remember Me')
        lp.rememberMeCheckbox().should('be.visible').should('not.be.checked')
        lp.buttonArea().should('be.visible')
        lp.socialButtonArea().should('be.visible')
        lp.twitterIcon().should('be.visible')
        lp.facebookIcon().should('be.visible')
        //lp.linkedInIcon().should('be.visible') - Removed from V2 version
    })

    it('Data-driven test', () => {
        //a. If user doesn’t enter the username and password and click the login button, it should throw an error
        lp.loginButton().click()
        lp.errorUsernamePassword().should('be.visible').should('have.text', 'Please enter both username and password')

        //b. If user only enters the username and clicks the login button, it should throw an error
        lp.usernameField().type('test')
        lp.loginButton().click()
        lp.errorUsernamePassword().should('be.visible').should('have.text', 'Password must be present')

        //c. If user only enters the password and clicks the login button, it should throw an error
        lp.usernameField().clear()
        lp.passwordField().type('test')
        lp.loginButton().click()
        lp.errorUsernamePassword().should('be.visible').should('have.text', 'Username must be present')

        //d. If user enters both username (any value) and password (any value), it should log you in.
        lp.usernameField().type('test')
        lp.passwordField().type('test')
        lp.loginButton().click()
        hp.financialOverviewHeader().should('be.visible').should('contains.text', 'Financial Overview')
    })

    it('Table sort test', () => {
        hp.tableAmountHeader().click()
        hp.amount1().should('be.visible').should('have.text', '- 320.00 USD')
        hp.amount2().should('be.visible').should('have.text', '- 244.00 USD')
        hp.amount3().should('be.visible').should('have.text', '+ 17.99 USD')
        hp.amount4().should('be.visible').should('have.text', '+ 340.00 USD')
        hp.amount5().should('be.visible').should('have.text', '+ 952.23 USD')
        hp.amount6().should('be.visible').should('have.text', '+ 1,250.00 USD')

        //How to validate "Each row’s data stayed in tact after the sorting" 
    })

    it('Canvas chart test', () => {
        hp.compareExpenses().click()

        // Validate that the bar chart and representing that data (number of bars and their heights)
        //
        // *** Unable to use validate this via traditional testing ***
        // 

        cp.showDataForNextYearButton().click()

        //Verify that this data set is added for the year 2019.
        //
        // *** Unable to use validate this via traditional testing ***
        //

    })

    it('Dynamic content test', () => {

        lp.visitLoginPage()
        lp.usernameField().type('test')
        lp.passwordField().type('test')
        lp.loginButton().click()
        lp.flashSaleImage1().should('be.visible')
        lp.flashSaleImage2().should('be.visible')
    })

})