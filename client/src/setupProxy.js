const createProxyMiddleware = require('http-proxy-middleware');
module.exports=function (app){
    app.use(['/api','/auth/google','/login','/auth/partner/google','/auth/customer/google'],
    createProxyMiddleware({
        target:"http://localhost:5000"
    }))
}