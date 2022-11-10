import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor () {
        super();
        this.setTitle("Home")
    }

    //async because we want to load this from the server side to render the html
    async getHtml() {
        return `

        <div>
            <h1>API Data Project</h1>

            <p>
                This project is a single page application using API to fetch, retrieve and display data from the API on a table.  
                This single page application is built using JavaScript, Node.js, HTML/CSS, and Bootstrap.        
            </p>

            <br>

            <p>
                Click <a href="/api" data-link>Here</a> to view the fetched API Data, or Click on the briefcase icon in the Navigation bar.  
            </p>
        </div>
        
        `;
    }
}