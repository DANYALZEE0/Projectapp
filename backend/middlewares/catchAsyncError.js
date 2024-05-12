export const catchAsyncError = (catherr)=>{
    return(req, res, next)=>{
        Promise.resolve(catherr(req, res, next)).catch(next);
    };
};