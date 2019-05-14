describe('sign up', function() {
  it('a new user can sign up for makers bnb', function() {
    cy.signup('test@example', 'password123');
    cy.contains('Welcome test@example')
  })
})
