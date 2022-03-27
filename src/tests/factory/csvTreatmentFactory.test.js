const csvTreatmentFactory = require('../../factory/csvTreatmentFactory')();

describe('Factory :: CsvTreatmentFactory', () => {
    const data = [{
        id: '1',
        nome: 'Nome',
        sobrenome: 'sobrenome',
        ip: '3212341',
        data_aniversario: '05/03/1997',
        email: 'blabla@gmail.com'
    }];
        it('should return object array with correct data', async () => {
            const payload = csvTreatmentFactory.build(data);

            expect(payload).toEqual(expect.arrayContaining([{
                name: 'Nome sobrenome',
                mail: 'blabla@gmail.com',
                birthdate: '1997-03-05'
            }]));
        });
    });