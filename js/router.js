var router=new VueRouter({
   routes:[
       {path:'/',component:index},
       {
           path:'/info',component:Info,
           children:[
               {path:'',component:list},
               {path:'list/:id',component:con}
           ],

       },
       {path:'/project',component:project},
       {path:'/hist',component:hist},
       {path:'/doc',component:doc,
           children:[
               {
                   path: "",
                   components: {
                       left: left,
                       right: right,
                   },
                   beforeEnter:(to,from,next)=>{
                       if(sessionStorage[login]&&JSON.parse(sessionStorage.login.name)){
                           next();
                       }else{
                           router.push('/login');
                       }

                   },
               }
           ]
       },
       {path:'/login',component:login},
       {path:'*',redirect:'/'}
   ]
})
