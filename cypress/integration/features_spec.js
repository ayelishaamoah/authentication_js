describe('test infrastructure', function() {
  it('visits the homepage', function() {
    cy.visit('/')
    cy.contains("Feel at home, anywhere")
  })
})
