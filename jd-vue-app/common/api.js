

export default  {

    /**
     * 通用的get
     * @param url
     * @param cb
     */
    get(url,cb){
        fetch(url).then(res=>{
            res.json().then(cb)
        })
    }
}
