import HeroFormPage from "../pages/heroFormPage";
import HeroesPage, { CreatedHero } from "../pages/heroesPage";

describe("CT07 - Editar o herói criado", () => {
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

  it("deve salvar as alterações e exibir o card atualizado", () => {
    cy.get<CreatedHero>("@newHero").then((hero) => {
      HeroesPage.clickEdit(hero.name);
      HeroFormPage.appendName(" edited");
      HeroFormPage.fillNumbers("12", "34", "56");
      HeroFormPage.selectPowers(["Fireball", "Super Strength"]);
      HeroFormPage.submit();
      HeroesPage.verifyOnHeroesList();
      HeroesPage.verifyHeroData({
        ...hero,
        name: `${hero.name} edited`,
        price: 12,
        fans: 34,
        saves: 56,
        powers: [{ name: "Fireball" }, { name: "Super Strength" }],
      });
    });
  });
});
