


export default {


    /**
     * fetch get
     * @param url
     * @param cb
     */
    get(url,cb){
        fetch(url).then(res=>{
            res.json().then(cb)
        })
    }
}
