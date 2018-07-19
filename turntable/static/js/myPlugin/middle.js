function middle(paramA,paramB){
    return function middleFn(req,res,next){
        console.log('req = ',req);
        console.log('res = ',res);
        next();
    }
}