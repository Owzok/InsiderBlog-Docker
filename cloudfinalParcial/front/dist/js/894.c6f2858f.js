"use strict";(self["webpackChunkinsider_blog_frontend"]=self["webpackChunkinsider_blog_frontend"]||[]).push([[894],{8894:function(r,e,t){t.r(e),t.d(e,{default:function(){return w}});var o=t(3396),a=t(9242),n=t(7139);const s={class:"site-header"},l=(0,o._)("h3",null,"Crear Grupo",-1),u={class:"content-section"},i={class:"form-group"},c=(0,o._)("label",null,"Name",-1),m=(0,o._)("div",{class:"form-group"},[(0,o._)("button",{class:"btn btn-primary btn-block"},"Create")],-1),d={key:0,class:"alert alert-danger",role:"alert"};function h(r,e,t,h,p,g){return(0,o.wg)(),(0,o.iD)("header",s,[(0,o._)("form",{onSubmit:e[1]||(e[1]=(0,a.iM)(((...r)=>g.handleSubmit&&g.handleSubmit(...r)),["prevent"]))},[l,(0,o._)("div",u,[(0,o._)("div",i,[c,(0,o.wy)((0,o._)("input",{class:"form-control form-control-lg","onUpdate:modelValue":e[0]||(e[0]=r=>p.groupname=r)},null,512),[[a.nr,p.groupname]])]),m])],32),p.error?((0,o.wg)(),(0,o.iD)("div",d,(0,n.zw)(p.error_msg),1)):(0,o.kq)("",!0)])}var p=t(6265),g=t.n(p),b=t(65),_={name:"NewGroup",data(){return{groupname:"",error:!1,error_msg:""}},computed:{...(0,b.Se)({user:"user"})},methods:{async handleSubmit(){this.error=!1,await g().post("http://parcial-lb-1342996555.us-east-1.elb.amazonaws.com:8001/groups",{headers:{Authorization:"Bearer "+localStorage.getItem("token")},groupname:this.groupname,user_id:this.user.id}).catch((r=>{console.log(r),this.error=!0,this.error_msg="Please enter a valid name."})),0==this.error&&this.$router.push("/")}}},f=t(89);const v=(0,f.Z)(_,[["render",h]]);var w=v}}]);
//# sourceMappingURL=894.c6f2858f.js.map