export type CreatedHero = {
  id: number;
  name: string;
  price: number;
  fans: number;
  saves: number;
  powers: { name: string }[];
};

class HeroesPage {
  selectorList() {
    const selectors = {
      heroCard: "[data-cy=hero-card]",
      name: "[data-cy=name]",
      price: "[data-cy=price]",
      fans: "[data-cy=fans]",
      saves: "[data-cy=saves]",
      powers: "[data-cy=powers]",
      likeButton: "[data-cy=like]",
      hireButton: "[data-cy=money]",
      editButton: "[data-cy=pencil]",
      deleteButton: "[data-cy=trash]",
      createHeroButton: "Create New Hero",
      hireModalTitle: "Hire Hero?",
      deleteModalTitle: "Delete Hero?",
      confirmButton: "Yes",
    };

    return selectors;
  }

  card(name: string) {
    return cy.contains(this.selectorList().heroCard, name);
  }

  clickCreateNewHero() {
    cy.contains(this.selectorList().createHeroButton).click();
    cy.location("pathname").should("equal", "/heroes/new");
  }

  verifyOnHeroesList() {
    cy.location("pathname").should("equal", "/heroes");
  }

  verifyHeroNames(names: string[]) {
    names.forEach((name) => {
      this.card(name).should("be.visible");
    });
  }

  verifyHeroData(hero: Omit<CreatedHero, "id">) {
    const selectors = this.selectorList();

    this.card(hero.name).as("heroCard");
    cy.get("@heroCard").find(selectors.name).should("contain", hero.name);
    cy.get("@heroCard")
      .find(selectors.price)
      .should("contain", String(hero.price));
    cy.get("@heroCard")
      .find(selectors.fans)
      .should("contain", String(hero.fans));
    cy.get("@heroCard")
      .find(selectors.saves)
      .should("contain", String(hero.saves));
    hero.powers.forEach((power) => {
      cy.get("@heroCard")
        .find(selectors.powers)
        .should("contain.text", power.name);
    });
  }

  verifyHeroNotListed(name: string) {
    cy.contains(this.selectorList().heroCard, name).should("not.exist");
  }

  clickEdit(name: string) {
    this.card(name).find(this.selectorList().editButton).click();
    cy.location("pathname").should("match", /\/heroes\/\d+\/edit/);
  }

  clickDelete(name: string) {
    this.card(name).find(this.selectorList().deleteButton).click();
  }

  confirmDelete() {
    const selectors = this.selectorList();

    cy.contains(selectors.deleteModalTitle).should("be.visible");
    cy.contains("button", selectors.confirmButton).click();
  }

  clickLike(name: string) {
    this.card(name).find(this.selectorList().likeButton).click();
  }

  verifyFans(name: string, fans: number) {
    this.card(name)
      .find(this.selectorList().fans)
      .should("contain", String(fans));
  }

  clickHire(name: string) {
    this.card(name).find(this.selectorList().hireButton).click();
  }

  confirmHire() {
    const selectors = this.selectorList();

    cy.contains(selectors.hireModalTitle).should("be.visible");
    cy.contains("button", selectors.confirmButton).click();
  }

  verifySaves(name: string, saves: number) {
    this.card(name)
      .find(this.selectorList().saves)
      .should("contain", String(saves));
  }

  verifyAdminActions(name: string) {
    const selectors = this.selectorList();

    cy.contains(selectors.createHeroButton).should("be.visible");
    this.card(name).find(selectors.editButton).should("be.visible");
    this.card(name).find(selectors.deleteButton).should("be.visible");
  }

  verifyCommonUserActions(name: string) {
    const selectors = this.selectorList();

    cy.contains(selectors.createHeroButton).should("not.exist");
    this.card(name).find(selectors.editButton).should("not.exist");
    this.card(name).find(selectors.deleteButton).should("not.exist");
  }
}

export default new HeroesPage();
