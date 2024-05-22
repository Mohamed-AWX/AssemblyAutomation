describe('test_name', function() {

 it('what_it_does', function() {

    cy.viewport(1600, 773)
 
    cy.visit('http://162.246.18.184/#/auth/login')
 
    cy.get('.col-md-6 > .ng-untouched > .form-row > .form-group > #inputEmail4').click()
 
    cy.get('.col-md-6 > .ng-untouched > .form-row > .form-group > #inputEmail4').type('admin@admin.com')
 
    cy.get('.form-row > .form-group > .p-element > .ng-tns-c2535973017-62 > .p-inputtext').type('1234567')
 
    cy.get('.col-md-6 > .ng-star-inserted > .form-row > .p-element > .p-button-label').click()
 
    cy.get('.ng-untouched > .form-row > .p-element > .p-dropdown > .p-dropdown-label').click()
 
    cy.get('.p-dropdown-panel > .p-dropdown-items-wrapper > #pr_id_35_list > .p-element > .p-ripple').click()
 
    cy.get('.company-section > .ng-touched > .form-row > .p-element > .p-button-label').click()
 
    cy.get('.ng-star-inserted > .container-fluid > .row > .col-md-3:nth-child(6) > .card').click()
 
    cy.get('.card > .p-element > .p-toolbar > .p-toolbar-group-right > .p-element').click()
 
    cy.get('.mat-mdc-card-content > .ng-untouched > .form-comtent > .mb-3:nth-child(1) > .p-inputtext').click()
 
    cy.get('.mat-mdc-card-content > .ng-untouched > .form-comtent > .mb-3:nth-child(1) > .p-inputtext').type('12')
 
    cy.get('.mat-mdc-card-content > .ng-invalid > .form-comtent > .mb-3:nth-child(2) > .p-inputtext').click()
 
    cy.get('.mat-mdc-card-content > .ng-invalid > .form-comtent > .mb-3:nth-child(2) > .p-inputtext').type('12')
 
    cy.get('.mat-mdc-card-content > .ng-invalid > .form-comtent > .mb-3:nth-child(3) > .p-inputtext').click()
 
    cy.get('.mat-mdc-card-content > .ng-invalid > .form-comtent > .mb-3:nth-child(3) > .p-inputtext').type('rev')
 
    cy.get('.mat-mdc-card-content > .ng-invalid > .form-comtent > .mb-3:nth-child(4) > .p-inputtext').click()
 
    cy.get('.mat-mdc-card-content > .ng-invalid > .form-comtent > .mb-3:nth-child(4) > .p-inputtext').type('set')
 
    cy.get('.form-comtent > .mb-3:nth-child(5) > .p-element > .p-dropdown > .p-dropdown-label').click()
 
    cy.get('.p-scroller-viewport > .p-scroller > #pr_id_48_list > .p-element:nth-child(1) > .p-ripple').click()
 
    cy.get('.form-comtent > .mb-3:nth-child(6) > .p-element > .p-dropdown > .p-dropdown-label').click()
 
    cy.get('.p-scroller-viewport > .p-scroller > #pr_id_49_list > .p-element:nth-child(2) > .p-ripple').click()
 
    cy.get('.mb-3 > .row > #mat-mdc-checkbox-3 > .mdc-form-field > .mdc-label').click()
 
    cy.get('.row > #mat-mdc-checkbox-3 > .mdc-form-field > .mdc-checkbox > #mat-mdc-checkbox-3-input').check('on')
 
    cy.get('.row > #mat-mdc-checkbox-4 > .mdc-form-field > .mdc-checkbox > #mat-mdc-checkbox-4-input').click()
 
    cy.get('.row > #mat-mdc-checkbox-4 > .mdc-form-field > .mdc-checkbox > #mat-mdc-checkbox-4-input').check('on')
 
    cy.get('.row > #mat-mdc-checkbox-5 > .mdc-form-field > .mdc-checkbox > #mat-mdc-checkbox-5-input').click()
 
    cy.get('.row > #mat-mdc-checkbox-5 > .mdc-form-field > .mdc-checkbox > #mat-mdc-checkbox-5-input').check('on')
 
    cy.get('.ng-invalid > .ng-star-inserted > .mat-expansion-panel > #mat-expansion-panel-header-0 > .mat-content').click()
 
    cy.get('#cdk-accordion-child-0 > .mat-expansion-panel-body > .row > .taxRegNo > .fw-bold').click()
 
    cy.get('.mat-expansion-panel > #cdk-accordion-child-0 > .mat-expansion-panel-body > .row > .mb-2:nth-child(1)').click()
 
    cy.get('#cdk-accordion-child-0 > .mat-expansion-panel-body > .row > .mb-2:nth-child(1) > .p-inputtext').click()
 
    cy.get('#cdk-accordion-child-0 > .mat-expansion-panel-body > .row > .mb-2:nth-child(1) > .p-inputtext').type('123')
 
    cy.get('#cdk-accordion-child-0 > .mat-expansion-panel-body > .row > .mb-2:nth-child(2) > .p-inputtext').click()
 
    cy.get('#cdk-accordion-child-0 > .mat-expansion-panel-body > .row > .mb-2:nth-child(2) > .p-inputtext').type('123')
 
    cy.get('.row > .mb-2 > .p-element > .ng-tns-c185893541-91 > .ng-tns-c185893541-91:nth-child(1)').click()
 
    cy.get('.p-datepicker-calendar > .ng-tns-c185893541-91 > .ng-tns-c185893541-91:nth-child(4) > .ng-tns-c185893541-91:nth-child(4) > .p-ripple').click()
 
    cy.get('.row > .mb-3:nth-child(4) > .p-element > .p-dropdown > .p-dropdown-label').click()
 
    cy.get('.p-scroller-viewport > .p-scroller > #pr_id_52_list > .p-element:nth-child(1) > .p-ripple').click()
 
    cy.get('.row:nth-child(2) > .mb-3:nth-child(5) > .p-element > .p-dropdown > .p-dropdown-label').click()
 
    cy.get('.p-scroller-viewport > .p-scroller > #pr_id_53_list > .p-element:nth-child(1) > .p-ripple').click()
 
    cy.get('.layout-main > .ng-star-inserted > .mat-mdc-card > .mat-mdc-card-actions > .mdc-button:nth-child(1)').click()
 
 })

})
