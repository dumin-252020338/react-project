// console.log('123')
// import {createStore} from 'redux';

const add_cannon = "增加坦克炮"
const remove_cannon = "减少坦克炮"
// 2.定义将来要做得事情 reducer
export function reducer(state=0, action){
    switch(action.type){
        case add_cannon:
            return state+1
        case remove_cannon:
            return state-1
        default :
            return 0
    }
}
export function addCannon(){
    return {type: add_cannon}
}
export function removeCannon(){
    return {type: remove_cannon}
}
