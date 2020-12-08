window.$ = window.jQuery = function (selectorOrArray) {
    let elements
    if (typeof selectorOrArray === 'string') {
        elements = document.querySelectorAll(selectorOrArray)
    } else {
        elements = selectorOrArray
    }
    // 创建一个对象, 对象里面的__proto__ 为 jQuery.prototype
    // const api = {__proto__: jQuery.prototype}
    const api = Object.create(jQuery.prototype)
    // api.elements = elements
    // api.oldApi = selectorOrArray.oldApi
    Object.assign(api, {
        elements,
        oldApi: selectorOrArray.oldApi,
    })
    return api;
}
jQuery.prototype = {
    // indexValue: null,
    addClass(className) {
        for (let i = 0; i < this.elements.length; i++) {
            this.elements[i].classList.add(className)
        }
        // 这个 this 是什么要看怎么调用的
        // 我们调用是通过 api.addClass 的
        // 所以这个 this 就是 api
        return this;
    },
    find(selector) {
        let array = [];
        for (let i = 0; i < this.elements.length; i++) {
            array = array.concat(Array.from(this.elements[i].querySelectorAll(selector)))
        }
        // 引用的和this不一样
        // 需要保存当前的引用并返回
        // 重新调用jQuery 会返回一个新的对象
        // 这个对象里面用的 elements 是你传递的 array
        // const newApi = jQuery(array);
        // return newApi;
        array.oldApi = this
        return jQuery(array);
    },
    end() {
        // 接收上一个 api
        return this.oldApi;
    },
    each(fn) {
        for (let i = 0; i < this.elements.length; i++) {
            fn.call(null, this.elements[i], i)
        }
        return this;
    },
    parent() {
        const array = []
        this.each(node => {
            if (array.indexOf(node.parentNode) === -1) {
                array.push(node.parentNode)
            }
        })
        return jQuery(array)
    },
    print() {
        return this.elements
    },
    children() {
        const array = []
        this.each(node => {
            array.push(...node.children)
        })
        return jQuery(array)
    },
    siblings() {
        let array = Array.from(this.elements[0].parentNode.children)
            .filter(item => item !== this.elements[0])
        return jQuery(array)
    },
    index() {
        let array = Array.from(this.elements[0].parentNode.children)
        for (let i = 0; i < array.length; i++) {
            if (array[i] === this.elements[0]) {
                return i
            }
        }
    },
    next() {
        return this.elements[0].nextSibling
    },
    prev() {
        return this.elements[0].previousSibling
    },
    constructor: jQuery
}