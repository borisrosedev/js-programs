export default function(data, index){

    return(
        `
        
            <article class="article-input">

                <label for="${data.name}"></label>
                <input 
                    class="article-input__input"
                    type="${data.type}"
                    placeholder="${data.placeholder}"
                />
                <section class="article-input__error" id="input-error-${index}">
                </section>
    
            </article>
        
        `
    )


}