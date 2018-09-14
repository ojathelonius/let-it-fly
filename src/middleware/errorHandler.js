export default (fn) => {
    return (req, res, next) => {
        // TODO : return stacktrace in dev env, else return generic error message based on error code
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};