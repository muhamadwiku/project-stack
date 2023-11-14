  const fetchData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/todos'
    try {
      const response = await fetch(url);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Rethrow the error to handle it in the component
    }
  };

export default fetchData;
