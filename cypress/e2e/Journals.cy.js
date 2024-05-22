describe('test_name', function() {

  it('what_it_does', function() {
 
     cy.viewport(1600, 773)
  
     cy.visit('http://162.246.18.184/#/auth/login')
  
     cy.get('.col-md-6 > .ng-untouched > .form-row > .form-group > #inputEmail4').click()
  
     cy.get('.col-md-6 > .ng-untouched > .form-row > .form-group > #inputEmail4').type('admin@admin.com')
  
     cy.get('.form-row > .form-group > .p-element > .ng-tns-c1745191601-2 > .p-inputtext').type('1234567')
  
     cy.get('.col-md-6 > .ng-star-inserted > .form-row > .p-element > .p-button-label').click()
  
     cy.get('.ng-untouched > .form-row > .p-element > #pn_id_2 > .p-element:nth-child(1)').click()
  
     cy.get('.p-dropdown-panel > .p-dropdown-items-wrapper > #pn_id_2_list > .p-element > #pn_id_2_0').click()
  
     cy.get('.company-section > .ng-touched > .form-row > .p-element > .p-button-label').click()
  
     cy.get('.container-fluid > .row > .col-md-3 > .card > .fa-sack-dollar').click()
  
     cy.visit('http://162.246.18.184:8095/#/pages/home')
  
     cy.get('.ng-tns-c168843337-7 > .ng-tns-c168843337-7 > .ng-tns-c168843337-11 > .p-ripple > .layout-menuitem-text').click()
  
     cy.get('.p-element > .p-toolbar > .p-toolbar-group-right > .my-2 > .p-element').click()
  
     cy.get('.mat-mdc-card > .mat-mdc-card-content > .example-form > .mb-3:nth-child(1) > .p-inputtext').type('Tesst')
  
     cy.get('.mat-mdc-card > .mat-mdc-card-content > .example-form > .mb-3:nth-child(2) > .p-inputtext').click()
  
     cy.get('.mat-mdc-card > .mat-mdc-card-content > .example-form > .mb-3:nth-child(2) > .p-inputtext').type('1233')
  
     cy.get('.ng-star-inserted > .mat-mdc-card > .mat-mdc-card-actions > .mdc-button:nth-child(1) > .mdc-button__label').click()
  
     cy.get('.p-toolbar > .p-toolbar-group-right > .my-2 > .p-element > .pi').click()
  
     cy.get('.mat-mdc-card > .mat-mdc-card-content > .example-form > .mb-3:nth-child(1) > .p-inputtext').type('addd')
  
     cy.get('.mat-mdc-card > .mat-mdc-card-content > .example-form > .mb-3:nth-child(2) > .p-inputtext').click()
  
     cy.get('.mat-mdc-card > .mat-mdc-card-content > .example-form > .mb-3:nth-child(2) > .p-inputtext').type('12333')
  
     cy.get('.ng-star-inserted > .mat-mdc-card > .mat-mdc-card-actions > .mdc-button:nth-child(1) > .mdc-button__label').click()
  
  })
 
 })
 