//promise function doesn't continue until the evaluation of a state is resolved.
//they take two parameters usually "resolve" and "reject". Basically an "if true do this, if false do something else"

//use the "new Promise" constructor to create resolve and reject actions
var promiseToFinish = (projectFinished) => {
    return new Promise( (resolve,reject)=>{
        if(projectFinished){
            resolve("Project has been finished");
        }else{
            reject("Not finished");
        };

    });
};

var determineState = true;

//executes the .thens in order or the .catch if false
//this part of promise writing looks much better than nested callbacks
promiseToFinish(determineState)
    .then(statement =>{
        console.log(statement);
    })
    .catch(statement =>{
        console.log(statement);
    });