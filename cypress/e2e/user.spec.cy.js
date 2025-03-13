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
    EmployeeField: ".oxd-input--active",

  }



  it.only('User Update - sucesso', () => {

    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucesso.username)
    cy.get(selectorsList.passwordField).type(userData.userSucesso.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField)
    cy.get(selectorsList.lastNameField)
    cy.get(selectorsList.EmployeeField).eq(5).type('EmployeeFieldTest')

  })
  it('Login sem sucesso', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSemSucesso.username)
    cy.get((selectorsList.passwordField)).type(userData.userSemSucesso.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)











  })
})