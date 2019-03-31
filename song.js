$(function () {
    $.get('./lyric.json').then(function (object) {
        // let lyric = object.lyric
        let {lyric} = object //es6 解构语法
        let array = lyric.split('\n')
        let regex = /^\[(.*)\](.*)/
        array = array.map(function (string) {
            var matches = string.match(regex)
            if (matches) {
                return {
                    time: matches[1],
                    words: matches[2]
                }
            }

        })
        console.log(array)
        array.forEach(function (object) {
            let div_lines = document.querySelector('.song-description>.lyric>.lines')
            let p = document.createElement('p')

            p.setAttribute('data-time', object.time)
            p.textContent = object.words
            div_lines.appendChild(p)

        })

        // http://poo1ntq8u.bkt.clouddn.com/%E5%84%BF%E6%AD%8C.mp3
        let audio = document.createElement('audio')
        audio.src = 'http://poo1ntq8u.bkt.clouddn.com/%E5%84%BF%E6%AD%8C.mp3'
        audio.oncanplay = function(){
            console.log(1111)
            audio.play()
            document.querySelector('.disc-container').addClass('playing')
        }
    })
})