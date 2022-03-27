const filterDataService = require('../../services/filterDataService')();

describe('Service :: filterDataService', () => {
    const data = [
    {
        name: 'Nome sobrenome',
        mail: 'blabla@gmail.com',
        birthdate: '1997-03-05'
    },
    {
        name: 'Nome2 sobrenome2',
        mail: 'blabla2@gmail.com',
        birthdate: '2004-08-05'
    },

];
        it('should return object with people with less than 18 years old', async () => {
            const payload = filterDataService.execute(data);

            expect(payload).toEqual(expect.arrayContaining([{
                name: 'Nome2 sobrenome2',
                mail: 'blabla2@gmail.com',
                birthdate: '2004-08-05'
            }]));
        });
    });