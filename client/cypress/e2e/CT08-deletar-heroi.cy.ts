import HeroesPage, { CreatedHero } from "../pages/heroesPage";

describe("CT08 - Deletar o herói criado", () => {
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

  it("deve remover o herói da listagem após a confirmação", () => {
    cy.get<CreatedHero>("@newHero").then((hero) => {
      HeroesPage.clickDelete(hero.name);
      HeroesPage.confirmDelete();
      HeroesPage.verifyHeroNotListed(hero.name);
    });
  });
});
