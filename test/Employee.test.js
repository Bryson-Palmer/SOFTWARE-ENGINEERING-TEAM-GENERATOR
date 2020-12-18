const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can set the first name via constructor arguments", () => {
  // Arrange
  const firstName = "Alice";

  // Act
  const e = new Employee(firstName);

  // Assert
  expect(e.firstName).toBe(firstName);

});

test("Can set the last name via constructor arguments", () => {
  // Arrange
  const lastName = "Wonderland";

  // Act
  const e = new Employee("Foo", lastName);

  // Assert
  expect(e.lastName).toBe(lastName);

});

test("Can set id via constructor argument", () => {
  const testValue = 100;
  const e = new Employee("Foo", "Bar", testValue);
  expect(e.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", "Bar", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get first name via getFirstName()", () => {
  // Arrange
  const testValue = "Alice";
  const e = new Employee(testValue);

  // Act
  const result = e.getFirstName();
  
  // Assert
  expect( result ).toBe(testValue);
  
});

test("Can get last name via getLastName()", () => {
  // Arrange
  const testValue = "Wonderland";
  const e = new Employee("Foo", testValue);

  // Act
  const result = e.getLastName();
  
  // Assert
  expect( result ).toBe(testValue);
  
});

test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Employee("Foo", "Bar", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", "Bar", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Alice", "Wonderland", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});
