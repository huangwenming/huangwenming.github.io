define("mock/app",function(o){var e=(o("http"),o("path")),t=o("koa"),s=o("koa-static"),a=o("koa-router")(),c=o("mock/routes/routes"),n=o("mock/mock.config"),i=t(),u=n.staticDir||"yunying";i.use(s(e.resolve(__dirname,u),{maxage:0})),c(a,i),i.use(a.routes()),i.listen(3005,"0.0.0.0",function(){console.log("app listen 3005 success.")})});