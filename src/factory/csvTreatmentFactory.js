module.exports = () => ({
    build: (data) => {
        const payload = data.map((obj)=>{
            const birthdate = (String(obj.data_aniversario)).split('/').reverse().join('-')
            return {
                name: (`${obj.nome} ${obj.sobrenome}`),
                mail: obj.email,
                birthdate
            }
        });
        return payload;
    }
});