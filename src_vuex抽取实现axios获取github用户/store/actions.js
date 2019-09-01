import axios from 'axios'
import {REQESTING,REQ_SUCCESS,REQ_ERROR} from './mutation-types'
// 包含了多个间接修改状态数据的方法的对象
export default{
    async search ({commit},searchName) {
        const url = `https://api.github.com/search/users`
       //  先更新一次data中的数据，消除第一次的提示信息，并且显示的应该是loading
        
       try {
           //  发送请求时，修改一次状态数据
           commit(REQESTING)
         const response = await axios.get(url,{
            // 配置参数
            params:{
              q: searchName
            }
          });
            // 信息在当前的这个变量中
           const users = response.data.items.map(item => ({
             login:item.login,
             avatar_url: item.avatar_url,
             html_url: item.html_url
           }));
        //    更新数据---修改一次
        commit(REQ_SUCCESS,users)
       } catch (error) {
        //    修改一次数据
        commit(REQ_ERROR,error.message)
           
       }
         
        
       
    }

}