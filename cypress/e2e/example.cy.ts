describe('Cypress TS', () => {
  it.skip('Should go to google', () => {
    cy.google()
  })

  it('should change light/dark theme theme on willian justen site', () => {
    cy.visit('https://willianjusten.com.br')

    cy.findByTitle(/Mudar o tema/i).click()
    cy.get('.light').should('exist')

    cy.findByTitle(/Mudar o tema/i).click()
    cy.get('.dark').should('exist')
  })
})
