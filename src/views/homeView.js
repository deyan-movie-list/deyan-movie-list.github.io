import {html} from 'https://unpkg.com/lit-html?module';
let homeTemplate=()=>html`
<section>
    <h2>Home Page</h2>

    <p>lorem aasldkfjasldk asdlkfjasldkjfa

    </p>
</section>`


export function homePage(ctx) {
    ctx.render(homeTemplate())
}