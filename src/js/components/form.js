import ArticleInput from "./article-input"

export default function(data, title) {

    return(
        `
        <form class="form">
            <h2>
                ${title}
            </h2>
            <section class="form__inputs">
                ${data.map((el, index) => ArticleInput(el, index).join(''))}
            </section>
        </form>
        
        
        `
    )

}