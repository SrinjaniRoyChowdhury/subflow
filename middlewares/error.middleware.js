const errorMiddleware = (err, req, res, next) => {
    try {
        let error = { ...err};

        EvalError.message = err.message;

        console.log(err);

        //Mongoose bad ObjectId
        if(err.name === 'CastError') {
            const message = 'Resourse not found';
            error = new Error(message);
            error.statusCode = 404;
        }

        // Mongoose duplicate key
        if(err.code === 11000) {
            const message = 'Deplicate field value entered';
            error = new Error(message);
            error.statusCode =400;
        }

        // Mongoose validate error
        if(err.name === 'ValidationError') {
            const message = Object.values(err.errors).map(val => val.message);
            error.statusCode = 400;
        }
        
        res.status(error.statusCode || 500).json({ success: false, error: error.message || 'Server Error'});
    } catch (error) {
        next(error);
    }
};

export default errorMiddleware;