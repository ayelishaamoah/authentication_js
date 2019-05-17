// User can fill out form
describe('sign up', function() {
  it('a new user can sign up for makers bnb', function() {
    cy.signup('John','Doe', 'test@example', 'password123', 'password123');
    cy.contains('Feel at home, anywhere')
  });
});

// validate form
describe('sign up', function() {
  context('invalid credentials', function(){
    it('u user must fill in all fields', function() {
      cy.visit('/')
      cy.get('input[name="first_name"]').type("John")
      cy.get('input[name="email"]').type('test@example')
      cy.get('input[name="password"]').type('password123')
      cy.get('button[id="sign_up"]').click()
      cy.contains('Please fill out all fields');
    });
  });
});
