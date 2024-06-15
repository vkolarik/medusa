describe('CartContainer', () => {
  beforeEach(() => {

    const mockCart = {
      id: 'cart123',
      items: [
        {
          id: 'item1',
          title: 'Product 1',
          quantity: 2,
          price: 500,
          total: 1000,
        },
        {
          id: 'item2',
          title: 'Product 2',
          quantity: 1,
          price: 300,
          total: 300,
        },
      ],
      payment_session: 'session123',
    }

    const mockCustomer = {
      id: 'customer123',
      email: 'test@example.com',
      billing_address: {
        address1: '123 Test St',
        city: 'Test City',
        postal_code: '12345',
        country: 'Test Country',
      },
    }





    cy.visit('/cz/kosik')
  })

  it('should display cart items correctly', () => {
    cy.wait('@getCart')

    cy.get('[data-cy=cart-item]').should('have.length', 2)
    cy.get('[data-cy=cart-item]')
        .first()
        .should('contain', 'Product 1')
        .and('contain', '2')
        .and('contain', '1000 Kč')
    cy.get('[data-cy=cart-item]')
        .last()
        .should('contain', 'Product 2')
        .and('contain', '1')
        .and('contain', '300 Kč')
  })

  it('should display the total price correctly', () => {
    cy.wait('@getCart')

    const deliveryPrice = 125
    const totalPrice = 1000 + 300 + deliveryPrice

    cy.get('[data-cy=total-price]').should('contain', `${totalPrice} Kč`)
  })

  it('should handle form submission', () => {
    cy.wait('@getCustomer')

    cy.get('[data-cy=checkout-form]').within(() => {
      cy.get('input[name=address1]').should('have.value', '123 Test St')
      cy.get('input[name=city]').should('have.value', 'Test City')
      cy.get('input[name=postal_code]').should('have.value', '12345')
      cy.get('input[name=country]').should('have.value', 'Test Country')


      cy.get('button[type=submit]').click()
    })

    cy.wait('@checkout').its('status').should('eq', 200)
    cy.url().should('include', '/kosik/dekujeme')
  })
})
