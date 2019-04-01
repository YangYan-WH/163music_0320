$(function () {
    $.get('./lyric.json').then(function (object) {
        // let lyric = object.lyric
        let {
            lyric
        } = object //es6 解构语法
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

        let audio = document.createElement('audio')
        audio.src = 'http://poo1ntq8u.bkt.clouddn.com/%E5%84%BF%E6%AD%8C.mp3'
        document.querySelector('svg.icon-play').addEventListener('click', function (e) {
            
            audio.play()
            document.querySelector('.disc-container').classList.add('playing')
        })
        document.querySelector('svg.icon-pause').addEventListener('click', function (e) {
            
            audio.pause()
            document.querySelector('.disc-container').classList.remove('playing')
        })
        // audio.oncanplay = function(){
        //     console.log(audio.play())
        //     audio.play()
        //     document.querySelector('.disc-container').classList.add('playing')
        // }
    })
})