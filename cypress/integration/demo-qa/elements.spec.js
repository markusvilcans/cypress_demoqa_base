import CheckBoxPage from "../../pageObjects/CheckBoxPage";
import TextBoxPage from "../../pageObjects/textBoxPage";
import RadioButtonsPage from "../../pageObjects/RadioButtonsPage";
import WebTablesPage from "../../pageObjects/WebTablesPage";
import ButtonsPage from "../../pageObjects/ButtonsPage";
import LinksPage from "../../pageObjects/LinksPage";

context("Elements Page", () => {
  context("Text box scenarios", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    });

    it("Filling in Text Boxes", () => {
      // Add scenario stuff here
      // Input information
      TextBoxPage.fullNameInputField.type("George Junior");
      TextBoxPage.emailInputField.type("somerandomemail@randomdomain.com");
      TextBoxPage.currentAddressInputField.type(
        "Some Random Address in some place"
      );
      TextBoxPage.permanentAddressInputField.type("Some Permanent address");
      // Click Submit
      TextBoxPage.submitButton.click();
      // Validate results
      TextBoxPage.paragraphName
        .should("exist")
        .should("be.visible")
        .should("contain", "George Junior");
      TextBoxPage.paragraphEmail.should(
        "contain",
        "somerandomemail@randomdomain.com"
      );
      TextBoxPage.paragraphCurrentAddress.should(
        "contain",
        "Some Random Address in some place"
      );
      TextBoxPage.paragraphPermanentAddress.should(
        "contain",
        "Some Permanent address"
      );
    });

    it("Filling in Text Boxes", () => {
      cy.fixture("textBoxData").then((data) => {
        TextBoxPage.fullNameInputField.type(data.fullName);
        TextBoxPage.emailInputField.type(data.email);
        TextBoxPage.currentAddressInputField.type(data.currentAddress);
        TextBoxPage.permanentAddressInputField.type(data.permanentAddress);
        TextBoxPage.submitButton.click();
        TextBoxPage.paragraphName.should("contain", data.fullName);
        TextBoxPage.paragraphEmail.should("contain", data.email);
        TextBoxPage.paragraphCurrentAddress.should(
          "contain",
          data.currentAddress
        );
        TextBoxPage.paragraphPermanentAddress.should(
          "contain",
          data.permanentAddress
        );
      });
    });
  });

  context("Check Box scenarios", () => {
    beforeEach(() => {
      CheckBoxPage.visit();
    });

    it("Click checkboxes - Notes And general", () => {
      // Click +/Expand button
      CheckBoxPage.expandButton.click();
      // Click Notes checkbox
      CheckBoxPage.checkBoxTitles.contains("Notes").click();
      // Click Genereal checkbox
      CheckBoxPage.checkBoxTitles.contains("General").click();
      // Validate that "You have selected notes general"
      CheckBoxPage.checkedResults
        .should("contain", "notes")
        .should("contain", "general");
    });

    it("Click checkboxes - Office", () => {
      // Click +/Expand button
      CheckBoxPage.expandButton.click();
      // Click Notes - Office
      CheckBoxPage.checkBoxTitles.contains("Office").click();
      // Validate that all the Office section elements are checked
      CheckBoxPage.checkedResults
        .should("contain", "office")
        .should("contain", "public")
        .should("contain", "private")
        .should("contain", "classified")
        .should("contain", "general");
    });
  });

  context("Radio buttons scenarios", () => {
    beforeEach(() => {
      RadioButtonsPage.visit();
    });

    it("Click Radio Buttons", () => {
      // Click - Yes button
      RadioButtonsPage.yesButton.click({ force: true });
      // Validate - Yes is clicked
      RadioButtonsPage.resultsSection.should("contain", "Yes");
      // Click - Impressive button
      RadioButtonsPage.impressiveButton.click({ force: true });
      // Validate - impressive is clicked
      RadioButtonsPage.resultsSection.should("contain", "Impressive");
      // disabled button
      RadioButtonsPage.noButton.should("exist").should("be.disabled");
    });
  });

  context("Web Tables scenarios", () => {
    beforeEach(() => {
      WebTablesPage.visit();
    });

    it("Create user in web table", () => {
      // Click Add button
      WebTablesPage.addButton.click();
      // Input necessary information about user
      WebTablesPage.firstNameInputField.type("George");
      WebTablesPage.lastNameInputField.type("Washington");
      WebTablesPage.emailNameInputField.type("someradnom@doman.com");
      WebTablesPage.ageInputField.type(76);
      WebTablesPage.salaryInputField.type(100000);
      WebTablesPage.departmentInputField.type("Finances", { force: true });
      // Click Submit
      WebTablesPage.submitButton.click();
      // Validate user in the list by email
      WebTablesPage.findRow("someradnom@doman.com").should(
        "contain",
        "Washington"
      );
      WebTablesPage.findRow("someradnom@doman.com").should("contain", "George");
    });

    it("Delete all users in list", () => {
      // Create method that deletes user based on email.
      // Delete user with email: kierra@example.com
      WebTablesPage.rows.should("contain", "kierra@example.com");
      WebTablesPage.deleteUser("kierra@example.com");
      WebTablesPage.rows.should("not.contain", "kierra@example.com");
      // Delete user with email: alden@example.com
      WebTablesPage.deleteUser("alden@example.com");
      WebTablesPage.rows.should("not.contain", "alden@example.com");
      // Delete user with email: cierra@example.com
      WebTablesPage.deleteUser("cierra@example.com");
      WebTablesPage.rows.should("not.contain", "cierra@example.com");
    });
  });

  context("Buttons scenarios", () => {
    beforeEach(() => {
      ButtonsPage.visit();
    });

    it("Click all buttons in different ways", () => {
      // Create necesary elements
      // Click them in the ment way
      // https://docs.cypress.io/api/commands/click
      // Find in documentation how to do doubleclick, rightclick.
      // Double click
      ButtonsPage.doubleClickMeButton.dblclick();
      ButtonsPage.doubleClickMessage
        .should("be.visible")
        .should("contain", "You have done a double click");
      // RightClick
      ButtonsPage.rightClickMeButton.rightclick();
      ButtonsPage.rightClickMessage
        .should("be.visible")
        .should("contain", "You have done a right click");
      // Dynamic click
      ButtonsPage.dynamicClickButton.should("be.visible");
    });
  });

  context("Buttons scenarios", () => {
    beforeEach(() => {
      LinksPage.visit();
    });

    it.only("API intercepting", () => {
      // cy.intercept("GET", "created", { statusCode: 400 });
      LinksPage.createdLink.click();
      LinksPage.linkResponse.should("contain", "201");
    });
  });
});
