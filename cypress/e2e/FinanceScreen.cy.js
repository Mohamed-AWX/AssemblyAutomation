describe('HappyScnario', function() {

  it('open finance', function() {
 
     cy.viewport(1600, 773)
  
     cy.visit('http://162.246.18.184/#/auth/login')
  
     cy.get('.col-md-6 > .ng-untouched > .form-row > .form-group > #inputEmail4').click()
  
     cy.get('.col-md-6 > .ng-untouched > .form-row > .form-group > #inputEmail4').type('admin@admin.com')
  
     cy.get('body > app-root > app-login > div > div.container.d-flex.justify-content-center.align-items-center.p-5 > div > div.col-md-6.col-sm-12.text-center > form > div > div:nth-child(2) > p-password').type('1234567')
  
     cy.get('body > app-root > app-login > div > div.container.d-flex.justify-content-center.align-items-center.p-5 > div > div.col-md-6.col-sm-12.text-center > form > div > button').click()
  
     cy.get('body > app-root > app-login > div > div.container.d-flex.justify-content-center.align-items-center.p-5 > div > div.col-md-6.col-sm-12.text-center > div > form > div > p-dropdown').click()
  
      cy.get('#pr_id_73_list > p-dropdownitem > li').click()
  
     cy.get('.p-dropdown-panel > .p-dropdown-items-wrapper > #pn_id_3_list > .p-element > #pn_id_3_0').click()
  
     cy.get('.company-section > .ng-touched > .form-row > .p-element > .p-button-label').click()
  
     cy.get('.row > .col-md-3:nth-child(2) > .card > .card-body > .card-title').click()
  
     cy.visit('http://162.246.18.184:8095/#/pages/home')
  
     cy.get('.layout-menu > .ng-tns-c168843337-7 > .ng-tns-c168843337-7 > .ng-tns-c168843337-9 > .p-ripple').click()
  
     cy.get('.layout-topbar > .layout-topbar-menu > .dropdown > .mat-mdc-menu-trigger > .rounded-image').click()
  
     cy.get('.mat-mdc-menu-content > .cdk-focused > .mat-mdc-menu-item-text > .item-menu > .ml-2').click()
  
     cy.visit('http://162.246.18.184/#/auth/login')
  
  })
 
 })
 