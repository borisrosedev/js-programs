function cube(url){
    console.log('url', url)
    return(
        `
            <div class="cube">
                <div class="face face--front">
                    <img src=${url} alt="logo"/>
                </div>
                <div class="face face--back">
                </div>
                <div class="face face--top">
                </div>
                <div class="face face--bottom">
                </div>
                <div class="face face--left">
                </div>
                <div class="face face--right">
                </div>
            </div>
        
        
        `
    )
}

export default cube