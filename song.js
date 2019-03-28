$(function(){
    $.get('./lyric.json').then(function(object){
        // let lyric = object.lyric
        let {lyric} = object //es6 解构语法
        let array = lyric.split('\n')
        let regex = /^\[(.*)\](.*)/
        array = array.map(function(string){
            var matches = string.match(regex)
            if(matches){
                return {
                    time: matches[1],
                    words: matches[2]
                }
            }
            
        })
        array.forEach(function(object){
            let div_lyric = document.querySelector('.song-description>.lyric')
            let p = document.createElement('p')
            p.setAttribute('data-time',object.time)
            p.textContent = object.words
            div_lyric.appendChild(p)
        })
    })
})