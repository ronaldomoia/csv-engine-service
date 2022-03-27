module.exports = () => ({
    build: (data) => {
        const payload = []
        for(i in data){
            if(i > 0){
                var csvRow = data[i].split(',');
                const date = String(csvRow[6]).replace(/(\r\n|\n|\r)/gm, "");
                const jsonBody = { 
                    id: csvRow[0], 
                    nome: csvRow[1],
                    sobrenome: csvRow[2],
                    email: csvRow[3],
                    sexo: csvRow[4], 
                    ip: csvRow[5], 
                    data_aniversario: date,
                } 
                payload.push(jsonBody)
            }
        }
        return payload
    }
});