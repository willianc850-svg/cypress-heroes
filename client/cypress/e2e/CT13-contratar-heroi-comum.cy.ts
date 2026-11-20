import HeroesPage, { CreatedHero } from "../pages/heroesPage";

describe("CT13 - Teste do botão de contratar herói (comum)", () => {
  beforeEach(() => {
    cy.createHero();
    cy.login("test@test.com", "test123");
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
