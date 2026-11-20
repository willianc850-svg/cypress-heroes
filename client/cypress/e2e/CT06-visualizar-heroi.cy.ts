import HeroesPage, { CreatedHero } from "../pages/heroesPage";

describe("CT06 - Visualizar o herói criado", () => {
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

  it("deve mostrar os dados do herói no card da listagem", () => {
    cy.get<CreatedHero>("@newHero").then((hero) => {
      HeroesPage.verifyHeroData(hero);
    });
  });
});
