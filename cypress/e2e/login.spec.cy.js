import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import Dashboard from '../pages/dashboard.js'

const loginPage = new LoginPage()
const dashboard = new Dashboard()

describe('Login Orange HRM Tests', () => {

  it('Login sem sucesso', () => {
    cy.visit('/auth/login')
    loginPage.logincomUsuario(userData.userSemSucesso.username, userData.userSemSucesso.password)
    loginPage.checkAcessInvalid()
  })

  it('Login sucesso', () => {
    cy.visit('/auth/login')
    loginPage.logincomUsuario(userData.userSucesso.username, userData.userSucesso.password)
    dashboard.checkDashboard()
  })


})
