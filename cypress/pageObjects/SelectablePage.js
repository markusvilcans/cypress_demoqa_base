import BasePage from "./BasePage";

class SelectablePage extends BasePage {
    static get url() {
        return "/selectable";
    }

    static get list() {
        return cy.get("ul#verticalListContainer");
    }

    static get goGrid() {
        return cy.get("#demo-tab-grid");
    }

    static get Grid() {
        return cy.get("#gridContainer");
    }


    
}

export default SelectablePage;