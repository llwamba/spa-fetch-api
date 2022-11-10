import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor () {
        super();
        this.setTitle("API Data Page")
    }

    //async because we want to load this from the server side to render the html
    async getHtml() {
        fetch('https://fakestoreapi.com/products')
                .then(data=>data.json())
                .then((objectData) => {
                    console.log(objectData[0].title);
                    let tableData = "";

                    objectData.map((values) => {
                        tableData += `<tr>
                        <td id="table_cell">${values.title}</td>
                        <td id="table_cell">${values.description}</td>
                        <td id="table_cell">${values.price}</td>
                        <td id="table_cell"><img src="${values.image}"/></td>
                        </tr>`;
                    });

                    document.getElementById("table_body").innerHTML = tableData; 
                }).catch((err) => {
                    console.log("Ooops Something Went Wrong!")
                })


        return `
                <h1 class="text-center">Retrieved information from API data </h1>

                <div class="container">
                    <table style="width: 100%">
                        <tr>
                        <th scope="col" class="column-header">Title</th>
                        <th scope="col" class="column-header">Description</th>
                        <th scope="col" class="column-header">Price</th>
                        <th scope="col" class="column-header">Image</th>
                        </tr>
                    <tbody id="table_body">                                             
                    </tbody>
                    </table>
                </div>


            
        
    
        
        `;
    }
}