const loggerMiddleware = (store) => (next) => (action) => {
    return next(action);
  };
  
  export default loggerMiddleware;