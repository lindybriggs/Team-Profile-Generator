const Manager = require("../lib/Manager");

describe('Manager', () => {

    describe('Initialization', () => {
        it('should set the values of officeNumber account by using constructor', () => {
            // Arrange
            let name = "Lindy";
            let id = 1;
            let email = "Lindy@gmail.com"
            let officeNumber = 101
            // Act
            let manager = new Manager(name, id, email, officeNumber)
            // Assert
            expect(manager.officeNumber).toEqual(101)
        });

    });

    describe('getRole', () => {
        it('should return Manager when getRole is called', () => {
            // Arrange
            let name = "Lindy";
            let id = 1;
            let email = "Lindy@gmail.com"
            let officeNumber = 101
            let manager = new Manager(name, id, email, officeNumber)
            // Act
            let role = manager.getRole()
            // Assert
            expect(role).toEqual("Manager")
        });
    });

});