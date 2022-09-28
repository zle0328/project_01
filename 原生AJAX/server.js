

const express =require('express');

//创建应用对象
const app =express();

//创建路由规则
app.get('/server',(request,response)=>{
     //设置响应头 允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');

    //设置响应体
response.send('HELLO AJAX -2');
});
app.all('/server',(request,response)=>{
     //设置响应头 允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');

    response.setHeader('Access-Control-Allow-Headers','*');
    //设置响应体
response.send('HELLO AJAX POST');
});


app.all('/json-server',(request,response)=>{
     //设置响应头 允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');

     response.setHeader('Access-Control-Allow-Headers','*');

     const data = {
      name:'atguigu'
     };
     let str =JSON.stringify(data);
    //设置响应体
      response.send(str);
});

app.get('/ie',(request,response)=>{
     //设置响应头 允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');

    //设置响应体
response.send('HELLO IE -2');
});

//延时
app.all('/delay',(request,response)=>{
     //设置响应头 允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
   setTimeout(()=>{
     response.send('延时响应');
   },3000)
  

});
//jquery 服务
app.all('/jquery-server',(request,response)=>{
     //设置响应头 允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    const data ={name:'尚硅谷'};
  // response.send('HELLO JQuery AJAX');
   response.send(JSON.stringify(data));

});

//axios 服务
app.all('/axios-server',(request,response)=>{
     //设置响应头 允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    const data ={name:'尚硅谷'};
  // response.send('HELLO JQuery AJAX');
   response.send(JSON.stringify(data));

});
//监听端口
app.listen(8000,()=>{
  console.log("服务已经启动，8000端口监听中...");
})