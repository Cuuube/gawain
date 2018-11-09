export default () => {
  console.log(cy.point)
  global.cy.point = pointKey => cy.get(`[data-cy="${pointKey}"]`)
}