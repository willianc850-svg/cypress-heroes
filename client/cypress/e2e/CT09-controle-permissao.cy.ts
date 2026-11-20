import HeroesPage, { CreatedHero } from "../pages/heroesPage";

describe("CT09 - Controle de permissão (UI)", () => {
  beforeEach(() => {
    cy.createHero();
  });

  afterEach(() => {
    cy.get<CreatedHero>("@newHero").then((hero) => {
      cy.deleteHero(hero.id);
    });
  });

  it("deve mostrar ações de admin e ocultá-las do usuário comum", () => {
    cy.get<CreatedHero>("@newHero").then((hero) => {
      cy.login("admin@test.com", "test123");
      cy.visit("/");
      HeroesPage.verifyAdminActions(hero.name);

      cy.login("test@test.com", "test123");
      cy.visit("/");
      HeroesPage.verifyCommonUserActions(hero.name);
    });
  });
});
