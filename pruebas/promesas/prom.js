const resolve=(r)=>{
    console.log(r);
}
const p1 =new Promise(
    (resolve, reject)=>{
        setTimeout(
            ()=>{
                resolve('juan')
            },
            1000
        )
    }
)