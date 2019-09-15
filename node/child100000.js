function add(max){
    let num = 0
    for(var i=0;i<max;i++){
        for(var j=0;j<max;j++){
            num+=i;
            num+=j;
        }
    }
    return num;
}

process.on('message',function(msg){
    process.send(msg+add(100000))
})