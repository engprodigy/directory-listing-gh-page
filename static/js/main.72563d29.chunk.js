(this.webpackJsonpaxual_subscription_page=this.webpackJsonpaxual_subscription_page||[]).push([[0],{282:function(e,a,t){e.exports=t(472)},287:function(e,a,t){},288:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},289:function(e,a,t){},472:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),i=t.n(l),c=(t(287),t(220)),o=t(17),m=(t(288),t(289),t(32)),s=t(29),u=t(18),p=t(553),g=t(530),d=t(524),f=t(554),E=t(521),b=t(525),h=t(551),v=t(207),y=t.n(v),x=t(58),w=t(522),O=t(523);function j(){return r.a.createElement(x.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(E.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}var C=Object(w.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function N(){var e=Object(n.useReducer)((function(e,a){return Object(s.a)(Object(s.a)({},e),a)}),{email:"",password:""}),a=Object(o.a)(e,2),t=a[0],l=a[1],i=C(),c=Object(u.g)(),v=Object(u.h)(),w=Ye(),N=(v.state||{from:{pathname:"/"}}).from,S=function(e){var a=e.target.name,t=e.target.value;l(Object(m.a)({},a,t))};return r.a.createElement(O.a,{component:"main",maxWidth:"xs"},r.a.createElement(d.a,null),r.a.createElement("div",{className:i.paper},r.a.createElement(p.a,{className:i.avatar},r.a.createElement(y.a,null)),r.a.createElement(x.a,{component:"h1",variant:"h5"},"Sign In"),r.a.createElement("form",{className:i.form,noValidate:!0},r.a.createElement(b.a,{container:!0,spacing:2},r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(f.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:S})),r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(f.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:S}))),r.a.createElement(g.a,{fullWidth:!0,variant:"contained",color:"primary",className:i.submit,onClick:function(){var e=t;"admin@email.com"===e.email&&"@Password123"===e.password&&w.signin((function(){c.replace(N)}))}},"Sign In"),r.a.createElement(b.a,{container:!0,justify:"flex-end"},r.a.createElement(b.a,{item:!0},r.a.createElement(E.a,{href:"/",variant:"body2"},"Not able to Sign in?  Go to home page"))))),r.a.createElement(h.a,{mt:5},r.a.createElement(j,null)))}var S=t(5),I=t(542),k=t(544),W=t(539),B=t(541),L=t(543),R=t(540),D=t(222),T=t(50),F=t(475),P=t(537),V=t(538),z=t(531),A=t(535),M=t(533),J=t(534),H=t(532),Y=t(529),U=t(536),_=t(114),G=t.n(_);function $(e,a){var t=r.a.useState((function(){var t=window.localStorage.getItem(a);return null!==t?JSON.parse(t):e})),n=Object(o.a)(t,2),l=n[0],i=n[1];return r.a.useEffect((function(){window.localStorage.setItem(a,JSON.stringify(l))}),[a,l]),[l,i]}var q=Object(w.a)((function(e){return{seeMore:{marginTop:e.spacing(3)},root:{"& > *":{margin:e.spacing(1)}},extendedIcon:{marginRight:e.spacing(1)}}}));function K(e){var a=Object(w.a)((function(e){return{button:{margin:e.spacing(1)},leftIcon:{marginRight:e.spacing(1)},rightIcon:{marginLeft:e.spacing(1)},iconSmall:{fontSize:20},root:{padding:e.spacing(3,2)},container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:400}}})),t=Object(n.useReducer)((function(e,a){return Object(s.a)(Object(s.a)({},e),a)}),{name:"",email:""}),l=Object(o.a)(t,2),i=l[0],c=l[1],u=$([],"category"),p=Object(o.a)(u,2),d=p[0],E=p[1],b=a();return console.log(e),r.a.createElement("div",null,r.a.createElement(D.a,{className:b.root},r.a.createElement(x.a,{variant:"h5",component:"h3"},e.formName),r.a.createElement(x.a,{component:"p"},e.formDescription),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a={formInput:i};E([].concat(Object(T.a)(d),[{name:a.formInput.name,email:a.formInput.email}])),e.target.reset()}},r.a.createElement(f.a,{label:"Name",id:"margin-normal",name:"name",defaultValue:i.name,className:b.textField,helperText:"Enter Category Name",onChange:function(e){var a=e.target.name,t=e.target.value;c(Object(m.a)({},a,t))}}),r.a.createElement(g.a,{type:"submit",variant:"contained",color:"primary",className:b.button},"Create")),r.a.createElement("p",null," ",r.a.createElement("b",null,"Categories")),r.a.createElement("ul",null,d.map((function(e){return r.a.createElement("li",{key:e.name},e.name)})))))}function X(e){var a=e.open,t=e.onClose;return r.a.createElement("div",null,r.a.createElement(z.a,{open:a,onClose:t,"aria-labelledby":"form-dialog-title"},r.a.createElement(H.a,{id:"form-dialog-title"}," Create New Category"),r.a.createElement(M.a,null,r.a.createElement(J.a,null),r.a.createElement(K,null)),r.a.createElement(A.a,null,r.a.createElement(g.a,{onClick:t,color:"primary"},"Cancel/Close Dialog"))))}function Q(){var e=$([],"category"),a=Object(o.a)(e,2),t=a[0],l=a[1],i=r.a.useState(!1),c=Object(o.a)(i,2),m=c[0],s=c[1],u=Object(n.useState)(t.length),p=Object(o.a)(u,2),g=p[0],d=p[1],f=function(){return s(!0)},E=q();return r.a.createElement("div",{className:"list-viewer"},r.a.createElement(Y.a,null,r.a.createElement(F.a,{button:!0,onClick:f},r.a.createElement("div",{className:E.root},r.a.createElement(U.a,{color:"primary","aria-label":"add",onClick:f},r.a.createElement(G.a,null))),r.a.createElement(P.a,{primary:"Add Category"})),r.a.createElement(V.a,{inset:!0},r.a.createElement("b",null,r.a.createElement("u",null,"Category List"))),t.map((function(e){return r.a.createElement(F.a,null,r.a.createElement(P.a,{primary:e.name}))}))),r.a.createElement(X,{open:m,onClose:function(){s(!1);var e=JSON.parse(window.localStorage.getItem("category")),a=e[e.length-1];g!=e.length&&(l([].concat(Object(T.a)(t),[{name:a.name,email:a.email}])),d((function(e){return++e})))}}))}var Z=t(555),ee=Object(S.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(W.a),ae=Object(S.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(R.a),te=Object(w.a)((function(e){return{table:{},roots:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}}}}));function ne(){var e=te(),a=$([],"businesslisting"),t=Object(o.a)(a,2),n=t[0];t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"\xa0"),r.a.createElement("p",null,"\xa0"),r.a.createElement(O.a,{maxWidth:"lg",component:"main",className:e.heroContent},r.a.createElement(x.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},"Business Directory Listing \xa0")),r.a.createElement("p",null,"\xa0"),r.a.createElement(O.a,{component:"main",maxWidth:"lg"},r.a.createElement(B.a,{component:D.a},r.a.createElement(I.a,{className:e.table,"aria-label":"customized table"},r.a.createElement(L.a,null,r.a.createElement(R.a,null,r.a.createElement(ee,{align:"left"},"Name"),r.a.createElement(ee,{align:"left"},"Description"),r.a.createElement(ee,{align:"left"},"Phone Number"),r.a.createElement(ee,{align:"left"},"Email"),r.a.createElement(ee,{align:"left"},"Website URL"),r.a.createElement(ee,{align:"left"},"Category"),r.a.createElement(ee,{align:"left"},"Image"))),r.a.createElement(k.a,null,n.map((function(a){return r.a.createElement(ae,null,r.a.createElement(ee,{component:"th",scope:"row",align:"left"},a.name),r.a.createElement(ee,{align:"left"},a.description),r.a.createElement(ee,{align:"left"},a.phonenumber),r.a.createElement(ee,{align:"left"},a.email),r.a.createElement(ee,{align:"left"},a.websiteurl),r.a.createElement(ee,{align:"left"},a.categories.map((function(a){return r.a.createElement("div",{className:e.roots,noValidate:!0,autoComplete:"off"},r.a.createElement(Z.a,{size:"small",label:a,color:"black"}))}))),r.a.createElement(ee,{align:"left"},a.images))}))))),r.a.createElement("p",null),r.a.createElement("p",null),r.a.createElement("p",null),r.a.createElement(b.a,{container:!0,justify:"flex-end"},r.a.createElement(b.a,{item:!0},r.a.createElement(E.a,{href:"/protected",variant:"body2"},"Admin Login Here")))))}var re=t(105),le=t(4),ie=t(556),ce=t(546),oe=t(547),me=t(550),se=t(548),ue=t(549),pe=t(217),ge=t.n(pe),de=t(219),fe=t.n(de),Ee=t(218),be=t.n(Ee),he=t(26),ve=t(57);function ye(e){return r.a.createElement(x.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},e.children)}function xe(e,a){return{time:e,amount:a}}var we=[xe("00:00",0),xe("03:00",300),xe("06:00",600),xe("09:00",800),xe("12:00",1500),xe("15:00",2e3),xe("18:00",2400),xe("21:00",2400),xe("24:00",void 0)];function Oe(){var e=Object(he.a)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(ye,null,"Today"),r.a.createElement(ve.d,null,r.a.createElement(ve.c,{data:we,margin:{top:16,right:16,bottom:0,left:24}},r.a.createElement(ve.e,{dataKey:"time",stroke:e.palette.text.secondary}),r.a.createElement(ve.f,{stroke:e.palette.text.secondary},r.a.createElement(ve.a,{angle:270,position:"left",style:{textAnchor:"middle",fill:e.palette.text.primary}},"Sales ($)")),r.a.createElement(ve.b,{type:"monotone",dataKey:"amount",stroke:e.palette.primary.main,dot:!1}))))}function je(e){e.preventDefault()}var Ce=Object(w.a)({depositContext:{flex:1}});function Ne(){var e=Ce();return r.a.createElement(r.a.Fragment,null,r.a.createElement(ye,null,"Recent Deposits"),r.a.createElement(x.a,{component:"p",variant:"h4"},"$3,024.00"),r.a.createElement(x.a,{color:"textSecondary",className:e.depositContext},"on 15 March, 2019"),r.a.createElement("div",null,r.a.createElement(E.a,{color:"primary",href:"#",onClick:je},"View balance")))}var Se=t(104),Ie=t.n(Se),ke=t(526),We=t(557),Be=t(545),Le=t(528),Re=t(552);function De(e){var a=Object(w.a)((function(e){return{button:{margin:e.spacing(1)},leftIcon:{marginRight:e.spacing(1)},rightIcon:{marginLeft:e.spacing(1)},iconSmall:{fontSize:20},root:{padding:e.spacing(3,2)},container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:400},chips:{display:"flex",flexWrap:"wrap"},chip:{margin:1},noLabel:{marginTop:e.spacing(3)},formControl:{margin:e.spacing(1),minWidth:120,maxWidth:300}}})),t=r.a.useState([]),l=Object(o.a)(t,2),i=l[0],c=l[1],u=Object(n.useReducer)((function(e,a){return Object(s.a)(Object(s.a)({},e),a)}),{name:"",description:"",phonenumber:"",email:"",websiteurl:"",categories:[],images:""}),p=Object(o.a)(u,2),d=p[0],E=p[1],b=$([],"businesslisting"),h=Object(o.a)(b,2),v=h[0],y=h[1],O=$([],"category"),j=Object(o.a)(O,2),C=j[0],N=(j[1],function(e){var a=e.target.name,t=e.target.value;E(Object(m.a)({},a,t))}),S=a(),I=Object(he.a)(),k={PaperProps:{style:{maxHeight:224,width:250}}};function W(e,a,t){return{fontWeight:-1===a.indexOf(e)?t.typography.fontWeightRegular:t.typography.fontWeightMedium}}return r.a.createElement("div",null,r.a.createElement(D.a,{className:S.root},r.a.createElement(x.a,{variant:"h5",component:"h3"},e.formName),r.a.createElement(x.a,{component:"p"},e.formDescription),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a={formInput:d};""!=a.formInput.name&&y([].concat(Object(T.a)(v),[{name:a.formInput.name,description:a.formInput.description,phonenumber:a.formInput.phonenumber,email:a.formInput.email,websiteurl:a.formInput.websiteurl,categories:Object(T.a)(i),images:a.formInput.images}])),e.target.reset(),alert("Business Listing Created Succesfully")}},r.a.createElement(g.a,{type:"submit",variant:"contained",color:"primary",className:S.button},"Create"),r.a.createElement(f.a,{label:"Name",id:"margin-normal",name:"name",defaultValue:d.email,className:S.textField,helperText:"Enter Business Name",onChange:N}),r.a.createElement(f.a,{label:"Description",id:"margin-normal",name:"description",defaultValue:d.description,className:S.textField,helperText:"Enter Business Description",onChange:N}),r.a.createElement(f.a,{label:"PhoneNumber",id:"margin-normal",name:"phonenumber",defaultValue:d.phonenumber,className:S.textField,helperText:"Enter Phone Number e.g +2348034105274",onChange:N}),r.a.createElement(f.a,{label:"Email",id:"margin-normal",name:"email",defaultValue:d.name,className:S.textField,helperText:"e.g. name@gmail.com",onChange:N}),r.a.createElement(f.a,{label:"Website URL",id:"margin-normal",name:"websiteurl",defaultValue:d.websiteurl,className:S.textField,helperText:"Enter Website URL e.g https//:xyz.com ",onChange:N}),r.a.createElement(Le.a,{className:S.formControl},r.a.createElement(We.a,{id:"demo-mutiple-chip-label"},"Category"),r.a.createElement(Re.a,{labelId:"demo-mutiple-chip-label",id:"demo-mutiple-chip",name:"categories",multiple:!0,value:i,onChange:function(e){c(e.target.value)},input:r.a.createElement(ke.a,{id:"select-multiple-chip"}),renderValue:function(e){return r.a.createElement("div",{className:S.chips},e.map((function(e){return r.a.createElement(Z.a,{key:e,label:e,className:S.chip})})))},MenuProps:k},C.map((function(e){return r.a.createElement(Be.a,{key:e.name,value:e.name,style:W(e.name,i,I)},e.name)})))),r.a.createElement(f.a,{label:"Images",id:"margin-normal",name:"images",defaultValue:d.Images,className:S.textField,helperText:"Select One or More Images ",onChange:N}),r.a.createElement(g.a,{type:"submit",variant:"contained",color:"primary",className:S.button},"Create"))))}function Te(e){var a=e.open,t=e.onClose;return r.a.createElement("div",null,r.a.createElement(z.a,{open:a,onClose:t,"aria-labelledby":"form-dialog-title"},r.a.createElement(H.a,{id:"form-dialog-title"}," Create New Business Listing"),r.a.createElement(M.a,null,r.a.createElement(J.a,null),r.a.createElement(De,null)),r.a.createElement(A.a,null,r.a.createElement(g.a,{onClick:t,color:"primary"},"Cancel/Close Modal"))))}var Fe=Object(w.a)((function(e){return{seeMore:{marginTop:e.spacing(3)},root:{"& > *":{margin:e.spacing(1)}},roots:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}},extendedIcon:{marginRight:e.spacing(1)}}}));function Pe(){var e=r.a.useState(!1),a=Object(o.a)(e,2),t=a[0],l=a[1],i=$([],"businesslisting"),c=Object(o.a)(i,2),m=c[0],s=c[1],u=Object(n.useState)(m.length),p=Object(o.a)(u,2),d=p[0],f=p[1],E=Fe();return r.a.createElement(r.a.Fragment,null,r.a.createElement(ye,null,"Recent Business Listing"),r.a.createElement(I.a,{size:"small"},r.a.createElement(L.a,null,r.a.createElement(R.a,null,r.a.createElement(W.a,{align:"left"},"Name"),r.a.createElement(W.a,{align:"left"},"Email"),r.a.createElement(W.a,{align:"left"},"Website URL"),r.a.createElement(W.a,{align:"left"},"Categories"),r.a.createElement(W.a,{align:"left"},"Images"),r.a.createElement(W.a,{align:"left"},"\xa0"))),r.a.createElement(k.a,null,m.map((function(e){return r.a.createElement(R.a,null,r.a.createElement(W.a,{align:"left"},e.name),r.a.createElement(W.a,{align:"left"},e.email),r.a.createElement(W.a,{align:"left"},e.websiteurl),r.a.createElement(W.a,{align:"left"},e.categories.map((function(e){return r.a.createElement("div",{className:E.roots,noValidate:!0,autoComplete:"off"},r.a.createElement(Z.a,{size:"small",label:e,color:"primary"}))}))),r.a.createElement(W.a,{align:"left"},e.images),r.a.createElement(W.a,{align:"left"},r.a.createElement(g.a,{variant:"contained",color:"secondary",className:E.button,startIcon:r.a.createElement(Ie.a,null),onClick:function(){return function(e){var a=JSON.parse(window.localStorage.getItem("businesslisting")).filter((function(a){return a.name!==e}));s(a),f((function(e){return a.length})),alert("Business Listing Deleted Succesfully")}(e.name)}})))})))),r.a.createElement(Te,{open:t,onClose:function(){l(!1);for(var e=JSON.parse(window.localStorage.getItem("businesslisting")),a=e.length-d,t=0;t<a;t++);if(d!=e.length){var n=[];for(t=a;t>0;t--){var r=e[e.length-1-(t-1)];n.push({name:r.name,description:r.description,phonenumber:r.phonenumber,email:r.email,websiteurl:r.websiteurl,categories:Object(T.a)(r.categories),images:r.images}),f((function(e){return++e}))}s([].concat(Object(T.a)(m),n))}}}),r.a.createElement("div",{className:E.root},r.a.createElement(U.a,{color:"primary","aria-label":"add",onClick:function(){return l(!0)}},r.a.createElement(G.a,null)),r.a.createElement("span",null,d)))}function Ve(){return r.a.createElement(x.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(E.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}var ze=Object(w.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(s.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(m.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}));function Ae(){var e=ze(),a=r.a.useState(!0),t=Object(o.a)(a,2),n=t[0],l=t[1],i=Object(le.a)(e.paper,e.fixedHeight),c=Object(u.g)(),m=Ye();return m.user?r.a.createElement("div",{className:e.root},r.a.createElement(d.a,null),r.a.createElement(ce.a,{position:"absolute",className:Object(le.a)(e.appBar,n&&e.appBarShift)},r.a.createElement(oe.a,{className:e.toolbar},r.a.createElement(se.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){l(!0)},className:Object(le.a)(e.menuButton,n&&e.menuButtonHidden)},r.a.createElement(ge.a,null)),r.a.createElement(x.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title},"Admin Dashboard"),r.a.createElement(g.a,{variant:"contained",color:"secondary",className:e.button,onClick:function(){m.signout((function(){return c.push("/")}))}},"Logout"),r.a.createElement(se.a,{color:"inherit"},r.a.createElement(ue.a,{badgeContent:4,color:"secondary"},r.a.createElement(be.a,null))))),r.a.createElement(ie.a,{variant:"permanent",classes:{paper:Object(le.a)(e.drawerPaper,!n&&e.drawerPaperClose)},open:n},r.a.createElement("div",{className:e.toolbarIcon},r.a.createElement(se.a,{onClick:function(){l(!1)}},r.a.createElement(fe.a,null))),r.a.createElement(me.a,null),r.a.createElement(Q,null," "),r.a.createElement(me.a,null)),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.appBarSpacer}),r.a.createElement(O.a,{maxWidth:"lg",className:e.container},r.a.createElement(b.a,{container:!0,spacing:3},r.a.createElement(b.a,{item:!0,xs:12,md:8,lg:9},r.a.createElement(D.a,{className:i},r.a.createElement(Oe,null))),r.a.createElement(b.a,{item:!0,xs:12,md:4,lg:3},r.a.createElement(D.a,{className:i},r.a.createElement(Ne,null))),r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(D.a,{className:e.paper},r.a.createElement(Pe,null)))),r.a.createElement(h.a,{pt:4},r.a.createElement(Ve,null))))):r.a.createElement("p",null,"You are not logged in.")}var Me=Object(n.createContext)();function Je(e){var a=e.children,t=function(){var e=Object(n.useState)(null),a=Object(o.a)(e,2),t=a[0],r=a[1];return{user:t,signin:function(e){return He.signin((function(){r("user"),e()}))},signout:function(e){return He.signout((function(){r(null),e()}))}}}();return r.a.createElement(Me.Provider,{value:t},a)}var He={isAuthenticated:!1,signin:function(e){He.isAuthenticated=!0,setTimeout(e,100)},signout:function(e){He.isAuthenticated=!1,setTimeout(e,100)}};function Ye(){return Object(n.useContext)(Me)}function Ue(e){var a=e.children,t=Object(c.a)(e,["children"]),n=Ye();return r.a.createElement(u.b,Object.assign({},t,{render:function(e){var t=e.location;return n.user?a:r.a.createElement(u.a,{to:{pathname:"/signup",state:{from:t}}})}}))}var _e=function(){return r.a.createElement(Je,null,r.a.createElement(re.a,null,r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/"},r.a.createElement(ne,null)),r.a.createElement(u.b,{path:"/signup"},r.a.createElement(N,null)),r.a.createElement(Ue,{path:"/protected"},r.a.createElement(Ae,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_e,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[282,1,2]]]);
//# sourceMappingURL=main.72563d29.chunk.js.map