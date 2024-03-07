function* consoleGenerator(data){
    for(const el of data){
        yield el;
    }
}

export default consoleGenerator