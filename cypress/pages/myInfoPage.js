class MyInfoPage {
    selectorsList() {
        return {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            placeholder: "[placeholder='yyyy-dd-mm']",
            submitButton: "[type='submit']",
            nationality: "[clear='false']",
            maritalStatus: "[clear='false']",
            toastClose: ".oxd-toast-close"
        };
    }

    fillPersonalDetails(firstName, lastName) {
        cy.get(this.selectorsList().firstNameField).should('be.visible').clear().type(firstName);
        cy.get(this.selectorsList().lastNameField).should('be.visible').clear().type(lastName);
    }

    fillEmployeeDetails(employeeId, otherId, driversLicenseNumber, expiryDate) {
        cy.get(this.selectorsList().genericField).eq(3).should('be.visible').clear().type(employeeId);
        cy.get(this.selectorsList().genericField).eq(4).should('be.visible').clear().type(otherId);
        cy.get(this.selectorsList().genericField).eq(5).should('be.visible').clear().type(driversLicenseNumber);
        cy.get(this.selectorsList().genericField).eq(6).should('be.visible').clear().type(expiryDate);

        // Clicar no primeiro botão submit encontrado
        cy.get(this.selectorsList().submitButton).eq(0).should('be.visible').click();

        cy.get(this.selectorsList().placeholder).eq(0).should('be.visible').clear().type('2022-03-14');
        cy.get(this.selectorsList().placeholder).eq(1).should('be.visible').clear({ force: true }).type('2023-05-31');
    }

    saveForm() {
        // Certifica-se de que há dois botões antes de tentar clicar
        cy.get(this.selectorsList().submitButton).should('have.length.at.least', 2);

        cy.get(this.selectorsList().submitButton).eq(0).should('be.visible').click({ force: true });
        cy.get(this.selectorsList().submitButton).eq(1).should('be.visible').click({ force: true });

        cy.get('body').should('contain', 'Successfully Updated');

        // Clica no toast de sucesso apenas se ele existir
        cy.get(this.selectorsList().toastClose).should('exist').and('be.visible').click();
    }

    fillStatus() {
        cy.get(this.selectorsList().nationality).eq(0).should('be.visible').click({ force: true });
        cy.get(this.selectorsList().maritalStatus).eq(1).should('be.visible').click({ force: true });
    }
}

export default MyInfoPage;