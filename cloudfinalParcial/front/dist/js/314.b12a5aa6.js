"use strict";(self["webpackChunkinsider_blog_frontend"]=self["webpackChunkinsider_blog_frontend"]||[]).push([[314],{4314:function(s,e,t){t.r(e),t.d(e,{default:function(){return Z}});var i=t(3396),a=t(7139),r=t(2918);const l=s=>((0,i.dD)("data-v-99a6719a"),s=s(),(0,i.Cn)(),s),n={style:{display:"flex","flex-direction":"column","align-items":"center"}},u={class:"container"},d={class:"account-info"},c=l((()=>(0,i._)("img",{class:"account-img",src:r},null,-1))),o={class:"media-body"},_={class:"account-heading mt-lg-4"},m={class:"text-secondary"},p={key:0},g={key:0,class:"form-group"},f=l((()=>(0,i._)("button",{class:"btn btn-primary btn-block"},"Edit",-1))),w={class:"posts"},v={key:0},b={class:"post-info"},h=l((()=>(0,i._)("img",{class:"rounded-circle article-img",src:r,style:{height:"65px","border-radius":"65px"}},null,-1))),k={class:"media-body"},y={class:"article-metadata"},D=l((()=>(0,i._)("small",{class:"text-muted"}," 2022-06-28 ",-1))),x={class:"article-content"};function z(s,e,t,r,l,z){const S=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",n,[(0,i._)("div",u,[(0,i._)("div",d,[c,(0,i._)("div",o,[(0,i._)("h2",_,(0,a.zw)(z.user_f.username),1),(0,i._)("p",m,(0,a.zw)(z.user_f.email),1),(0,i._)("p",null,(0,a.zw)(z.user_f.description),1)])]),s.user?((0,i.wg)(),(0,i.iD)("div",p,[(0,i._)("form",{onSubmit:e[0]||(e[0]=(...e)=>s.handleSubmit&&s.handleSubmit(...e))},[this.user.id==this.slug?((0,i.wg)(),(0,i.iD)("div",g,[(0,i.Wm)(S,{to:{name:"edit",params:{slug:this.user.id}}},{default:(0,i.w5)((()=>[f])),_:1},8,["to"])])):(0,i.kq)("",!0)],32)])):(0,i.kq)("",!0)]),(0,i._)("div",w,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.posts,(s=>((0,i.wg)(),(0,i.iD)("div",{key:s.user_id},[s.user_id==z.user_f.id?((0,i.wg)(),(0,i.iD)("div",v,[(0,i._)("article",b,[(0,i.Wm)(S,{to:{name:"Users",params:{slug:s.user_id}}},{default:(0,i.w5)((()=>[h])),_:2},1032,["to"]),(0,i._)("div",k,[(0,i._)("div",y,[(0,i.Wm)(S,{to:{name:"Users",params:{slug:s.user_id}}},{default:(0,i.w5)((()=>[(0,i.Uk)((0,a.zw)(s.author_name),1)])),_:2},1032,["to"]),D]),(0,i._)("h2",null,[(0,i.Wm)(S,{to:{name:"Posts",params:{slug:s.id}},class:"article-title"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,a.zw)(s.title)+"; ",1)])),_:2},1032,["to"])]),(0,i._)("p",x,(0,a.zw)(s.content),1)])])])):(0,i.kq)("",!0)])))),128))])])}var S=t(6922),U=t(65),q={name:"UserAccount",props:{slug:{type:String,required:!0}},computed:{...(0,U.Se)(["user","posts"]),user_f(){return S.Z.state.users.find((s=>s.id==this.slug))}}},W=t(89);const C=(0,W.Z)(q,[["render",z],["__scopeId","data-v-99a6719a"]]);var Z=C}}]);
//# sourceMappingURL=314.b12a5aa6.js.map