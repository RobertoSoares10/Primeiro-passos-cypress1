import userData from '../fixtures/userData.json'


describe('Orange HRM Tests', () => {


  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    SectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    dashboardGrid: '.orangehrm-dashboard-grid',
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    placeholder: "[placeholder='yyyy-dd-mm']",
    SubmitButton: "[type='submit']",
    nationality: "[clear='false']",
    maritalStatus: "[clear='false']",
    //
  }



  it.only('User Update - sucesso', () => {

    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucesso.username)
    cy.get(selectorsList.passwordField).type(userData.userSucesso.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('FirsNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('EmployeeId')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('Drivers License Number Test')
    cy.get(selectorsList.placeholder).eq(0).clear().type('2025-03-14')
    cy.get(selectorsList.placeholder).eq(1).clear({ force: true }).type('2026-03-14')
    cy.get(selectorsList.SubmitButton).eq(0).click()
    cy.get(selectorsList.SubmitButton).eq(1).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close') 
    cy.get(selectorsList.nationality).eq(0).click()
    cy.contains('Angolan').click()
    cy.get(selectorsList.maritalStatus).eq(1).click()
    cy.contains('Single').click()



  })
  it('Login sem sucesso', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSemSucesso.username)
    cy.get((selectorsList.passwordField)).type(userData.userSemSucesso.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)











  })
})