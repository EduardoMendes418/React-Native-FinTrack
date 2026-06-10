describe('FinTrack E2E Metrics Flow', () => {
  beforeEach(() => {
    // We can intercept the metrics call to ensure the UI handles data correctly
    cy.intercept('GET', '**/api/transactions/metrics', {
      totalIncome: 10000,
      totalExpenses: 4000,
      balance: 6000,
      categoryBreakdown: {
        'Housing': 3000,
        'Food': 1000
      }
    }).as('getMetrics');
    
    cy.visit('/');
  });

  it('should navigate to Analytics and display correct metrics from API', () => {
    // Assuming navigation to Analytics via tab or menu
    // For simplicity, let's assume there's an Analytics link or we navigate directly if possible
    // In this app, it's a bottom tab.
    cy.get('button').contains('Analytics').click();
    
    cy.wait('@getMetrics');
    
    cy.contains('$10000.00').should('be.visible');
    cy.contains('$4000.00').should('be.visible');
    cy.contains('$6000.00').should('be.visible');
    
    // Check breakdown
    cy.contains('Housing').should('be.visible');
    cy.contains('75.0%').should('be.visible'); // 3000/4000
  });

  it('should show loading state before data arrives', () => {
    cy.intercept('GET', '**/api/transactions/metrics', {
      delay: 1000,
      body: { totalIncome: 0, totalExpenses: 0, balance: 0, categoryBreakdown: {} }
    }).as('getDelayedMetrics');
    
    cy.get('button').contains('Analytics').click();
    cy.get('activity-indicator').should('exist'); // Based on our ActivityIndicator usage
  });
});
