import ButtonsPage from "../../pageObjects/ButtonsPage";
import CheckBoxPage from "../../pageObjects/CheckBoxPage";
import RadioButtonsPage from "../../pageObjects/RadioButtonsPage";
import SelectablePage from "../../pageObjects/SelectablePage";
import TextBoxPage from "../../pageObjects/textBoxPage";
import WebTablesPage from "../../pageObjects/WebTablesPage";
import WebPageTables from "../../pageObjects/WebTablesPage";


/*context("Elements Page", () => {
  context("Text box scenarios", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    });

    it("Filling in Text Boxes", () => {
      TextBoxPage.fullNameInputField.type("George Junior");
      TextBoxPage.emailInputField.type("random@gmail.com");
      TextBoxPage.currentAddressInputField.type("Adrese Valmiera");
      TextBoxPage.permanentAddressInputField.type("Perm address");
      TextBoxPage.submitButton.click();
      // Validate
      TextBoxPage.paragraphName
      .should('exist')
      .should('be.visible');
    });

    it("Filling in Text Boxes", () => {
      cy.fixture('textBoxData').then(data => {
        cy.log(JSON.stringify(data));
        TextBoxPage.fullNameInputField.type(data.fullName);
        TextBoxPage.emailInputField.type(data.email);
        TextBoxPage.currentAddressInputField.type(data.currentAddress);
        TextBoxPage.permanentAddressInputField.type(data.permanentAddress);
        TextBoxPage.submitButton.click();
        //Validate
        TextBoxPage.paragraphName
        .should('exist')
        .should('be.visible');
      })
    });
  });

    context("Check Box scenarios", () => {
    beforeEach(() => {
      CheckBoxPage.visit();
    });

    it("Click checkboxes - Notes And general", () => {
      CheckBoxPage.expandButton.click();
      CheckBoxPage.checkBoxTitles.contains('Notes').click();
      CheckBoxPage.checkBoxTitles.contains('General').click();
      //Validate
      CheckBoxPage.expandButton
      .should('exist')
      .should('be.visible');
      CheckBoxPage.checkResults
      .should('contain','notes')
      .should('contain','general');
    });
    
    it("Click checkboxes - Office", () => {
      CheckBoxPage.expandButton.click();
      CheckBoxPage.checkBoxTitles.contains('Office').click();
      //Validate
      CheckBoxPage.checkResults
      .should('contain','office')
      .should('contain','public')
      .should('contain','private')
      .should('contain','general')
      .should('contain','classified');
    });

    context("Radio buttons scenarios", () => {
      beforeEach(() => {
        RadioButtonsPage.visit();
      });
  
      it("Click Radio Buttons", () => {
        RadioButtonsPage.yesButton.click({force: true});
        RadioButtonsPage.impressiveButton.click({force: true});
      });



    context("Web tables scenario", () => {
      beforeEach(() => {
        WebTablesPage.visit();
      });
  
      it("Web page", () => {
        WebTablesPage.addButton.click();
        WebTablesPage.addFirstName.type("Markus");
        WebTablesPage.addLastName.type("Vilcans");
        WebTablesPage.addUserEmail.type("markus@gmail.com");
        WebTablesPage.addAge.type("20");
        WebTablesPage.addSalary.type("3000");
        WebTablesPage.addDeparment.type("IT");
        WebTablesPage.submit.click();
      });

      context("Buttons scenario", () => {
        beforeEach(() => {
          ButtonsPage.visit();
        });
    
        it("Click Radio Buttons", () => {

          ButtonsPage.DoubleClicker.dblclick();
          ButtonsPage.RightClicker.rightclick();
          ButtonsPage.DynamicClicker.click()
        });
        */

        context("Selectable scenarios", () => {
          beforeEach(() => {
            SelectablePage.visit();
          });
      
          it.only("Click selectable list and grid buttons", () => {
            //Code and validation
            SelectablePage.list.contains('Cras justo odio').click().should('have.class','active');
            SelectablePage.list.contains('Dapibus ac facilisis in').click().should('have.class','active');
            //Go to Grid page
            SelectablePage.goGrid.click();
            SelectablePage.Grid.contains('Two').click().should('have.class','active');
            SelectablePage.Grid.contains('Four').click().should('have.class','active');
            SelectablePage.Grid.contains('Six').click().should('have.class','active');
            SelectablePage.Grid.contains('Eight').click().should('have.class','active');
          });

    });
    /*
  });
});
});
});
});*/
//had some issues with github, this is a test