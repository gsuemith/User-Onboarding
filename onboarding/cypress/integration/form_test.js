/* eslint-disable no-undef */
//Cypress Testing
describe('Onboarding app', () => {
    // Each test needs clean state
    // Test can't rely on previous test
    // Every test needs tow ork in isolation
    // before each test navigate to http://localhost:3000

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    
    it('sanity check to make sure our tests work', () => {
        expect( 1 + 1 ).to.equal(2)
        expect( 1 + 1 ).not.to.equal(3)
        expect(7).to.equal(7)
        expect({}).not.to.equal({})
        expect({}).to.eql({})
    })

    const nameField = () => cy.get('input[name=name]')
    const emailField = () => cy.get('input[name=email]')
    const passwordField = () => cy.get('input[name="password"]')
    const membershipDropdown = () => cy.get('select.membership-menu')
    const under18RadioButton = () => cy.get('#minor')
    const adultRadioButton = () => cy.get('#adult')
    const seniorRadioButton = () => cy.get('#senior')
    const tosAgreement = () => cy.get('input[name=tos]')
    const submitButton = () => cy.get('button')

    it('clicking', () => {
        membershipDropdown().select('sponsor')
        under18RadioButton().click()
        adultRadioButton().click()
        seniorRadioButton().click()
        tosAgreement().click()
    })

    it.only('can add a user', () => {
        nameField().type('Test U. Ser')
        emailField().type('test@user.com')
        passwordField().type('thisisapassword')
        membershipDropdown().select('superfan')
        adultRadioButton().click()
        tosAgreement().click()
        submitButton().click()
        cy.contains('Test U. Ser')

        //check if clear
        nameField().should('have.value', '')
        emailField().should('have.value', '')
        passwordField().should('have.value', '')
        membershipDropdown().should('have.value', '')
    })
})