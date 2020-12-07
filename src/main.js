// const api = jQuery('.test')
// api.addClass.call(api, 'className') // addClass 里面的 this是什么?
//    .addClass.call(api,'bule')       // 每一个 addClass 里面的 this 都是api
//    .addClass.call(api,'green')      // 链式调用

// find 和 end 的实现
// const api = jQuery('.test1').find('.child').addClass('red')
//     .end().addClass('blue')
// console.log(api)

// each的实现
// const x = jQuery('.test').find('.child')
// x.each(div => console.log(div))

// console.log(jQuery('.test').parent().print())
// console.log(jQuery('.test').children().print())
// console.log(jQuery('.test1').siblings().print())
// console.log(jQuery('.test').index())
// console.log(jQuery('.test1').next())
console.log(jQuery('.test1').prev())