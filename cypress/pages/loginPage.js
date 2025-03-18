class LoginPage {
    selectorsList() {
        const selectorsList = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            wrongCredentialAlert: "[role='alert']",
        }

      return selectorsList

    }
    accessLoginPage() {
    cy.visit('/auth/login')
    }
    logincomUsuario(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()

    }
    
    checkAcessInvalid(){
        cy.get(this.selectorsList().wrongCredentialAlert)
    }

}

export default LoginPage