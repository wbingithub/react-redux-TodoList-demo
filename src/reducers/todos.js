/*
* reducer
* 对用的行为进行响应
* */

/*
* 待办项响应 -- 添加 、 触发（点击待办项表示完成）、过滤
* */
const todo = ( state ,action ) =>{
    switch ( action.type ){
        case "ADD_TODO":
            return {
                id:action.id,
                text:action.text,
                completed:false
            }
        case "TOGGLE_TODO":
            if( state.id !== action.id ){
                return state
            }
            return Object.assign({},state,{
                completed:!state.completed
            })
        default:
            return state;
    }
}

/*
* 全部待办项  -- 待办项列表
* */

const todos = ( state=[] , action ) => {
    switch (action.type){
        case "ADD_TODO":
            return [
                ...state,
                todo(undefined,action)
            ]
        case "TOGGLE_TODO":
            return state.map(t=>todo(t,action))
        default:
            return state
    }
}

export default  todos