import HeroesPage from "../pages/heroesPage";

const seedHeroes = [
  "The Smoker",
  "Warp Speed",
  "Cyonic",
  "The Librarian",
  "Mr Angular",
  "Collect Call Paul",
  "Fly Girl",
];

describe("CT04 - Listagem de heróis após login", () => {
  beforeEach(() => {
    cy.login("admin@test.com", "test123");
    cy.visit("/");
  });

  it("deve exibir os heróis do seed na página inicial", () => {
    HeroesPage.verifyOnHeroesList();
    HeroesPage.verifyHeroNames(seedHeroes);
  });
});
