import{d as b,c as o,r as U,a as B,b as v,e as E,f as C,D as G,M as z,w as x,n as M,g as T,o as I,h as V,i as q}from"./vendor.3cd730f9.js";const K=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const u of s)if(u.type==="childList")for(const a of u.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(s){const u={};return s.integrity&&(u.integrity=s.integrity),s.referrerpolicy&&(u.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?u.credentials="include":s.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(s){if(s.ep)return;s.ep=!0;const u=i(s);fetch(s.href,u)}};K();const H="_white_r8dfj_1",J="_black_r8dfj_2",Q="_transparent_r8dfj_3",W="_small_r8dfj_17",X="_medium_r8dfj_21";var P={white:H,black:J,transparent:Q,small:W,medium:X},A=b({name:"Piece",props:{theme:{type:String,default:"white"},size:{type:String,default:"medium"},style:[String,Object],onClick:Function},render(){return o("div",{class:[P[this.theme],P[this.size]],style:this.style,onClick:this.onClick},null)}});const Y="_checkerboard_60x6v_1";var Z={checkerboard:Y},ee=b({name:"Checkerboard",render(){return o("div",{class:Z.checkerboard},[U(this.$slots,"default")])}}),h;(function(e){e[e.transparent=0]="transparent",e[e.black=1]="black",e[e.white=2]="white"})(h||(h={}));const te="_checkerboardBox_1sg7d_1",ne="_disabled_1sg7d_7";var S={checkerboardBox:te,disabled:ne},ue=b({name:"Gobang",props:{board:Array,onPieceClick:Function,disabled:Boolean},render(){return o("div",{class:S.checkerboardBox},[o(ee,null,{default:()=>{var e;return[(e=this.board)==null?void 0:e.map((t,i)=>t.map((r,s)=>o(A,{key:`${i}-${s}`,theme:h[r],onClick:()=>{var u;return(u=this.onPieceClick)==null?void 0:u.call(this,i,s)},style:{marginTop:`${i*50}px`,marginLeft:`${s*47}px`}},null)))]}}),o("div",{class:this.disabled?S.disabled:null},null)])}});const se="_card_1cdnv_1",ae="_shows_1cdnv_10",le="_operation_1cdnv_11",oe="_nowTheme_1cdnv_23";var _={card:se,shows:ae,operation:le,nowTheme:oe},re=b({name:"Panel",props:{stepsNum:Number,isEnd:Boolean,startDisabled:Boolean,endDisabled:Boolean,goBackDisabled:Boolean,reGoBackDisabled:Boolean,nowTheme:{type:Number,default:1},onGoBack:Function,onReGoBack:Function,onAdmitDefeat:Function,onClear:Function,onConfig:Function},render(){return o("div",{class:_.card},[o("div",{class:_.shows},[o("div",{class:_.nowTheme},[B("\u6267\u68CB\u65B9\uFF1A"),o(A,{theme:h[this.nowTheme],size:"small",style:{left:"64px",top:"-7px"}},null)]),o("div",null,[B("\u603B\u6B65\u6570\uFF1A"),this.stepsNum])]),o("div",{class:_.operation},[o(v("t-button"),{theme:"default",variant:"base",disabled:this.startDisabled,onClick:()=>{var e;return(e=this.onConfig)==null?void 0:e.call(this)}},{default:()=>[B("\u8BBE\u7F6E")]}),this.isEnd?o(v("t-button"),{theme:"danger",variant:"base",disabled:this.endDisabled,onClick:()=>{var e;return(e=this.onClear)==null?void 0:e.call(this)}},{default:()=>[B("\u6E05\u76D8")]}):o(v("t-button"),{theme:"danger",variant:"base",disabled:this.endDisabled,onClick:()=>{var e;return(e=this.onAdmitDefeat)==null?void 0:e.call(this)}},{default:()=>[B("\u8BA4\u8F93")]}),o(v("t-button"),{theme:"default",variant:"dashed",disabled:this.goBackDisabled,onClick:()=>{var e;return(e=this.onGoBack)==null?void 0:e.call(this)}},{default:()=>[B("\u4E0A\u4E00\u6B65")]}),o(v("t-button"),{theme:"default",variant:"dashed",disabled:this.reGoBackDisabled,onClick:()=>{var e;return(e=this.onReGoBack)==null?void 0:e.call(this)}},{default:()=>[B("\u4E0B\u4E00\u6B65")]})])])}});function w(){return[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}function $(e){return e===h.black?h.white:h.black}function y(e,t,i,r){let s=0,u=0,a=0,f=0;const[d,p]=e;for(let n=p;n>=0&&r[d][n]===t;n--)u++;for(let n=p+1;n<15&&r[d][n]==t;n++)u++;for(let n=d;n>=0&&r[n][p]==t;n--)s++;for(let n=d+1;n<15&&r[n][p]==t;n++)s++;for(let n=0;n<15&&!(d-n<0||p-n<0||r[d-n][p-n]!=t);n++)f++;for(let n=1;n<15&&!(d+n>15||p+n>15||r[d+n][p+n]!=t);n++)f++;for(let n=0;n<15&&!(d-n<0||p+n>15||r[d-n][p+n]!=t);n++)a++;for(let n=1;n<15&&!(d+n>15||p-n<0||r[d+n][p-n]!=t);n++)a++;return s>=i?{result:!0,direction:"upAndDown"}:u>=i?{result:!0,direction:"leftAndRight"}:a>=i?{result:!0,direction:"leftAndUp"}:f>=i?{result:!0,direction:"rightAndUp"}:{result:!1,direction:""}}function N(e,t,i,r){if(i==="upAndDown"){if(r[e+1][t]===h.transparent)return[e+1,t];if(r[e-1][t]===h.transparent)return[e-1,t]}else if(i==="leftAndRight"){if(r[e][t+1]===h.transparent)return[e,t+1];if(r[e][t-1]===h.transparent)return[e,t-1]}else if(i==="leftAndUp"){if(r[e-1][t+1]===h.transparent)return[e-1,t+1];if(r[e+1][t-1]===h.transparent)return[e+1,t-1]}else if(i==="rightAndUp"){if(r[e+1][t+1]===h.transparent)return[e+1,t+1];if(r[e-1][t-1]===h.transparent)return[e-1,t-1]}}function ie(e,t){const i=[...e],r=i.pop(),s=i.pop();let u=[0,0];if(r){const{position:a,theme:f}=r,{result:d,direction:p}=y(a,f,3,t);if(d){const[n,F]=a,m=N(n,F,p,t);m&&(u=m)}}if(s){const{position:a,theme:f}=s,{result:d,direction:p}=y(a,f,3,t);if(d){const[n,F]=a,m=N(n,F,p,t);m&&(u=m)}}if(u[0]===0&&u[1]===0){const a=t.findIndex(d=>d.some(p=>p===0)),f=t[a].findIndex(d=>d===0);u=[a,f]}return u}function ce({handleVictoryMsg:e}){const t=E(!1),i=E(!1),r=C(()=>i.value?h.black:h.white),s=E(!1),u=E(w()),a=E([]),f=E([]),d=C(()=>{const{value:l}=a,c=l.length;return c?$(l[c-1].theme):h.black}),p=C(()=>$(d.value));function n(l,c){u.value[l][c]===h.transparent&&(u.value[l][c]=d.value,a.value.push({position:[l,c],theme:d.value}),f.value.length&&(f.value=[]))}function F(){u.value=w(),a.value=[],f.value=[],s.value=!1,t.value=!1,i.value=!1}function m(){F();const l=G.confirm({header:"\u6E38\u620F\u8BBE\u7F6E",body:"\u662F\u5426\u4EBA\u673A\u5BF9\u6218",confirmBtn:"\u786E\u5B9A",cancelBtn:"\u53D6\u6D88",onConfirm:()=>{var R;(R=l.hide)==null||R.call(l);const c=G.confirm({header:"\u6E38\u620F\u8BBE\u7F6E",body:"\u662F\u5426\u7535\u8111\u5148\u624B",confirmBtn:"\u786E\u5B9A",cancelBtn:"\u53D6\u6D88",onConfirm:()=>{var g;t.value=!0,i.value=!0,n(7,7),(g=c.hide)==null||g.call(c)},onClose:()=>{var g;t.value=!0,i.value=!1,(g=c.hide)==null||g.call(c)}})},onClose:()=>{var c;(c=l.hide)==null||c.call(l)}})}function k(){s.value=!0,z.success({content:()=>e(p.value),duration:1e3})}function j(){if(a.value.length)if(t.value){const l=a.value.pop(),c=a.value.pop();u.value[l.position[0]][l.position[1]]=h.transparent,u.value[c.position[0]][c.position[1]]=h.transparent,f.value.push(l),f.value.push(c)}else{const l=a.value.pop();u.value[l.position[0]][l.position[1]]=h.transparent,f.value.push(l)}}function O(){if(f.value.length)if(t.value){const l=f.value.pop(),c=f.value.pop();u.value[l.position[0]][l.position[1]]=l.theme,u.value[c.position[0]][c.position[1]]=c.theme,a.value.push(l),a.value.push(c)}else{const l=f.value.pop();u.value[l.position[0]][l.position[1]]=l.theme,a.value.push(l)}}return x(()=>{if(s.value||a.value.length<9)return!1;const l=a.value[a.value.length-1],{result:c}=y(l.position,l.theme,5,u.value);c&&k()}),x(()=>{s.value||!a.value.length&&!i.value||t.value&&r.value===d.value&&M(()=>{const[l,c]=ie(a.value,u.value);n(l,c)})}),{isEndRef:s,boardRef:u,stepsRef:a,regretsRef:f,nowThemeRef:d,winnerRef:p,handleClickPiece:n,handleConfig:m,handleAdmitDefeat:k,handleClear:F,handleGoBack:j,handleReGoBack:O}}const de="_header_1son2_1",fe="_content_1son2_12",pe="_footer_1son2_16";var D={header:de,content:fe,footer:pe},he=b({name:"GameInterface",setup(){function e(k){return o("div",{style:{display:"flex",alignItems:"center"}},[o(A,{theme:h[k],size:"small",style:{position:"unset"}},null),o("div",{style:{marginLeft:"10px"}},[B("\u80DC\u5229\uFF01\u70B9\u51FB [\u4E0A\u4E00\u6B65]\u3001[\u4E0B\u4E00\u6B65] \u6309\u94AE\u590D\u76D8\u5F53\u524D\u5C40\u3002\u70B9\u51FB [\u6E05\u76D8] \u91CD\u7F6E\u6E38\u620F\u3002")])])}const{isEndRef:t,boardRef:i,stepsRef:r,regretsRef:s,nowThemeRef:u,winnerRef:a,handleClickPiece:f,handleConfig:d,handleAdmitDefeat:p,handleClear:n,handleGoBack:F,handleReGoBack:m}=ce({handleVictoryMsg:e});return{isEnd:t,board:i,steps:r,regrets:s,nowTheme:u,winner:a,handleClickPiece:f,handleConfig:d,handleAdmitDefeat:p,handleClear:n,handleGoBack:F,handleReGoBack:m}},render(){const{steps:e,isEnd:t}=this;return o(v("t-layout"),null,{default:()=>[o(v("t-header"),{class:D.header},{default:()=>[o("div",null,[B("\u4E94\u5B50\u68CB\u6E38\u620F")]),o(v("t-tooltip"),{placement:"bottom","show-arrow":!1},{default:()=>o(v("t-icon"),{name:"help-circle",size:"18px"},null),content:()=>o(v("per"),null,{default:()=>[B("1. \u70B9\u51FB\u68CB\u76D8\u76F4\u63A5\u5F00\u59CB\u4EBA-\u4EBA\u5BF9\u6218"),o("br",null,null),B(" 2. \u70B9\u51FB\u8BBE\u7F6E\u53EF\u4EE5\u8FDB\u884C\u4EBA-\u673A\u5BF9\u6218"),o("br",null,null),B(" 3. \u5BF9\u6218\u65F6\uFF0C[\u8BA4\u8F93] \u53EF\u76F4\u63A5\u8FDB\u5165\u5BF9\u6218\u7ED3\u675F\u72B6\u6001"),o("br",null,null),B(" 4. \u5BF9\u6218\u65F6\uFF0C[\u4E0A\u4E00\u6B65] \u4E3A\u6094\u68CB"),o("br",null,null),B(" 5. \u5BF9\u6218\u65F6\uFF0C[\u4E0B\u4E00\u6B65] \u4E3A\u64A4\u9500\u6094\u68CB\uFF0C\u5F53\u5728\u6094\u68CB\u540E\u53C8\u8D70\u4E00\u6B65\uFF0C\u5219\u64A4\u9500\u6094\u68CB\u5931\u6548"),o("br",null,null),B(" 6. \u5BF9\u6218\u7ED3\u675F\u540E\uFF0C[\u4E0A\u4E00\u6B65]\u3001[\u4E0B\u4E00\u6B65] \u53EF\u4EE5\u56DE\u770B\u672C\u5C40\u5BF9\u6218\u60C5\u51B5"),o("br",null,null),B(" 7. \u5BF9\u6218\u7ED3\u675F\u540E\uFF0C\u70B9\u51FB [\u6E05\u76D8] \u53EF\u6E05\u9664\u5BF9\u5C40")]})})]}),o(v("t-content"),{class:D.content},{default:()=>[o(ue,{board:this.board,onPieceClick:this.handleClickPiece,disabled:t},null)]}),o(v("t-footer"),{class:D.footer},{default:()=>[o(re,{stepsNum:e.length,isEnd:t,startDisabled:t||!!e.length,endDisabled:!e.length,goBackDisabled:!e.length,reGoBackDisabled:!this.regrets.length,nowTheme:this.nowTheme,onGoBack:this.handleGoBack,onReGoBack:this.handleReGoBack,onAdmitDefeat:this.handleAdmitDefeat,onClear:this.handleClear,onConfig:this.handleConfig},null)]})]})}});var Be=(e,t)=>{const i=e.__vccOpts||e;for(const[r,s]of t)i[r]=s;return i};const ve=b({name:"App",components:{GameProgram:he}});function me(e,t,i,r,s,u){const a=v("GameProgram");return I(),T(a)}var Fe=Be(ve,[["render",me]]);const L=V(Fe);L.use(q);L.mount("#app");
