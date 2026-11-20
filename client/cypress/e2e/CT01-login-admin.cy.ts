import LoginPage from "../pages/loginPage";

describe("CT01 - Login com usuário válido (admin)", () => {
  it("deve autenticar o administrador", () => {
    LoginPage.accessHomePage();
    LoginPage.openLogin();
    LoginPage.fillLoginForm("admin@test.com", "test123");
    LoginPage.verifyAdminLoggedIn();
  });
});
