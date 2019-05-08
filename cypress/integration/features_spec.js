describe('sign up', function() {
  it('a new user can sign up for makers bnb', function() {
    cy.visit('/')
    cy.get('input[name="email"]').type('test@example');
    cy.get('input[name="password"]').type('password123');
    cy.get('input[name="sign_up"]').click();
    cy.contains('Welcome test@example')
  })
})
