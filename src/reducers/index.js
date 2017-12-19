/**
 * Created by guangqiang on 2017/12/19.
 */
import {combineReducers} from 'redux'
import getTodoCount from './header'
import getTodoList from './list'

const reducer = combineReducers({
  getTodoCount,
  getTodoList
})

export default reducer