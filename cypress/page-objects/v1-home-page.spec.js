export class HomePageV1 {

    //Header Locators

    logoIcon(){
        return cy.get('.logo-element')
    }

    financialOverviewHeader(){
        return cy.get('.compact > .element-header')   
    }

    tableAmountHeader(){
        return cy.get('#amount')
    }

    amount1(){
        return cy.get(':nth-child(1) > .text-right > .text-danger')
    }

    amount2(){
        return cy.get(':nth-child(2) > .text-right > .text-danger')
    }

    amount3(){
        return cy.get(':nth-child(3) > .text-right > .text-success')
    }

    amount4(){
        return cy.get(':nth-child(4) > .text-right > .text-success')
    }

    amount5(){
        return cy.get(':nth-child(5) > .text-right > .text-success')
    }

    amount6(){
        return cy.get(':nth-child(6) > .text-right > .text-success')
    }

    compareExpenses(){
        return cy.get('#showExpensesChart')
    }
    
}