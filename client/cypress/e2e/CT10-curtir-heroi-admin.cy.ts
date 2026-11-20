import HeroesPage, { CreatedHero } from "../pages/heroesPage";

describe("CT10 - Teste do botão de curtir herói (admin)", () => {
  beforeEach(() => {
    cy.createHero();
    cy.login("admin@test.com", "test123");
    cy.visit("/");
  });

  afterEach(() => {
    cy.get<CreatedHero>("@newHero").then((hero) => {
      cy.deleteHero(hero.id);
    });
  });

  it("deve aumentar os fans em 1", () => {
    cy.get<CreatedHero>("@newHero").then((hero) => {
      HeroesPage.clickLike(hero.name);
      HeroesPage.verifyFans(hero.name, hero.fans + 1);
    });
  });
});
