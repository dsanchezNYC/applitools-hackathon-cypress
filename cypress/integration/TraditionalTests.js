/// <reference types="cypress" />

import { LoginPageV1 } from "../page-objects/v1-login-page.spec"
import { HomePageV1 } from "../page-objects/v1-home-page.spec"
import { ChartPageV1 } from "../page-objects/v1-chart-page.spec"

describe('Hackathon App V1 tests', () => {

    const lpv1 = new LoginPageV1
    const hpv1 = new HomePageV1
    const cpv1 = new ChartPageV1

    // beforeEach(() => {
    //     lpv1.visitLoginPageV1()
    // })

    it('Login page UI elements test', () => {
        lpv1.visitLoginPageV1()
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
    })

    it('Table sort test', () => {
        hpv1.tableAmountHeader().click()
        hpv1.amount1().should('be.visible').should('have.text', '- 320.00 USD')
        hpv1.amount2().should('be.visible').should('have.text', '- 244.00 USD')
        hpv1.amount3().should('be.visible').should('have.text', '+ 17.99 USD')
        hpv1.amount4().should('be.visible').should('have.text', '+ 340.00 USD')
        hpv1.amount5().should('be.visible').should('have.text', '+ 952.23 USD')
        hpv1.amount6().should('be.visible').should('have.text', '+ 1,250.00 USD')

        //How to validatae "Each row’s data stayed in tact after the sorting" 
    })

    it('Canvas chart test', () => {
        hpv1.compareExpenses().click()

        //Validate that the bar chart and representing that data (number of bars and their heights)

        cpv1.showDataForNextYearButton().click()

        //Verify that this data set is added for the year 2019.

    })

    it('Dynamic content test', () => {

    })

})