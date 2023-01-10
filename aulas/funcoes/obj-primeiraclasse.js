function fn(cb){
    console.log('executar ação call back')
    console.log(typeof cb)
    cb()
}