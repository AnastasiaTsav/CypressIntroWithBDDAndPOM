import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../page-objects/loginPage.page";

Given('I am on the site url', () =>{
    cy.visit('/');
})

When('I enter the username {string}', (username) => {
    cy.get(LoginPage.getUsername()).type(username);
})

And('I enter the password {string}', (password) =>{
    cy.get(LoginPage.getPassword()).type(password);
})

And('I click on login button', () =>{
    cy.get(LoginPage.getLoginButton()).click();
})

Then('I should be redirected to "Main Inventory" page', () => {
    cy.url().should('include', 'inventory');
})

Then('I should see an error message', () => {
    cy.get(LoginPage.getError()).should('have.text', 'Epic sadface: Username and password do not match any user in this service');
    //or if we don't know the exactly message but just one part of the text displayed
    //cy.get(LoginPage.getError()).contains('Epic sadface:');
})