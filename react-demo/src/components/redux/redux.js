// 如果想要在其他组件里面使用 肯定需要把下面的 导出去

const add_goods = '+'
const remove_goods = '-'

// 2. reducer 定义你将来 要做的事情
export function reducer(state=0,action) {
    switch (action.type) {
        case add_goods:
            return state+1
        case remove_goods:
            return state-1
        default:
            return 0
    }
}

// action
export function addGoods() {
    return {type: add_goods}
} 

export function removeGoods() {
    return {type: remove_goods}
}

// 利用中间件处理异步 延迟2秒去更改状态 
export function addgoodsAsync() {
    // 可以返回函数
    return dispatch=>{
        setTimeout(()=>{
            dispatch(addGoods())
        },2000)
    }
}

/*
*   function (dispatch) {
        setTimeout(()=>{
            dispatch(addgoods())
        })
    }
*
*
* */

/*
*   中间件 封闭了很多实用的方法
*   脚手架 环境
*   redux 处理异步 那么就需要用 redux-thunk
*   调试工具 vue devtools vuex devtools
*      react devtools
*      redux devtools
*
* */












