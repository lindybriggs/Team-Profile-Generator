const Engineer = require("../lib/Engineer");

describe('Engineer', () => {

    describe('Initialization', () => {
        it('should set the values of github account by using constructor', () => {
            // Arrange
            let name = "Lindy";
            let id = 1;
            let email = "Lindy@gmail.com"
            let github = "LindyGitHub"
            // Act
            let engineer = new Engineer(name, id, email, github)
            // Assert
            expect(engineer.github).toEqual("LindyGitHub")
        });

    });
    describe('getGithub', () => {
        it('should return LindyGitHub when getGithub is called', () => {
            // Arrange
            let name = "Lindy";
            let id = 1;
            let email = "Lindy@gmail.com"
            let github = "LindyGitHub"
            let engineer = new Engineer(name, id, email, github)
            // Act
            let theirGithub = engineer.getGithub()
            // Assert
            expect(theirGithub).toEqual("LindyGitHub")
        });
    });

    describe('getRole', () => {
        it('should return Engineer when getRole is called', () => {
            // Arrange
            let name = "Lindy";
            let id = 1;
            let email = "Lindy@gmail.com"
            let github = "LindyGitHub"
            let engineer = new Engineer(name, id, email, github)
            // Act
            let role = engineer.getRole()
            // Assert
            expect(role).toEqual("Engineer")
        });
    });

});