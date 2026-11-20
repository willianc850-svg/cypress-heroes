import LoginPage from "../pages/loginPage";

describe("CT03 - Login inválido", () => {
  it("deve recusar e-mail válido com senha errada", () => {
    LoginPage.accessHomePage();
    LoginPage.openLogin();
    LoginPage.fillLoginForm("admin@test.com", "senha-errada");
    LoginPage.verifyInvalidLogin();
  });
});
