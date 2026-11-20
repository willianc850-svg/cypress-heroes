class HeroFormPage {
  selectorList() {
    const selectors = {
      nameInput: '[data-cy=nameInput]',
      priceInput: '[data-cy=priceInput]',
      fansInput: '[data-cy=fansInput]',
      savesInput: '[data-cy=savesInput]',
      powersSelect: '[data-cy=powersSelect]',
      submitButton: 'Submit',
    };

    return selectors;
  }

  fillName(name: string) {
    cy.get(this.selectorList().nameInput).clear().type(name);
  }

  appendName(suffix: string) {
    cy.get(this.selectorList().nameInput).type(suffix);
  }

  fillNumbers(price: string, fans: string, saves: string) {
    const selectors = this.selectorList();

    cy.get(selectors.priceInput).clear().type(price);
    cy.get(selectors.fansInput).clear().type(fans);
    cy.get(selectors.savesInput).clear().type(saves);
  }

  selectPowers(powers: string[]) {
    cy.get(this.selectorList().powersSelect).select(powers);
  }

  submit() {
    cy.contains('button', this.selectorList().submitButton).click();
  }
}

export default new HeroFormPage();
