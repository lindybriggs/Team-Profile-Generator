const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

describe('Employee', () => {

    describe('Initialization', () => {
        it('should set the values of name, id, and email when i set them', () => {
            // Arrange
            let name = "Lindy";
            let id = 1;
            let email = "Lindy@gmail.com"
            // Act
            let employee = new Employee(name, id, email)
            // Assert
            expect(employee.name).toEqual("Lindy")
            expect(employee.id).toEqual(1)
            expect(employee.email).toEqual("Lindy@gmail.com")
        });

    });

    describe('getName', () => {
        it('should return Lindy when getName is called', () => {
            // Arrange
            let name = "Lindy";
            let employee = new Employee(name)
            // Act
            let theirName = employee.getName()
            // Assert
            expect(theirName).toEqual("Lindy")

        });
    });

    describe('getId', () => {
        it('should return 1 when getId is called', () => {
            // Arrange
            let name = "Lindy";
            let id = 1;
            let email = "Lindy@gmail.com"
            let employee = new Employee(name, id, email)
            // Act
            let theirId = employee.getId()
            // Assert
            expect(theirId).toEqual(1)
        });
    });

    describe('getEmail', () => {
        it('should return Lindy@gmail.com when getEmail is called', () => {
            // Arrange
            let name = "Lindy";
            let id = 1;
            let email = "Lindy@gmail.com"
            let employee = new Employee(name, id, email)
            // Act
            let theirEmail = employee.getEmail()
            // Assert
            expect(theirEmail).toEqual("Lindy@gmail.com")
        });
    });

    describe('getRole', () => {
        it('should return Employee when getRole is called', () => {
            // Arrange
            let name = "Lindy";
            let id = 1;
            let email = "Lindy@gmail.com"
            let employee = new Employee(name, id, email)
            // Act
            let role = employee.getRole()
            // Assert
            expect(role).toEqual("Employee")
        });
    });

});