class LoginPage {
  selectorList() {
    const selectors = {
      emailField: '[data-cy=email]',
      passwordField: '[data-cy=password]',
      signInButton: 'Sign in',
      loginButton: 'Login',
      logoutButton: 'Logout',
      errorMessage: 'Invalid email or password',
      createHeroButton: 'Create New Hero',
    };

    return selectors;
  }

  accessHomePage() {
    cy.visit('/');
  }

  openLogin() {
    cy.contains('button', this.selectorList().loginButton).click();
  }

  fillLoginForm(email: string, password: string) {
    const selectors = this.selectorList();

    cy.get(selectors.emailField).type(email);
    cy.get(selectors.passwordField).type(password);
    cy.contains('button', selectors.signInButton).click();
  }

  verifyAdminLoggedIn() {
    const selectors = this.selectorList();

    cy.contains('button', selectors.logoutButton).should('be.visible');
    cy.contains(selectors.createHeroButton).should('be.visible');
  }

  verifyCommonUserLoggedIn() {
    const selectors = this.selectorList();

    cy.contains('button', selectors.logoutButton).should('be.visible');
    cy.contains(selectors.createHeroButton).should('not.exist');
  }

  verifyInvalidLogin() {
    const selectors = this.selectorList();

    cy.contains(selectors.errorMessage).should('be.visible');
    cy.contains('button', selectors.logoutButton).should('not.exist');
    cy.contains('button', selectors.loginButton).should('exist');
  }
}

export default new LoginPage();
