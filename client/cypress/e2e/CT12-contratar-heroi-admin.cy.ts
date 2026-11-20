import HeroesPage, { CreatedHero } from "../pages/heroesPage";

describe("CT12 - Teste do botão de contratar herói (admin)", () => {
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

  it("deve aumentar os saves em 1 depois da confirmação", () => {
    cy.get<CreatedHero>("@newHero").then((hero) => {
      HeroesPage.clickHire(hero.name);
      HeroesPage.confirmHire();
      HeroesPage.verifySaves(hero.name, hero.saves + 1);
    });
  });
});
