//promise
const promise = new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        let x = undefined;
        if (x) {
          resolve(x);
        } else {
          reject(new Error("error data"));
        }
    },5000   
    )
    
})
/*
promise.then((value)=>
{
    console.log(value);
}).catch((err)=>
{
    console.log(err);
}).finally(()=>
{
    console.log("finished");
})

*/

//async awai
async function asyncfunction()
{
    try {
        const name = await promise;
        console.log(name);
        
    } catch (error) {
        console.log("Error")
        
    }
    finally
    {
        console.log("finally");
    }
}
asyncfunction();
console.log("hello");