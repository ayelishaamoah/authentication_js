describe('sign up', function() {
  it('a new user can sign up for makers bnb', function() {
    cy.signup('John','Doe', 'test@example', 'password123', 'password123');
    cy.contains('Feel at home, anywhere')
  });
});
// 
// describe('sign up', function() {
//   it('a new user can sign up for makers bnb', function() {
//     cy.login('test@example', 'password123')
//     cy.contains('Welcome John Doe')
//   });
// });
