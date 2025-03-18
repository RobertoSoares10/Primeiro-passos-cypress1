class MenuPage {

    selectorsList() {
        const selectors = {
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
            myperformance: "[href='/web/index.php/performance/viewPerformanceModule']",

        }
        return selectors
    }
    acessMyInfo() {
        cy.get(this.selectorsList().myInfoButton).click()

    }
    accessorPerformance() {
        cy.get(this.selectorsList().myperformance).click()
    }

    checkAcessInvalid(){
        cy.get(selectorsList.wrongCredentialAlert)
    }

}
export default MenuPage