import HeroFormPage from "../pages/heroFormPage";
import HeroesPage from "../pages/heroesPage";

describe("CT05 - Criar novo herói (admin)", () => {
  beforeEach(() => {
    cy.intercept({ method: "POST", url: "**/heroes" }).as("createHeroRequest");
    cy.login("admin@test.com", "test123");
    cy.visit("/");
  });

  afterEach(() => {
    cy.get("@createHeroRequest").then((interception: any) => {
      cy.deleteHero(interception.response.body.id);
    });
  });

  it("deve salvar o herói e exibir o card na listagem", () => {
    HeroesPage.clickCreateNewHero();
    HeroFormPage.fillName("New Test Hero");
    HeroFormPage.fillNumbers("12", "34", "56");
    HeroFormPage.selectPowers(["Fireball", "Super Strength"]);
    HeroFormPage.submit();
    HeroesPage.verifyOnHeroesList();
    HeroesPage.verifyHeroData({
      name: "New Test Hero",
      price: 12,
      fans: 34,
      saves: 56,
      powers: [{ name: "Fireball" }, { name: "Super Strength" }],
    });
  });
});
