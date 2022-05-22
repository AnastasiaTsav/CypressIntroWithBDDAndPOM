import LoginPage from "../page-objects/loginPage.page";

describe('Successfull login', () => {
    
    before(('Given I am on site url', () =>{
        cy.open();
    }));

    describe('When I enter valid username', ()=> {
        before(() =>{
            cy.get(LoginPage.getUsername()).type("standard_user");
        })
        it('username should have the correct text', () =>{
            cy.get(LoginPage.getUsername()).should('have.value', 'standard_user');
        })
    })

    describe('And When I enter valid password', () => {
        before(() =>{
            cy.get(LoginPage.getPassword()).type("secret_sauce");
        })
        it('password should have the correct password', () =>{
            cy.get(LoginPage.getPassword()).should('have.value', 'secret_sauce');
        })
    });
  

    describe('And When I click on login', () =>{
        before(() => {
            cy.get(LoginPage.getLoginButton()).click();
        })
        it('should redirect to inventory page', () => {
            cy.url().should('include', 'inventory');
        });
    })
})
