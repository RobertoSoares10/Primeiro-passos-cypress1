class Dashboard {
    selectorsList() {
        const selectorsList = {
            dashboardGrid: '.orangehrm-dashboard-grid',

        }

        return selectorsList
    }
    checkDashboard() {
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(this.selectorsList().dashboardGrid).should('be.visible')
    }





}

export default Dashboard