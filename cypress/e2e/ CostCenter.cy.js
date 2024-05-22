describe('test_name', function() {

  it('what_it_does', function() {
 
     cy.viewport(1600, 773)
  
     cy.visit('http://162.246.18.184/#/auth/login')
  
     cy.get('.col-md-6 > .ng-untouched > .form-row > .form-group > #inputEmail4').click()
  
     cy.get('.col-md-6 > .ng-untouched > .form-row > .form-group > #inputEmail4').type('admin@admin.com')
  
     cy.get('.form-row > .form-group > .p-element > .ng-tns-c1745191601-2 > .p-inputtext').type('1234567')
  
     cy.get('.row > .col-md-6 > .ng-star-inserted > .form-row > .p-element').click()
  
     cy.get('.ng-untouched > .form-row > .p-element > #pn_id_2 > .p-element:nth-child(1)').click()
  
     cy.get('.p-dropdown-panel > .p-dropdown-items-wrapper > #pn_id_2_list > .p-element > #pn_id_2_0').click()
  
     cy.get('.company-section > .ng-touched > .form-row > .p-element > .p-button-label').click()
  
     cy.get('.ng-star-inserted > .container-fluid > .row > .col-md-3:nth-child(2) > .card').click()
  
     cy.visit('http://162.246.18.184:8095/#/pages/home')
  
     cy.get('.ng-tns-c168843337-7 > .ng-tns-c168843337-7 > .ng-tns-c168843337-13 > .p-ripple > .layout-menuitem-text').click()
  
     cy.get('.p-element > .p-toolbar > .p-toolbar-group-right > .my-2 > .p-element').click()
  
     cy.get('.mat-mdc-card > .mat-mdc-card-content > .example-form > .mb-3 > .p-inputtext').click()
  
     cy.get('.mat-mdc-card > .mat-mdc-card-content > .example-form > .mb-3 > .p-inputtext').type('Shift')
  
     cy.get('.ng-star-inserted > .mat-mdc-card > .mat-mdc-card-actions > .mat-primary > .mdc-button__label').click()
  
     cy.get('.p-element:nth-child(1) > .ng-star-inserted > .d-flex > .p-element:nth-child(1) > .p-button-icon').click()
  
     cy.get('.mat-mdc-card > .mat-mdc-card-content > .example-form > .mb-3 > .p-inputtext').type('rec')
  
     cy.get('.ng-star-inserted > .mat-mdc-card > .mat-mdc-card-actions > .mat-primary > .mdc-button__label').click()
  
     cy.get('.p-element:nth-child(2) > .ng-star-inserted > .d-flex > .p-element:nth-child(2) > .p-button-icon').click()
  
     cy.get('.mat-mdc-dialog-surface > .ng-star-inserted > .mat-mdc-dialog-actions > .mat-primary > .mdc-button__label').click()
     
  })
 
 })
 