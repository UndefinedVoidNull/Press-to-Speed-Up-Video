// ==UserScript==
// @name         Press to Speed Up Video
// @namespace    https://github.com/UndefinedVoidNull/Press-to-Speed-Up-Video
// @version      0.1
// @description  Press to Speed Up Video
// @author       YouMoe
// @match        *://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // get videos
    let videos = document.querySelectorAll('video')
    // console.log(videos)

    // key bindings
    // default keyCode 192 is `
    // default newSpeed is 2
    function keyBinding(keyCode = 192, newSpeed = 2) {
        document.addEventListener("keydown", (event) => {
            if (event.keyCode === keyCode) {
                // console.log('key down')
                for(let i = 0; i < videos.length; i++) {
                    videos[i].playbackRate = newSpeed
                }
            }
        })

        document.addEventListener("keyup", (event) => {
            if (event.keyCode === keyCode) {
                // console.log('key up')
                for(let i = 0; i < videos.length; i++) {
                    videos[i].playbackRate = 1
                }
            }
        })
    }
    keyBinding()
})();
