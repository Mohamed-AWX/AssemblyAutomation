describe('test_name', function() {

  it('what_it_does', function() {
 
     cy.viewport(1600, 773)
  
     cy.visit('http://162.246.18.184/#/auth/login')
  
     cy.get('.col-md-6 > .ng-untouched > .form-row > .form-group > #inputEmail4').click()
  
     cy.get('.col-md-6 > .ng-untouched > .form-row > .form-group > #inputEmail4').type('admin@admin.com')
  
     cy.get('.form-row > .form-group > .p-element > .ng-tns-c1745191601-218 > .p-inputtext').type('1234567')
  
     cy.get('.form-row > .form-group > .p-element > .ng-tns-c1745191601-218 > .p-inputtext').click()
  
     cy.get('.p-element > .ng-tns-c1745191601-218 > .p-element > .p-icon > path').click()
  
     cy.get('.col-md-6 > .ng-star-inserted > .form-row > .p-element > .p-button-label').click()
  
     cy.get('.ng-untouched > .form-row > .p-element > #pn_id_258 > .p-element:nth-child(1)').click()
  
     cy.get('.p-dropdown-panel > .p-dropdown-items-wrapper > #pn_id_258_list > .p-element > #pn_id_258_0').click()
  
     cy.get('.company-section > .ng-touched > .form-row > .p-element > .p-button-label').click()
  
     cy.get('.row > .col-md-3:nth-child(6) > .card > .card-body > .card-title').click()
  
     cy.get('.card > .p-element > .p-toolbar > .p-toolbar-group-right > .p-element').click()
  
     cy.get('.mat-mdc-card-content > .ng-untouched > .form-comtent > .mb-3:nth-child(1) > .p-inputtext').click()
  
     cy.get('.mat-mdc-card-content > .ng-untouched > .form-comtent > .mb-3:nth-child(1) > .p-inputtext').type('12')
  
     cy.get('.mat-mdc-card-content > .ng-invalid > .form-comtent > .mb-3:nth-child(2) > .p-inputtext').click()
  
     cy.get('.mat-mdc-card-content > .ng-invalid > .form-comtent > .mb-3:nth-child(2) > .p-inputtext').type('ll')
  
     cy.get('.mat-mdc-card-content > .ng-invalid > .form-comtent > .mb-3:nth-child(3) > .p-inputtext').click()
  
     cy.get('.mat-mdc-card-content > .ng-invalid > .form-comtent > .mb-3:nth-child(3) > .p-inputtext').type('llll')
  
     cy.get('.mat-mdc-card-content > .ng-invalid > .form-comtent > .mb-3:nth-child(4) > .p-inputtext').click()
  
     cy.get('.mat-mdc-card-content > .ng-invalid > .form-comtent > .mb-3:nth-child(4) > .p-inputtext').type('kkk')
  
     cy.get('.form-comtent > .mb-3 > .p-element > #pn_id_278 > .p-element:nth-child(1)').click()
  
     cy.get('.p-dropdown-panel > .p-dropdown-items-wrapper > .p-scroller-viewport > .p-scroller > #pn_id_278_list').click()
  
     cy.get('.p-scroller-viewport > .p-scroller > #pn_id_278_list > .p-element > #pn_id_278_0').click()
  
     cy.get('.form-comtent > .mb-3 > .p-element > #pn_id_280 > .p-element:nth-child(1)').click()
  
     cy.get('.p-scroller-viewport > .p-scroller > #pn_id_280_list > .p-element > #pn_id_280_0').click()
  
     cy.get('.mb-3 > .row > #mat-mdc-checkbox-13 > .mdc-form-field > .mdc-label').click()
  
     cy.get('.row > #mat-mdc-checkbox-13 > .mdc-form-field > .mdc-checkbox > #mat-mdc-checkbox-13-input').check('on')
  
     cy.get('.mb-3 > .row > #mat-mdc-checkbox-14 > .mdc-form-field > .mdc-label').click()
  
     cy.get('.row > #mat-mdc-checkbox-14 > .mdc-form-field > .mdc-checkbox > #mat-mdc-checkbox-14-input').check('on')
  
     cy.get('.row > #mat-mdc-checkbox-15 > .mdc-form-field > .mdc-checkbox > #mat-mdc-checkbox-15-input').click()
  
     cy.get('.row > #mat-mdc-checkbox-15 > .mdc-form-field > .mdc-checkbox > #mat-mdc-checkbox-15-input').check('on')
  
     cy.get('.ng-star-inserted > .mat-expansion-panel > #mat-expansion-panel-header-20 > .mat-content > .mat-expansion-panel-header-title').click()
  
     cy.get('.mat-expansion-panel > #cdk-accordion-child-20 > .mat-expansion-panel-body > .row > .mb-2:nth-child(1)').click()
  
     cy.get('.row > .mb-2 > .p-element > .ng-tns-c419082668-247 > .p-element').click()
  
     cy.get('.p-datepicker-calendar > .ng-tns-c419082668-247 > .ng-tns-c419082668-247:nth-child(3) > .ng-tns-c419082668-247:nth-child(4) > .p-ripple').click()
  
     cy.get('#cdk-accordion-child-20 > .mat-expansion-panel-body > .row > .mb-2:nth-child(2) > .p-inputtext').click()
  
     cy.get('#cdk-accordion-child-20 > .mat-expansion-panel-body > .row > .mb-2:nth-child(2) > .p-inputtext').type('12')
  
     cy.get('.row > .mb-2 > .p-element > .ng-tns-c419082668-248 > .ng-tns-c419082668-248:nth-child(1)').click()
  
     cy.get('.row > .mb-2 > .p-element > .ng-tns-c419082668-248 > .p-element').click()
  
     cy.get('.row > .mb-2 > .p-element > .ng-tns-c419082668-248 > .p-element').click()
  
     cy.get('.p-datepicker-calendar > .ng-tns-c419082668-248 > .ng-tns-c419082668-248:nth-child(4) > .ng-tns-c419082668-248:nth-child(3) > .p-ripple').click()
  
     cy.get('#cdk-accordion-child-20 > .mat-expansion-panel-body > .row > .mb-2:nth-child(4) > .p-inputtext').click()
  
     cy.get('#cdk-accordion-child-20 > .mat-expansion-panel-body > .row > .mb-2:nth-child(4) > .p-inputtext').type('12')
  
     cy.get('.row > .mb-2 > .p-element > .ng-tns-c419082668-249 > .ng-tns-c419082668-249:nth-child(1)').click()
  
     cy.get('.p-datepicker-calendar-container > .p-datepicker-calendar > .ng-tns-c419082668-249 > .ng-tns-c419082668-249:nth-child(4) > .ng-tns-c419082668-249:nth-child(4)').click()
  
     cy.get('.p-datepicker-calendar > .ng-tns-c419082668-249 > .ng-tns-c419082668-249:nth-child(4) > .ng-tns-c419082668-249:nth-child(4) > .p-ripple').click()
  
     cy.get('.row > .mb-2 > .p-element > .ng-tns-c419082668-250 > .ng-tns-c419082668-250:nth-child(1)').click()
  
     cy.get('.p-datepicker-calendar > .ng-tns-c419082668-250 > .ng-tns-c419082668-250:nth-child(4) > .ng-tns-c419082668-250:nth-child(3) > .p-ripple').click()
  
     cy.get('.ng-dirty > .web-data > .mat-expansion-panel > #mat-expansion-panel-header-21 > .mat-content').click()
  
     cy.get('.row > .col-sm-3 > .p-element > #pn_id_288 > .p-dropdown-label').click()
  
     cy.get('.p-scroller-viewport > .p-scroller > #pn_id_288_list > .p-element > #pn_id_288_0').click()
  
     cy.get('.ng-tns-c1859850774-251 > .ng-valid > .row > .col-sm-8 > .p-inputtext').click()
  
     cy.get('.ng-tns-c1859850774-251 > .ng-valid > .row > .col-sm-8 > .p-inputtext').type('123.com')
  
     cy.get('.ng-valid > .row > .mt-3 > .mdc-icon-button > .mat-mdc-button-touch-target').click()
  
     cy.get('.ng-dirty > .phones > .mat-expansion-panel > #mat-expansion-panel-header-22 > .mat-content').click()
  
     cy.get('#cdk-accordion-child-22 > .mat-expansion-panel-body > .ng-tns-c1859850774-253 > .ng-untouched > .d-flex').click()
  
     cy.get('.mat-expansion-panel-body > .ng-tns-c1859850774-253 > .ng-untouched > .d-flex > .p-inputtext').click()
  
     cy.get('.mat-expansion-panel-body > .ng-tns-c1859850774-253 > .ng-untouched > .d-flex > .p-inputtext').type('0101614242')
  
     cy.get('.ng-tns-c1859850774-253 > .ng-valid > .d-flex > .mdc-icon-button > .mat-mdc-button-touch-target').click()
  
     cy.get('.ng-dirty > .company-contacts > .mat-expansion-panel > #mat-expansion-panel-header-23 > .mat-content').click()
  
     cy.get('.company-contacts > .mat-expansion-panel > #cdk-accordion-child-23 > .mat-expansion-panel-body > .row').click()
  
     cy.get('#cdk-accordion-child-23 > .mat-expansion-panel-body > .row > .mb-3 > .p-inputtext').click()
  
     cy.get('#cdk-accordion-child-23 > .mat-expansion-panel-body > .row > .mb-3 > .p-inputtext').type('tree')
  
     cy.get('.row > .mb-3 > .p-element > #pn_id_290 > .p-element:nth-child(1)').click()
  
     cy.get('.p-dropdown-panel > .p-dropdown-items-wrapper > .p-scroller-viewport > .p-scroller > #pn_id_290_list').click()
  
     cy.get('.row > .mb-3 > .p-element > #pn_id_292 > .p-element:nth-child(1)').click()
  
     cy.get('.p-scroller-viewport > .p-scroller > #pn_id_292_list > .p-element > #pn_id_292_3').click()
  
     cy.get('.mat-mdc-card-content > .ng-dirty > .address > .mat-expansion-panel > #mat-expansion-panel-header-24').click()
  
     cy.get('.row > .mb-3 > .p-element > #pn_id_294 > .p-element:nth-child(1)').click()
  
     cy.get('.p-dropdown-panel > .p-dropdown-items-wrapper > .p-scroller-viewport > .p-scroller > #pn_id_294_list').click()
  
     cy.get('.p-scroller-viewport > .p-scroller > #pn_id_294_list > .p-element > #pn_id_294_3').click()
  
     cy.get('#cdk-accordion-child-24 > .mat-expansion-panel-body > .row > .mb-3 > .p-inputtext').click()
  
     cy.get('#cdk-accordion-child-24 > .mat-expansion-panel-body > .row > .mb-3 > .p-inputtext').type('23')
  
     cy.get('.ng-star-inserted > .mat-mdc-card > .mat-mdc-card-actions > .mdc-button:nth-child(1) > .mdc-button__label').click()
     cy.check('')
     cy.type('')
       Cy.check('')
  
  })
 
 })
 