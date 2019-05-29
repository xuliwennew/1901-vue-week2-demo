import api from "../common/api"
import {CARTURL} from "../common/urlSchema"


export default  {

    /**
     * 根据用户的编号获取购物
     */
    getCartByUserId(cb){
      api.get(CARTURL,cb)
    }
}
