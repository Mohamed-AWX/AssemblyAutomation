describe("Registration Form Tests", () => {
  beforeEach(() => {
      cy.visit("http://162.246.18.184/#/auth/register");
  });

  it("Verify User Name input field", () => {
      cy.get("#UserName").type("JohnDoe");
      cy.get("#UserName").should("have.value", "JohnDoe");
  });

  it("Check Email input field format", () => {
      cy.get("#registerEmail").type("test@example.com");
      cy.get("#registerEmail").should("have.value", "test@example.com");
  });

  it("Ensure Password input field security", () => {
      cy.get("#registerPassword").type("SecurePassword123!");
      cy.get("#registerPassword").should("have.value", "SecurePassword123!");
  });

  it("Confirm Company Name input field", () => {
      cy.get("#CompanyName").type("ABC Company");
      cy.get("#CompanyName").should("have.value", "ABC Company");
  });

  it("Test Phone Number input field", () => {
      cy.get("#Phone").type("1234567890");
      cy.get("#Phone").should("have.value", "1234567890");
  });

  it("Validate Industry dropdown selection", () => {
      cy.get(".industry-dropdown").click();
      cy.get("p-dropdownitem").contains("Automotive").click();
  });

  it("Check Country dropdown selection", () => {
      cy.get(".country-dropdown").click();
      cy.get("p-dropdownitem").contains("Egy").click();
  });

  it("Verify Address Line input field", () => {
      cy.get("#Address").type("123 Main Street");
      cy.get("#Address").should("have.value", "123 Main Street");
  });

  it("Check Register button state", () => {
      cy.get("button").contains("Register").should("be.disabled");
      // Fill all required fields
      cy.get("#UserName").type("JohnDoe");
      cy.get("#registerEmail").type("test@example.com");
      cy.get("#registerPassword").type("SecurePassword123!");
      cy.get("#CompanyName").type("ABC Company");
      cy.get("#Phone").type("1234567890");
      cy.get(".industry-dropdown").click();
      cy.get("p-dropdownitem").contains("Automotive").click();
      cy.get(".country-dropdown").click();
      cy.get("p-dropdownitem").contains("Egy").click();
      cy.get("#Address").type("123 Main Street");
      cy.get("button").contains("Register").should("not.be.disabled");
  });

  it("Attempt to submit form without any information", () => {
      cy.get("button").contains("Register").click();
      cy.get(".error-input").should("have.length", 8);
  });

  it("Enter invalid email format", () => {
      cy.get("#registerEmail").type("invalidemail");
      cy.get(".error-input").contains("Email is required");
  });

  it("Enter weak password", () => {
      cy.get("#registerPassword").type("weakpassword");
      cy.get(".error-input").contains("Password must be strong");
  });

  it("Enter non-numeric phone number", () => {
      cy.get("#Phone").type("abcdef");
      cy.get(".error-input").contains("Phone Number must be numeric");
  });

  it("Select invalid option from Industry dropdown", () => {
      cy.get(".industry-dropdown").click();
      cy.get("p-dropdownitem").contains("Invalid Industry").click();
      cy.get(".error-input").contains("Invalid Industry selected");
  });

  it("Select invalid option from Country dropdown", () => {
      cy.get(".country-dropdown").click();
      cy.get("p-dropdownitem").contains("Invalid Country").click();
      cy.get(".error-input").contains("Invalid Country selected");
  });

  it("Enter long address", () => {
      cy.get("#Address").type("Very long address that exceeds character limit");
      cy.get("#Address").should("have.value", "Very long address that exceeds character limit");
  });

  it("Check Register button state after form submission", () => {
    // Click the "Register" button
    cy.contains('button', 'Register').click({ force: true });

    // Verify that the button is disabled
    cy.contains('button', 'Register').should('be.disabled');
});



  it("Test form behavior with emojis and special characters", () => {
      // Test different input fields with emojis and special characters
  });

  it("Verify form responsiveness on different screen sizes", () => {
      // Test responsiveness on different screen sizes
  });

  it("Test form with high volume of data for performance", () => {
      // Test form with a large amount of data
  });

  it("Submit form rapidly to test duplicate submissions", () => {
      // Rapidly submit the form multiple times
  });

  it("Test form with different combinations of inputs", () => {
      // Test form with various valid and invalid input combinations
  });

  it("Verify password field supports copypaste for password managers", () => {
      // Test copypaste functionality in password field
  });

  it("Test form on different browsers for compatibility", () => {
      // Test form on different browsers
  });

  it("Check form data retention on page refresh", () => {
      // Refresh the page and verify if entered data is retained
  });
});

describe("Registration Form Tests", () => {
  beforeEach(() => {
      cy.visit("http://162.246.18.184/#/auth/register");
  });

  it("Fill all fields and redirect to another screen after registration", () => {
      // Fill all registration fields
      cy.get("#UserName").type("TestUser");
      cy.get("#registerEmail").type("test@example.com");
      cy.get("#registerPassword").type("password123");
      cy.get("#RegisterConfirmPassword").type("password123");
      cy.get("#CompanyName").type("Test Company");
      cy.get("#Phone").type("1234567890");
      cy.get(".industry-dropdown").click();
      cy.get(".p-dropdown-items-wrapper").should("be.visible");
      cy.get(".p-dropdown-items-wrapper").find(".p-dropdown-item").first().click();
      cy.get(".country-dropdown").click();
      cy.get(".p-dropdown-items-wrapper").should("be.visible");
      cy.get(".p-dropdown-items-wrapper").find(".p-dropdown-item").first().click();
      cy.get("#Address").type("St201");

      // Click on the registration button
      cy.get(".register-button").click();

      // Assuming the registration process redirects to another screen with a different URL
      cy.url().should("include", "/success-screen"); // Adjust URL check based on your application's actual redirection behavior
  });
});
