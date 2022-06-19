class Elastic {
    constructor() {
        this.url = "https://jsonplaceholder.typicode.com/todos";
        this.options = []
      }
    
    async getOptions (word) {
        let arr = ['The Godfather', 'Pulp Fiction', 'Musab'];
        arr.push(`${word} -- elastic`)
        
        const response = await fetch(this.url)
        const movies = await response.json();
        return movies;
    }
    
}

export default Elastic;