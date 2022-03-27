const rawCsvToArrayFactory = require('../../factory/rawCsvToArrayFactory')();

describe('Factory :: rawCsvToArrayFactory', () => {
    const data = [
        'id,nome,sobrenome,email,sexo,ip,data_aniversario\r\r',
        '1,Edd,Saket,esaket0@census.gov,Non-binary,57.110.230.141,09/11/1984\r\r',
    ];
        it('should return object array with correct data', async () => {
            const payload = rawCsvToArrayFactory.build(data);

            expect(payload).toEqual(expect.arrayContaining([{
                id: '1', 
                nome: 'Edd',
                sobrenome: 'Saket',
                email: 'esaket0@census.gov',
                sexo: 'Non-binary', 
                ip: '57.110.230.141', 
                data_aniversario: '09/11/1984',
            }]));
        });
    });