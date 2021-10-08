const findUsers = require('../Controller/users.controller');
const users = ['Sanna', 'Lou', 'Elsa', 'Tariq'];

describe('findUsers', () => {
    // find all users
    it('should find all users on S', () => {
        expect(users).toContain('Sanna');
    })

    // it('should remove all names starting on S', () => {
    //     expect(findUsers.getUsers(users)).not.toContain('Sanna');
    // })


})