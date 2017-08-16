/*
* 用户的行为
* 行为抽象
* action
* */


/*
* 添加待办项
* addTodo
* type / id / text
* */
let nextTodoId = 0;
const addTodo = (text) => {
    return {
        type:"ADD_TODO",
        id:nextTodoId++,
        text
    }
}

/*
* 对待办项进行过滤操作
* setVisibility
* type / filter
* */

const setVisibilityFilter = (filter) => {
    return {
        type : "SET_VISIBILITY_FILTER",
        filter
    }
}

/*
* 待办项是否完成
* toggleTodo
* */
const toggleTodo = (id) => {
    return {
        type:"TOGGLE_TODO",
        id
    }
}

export {addTodo,setVisibilityFilter,toggleTodo}