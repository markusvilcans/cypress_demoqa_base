import BasePage from "./BasePage";

class ButtonsPage extends BasePage {
  static get url() {
    return "/buttons";
  }

  static get exampleElement() {
    return cy.get("exampleSelector");
  }

  static get doubleClickMeButton() {
    return cy.get("#doubleClickBtn");
  }

  static get rightClickMeButton() {
    return cy.get("#rightClickBtn");
  }

  static get dynamicClickButton() {
    return cy.get(".btn-primary").contains(/^Click Me/);
    // return cy.get(".btn-primary").eq(2);
  }

  static get doubleClickMessage() {
    return cy.get("#doubleClickMessage");
  }

  static get rightClickMessage() {
    return cy.get("#rightClickMessage");
  }
}

export default ButtonsPage;
