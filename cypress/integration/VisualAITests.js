/// <reference types="cypress" />

import { LoginPage } from "../page-objects/login-page.spec"
import { HomePage } from "../page-objects/home-page.spec"
import { ChartPage } from "../page-objects/chart-page.spec"

// https://eyes.applitools.com/?accountId=cB2zgF7jCEaBPGAD3jdcKg~~&userName=daniel.sanchez%40silverlinecrm.com&source=&
// Username: daniel.sanchez@silverlinecrm.com
// API key: 3NrJB25IVoPS1k85TXUb102qACnCac93iYpjAX8E3E8sw110

describe('Visual tests', () => {

    const lp = new LoginPage
    const hp = new HomePage
    const cp = new ChartPage

    beforeEach(() => cy.eyesOpen({appName: 'HackathonApp', batchName: 'Hackathon Visual Tests'}))
    afterEach(() => cy.eyesClose())

    it('Login page UI elements test', () => {
        lp.visitLoginPage()
        cy.eyesCheckWindow('Login page')
    })

    it('Data-driven test', () => {
        //a. If user doesn’t enter the username and password and click the login button, it should throw an error
        lp.loginButton().click()
        cy.eyesCheckWindow('Username/Password error')

        //b. If user only enters the username and clicks the login button, it should throw an error
        lp.usernameField().type('test')
        lp.loginButton().click()
        cy.eyesCheckWindow('Password error')

        //c. If user only enters the password and clicks the login button, it should throw an error
        lp.usernameField().clear()
        lp.passwordField().type('test')
        lp.loginButton().click()
        cy.eyesCheckWindow('Username error')

        //d. If user enters both username (any value) and password (any value), it should log you in.
        lp.usernameField().type('test')
        lp.passwordField().type('test')
        lp.loginButton().click()
        cy.eyesCheckWindow('Home page')
    })

    it('Table sort test', () => {
        //Verify that the column is in ascending order  
        hp.tableAmountHeader().click()
        cy.eyesCheckWindow('Table sorted by Amount ascending order')

        //How to validatae "Each row’s data stayed in tact after the sorting" 
        //
        // *** Unable to use validate this via traditional testing ***
        // 

    })

    it('Canvas chart test', () => {
        hp.compareExpenses().click()
        cy.eyesCheckWindow('2017/2018 Chart')

        // Validate that the bar chart and representing that data (number of bars and their heights)
        //
        // *** Unable to use validate this via traditional testing ***
        // 

        cp.showDataForNextYearButton().click()
        cy.eyesCheckWindow('2017/2018/2019 Chart')

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
        cy.eyesCheckWindow('Login page gifs')
    })

})