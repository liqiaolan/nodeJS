var index=Vue.component('index',{
    template:`
       <div class="main">
          <navM></navM>
          <div class="homebox">
           这是首页
</div>
        </div>
    `,
})

var navM=Vue.component('navM',{
    template:`
      <nav>
     <router-link :to="item.url" v-for="(item,key) in navData" :key="key" exactd>{{item.title}}</router-link>
     <router-link v-if="!islogin" to="/login">login</router-link>
     <span v-if="islogin" @click="show" style="cursor: pointer">{{name}}
          <span  @click="logout" v-show="isshow">退出</span>
     </span>
</nav>     
     
    `,
    data(){
        return{
            navData:[
                {title:'首页',url:'/'},
                {title:'公司简介',url:'/info'},
                {title:'公司项目',url:'/project'},
                {title:'公司历史',url:'/hist'},
                {title:'文档',url:'/doc'},
            ],
            islogin:false,
            name:"",
            isshow:false,
        }
    },
    created(){
        this.name=this.get('login','name');
        this.islogin=this.get('login','name');
    },
    methods:{
        logout(){
            this.del('login');
            this.islogin=false;
            router.push('/');
        },
        show(){
         this.isshow=!this.isshow;
        }
    }

})
 var Info=Vue.component('info',{
     template:`
       <div class="info">
       <navM></navM>
       <transition mode="out-in">
          <router-view></router-view>
          </transition>
</div>
     `,
 })

var  hist=Vue.component('hist',{
    template:`
      <div class="main">
       <navM></navM>
       <div class="homebox">
           这是一个公司历史
</div>
      
</div>
    `,
})

var  project=Vue.component('project',{
    template:`
      <div class="main">
       <navM></navM>
       <div class="homebox">
           这是一个公司项目
</div>
      
</div>
    `,
})

var  doc=Vue.component('doc',{
    template:`
      <div>
      <navM></navM>
       <div class="con">
        <router-view name="left" class="left"></router-view>
        <router-view name="right" class="right"></router-view>
</div>
</div>
    `,
    beforeRouteEnter(to,from,next){
      next(function(vm){
          if(!vm.get("login","name")){
              router.push("/login");
          }
      });
    }
})

var list=Vue.component('list',{
    template:`
         <ul class="con">
            <router-link to="/info/list/0">杨超杨超</router-link>
            <router-link to="/info/list/1">王琦王琦</router-link>
            <router-link to="/info/list/2">李巧兰李巧兰</router-link>
            </ul>
    `,

})
var con=Vue.component('con', {
        template:`
      <div>
        <h1>{{data[$route.params.id].title}}</h1>
        <p>{{data[$route.params.id].con}}</p>
</div>
    `,
        data(){
            return{
                data:[
                    {title:'1111111',con:'111的内容'},
                    {title:'2222222',con:'222的内容'},
                    {title:'3333333',con:'333的内容'},
                ]
            }
        }

})

var left=Vue.component('left',{
    template:`
     
      <div>
                <ul> 
                    <li> 
                       <strong>vue安装</strong>
                    
                        <ul class="son"> 
                          <li> 
                              <router-link to="#ju" tag="li">npm 安装</router-link>
                          </li>
                           <li> 
                           <router-link to="#pp" tag="li"> script 安装</router-link>
                             
                          </li>
                        </ul>
                    </li>
                    
                      <li> 
                       <strong>vue路由</strong>
                    
                        <ul class="son"> 
                        
                         <router-link to="#oo" tag="li">  vue路由的钩子函数</router-link>
                          <router-link to="#jj" tag="li">vue路由的配置项</router-link>
                        
                         
                        </ul>
                    </li>
                </ul>
      
       </div>
    `,
//    使用watch函数来监控每一个点击事件
    watch:{
    //    监控路由的变化
        $route(){
            //获取哈希值
            var hash=this.$route.hash.slice(1);
            var vm=this;
            function animate () {
                if (TWEEN.update()) {
                    requestAnimationFrame(animate)
                }
            }
            new TWEEN.Tween({ tweeningNumber:document.querySelector(".right").scrollTop })
                .easing(TWEEN.Easing.Quadratic.Out)
                .to({ tweeningNumber: (document.querySelector("#"+hash).offsetTop)-44 }, 500)
                .onUpdate(function () {
                    document.querySelector(".right").scrollTop= this.tweeningNumber.toFixed(0)
                })
                .start()
            animate()

        }
        }
})

var right=Vue.component('right',{
    template:`
     <div>
       <ul>
       <li>hghgh</li>
       <li>hghgh</li>
       <li>hghgh</li>
       <li>hghgh</li>
       <li>hghgh</li>
       <li>hghgh</li>
       <li>hghgh</li>
       <li>hghgh</li>
       <li>hghgh</li>
       <li>hghgh</li>
       <li>hghgh</li>
       <li>hghgh</li>
       <li>hghgh</li>
       <li>hghgh</li>
       <li>hghgh</li>
       <li>hghgh</li>
       <li>hghgh</li>
       <li>aaa</li>
       <li>bbb</li>
       <li>ccc</li>
       <li>ddd</li>
       <li>fff</li>
       <li>ggg</li>
       <li>eee</li>
       <li>hhh</li>
       <li id="jj">jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj</li>
       <li>uuu</li>
       <li>ttt</li>
       <li>yyy</li>
       <li>iii</li>
       <li>llll</li>
       <li>llll</li>
       <li>llll</li>
       <li>llll</li>
       <li>llll</li>
       <li>llll</li>
       <li>llll</li>
       <li>llll</li>
       <li>llll</li>
       <li>llll</li>
       <li>llll</li>
       <li>llll</li>
       <li>llll</li>
       <li>llll</li>
       <li>llll</li>
       <li>llll</li>
       <li>llll</li>
       <li>llll</li>
       <li>llll</li>
       <li>llll</li>
       <li>llll</li>
       <li>llll</li>
       <li>r45454545</li>
       <li>7777</li>
       <li id="oo">000000000000000000000000000000000</li>
       <li>kokoko</li>
       <li>uiuiui</li>
       <li>ioioio</li>
       <li>ioioio</li>
       <li>ioioio</li>
       <li>ioioio</li>
       <li>ioioio</li>
       <li>ioioio</li>
       <li>ioioio</li>
       <li>ioioio</li>
       <li>ioioio</li>
       <li>ioioio</li>
       <li>ioioio</li>
       <li>ioioio</li>
       <li>ioioio</li>
       <li>ioioio</li>
       <li>ioioio</li>
       <li id="pp">ppppppppppppppppppppppppppppppppp</li>
       <li>yuyuyu</li>
       <li>yuyuyu</li>
       <li>yuyuyu</li>
       <li>yuyuyu</li>
       <li>yuyuyu</li>
       <li>yuyuyu</li>
       <li>yuyuyu</li>
       <li>yuyuyu</li>
       <li>yuyuyu</li>
       <li>yuyuyu</li>
       <li>yuyuyu</li>
       <li>yuyuyu</li>
       <li>yuyuyu</li>
       <li>yuyuyu</li>
       <li>yuyuyu</li>
       <li id="ju">jujujujujujujujuuuuuuuuuuuuuuuuuu</li>

</ul>
</div>
    `,
})

var login=Vue.component('login',{
    template:`
<div>
<header class="mui-bar mui-bar-nav">
     <a class="mui-icon mui-icon-undo" @click="back"></a>
			<h1 class="mui-title">登录</h1>
</header>
<div class="mui-content">
			<form id='login-form' class="mui-input-group" >
				<div class="mui-input-row">
					<label>账号</label>
					<input id='name' type="text" class="mui-input-clear mui-input" placeholder="请输入账号">
				</div>
				<div class="mui-input-row">
					<label>密码</label>
					<input id='password' type="password" class="mui-input-clear mui-input" placeholder="请输入密码">
				</div>
			</form>
		
			<div class="mui-content-padded">
				<button id='login' class="mui-btn mui-btn-block mui-btn-primary" @click="submit">登录</button>
			
			</div>
			<div class="mui-content-padded oauth-area">
			</div>
		</div></div>
`,
    methods:{
        back(){
            // router.go(-1);
            router.push('/');
        },
        submit(){
            var obj={"name":document.querySelector('#name').value};
            this.save("login",obj);
            router.push('/');
        }
    }
})