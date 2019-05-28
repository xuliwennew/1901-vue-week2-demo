import api from "../commons/api"
import {USERURL} from "../commons/urlSchema"

export default  {

    /**
     * 获取用户列表信息
     */
    getUsers(cb){
      api.get(USERURL,cb)
    }
}
