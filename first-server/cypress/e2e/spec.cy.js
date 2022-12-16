describe('empty spec', () => {
  it('passes but should not pass', () => {
      // visit first-server:
      cy.visit('http://localhost:3001');

      // first-server displays a button:
      cy.contains('Go to second-server').click();

      // second-server displays its own button:
      cy.contains("Go to first-server").click();

      // first-server displays the confirmation:
      cy.contains("first-server received the message from second-server");
  });
});
