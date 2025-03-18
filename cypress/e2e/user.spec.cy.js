import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import Dashboard from '../pages/dashboard.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'


const Chance = require('chance');

const chance = new Chance()
const loginPage = new LoginPage()
const dashboard = new Dashboard()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()


describe('Orange HRM Tests', () => {


  it('User Update - sucesso', () => {
    loginPage.accessLoginPage()
    loginPage.logincomUsuario(userData.userSucesso.username, userData.userSucesso.password)

    dashboard.checkDashboard()
    menuPage.accessorPerformance()
    menuPage.acessMyInfo()

    myInfoPage.fillPersonalDetails(chance.first(), chance.last())
    myInfoPage.fillEmployeeDetails(chance.prime(), chance.string(), chance.string(), chance.date({string: true}), chance.date({string: true}))
    myInfoPage.saveForm()
    myInfoPage.fillStatus()


  })

})
