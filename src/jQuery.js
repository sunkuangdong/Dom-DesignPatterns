window.jQuery = function (selector) {
    const elements = document.querySelectorAll(selector)
    return {
        addClass(className) {
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.add(className)
            }
            // 这个 this 是什么要看怎么调用的
            // 我们调用是通过 api.addClass 的
            // 所以这个 this 就是 api
            return this;
        }
    }
}