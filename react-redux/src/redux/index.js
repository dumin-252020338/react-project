// console.log('123')
import {createStore} from 'redux';


// 2.定义将来要做得事情 reducer
function reducer(state=0, action){
    switch(action.type){
        case '增加坦克炮':
            return state+1
        case '减少坦克炮':
            return state-1
        default :
            return 0
    }
}
// 1.创建仓库 store
const store = createStore(reducer)

// 3.获取状态
console.log(store.getState())

// 4.派发事件 传递action
store.dispatch({
    type:'增加坦克炮'
})
// console.log(store.getState())

// 5.订阅 关注 数据变化
function listener(){
    const num = store.getState()
    console.log(`现在有${num}`)
}
store.subscribe(listener)
