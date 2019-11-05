export class HackathonAppV1 {

    visitLoginPageV1(){
        cy.viewport(1440,900)
        cy.visit('https://demo.applitools.com/hackathon.html') //Version 1
    }

}