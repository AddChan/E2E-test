describe('My First Test', () => {
  it('Visits the myroutine page', () => {
    cy.visit('https://myroutine.kr');
    cy.wait(3000);
  });
  it('clear firebaseLocalStorageDb', async () => {
    window.indexedDB.deleteDatabase('firebaseLocalStorageDb');
    cy.reload();
  });
  it('go to email sign in', () => {
    cy.wait(2000);
    cy.contains('로그인').click();
    cy.contains('이메일 로그인').click();
    cy.url().should('include', '/signin/email');
  });
  it('type email & password', () => {
    // data-cy 추가하기
    cy.get('#email.sc-iukxot.cWtBdh').type('paychan@test.com');
    cy.get('#password.sc-iukxot.cWtBdh').type('12341234');
  });
  it('click sign in button', () => {
    cy.get('.login-button').click();
    cy.url().should('include', '/users/');
  });
});
