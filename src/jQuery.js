window.jQuery = function (selectorOrArray) {
    let elements
    if (typeof selectorOrArray === 'string') {
        elements = document.querySelectorAll(selectorOrArray)
    } else {
        elements = selectorOrArray
    }
    return {
        oldApi: selectorOrArray.oldApi,
        index: selectorOrArray.index,
        addClass(className) {
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.add(className)
            }
            // 这个 this 是什么要看怎么调用的
            // 我们调用是通过 api.addClass 的
            // 所以这个 this 就是 api
            return this;
        },
        find(selector) {
            let array = [];
            for (let i = 0; i < elements.length; i++) {
                array = array.concat(Array.from(elements[i].querySelectorAll(selector)))
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
            for (let i = 0; i < elements.length; i++) {
                fn.call(null, elements[i], i)
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
            return elements
        },
        children() {
            const array = []
            this.each(node => {
                array.push(...node.children)
            })
            return jQuery(array)
        },
        siblings() {
            let array = Array.from(elements[0].parentNode.children)
                .filter(item => item !== elements[0])
            return jQuery(array)
        },
        index() {
            let array = Array.from(elements[0].parentNode.children)
            for (let i = 0; i < array.length; i++) {
                if (array[i] === elements[0]) {
                    array.index = i
                    return jQuery(array)
                }
            }
        }
    }
}