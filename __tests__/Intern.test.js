const Intern = require("../lib/Intern");

describe('Intern', () => {

    describe('Initialization', () => {
        it('should set the value of school by using constructor', () => {
            // Arrange
            let name = "Lindy";
            let id = 1;
            let email = "Lindy@gmail.com"
            let school = "DePaul"
            // Act
            let intern = new Intern(name, id, email, school)
            // Assert
            expect(intern.school).toEqual("DePaul")
        });

    });
    describe('getSchool', () => {
        it('should return DePaul when getSchool is called', () => {
            // Arrange
            let name = "Lindy";
            let id = 1;
            let email = "Lindy@gmail.com"
            let school = "DePaul"
            let intern = new Intern(name, id, email, school)
            // Act
            let theirschool = intern.getSchool()
            // Assert
            expect(theirschool).toEqual("DePaul")
        });
    });

    describe('getRole', () => {
        it('should return Intern when getRole is called', () => {
            // Arrange
            let name = "Lindy";
            let id = 1;
            let email = "Lindy@gmail.com"
            let school = "DePaul"
            let intern = new Intern(name, id, email, school)
            // Act
            let role = intern.getRole()
            // Assert
            expect(role).toEqual("Intern")
        });
    });

});