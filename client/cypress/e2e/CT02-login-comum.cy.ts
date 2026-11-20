import LoginPage from "../pages/loginPage";

describe("CT02 - Login com usuário válido (comum)", () => {
  it("deve autenticar o usuário comum", () => {
    LoginPage.accessHomePage();
    LoginPage.openLogin();
    LoginPage.fillLoginForm("test@test.com", "test123");
    LoginPage.verifyCommonUserLoggedIn();
  });
});
