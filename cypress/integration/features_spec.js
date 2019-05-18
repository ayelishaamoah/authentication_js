// describe('sign up', function() {
//   context('successfull login', function() {
//     it('a new user can sign up for makers bnb', function() {
//       cy.signup('John','Doe', 'test@example', 'password123', 'password123')
//       cy.contains('You have signed up')
//     });
//   });
//
//   context('invalid credentials', function(){
//     it('a user must fill in all fields', function() {
//       cy.visit('/')
//       cy.get('button[id="sign_up"]').click()
//       cy.get('li[class="alert-message warning"]').should('have.length', 5)
//     });
//
//     it('passwords must match', function() {
//       cy.visit('/')
//       cy.get('input[name="first_name"]').type("John")
//       cy.get('input[name="last_name"]').type("Doe")
//       cy.get('input[name="email"]').type('test@example')
//       cy.get('input[name="password"]').type('password123')
//       cy.get('input[name="password2"]').type('password1')
//       cy.get('button[id="sign_up"]').click()
//       cy.contains('Password confirmation does not match password')
//     });
//   });
// });

// a signed up user can log in

describe('login', function() {
  context('user is signed up', function() {
    it('a user can sign in if they enter the correct email and password', function() {
      cy.signup('John','Doe', 'test@example.com', 'password123', 'password123');
      cy.get('input[name="email"]').type('test@example.com')
      cy.get('input[name="password"]').type('password123')
      cy.get('button[id="login-btn"]').click()
      cy.contains("John Doe")
    });
  });
});
