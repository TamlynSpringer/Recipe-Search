export const fetchRecipes = async ({ input }) => {
  if (input && typeof input === 'string') {
    fetch(`./api/recipes/${input}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('HTTP status ' + response.status);
        }
        return response.json()
      })
      .catch((err) => {
        console.log(err)
      });
  }
};
