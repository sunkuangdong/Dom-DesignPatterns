// const api = jQuery('.test')
// api.addClass.call(api, 'className') // addClass 里面的 this是什么?
//    .addClass.call(api,'bule')       // 每一个 addClass 里面的 this 都是api
//    .addClass.call(api,'green')      // 链式调用

// find的实现
const api = jQuery('.test1')
api.find('.child')
console.log(api.find('.child'))