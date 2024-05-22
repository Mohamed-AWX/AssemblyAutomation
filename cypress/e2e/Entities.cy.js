describe('test_name', function () {

  it('what_it_does', function () {

    cy.viewport(1600, 773)

    cy.visit('http://162.246.18.184/#/auth/login')

    cy.get('body > app-root > .ng-star-inserted > .body > .container').click()

    cy.get('.col-md-6 > .ng-untouched > .form-row > .form-group > #inputEmail4').click()

    cy.get('.col-md-6 > .ng-untouched > .form-row > .form-group > #inputEmail4').type('admin@admin.com')
    cy.wait(1000)

    cy.get('body > app-root > app-login > div > div.container.d-flex.justify-content-center.align-items-center.p-5 > div > div.col-md-6.col-sm-12.text-center > form > div > div:nth-child(2) > p-password').type('1234567')

    cy.get('body > app-root > app-login > div > div.container.d-flex.justify-content-center.align-items-center.p-5 > div > div.col-md-6.col-sm-12.text-center > form > div > button').click()

    cy.get('body > app-root > app-login > div > div.container.d-flex.justify-content-center.align-items-center.p-5 > div > div.col-md-6.col-sm-12.text-center > div > form > div > p-dropdown').click()

    cy.get('#pn_id_2_list').click()

    cy.get('body > app-root > app-login > div > div.container.d-flex.justify-content-center.align-items-center.p-5 > div > div.col-md-6.col-sm-12.text-center > div > form > div > button').click()

    cy.get('.company-section > .ng-touched > .form-row > .p-element > .p-button-label').click()

    cy.get('.row > .col-md-3:nth-child(6) > .card > .card-body > .card-title').click()

    cy.get('.p-element > .p-toolbar > .p-toolbar-group-right > .p-element > .pi').click()

    cy.get('.mat-mdc-card-content > .ng-untouched > .form-comtent > .mb-3:nth-child(1) > .fw-bold').click()

    cy.get('.mat-mdc-card-content > .ng-untouched > .form-comtent > .mb-3:nth-child(1) > .p-inputtext').click()

    cy.get('.mat-mdc-card-content > .ng-untouched > .form-comtent > .mb-3:nth-child(1) > .p-inputtext').type('001')

    cy.get('.mat-mdc-card-content > .ng-invalid > .form-comtent > .mb-3:nth-child(2) > .p-inputtext').click()

    cy.get('.mat-mdc-card-content > .ng-invalid > .form-comtent > .mb-3:nth-child(2) > .p-inputtext').type('test')

    cy.get('.mat-mdc-card-content > .ng-invalid > .form-comtent > .mb-3:nth-child(3) > .p-inputtext').click()

    cy.get('.mat-mdc-card-content > .ng-invalid > .form-comtent > .mb-3:nth-child(3) > .p-inputtext').type('testcrew')

    cy.get('.mat-mdc-card-content > .ng-invalid > .form-comtent > .mb-3:nth-child(4) > .p-inputtext').click()

    cy.get('.mat-mdc-card-content > .ng-invalid > .form-comtent > .mb-3:nth-child(4) > .p-inputtext').click()

    cy.get('.mat-mdc-card-content > .ng-invalid > .form-comtent > .mb-3:nth-child(4) > .p-inputtext').click()

    cy.get('.mat-mdc-card-content > .ng-invalid > .form-comtent > .mb-3:nth-child(4) > .p-inputtext').type('تيست')

    cy.get('body > app-root > app-layout > div > div.layout-main-container > div > app-entity > mat-card > mat-card-content > form > div > div:nth-child(5)').click()

    cy.get('#pn_id_22_list > p-dropdownitem:nth-child(3)').click()
    cy.get('body > app-root > app-layout > div > div.layout-main-container > div > app-entity > mat-card > mat-card-content > form > div > div:nth-child(6)').click()
    cy.wait(2000)
    cy.get('.p-scroller-viewport > .p-scroller > #pn_id_24_list > .p-element > #pn_id_24_1').click()
cy.wait(1000)
cy.get('.row > #mat-mdc-checkbox-1 > .mdc-form-field > .mdc-checkbox > #mat-mdc-checkbox-1-input').click()
cy.wait(1000)

cy.get('.row > #mat-mdc-checkbox-1 > .mdc-form-field > .mdc-checkbox > #mat-mdc-checkbox-1-input').should('exist');

cy.get('.row > #mat-mdc-checkbox-2 > .mdc-form-field > .mdc-checkbox > #mat-mdc-checkbox-2-input').click()

cy.get('.row > #mat-mdc-checkbox-2 > .mdc-form-field > .mdc-checkbox > #mat-mdc-checkbox-2-input').should('exist');

cy.get('.row > #mat-mdc-checkbox-3 > .mdc-form-field > .mdc-checkbox > #mat-mdc-checkbox-3-input').click('')

cy.get('.row > #mat-mdc-checkbox-3 > .mdc-form-field > .mdc-checkbox > #mat-mdc-checkbox-3-input').should('exist')

cy.get('#mat-expansion-panel-header-5').click()

    cy.get('.row > .mb-2 > .p-element > .ng-tns-c419082668-82 > .ng-tns-c419082668-82:nth-child(1)').click()

    cy.get('.p-datepicker-calendar > .ng-tns-c419082668-82 > .ng-tns-c419082668-82:nth-child(3) > .ng-tns-c419082668-82:nth-child(2) > .p-ripple').click()

    cy.get('#cdk-accordion-child-0 > .mat-expansion-panel-body > .row > .mb-2:nth-child(2) > .p-inputtext').click()

    cy.get('#cdk-accordion-child-0 > .mat-expansion-panel-body > .row > .mb-2:nth-child(2) > .p-inputtext').type('002')

    cy.get('.row > .mb-2 > .p-element > .ng-tns-c419082668-83 > .ng-tns-c419082668-83:nth-child(1)').click()

    cy.get('.p-datepicker-calendar > .ng-tns-c419082668-83 > .ng-tns-c419082668-83:nth-child(3) > .ng-tns-c419082668-83:nth-child(2) > .p-ripple').click()

    cy.get('#cdk-accordion-child-0 > .mat-expansion-panel-body > .row > .mb-2:nth-child(4) > .p-inputtext').click()

    cy.get('#cdk-accordion-child-0 > .mat-expansion-panel-body > .row > .mb-2:nth-child(4) > .p-inputtext').type('003')

    cy.get('.row > .mb-2 > .p-element > .ng-tns-c419082668-84 > .ng-tns-c419082668-84:nth-child(1)').click()

    cy.get('.row > .mb-2 > .p-element > .ng-tns-c419082668-84 > .ng-tns-c419082668-84:nth-child(1)').click()

    cy.get('.p-datepicker-calendar > .ng-tns-c419082668-84 > .ng-tns-c419082668-84:nth-child(3) > .ng-tns-c419082668-84:nth-child(4) > .p-ripple').click()

    cy.get('.row > .mb-2 > .p-element > .ng-tns-c419082668-85 > .ng-tns-c419082668-85:nth-child(1)').click()

    cy.get('.row > .mb-2 > .p-element > .ng-tns-c419082668-85 > .ng-tns-c419082668-85:nth-child(1)').click()

    cy.get('.p-datepicker-calendar > .ng-tns-c419082668-85 > .ng-tns-c419082668-85:nth-child(3) > .ng-tns-c419082668-85:nth-child(4) > .p-ripple').click()

    cy.get('.mat-expansion-panel > #mat-expansion-panel-header-1 > .mat-content > .title-container > span').click()

    cy.get('.row > .col-sm-3 > .p-element > #pn_id_77 > .p-dropdown-trigger').click()

    cy.get('.p-scroller-viewport > .p-scroller > #pn_id_77_list > .p-element > #pn_id_77_0').click()

    cy.get('.ng-tns-c1859850774-86 > .ng-valid > .row > .col-sm-8 > .p-inputtext').click()

    cy.get('.ng-tns-c1859850774-86 > .ng-valid > .row > .col-sm-8 > .p-inputtext').click()

    cy.get('.ng-tns-c1859850774-86 > .ng-valid > .row > .col-sm-8 > .p-inputtext').click()

    cy.get('.ng-tns-c1859850774-86 > .ng-valid > .row > .col-sm-8 > .p-inputtext').click()

    cy.get('.ng-tns-c1859850774-86 > .ng-valid > .row > .col-sm-8 > .p-inputtext').type('.com')

    cy.get('.ng-dirty > .phones > .mat-expansion-panel > #mat-expansion-panel-header-2 > .mat-content').click()

    cy.get('.mat-expansion-panel-body > .ng-tns-c1859850774-88 > .ng-untouched > .d-flex > .p-inputtext').click()

    cy.get('.mat-expansion-panel-body > .ng-tns-c1859850774-88 > .ng-untouched > .d-flex > .p-inputtext').type('0106150523')

    cy.get('.mat-expansion-panel > #mat-expansion-panel-header-3 > .mat-content > .title-container > .mat-icon').click()

    cy.get('#cdk-accordion-child-3 > .mat-expansion-panel-body > .row > .mb-3 > .p-inputtext').click()

    cy.get('#cdk-accordion-child-3 > .mat-expansion-panel-body > .row > .mb-3 > .p-inputtext').type('Rep')

    cy.get('.row > .mb-3 > .p-element > #pn_id_79 > .p-element:nth-child(1)').click()

    cy.get('.p-dropdown-items-wrapper > .p-scroller-viewport > .p-scroller > #pn_id_79_list > .p-dropdown-empty-message').click()

    cy.get('.row > .mb-3 > .p-element > #pn_id_81 > .p-element:nth-child(1)').click()

    cy.get('#cdk-accordion-child-3 > .mat-expansion-panel-body > .row > .mb-3 > .p-inputtext').click()

    cy.get('#cdk-accordion-child-3 > .mat-expansion-panel-body > .row > .mb-3 > .p-inputtext').click()

    cy.get('#cdk-accordion-child-3 > .mat-expansion-panel-body > .row > .mb-3 > .p-inputtext').type('hr')

    cy.get('.row > .mb-3 > .p-element > #pn_id_79 > .p-element:nth-child(1)').click()

    cy.get('.row > .mb-3 > .p-element > #pn_id_79 > .p-element:nth-child(1)').click()

    cy.get('.mat-expansion-panel > #cdk-accordion-child-3 > .mat-expansion-panel-body > .row > .mt-2').click()

    cy.get('.row > .mb-3 > .p-element > #pn_id_81 > .p-dropdown-trigger').click()

    cy.get('.p-scroller-viewport > .p-scroller > #pn_id_81_list > .p-element > #pn_id_81_4').click()

    cy.get('.row > .mb-3 > .p-element > #pn_id_81 > .p-element:nth-child(1)').click()

    cy.get('.p-scroller-viewport > .p-scroller > #pn_id_81_list > .p-element > #pn_id_81_0').click()

    cy.get('.mat-expansion-panel > #cdk-accordion-child-3 > .mat-expansion-panel-body > .row > .mt-2').click()

    cy.get('.row > .mb-3 > .p-element > #pn_id_79 > .p-element:nth-child(1)').click()

    cy.get('.row > .mb-3 > .p-element > #pn_id_79 > .p-element:nth-child(1)').click()

    cy.get('.mat-expansion-panel > #mat-expansion-panel-header-4 > .mat-content > .title-container > span').click()

    cy.get('.row > .mb-3 > .p-element > #pn_id_83 > .p-element:nth-child(1)').click()

    cy.get('.p-scroller-viewport > .p-scroller > #pn_id_83_list > .p-element > #pn_id_83_2').click()

    cy.get('.row > .mb-3 > .p-element > #pn_id_85 > .p-element:nth-child(1)').click()

    cy.get('#cdk-accordion-child-4 > .mat-expansion-panel-body > .row > .mb-3 > .p-inputtext').click()

    cy.get('#cdk-accordion-child-4 > .mat-expansion-panel-body > .row > .mb-3 > .p-inputtext').type('Twesa')

    cy.get('.ng-star-inserted > .mat-mdc-card > .mat-mdc-card-actions > .mdc-button:nth-child(1) > .mdc-button__label').click()

  })

})
