export class HomePageV1 {

    //Header Locators

    logoIcon(){
        return cy.get('.logo-element')
    }

    financialOverviewHeader(){
        return cy.get('.compact > .element-header')   
    }
}