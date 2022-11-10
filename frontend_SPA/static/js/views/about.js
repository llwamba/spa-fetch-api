import AbstractView from "./AbstractView.js";


export default class extends AbstractView {
    constructor () {
        super();
        this.setTitle("About Me")
    }

    //async because we want to load this from the server side to render the html
    async getHtml() {
        return `
 
        <div class="about-div">
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQH6Dt-SBy1dhg/profile-displayphoto-shrink_400_400/0/1549856828430?e=1673481600&v=beta&t=n4b0ABTf_WV6LSXDN-XprqjaG_sRQGdymKXEjtJDdN0" 
            alt="Lionel's picture" style="border-radius: 50%;" height="100">
            <h3>Lionel Lwamba</h3>

            <p><a href="https://www.linkedin.com/in/lionel-lwamba-b21a11177/">Linkedin</a> | <a href="https://github.com/llwamba">GitHub</a></p>
            <hr>
            <br>

            <P>
                Passionate about coding, and a driven problem-solver with experience in SQL databases, SAP/ERP, and Python. 
                Lionel is proficient in HTML5, CSS3, JavaScript, React.js, Node.js, and in writing APIs. Lionel has a bachelor 
                degree in Electrical Engineering with a minor concentration in Mathematics. He has also completed the following college 
                computer science classes: Programming Logic/Data Structure, Database/SQL, Python Programming, Advanced Python Programming, 
                and Web Page Coding W/Dreamweaver. Lionel is a passionate continuous learner; he regularly takes online courses, read documentations 
                and books to improve his programming skills and knowledge.
            </p>

        </div>        
        `
    }
}