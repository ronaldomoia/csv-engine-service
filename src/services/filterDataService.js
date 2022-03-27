module.exports = () => ({
    execute: (data) => {
      const results = data.filter(element => {
        const bd = new Date(element.birthdate)
        const date = new Date();
        date.setFullYear( date.getFullYear() - 18 );
          if (bd > date) {
            return true;
          }
          return false;
        });
      return results
  }
});