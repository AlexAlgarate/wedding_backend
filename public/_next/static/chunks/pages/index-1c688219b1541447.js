(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5582)}])},5582:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Component}});var i=n(6811),o=n(7294),r=n(8595),l=n(3100),a=n(4641),s=n(5284),c=n(6275),d=n(3),x=n(3838),m=n(9564),h=n(7226),g=n(5034),p=n(4416),f=n(1669),u=n(204),Z=n(4418),b=n(9222),y={exit:{scale:.85,opacity:0,transition:{opacity:{duration:.15,easings:"easeInOut"},scale:{duration:.2,easings:"easeInOut"}}},enter:{scale:1,opacity:1,transition:{opacity:{easings:"easeOut",duration:.2},scale:{duration:.2,ease:[.175,.885,.4,1.1]}}}},F=n(7134),w=n(5075),S=n(1054),v=n(8795),E=n(1103),W=n(5432),getDoc=e=>{var t;return(null==(t=e.current)?void 0:t.ownerDocument)||document},getWin=e=>{var t,n;return(null==(n=null==(t=e.current)?void 0:t.ownerDocument)?void 0:n.defaultView)||window};function useTooltip(e={}){let{openDelay:t=0,closeDelay:n=0,closeOnClick:i=!0,closeOnMouseDown:r,closeOnScroll:l,closeOnPointerDown:a=r,closeOnEsc:s=!0,onOpen:c,onClose:d,placement:x,id:m,isOpen:h,defaultIsOpen:g,arrowSize:p=10,arrowShadowColor:f,arrowPadding:u,modifiers:Z,isDisabled:b,gutter:y,offset:k,direction:C,..._}=e,{isOpen:z,onOpen:A,onClose:X}=(0,w.q)({isOpen:h,defaultIsOpen:g,onOpen:c,onClose:d}),{referenceRef:B,getPopperProps:R,getArrowInnerProps:H,getArrowProps:D}=(0,S.D)({enabled:z,placement:x,arrowPadding:u,modifiers:Z,gutter:y,offset:k,direction:C}),j=(0,o.useId)(),T=`tooltip-${null!=m?m:j}`,L=(0,o.useRef)(null),I=(0,o.useRef)(),O=(0,o.useCallback)(()=>{I.current&&(clearTimeout(I.current),I.current=void 0)},[]),P=(0,o.useRef)(),N=(0,o.useCallback)(()=>{P.current&&(clearTimeout(P.current),P.current=void 0)},[]),V=(0,o.useCallback)(()=>{N(),X()},[X,N]),q=useCloseEvent(L,V),M=(0,o.useCallback)(()=>{if(!b&&!I.current){q();let e=getWin(L);I.current=e.setTimeout(A,t)}},[q,b,A,t]),U=(0,o.useCallback)(()=>{O();let e=getWin(L);P.current=e.setTimeout(V,n)},[n,V,O]),G=(0,o.useCallback)(()=>{z&&i&&U()},[i,U,z]),Q=(0,o.useCallback)(()=>{z&&a&&U()},[a,U,z]),J=(0,o.useCallback)(e=>{z&&"Escape"===e.key&&U()},[z,U]);(0,F.O)(()=>getDoc(L),"keydown",s?J:void 0),(0,F.O)(()=>getDoc(L),"scroll",()=>{z&&l&&V()}),(0,o.useEffect)(()=>{b&&(O(),z&&X())},[b,z,X,O]),(0,o.useEffect)(()=>()=>{O(),N()},[O,N]),(0,F.O)(()=>L.current,"pointerleave",U);let $=(0,o.useCallback)((e={},t=null)=>{let n={...e,ref:(0,E.lq)(L,t,B),onPointerEnter:(0,W.v0)(e.onPointerEnter,e=>{"touch"!==e.pointerType&&M()}),onClick:(0,W.v0)(e.onClick,G),onPointerDown:(0,W.v0)(e.onPointerDown,Q),onFocus:(0,W.v0)(e.onFocus,M),onBlur:(0,W.v0)(e.onBlur,U),"aria-describedby":z?T:void 0};return n},[M,U,Q,z,T,G,B]),K=(0,o.useCallback)((e={},t=null)=>R({...e,style:{...e.style,[v.Dq.arrowSize.var]:p?`${p}px`:void 0,[v.Dq.arrowShadowColor.var]:f}},t),[R,p,f]),Y=(0,o.useCallback)((e={},t=null)=>{let n={...e.style,position:"relative",transformOrigin:v.Dq.transformOrigin.varRef};return{ref:t,..._,...e,id:T,role:"tooltip",style:n}},[_,T]);return{isOpen:z,show:M,hide:U,getTriggerProps:$,getTooltipProps:Y,getTooltipPositionerProps:K,getArrowProps:D,getArrowInnerProps:H}}var k="chakra-ui:close-tooltip";function useCloseEvent(e,t){return(0,o.useEffect)(()=>{let n=getDoc(e);return n.addEventListener(k,t),()=>n.removeEventListener(k,t)},[t,e]),()=>{let t=getDoc(e),n=getWin(e);t.dispatchEvent(new n.CustomEvent(k))}}var C=n(9598),_=n(2504),z=n(5059),A=n(4662),X=n(3179),B=n(7323),R=n(7745),H=n(1526),D=n(5893);function omit(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}function pick(e,t){let n={};for(let i of t)i in e&&(n[i]=e[i]);return n}var j=(0,_.m)(R.E.div),T=(0,z.G)((e,t)=>{var n,i;let r;let l=(0,A.mq)("Tooltip",e),a=(0,X.Lr)(e),s=(0,B.F)(),{children:c,label:d,shouldWrapChildren:x,"aria-label":m,hasArrow:h,bg:g,portalProps:p,background:f,backgroundColor:u,bgColor:Z,motionProps:b,...F}=a,w=null!=(i=null!=(n=null!=f?f:u)?n:g)?i:Z;if(w){l.bg=w;let e=(0,X.K1)(s,"colors",w);l[v.Dq.arrowBg.var]=e}let S=useTooltip({...F,direction:s.direction}),E="string"==typeof c||x;if(E)r=(0,D.jsx)(_.m.span,{display:"inline-block",tabIndex:0,...S.getTriggerProps(),children:c});else{let e=o.Children.only(c);r=(0,o.cloneElement)(e,S.getTriggerProps(e.props,e.ref))}let W=!!m,k=S.getTooltipProps({},t),z=W?omit(k,["role","id"]):k,R=pick(k,["role","id"]);return d?(0,D.jsxs)(D.Fragment,{children:[r,(0,D.jsx)(H.M,{children:S.isOpen&&(0,D.jsx)(C.h,{...p,children:(0,D.jsx)(_.m.div,{...S.getTooltipPositionerProps(),__css:{zIndex:l.zIndex,pointerEvents:"none"},children:(0,D.jsxs)(j,{variants:y,initial:"exit",animate:"enter",exit:"exit",...b,...z,__css:l,children:[d,W&&(0,D.jsx)(_.m.span,{srOnly:!0,...R,children:m}),h&&(0,D.jsx)(_.m.div,{"data-popper-arrow":!0,className:"chakra-tooltip__arrow-wrapper",children:(0,D.jsx)(_.m.div,{"data-popper-arrow-inner":!0,className:"chakra-tooltip__arrow",__css:{bg:l.bg}})})]})})})})]}):(0,D.jsx)(D.Fragment,{children:c})});T.displayName="Tooltip";var L=n(7754),I=n(4298),O=n.n(I),P=n(6608),N=n(4741),V=n(5115);n(5202);var q=n(1664),M=n.n(q),U=n(9008),G=n.n(U);function Component(){let e=(0,o.useRef)(null);P.xL.ref_hours=e;let t=(0,o.useRef)(null);P.xL.ref_confirmation_section=t;let n=(0,o.useRef)(null);P.xL.ref_celebration_section=n;let y=(0,o.useRef)(null);P.xL.ref_minutes=y;let F=(0,o.useRef)(null);P.xL.ref_bus_service_section=F;let w=(0,o.useRef)(null);P.xL.ref_photos_section=w;let S=(0,o.useRef)(null);P.xL.ref_days=S;let v=(0,o.useRef)(null);P.xL.ref_wedding_date=v;let E=(0,o.useRef)(null);P.xL.ref_contact_section=E;let W=(0,o.useRef)(null);P.xL.ref_navbar=W;let k=(0,o.useRef)(null);P.xL.ref_seconds=k;let C=(0,o.useRef)(null);return P.xL.ref_header_section=C,(0,i.BX)(o.Fragment,{children:[(0,i.tZ)(r.g,{}),(0,i.BX)(l.xu,{sx:{fontFamily:"Raleway",fontWeight:"300",fontSize:"1em",backgroundColor:"#F8F8FA!important",color:"#505050",width:"100%",alignItems:"center"},children:[(0,i.tZ)(O(),{strategy:"afterInteractive",children:"document.documentElement.lang='es'"}),(0,i.BX)(a.U,{className:"navbar_wedding",id:"navbar",ref:W,sx:{boxShadow:"0px 1px 5px 1px rgba(80, 69, 135, 0.5)",position:"sticky",paddingTop:"0.5em",paddingBottom:"0px !important",zIndex:"5",justifyContent:"center",top:"0",backgroundColor:"#D2CBF6",width:"100%"},children:[(0,i.BX)(s.v,{closeOnBlur:!0,closeOnSelect:!0,isLazy:!0,sx:{width:"100%"},children:[(0,i.tZ)(c.j,{children:(0,i.tZ)(N.U,{sx:{height:"24px",width:"24px",color:"#504587",margin:"12px 16px"}})}),(0,i.BX)(d.q,{sx:{padding:"1em",backgroundColor:"#F8F8FA",fontSize:["1.15em","1.5em","1.5em","1.5em","1.5em"],boxShadow:"1px 1px 4px 1px rgba(80, 69, 135, 0.5)",width:"100%"},children:[(0,i.tZ)(x.r,{as:M(),href:"/#confirmation_section",isExternal:!1,sx:{textAlign:"start",textDecoration:"none",_hover:{}},children:(0,i.tZ)(m.x,{sx:{fontWeight:"300",fontSize:"1em"},children:"Confirmaci\xf3n"})}),(0,i.tZ)(h.R,{}),(0,i.tZ)(x.r,{as:M(),href:"/#celebration_section",isExternal:!1,sx:{textAlign:"start",textDecoration:"none",_hover:{}},children:(0,i.tZ)(m.x,{sx:{fontWeight:"300",fontSize:"1em"},children:"Direcci\xf3n"})}),(0,i.tZ)(h.R,{}),(0,i.tZ)(x.r,{as:M(),href:"/#bus_service_section",isExternal:!1,sx:{textAlign:"start",textDecoration:"none",_hover:{}},children:(0,i.tZ)(m.x,{sx:{fontWeight:"300",fontSize:"1em"},children:"Autob\xfas"})}),(0,i.tZ)(h.R,{}),(0,i.tZ)(x.r,{as:M(),href:"/#contact_section",isExternal:!1,sx:{textAlign:"start",textDecoration:"none",_hover:{}},children:(0,i.tZ)(m.x,{sx:{fontWeight:"300",fontSize:"1em"},children:"Contacto"})}),(0,i.tZ)(h.R,{}),(0,i.tZ)(x.r,{as:M(),href:"/#photos_section",isExternal:!1,sx:{textAlign:"start",textDecoration:"none",_hover:{}},children:(0,i.tZ)(m.x,{sx:{fontWeight:"300",fontSize:"1em"},children:"Fotos"})})]})]}),(0,i.tZ)(g.L,{}),(0,i.tZ)(x.r,{as:M(),href:"/",isExternal:!1,sx:{_hover:{}},children:(0,i.BX)(l.xu,{sx:{height:"100%",fontWeight:"500",color:"#504587",fontFamily:"Elsie",letterSpacing:"5px"},children:[(0,i.tZ)(m.x,{as:"span",sx:{fontSize:["2.5em","3em","3em","3em","3em"]},children:"V"}),(0,i.tZ)(m.x,{as:"span",sx:{fontSize:"1.75em"},children:"&"}),(0,i.tZ)(m.x,{as:"span",sx:{fontSize:["2.5em","3em","3em","3em","3em"]},children:"\xc1"})]})}),(0,i.tZ)(g.L,{}),(0,i.tZ)(V.D,{sx:{height:"24px",width:"24px",color:"transparent",margin:"12px 16px"}})]}),(0,i.tZ)(l.xu,{sx:{display:["block","none","none","none"]},children:(0,i.tZ)(o.Fragment,{children:(0,P.oA)(!0)?(0,i.tZ)(o.Fragment,{children:(0,i.tZ)(p.E,{src:"/images/lavender_top.png",sx:{width:"100%",height:"100%",flexShrink:"0",position:"relative",marginBottom:"-120px",zIndex:"1"}})}):(0,i.tZ)(o.Fragment,{children:(0,i.tZ)(p.E,{src:"/images/lavender_top.png",sx:{width:"100%",height:"100%",flexShrink:"0",marginTop:"-139px",zIndex:"1"}})})})}),(0,i.tZ)(f.g,{sx:{width:"auto"},children:(0,i.BX)(u.k,{align:"center",direction:"column",sx:{gap:"16px",width:"100%",maxWidth:"800px"},children:[(0,i.tZ)(f.g,{id:"header_section",ref:C,children:(0,i.BX)(u.k,{direction:"column",sx:{alignItems:"center",alignSelf:"stretch",gap:"8px"},children:[(0,i.BX)(f.g,{children:[(0,i.tZ)(l.xu,{sx:{marginTop:"-85px",display:["block","block","block","none"]},children:(0,i.BX)(u.k,{align:"center",direction:"column",children:[(0,i.tZ)(Z.X,{size:"2xl",sx:{fontFamily:"Elsie",fontWeight:"500",fontStyle:"normal",lineHeight:"normal",color:"#504587"},children:"\xa1Nos"}),(0,i.tZ)(Z.X,{size:"2xl",sx:{fontFamily:"Elsie",fontWeight:"500",fontStyle:"normal",lineHeight:"normal",color:"#504587"},children:"casamos!"})]})}),(0,i.tZ)(l.xu,{sx:{display:["none","none","none","block"]},children:(0,i.BX)(u.k,{align:"center",direction:"column",children:[(0,i.tZ)(Z.X,{size:"2xl",sx:{fontFamily:"Elsie",fontWeight:"500",fontStyle:"normal",lineHeight:"normal",color:"#504587"},children:"\xa1Nos"}),(0,i.tZ)(Z.X,{size:"2xl",sx:{fontFamily:"Elsie",fontWeight:"500",fontStyle:"normal",lineHeight:"normal",color:"#504587"},children:"casamos!"})]})})]}),(0,i.tZ)(p.E,{alt:"Foto principal de los novios.",src:"/images/almendros_.png",sx:{width:"100%",height:"50%",boxShadow:"0px 8px 5px 1px #F8F8FA inset",alignSelf:"stretch",padding:"-6px 12px"}}),(0,i.tZ)(Z.X,{size:"2xl",sx:{fontFamily:"Elsie",width:"100%",fontWeight:"500",fontStyle:"normal",textAlign:"center",color:"#504587"},children:"30 agosto 2024"})]})}),(0,i.BX)(f.g,{id:"wedding_date",ref:v,sx:{gap:"16px",width:"100%"},children:[(0,i.tZ)(m.x,{sx:{maxWidth:"800px",padding:"0.25em",textAlign:"center",fontSize:["1.15em","1.15em","1.15em","1.15em","1.15em"],textWrap:"pretty",fontStyle:"normal",lineHeight:"normal",width:"100%",fontWeight:"300"},children:"\xa1Ven a acompa\xf1arnos en el d\xeda m\xe1s feliz de nuestras vidas!"}),(0,i.tZ)(x.r,{as:M(),href:"https://calendar.google.com/calendar/event?action=TEMPLATE&dates=20240830T180000Z/20240830T200000Z&text=Boda%20de%20Vicky%20y%20Alex&location=Agripina%20Eventos%20y%20Celebraciones%2C%20Cj%C3%B3n.%20los%20Romanos%2C%201%2C%2021100%20Punta%20Umbr%C3%ADa%2C%20Huelva%2C%20Espa%C3%B1a",isExternal:!0,children:(0,i.tZ)(b.z,{sx:{color:"#504587",textAlign:"center",fontVariantNumeric:"lining-nums proportional-nums",padding:"8px 24px",justifyContent:"center",alignItems:"center",gap:"8px",alignSelf:"stretch",borderRadius:"5px",border:"2px solid #4F1F7E",background:"#F8F8FA",fontSize:["1em","1em","1em","1.5em","1.5em"]},children:(0,i.tZ)(m.x,{children:"Guardar fecha"})})}),(0,i.BX)(u.k,{align:"center",justify:"center",sx:{padding:"16px 0px",gap:"1.5em",alignSelf:"stretch",background:"rgba(79, 31, 126, 0.70)",width:"100%"},children:[(0,i.BX)(f.g,{children:[(0,i.tZ)(m.x,{id:"days",ref:S,sx:{color:"#FCFCFD",width:"100%",height:"100%",fontFamily:"Elsie",textAlign:"center",fontStyle:"normal",fontWeight:"450",lineHeight:"normal",fontSize:["2em","2em","2em","2em","2em"]}}),(0,i.tZ)(m.x,{sx:{color:"#D2CBF6",textAlign:"center",fontFamily:"Raleway",fontSize:"16px",fontStyle:"normal",fontWeight:"450",lineHeight:"normal"},children:"D\xedas"})]}),(0,i.BX)(f.g,{children:[(0,i.tZ)(m.x,{id:"hours",ref:e,sx:{color:"#FCFCFD",width:"100%",height:"100%",fontFamily:"Elsie",textAlign:"center",fontStyle:"normal",fontWeight:"450",lineHeight:"normal",fontSize:["2em","2em","2em","2em","2em"]}}),(0,i.tZ)(m.x,{sx:{color:"#D2CBF6",textAlign:"center",fontFamily:"Raleway",fontSize:"16px",fontStyle:"normal",fontWeight:"450",lineHeight:"normal"},children:"horas"})]}),(0,i.BX)(f.g,{children:[(0,i.tZ)(m.x,{id:"minutes",ref:y,sx:{color:"#FCFCFD",width:"100%",height:"100%",fontFamily:"Elsie",textAlign:"center",fontStyle:"normal",fontWeight:"450",lineHeight:"normal",fontSize:["2em","2em","2em","2em","2em"]}}),(0,i.tZ)(m.x,{sx:{color:"#D2CBF6",textAlign:"center",fontFamily:"Raleway",fontSize:"16px",fontStyle:"normal",fontWeight:"450",lineHeight:"normal"},children:"mins"})]}),(0,i.BX)(f.g,{children:[(0,i.tZ)(m.x,{id:"seconds",ref:k,sx:{color:"#FCFCFD",width:"100%",height:"100%",fontFamily:"Elsie",textAlign:"center",fontStyle:"normal",fontWeight:"450",lineHeight:"normal",fontSize:["2em","2em","2em","2em","2em"]}}),(0,i.tZ)(m.x,{sx:{color:"#D2CBF6",textAlign:"center",fontFamily:"Raleway",fontSize:"16px",fontStyle:"normal",fontWeight:"450",lineHeight:"normal"},children:"segs"})]}),(0,i.tZ)(O(),{src:"/js/countdown.js",strategy:"afterInteractive"})]})]}),(0,i.tZ)(l.xu,{sx:{display:["block","none","none","none"]},children:(0,i.tZ)(p.E,{alt:"Foto de unas hojas amarillas.",src:"/images/leafs.svg",sx:{width:"100%",height:"100%",flexShrink:"0"}})}),(0,i.BX)(u.k,{align:"center",direction:"column",id:"confirmation_section",ref:t,sx:{width:"85%",gap:"8px",padding:"16px 12px",marginX:"0.8em",justifyContent:"center",borderRadius:"12px",boxShadow:"0px 2px 4px 0px rgba(0, 0, 0, 0.25)",height:"100%",scrollMarginTop:"75px"},children:[(0,i.tZ)(p.E,{src:"/icons/confirmation.svg",sx:{color:"#505050",width:"4em",maxHeight:"auto"}}),(0,i.tZ)(Z.X,{sx:{size:"xl",fontWeight:"500",textAlign:"center",width:"100%",letterSpacing:"0.0125rem",lineHeight:"1.25em",fontFamily:"Elsie",color:"#504587"},children:"Confirmaci\xf3n"}),(0,i.tZ)(m.x,{sx:{maxWidth:"800px",padding:"0.25em",textAlign:"center",fontSize:["1.15em","1.15em","1.15em","1.15em","1.15em"],textWrap:"pretty",fontStyle:"normal",lineHeight:"normal",width:"100%",fontWeight:"300"},children:"Seguro que tienes muchas ganas de compartir este d\xeda con nosotros.\n\n    \xbfConfirmas tu asistencia?"}),(0,i.tZ)(x.r,{as:M(),href:"https://docs.google.com/forms/d/e/1FAIpQLSfPXRy5UWI24mqk3yDZ0xP1W0OeZ14m9tn4tsJogxzHzToSkQ/viewform",isExternal:!0,children:(0,i.tZ)(b.z,{sx:{width:"100%",fontSize:["1em","1em","1em","1.5em","1.5em"],padding:"8px 24px",color:"#F8F8FA",background:"#4F1F7E",borderRadius:"5px",border:"2px solid #4F1F7E",textAlign:"center",marginBottom:"1em",_hover:{background:"rgba(80, 69, 135, 0.91)"}},children:"Confirmar asistencia"})})]}),(0,i.BX)(u.k,{direction:"column",id:"celebration_section",ref:n,sx:{alignItems:"center",alignSelf:"stretch",gap:"8px",scrollMarginTop:"75px"},children:[(0,i.tZ)(p.E,{src:"/icons/wedding.svg",sx:{color:"#505050",width:"4em",maxHeight:"auto"}}),(0,i.tZ)(Z.X,{sx:{size:"xl",fontWeight:"500",textAlign:"center",width:"100%",letterSpacing:"0.0125rem",lineHeight:"1.25em",fontFamily:"Elsie",color:"#504587"},children:"\xbfD\xf3nde nos casamos"}),(0,i.tZ)(m.x,{sx:{maxWidth:"800px",padding:"0.25em",textAlign:"center",fontSize:["1.15em","1.15em","1.15em","1.15em","1.15em"],textWrap:"pretty",fontStyle:"normal",lineHeight:"normal",width:"100%",fontWeight:"300"},children:"Hemos elegido un sitio muy especial para celebrar este gran d\xeda."}),(0,i.tZ)(x.r,{as:M(),href:"https://agripinaeventos.com/",isExternal:!0,children:(0,i.tZ)(T,{direction:"rtl",label:"Pincha en la imagen para visitar el sitio web de La Agripina",openDelay:100,placement:"bottom",children:(0,i.tZ)(p.E,{alt:"Foto de la entrada de La Agripina.",src:"/images/agripina.jpg",sx:{boxShadow:"\n                1px 1px 4px 1px rgba(0, 0, 0, 0.3)\n                ",width:"100%"}})})}),(0,i.BX)(u.k,{align:"center",direction:"column",sx:{fontSize:["1.15em","1.15em","1.15em","1.15em","1.15em"]},children:[(0,i.tZ)(m.x,{as:"span",sx:{fontWeight:"bold"},children:"La Agripina"}),(0,i.tZ)(m.x,{children:"Callej\xf3n los Romanos, 1"}),(0,i.tZ)(m.x,{children:"Punta Umbr\xeda, Huelva"})]}),(0,i.tZ)(x.r,{as:M(),href:"https://maps.app.goo.gl/nUCTR2ftY2aX42sw8",isExternal:!0,children:(0,i.tZ)(b.z,{sx:{color:"#504587",textAlign:"center",fontVariantNumeric:"lining-nums proportional-nums",padding:"8px 24px",justifyContent:"center",alignItems:"center",gap:"8px",alignSelf:"stretch",borderRadius:"5px",border:"2px solid #4F1F7E",background:"#F8F8FA",fontSize:["1em","1em","1em","1.5em","1.5em"]},children:(0,i.tZ)(m.x,{children:"Abrir en Google Maps"})})})]}),(0,i.BX)(u.k,{align:"center",direction:"column",id:"bus_service_section",ref:F,sx:{width:"85%",gap:"8px",padding:"16px 12px",marginX:"0.8em",justifyContent:"center",borderRadius:"12px",boxShadow:"0px 2px 4px 0px rgba(0, 0, 0, 0.25)",height:"100%",scrollMarginTop:"75px"},children:[(0,i.tZ)(p.E,{src:"/icons/bus.svg",sx:{color:"#505050",width:"4em",maxHeight:"auto"}}),(0,i.tZ)(Z.X,{sx:{size:"xl",fontWeight:"500",textAlign:"center",width:"100%",letterSpacing:"0.0125rem",lineHeight:"1.25em",fontFamily:"Elsie",color:"#504587"},children:"Servicio de autob\xfas"}),(0,i.tZ)(m.x,{sx:{maxWidth:"800px",padding:"0.25em",textAlign:"center",fontSize:["1.15em","1.15em","1.15em","1.15em","1.15em"],textWrap:"pretty",fontStyle:"normal",lineHeight:"normal",width:"100%",fontWeight:"300"},children:"\n    Para facilitar la asistencia habr\xe1 un servicio de autobuses tanto a la ida como a la vuelta.\n"}),(0,i.BX)(f.g,{sx:{width:"100%"},children:[(0,i.tZ)(a.U,{children:(0,i.tZ)(p.E,{src:"/icons/localization.png",sx:{color:"#505050",width:"2em",maxHeight:"auto"}})}),(0,i.tZ)(m.x,{sx:{color:"#504587",fontWeight:"800",fontSize:"1.25em"},children:"Ida a la ceremonia"}),(0,i.tZ)(g.L,{}),(0,i.BX)(u.k,{align:"center",direction:"column",sx:{fontSize:["1.15em","1.15em","1.15em","1.15em","1.15em"],maxWidth:"800px"},children:[(0,i.BX)(l.xu,{children:["Salida ",(0,i.tZ)(m.x,{as:"span",sx:{fontWeight:"800"},children:"pte hora"})," desde "]}),(0,i.tZ)(l.xu,{children:(0,i.tZ)(m.x,{as:"span",sx:{fontWeight:"800"},children:"Senator Huelva Hotel"})}),(0,i.tZ)(l.xu,{children:(0,i.tZ)(m.x,{as:"span",sx:{fontWeight:"800"},children:"C/ Pablo Rada"})})]})]}),(0,i.BX)(f.g,{sx:{width:"100"},children:[(0,i.tZ)(a.U,{children:(0,i.tZ)(p.E,{src:"/icons/localization.png",sx:{color:"#505050",width:"2em",maxHeight:"auto"}})}),(0,i.tZ)(m.x,{sx:{color:"#504587",fontWeight:"800",fontSize:"1.25em"},children:"Regreso a casa"}),(0,i.tZ)(g.L,{}),(0,i.BX)(u.k,{align:"center",direction:"column",sx:{fontSize:["1.15em","1.15em","1.15em","1.15em","1.15em"]},children:[(0,i.tZ)(l.xu,{children:"Salidas de La Agripina "}),(0,i.BX)(l.xu,{children:["a las ",(0,i.tZ)(m.x,{as:"span",sx:{fontWeight:"800"},children:"02:00"})," y a las ",(0,i.tZ)(m.x,{as:"span",sx:{fontWeight:"800"},children:"05:00"})]}),(0,i.tZ)(l.xu,{children:"con destino"}),(0,i.tZ)(m.x,{as:"span",sx:{fontWeight:"800",textWrap:"balance"},children:"Senator Huelva Hotel"}),(0,i.tZ)(m.x,{as:"span",sx:{fontWeight:"800",textWrap:"balance"},children:"C/ Pablo Rada"})]})]})]}),(0,i.tZ)(l.xu,{sx:{display:["block","none","none","none"]},children:(0,i.tZ)(p.E,{alt:"Foto de unas hojas amarillas.",src:"/images/leafs.svg",sx:{width:"100%",height:"100%",flexShrink:"0"}})}),(0,i.BX)(u.k,{align:"center",direction:"column",id:"contact_section",ref:E,sx:{width:"85%",gap:"8px",padding:"16px 12px",marginX:"0.8em",justifyContent:"center",borderRadius:"12px",boxShadow:"0px 2px 4px 0px rgba(0, 0, 0, 0.25)",height:"100%",scrollMarginTop:"75px"},children:[(0,i.tZ)(p.E,{src:"/icons/phone.svg",sx:{color:"#505050",width:"4em",maxHeight:"auto"}}),(0,i.tZ)(Z.X,{sx:{size:"xl",fontWeight:"500",textAlign:"center",width:"100%",letterSpacing:"0.0125rem",lineHeight:"1.25em",fontFamily:"Elsie",color:"#504587"},children:"Contacta con nosotros"}),(0,i.tZ)(m.x,{sx:{maxWidth:"800px",padding:"0.25em",textAlign:"center",fontSize:["1.15em","1.15em","1.15em","1.15em","1.15em"],textWrap:"pretty",fontStyle:"normal",lineHeight:"normal",width:"100%",fontWeight:"300"},children:"\nPonte en contacto con nosotros a trav\xe9s de Whatsapp haciendo click directamente en el bot\xf3n\n"}),(0,i.BX)(u.k,{align:"center",direction:"column",sx:{gap:"8px"},children:[(0,i.tZ)(x.r,{as:M(),href:"https://wa.me/34645205378",isExternal:!0,children:(0,i.BX)(b.z,{sx:{color:"#504587",textAlign:"center",fontVariantNumeric:"lining-nums proportional-nums",padding:"8px 24px",justifyContent:"center",alignItems:"center",gap:"8px",alignSelf:"stretch",borderRadius:"5px",border:"2px solid #4F1F7E",background:"#F8F8FA",fontSize:["1em","1em","1em","1.5em","1.5em"]},children:[(0,i.tZ)(p.E,{alt:"Icono de Whatsapp",src:"/icons/whatsapp.svg"}),(0,i.tZ)(m.x,{children:"Abrir Whatsapp con Vicky"})]})}),(0,i.tZ)(x.r,{as:M(),href:"https://wa.me/34650250822",isExternal:!0,children:(0,i.BX)(b.z,{sx:{color:"#504587",textAlign:"center",fontVariantNumeric:"lining-nums proportional-nums",padding:"8px 24px",justifyContent:"center",alignItems:"center",gap:"8px",alignSelf:"stretch",borderRadius:"5px",border:"2px solid #4F1F7E",background:"#F8F8FA",fontSize:["1em","1em","1em","1.5em","1.5em"]},children:[(0,i.tZ)(p.E,{alt:"Icono de Whatsapp",src:"/icons/whatsapp.svg"}),(0,i.tZ)(m.x,{children:"Abrir Whatsapp con \xc1lex"})]})})]}),(0,i.tZ)(m.x,{sx:{maxWidth:"800px",padding:"0.25em",textAlign:"center",fontSize:["1.15em","1.15em","1.15em","1.15em","1.15em"],textWrap:"pretty",fontStyle:"normal",lineHeight:"normal",width:"100%",fontWeight:"300"},children:"Si te es m\xe1s c\xf3modo, puedes mandarnos un correo a:"}),(0,i.BX)(u.k,{align:"center",direction:"column",sx:{gap:"8px"},children:[(0,i.tZ)(m.x,{sx:{fontSize:["1.2em","1.5em","1.5em","1.5em","1.5em"],fontWeight:"600"},children:"ggmvictoria@gmail.com"}),(0,i.tZ)(m.x,{sx:{fontSize:["1.2em","1.5em","1.5em","1.5em","1.5em"],fontWeight:"600"},children:"alex.algarate@gmail.com"})]})]}),(0,i.tZ)(l.xu,{sx:{display:["block","none","none","none"]},children:(0,i.tZ)(p.E,{alt:"Foto de unas hojas amarillas.",src:"/images/leafs.svg",sx:{width:"100%",height:"100%",flexShrink:"0"}})}),(0,i.BX)(u.k,{align:"center",direction:"column",id:"photos_section",ref:w,sx:{width:"85%",gap:"8px",padding:"16px 12px",marginX:"0.8em",justifyContent:"center",borderRadius:"12px",boxShadow:"0px 2px 4px 0px rgba(0, 0, 0, 0.25)",height:"100%",scrollMarginTop:"75px"},children:[(0,i.tZ)(p.E,{src:"/icons/camera.svg",sx:{color:"#505050",width:"4em",maxHeight:"auto"}}),(0,i.tZ)(Z.X,{sx:{size:"xl",fontWeight:"500",textAlign:"center",width:"100%",letterSpacing:"0.0125rem",lineHeight:"1.25em",fontFamily:"Elsie",color:"#504587"},children:"\xc1lbum de Fotos"}),(0,i.tZ)(m.x,{sx:{maxWidth:"800px",padding:"0.25em",textAlign:"center",fontSize:["1.15em","1.15em","1.15em","1.15em","1.15em"],textWrap:"pretty",fontStyle:"normal",lineHeight:"normal",width:"100%",fontWeight:"300"},children:"\xbfQuieres recordar este d\xeda para siempre?"}),(0,i.tZ)(m.x,{sx:{maxWidth:"800px",padding:"0.25em",textAlign:"center",fontSize:["1.15em","1.15em","1.15em","1.15em","1.15em"],textWrap:"pretty",fontStyle:"normal",lineHeight:"normal",width:"100%",fontWeight:"300"},children:"\n    Comparte tus fotos de la boda subi\xe9ndolas al alb\xfam compartido de Google Fotos.\n"}),(0,i.tZ)(x.r,{as:M(),href:"https://photos.app.goo.gl/yjJ5mcgWrVG4nrUy6",isExternal:!0,children:(0,i.tZ)(b.z,{sx:{width:"100%",fontSize:["1em","1em","1em","1.5em","1.5em"],padding:"8px 24px",color:"#F8F8FA",background:"#4F1F7E",borderRadius:"5px",border:"2px solid #4F1F7E",textAlign:"center",marginBottom:"1em",_hover:{background:"rgba(80, 69, 135, 0.91)"}},children:"Abrir \xe1lbum"})})]})]})}),(0,i.tZ)(L.M,{children:(0,i.tZ)(Z.X,{size:"2xl",sx:{fontFamily:"Elsie",fontWeight:"500",fontStyle:"normal",lineHeight:"normal",color:"#504587",position:"relative",top:"50px"},children:"Te esperamos"})}),(0,i.tZ)(l.xu,{sx:{display:["block","none","none","none"]},children:(0,i.tZ)(o.Fragment,{children:(0,P.oA)(!1)?(0,i.tZ)(o.Fragment,{children:(0,i.tZ)(p.E,{src:"/images/lavender_bottom.png",sx:{width:"100%",height:"100%",flexShrink:"0",position:"relative",marginBottom:"-120px",zIndex:"1"}})}):(0,i.tZ)(o.Fragment,{children:(0,i.tZ)(p.E,{src:"/images/lavender_bottom.png",sx:{width:"100%",height:"100%",flexShrink:"0",marginTop:"-139px",zIndex:"1"}})})})})]}),(0,i.BX)(G(),{children:[(0,i.tZ)("title",{children:"Web de la boda de Vicky y \xc1lex"}),(0,i.tZ)("meta",{content:"\n    Ruta principal de la web de la boda de los novios para gestionar las invitaciones\n",name:"description"}),(0,i.tZ)("meta",{content:"favicon.ico",property:"og:image"})]})]})}},8595:function(e,t,n){"use strict";n.d(t,{g:function(){return Fragment_fd0e7cb8f9fb4669a6805377d925fba0}});var i=n(6811),o=n(7294),r=n(687),l=n(6608),a=n(2752),s=n(1963),c=n(2598),d=n(4504),x=n(3793),m=n(9564);function Fragment_fd0e7cb8f9fb4669a6805377d925fba0(){let[e,t]=(0,o.useContext)(r.DR);return(0,i.tZ)(o.Fragment,{children:(0,l.oA)(null!==t)?(0,i.tZ)(o.Fragment,{children:(0,i.tZ)(a.u_,{isOpen:null!==t,children:(0,i.tZ)(s.Z,{children:(0,i.BX)(c.h,{children:[(0,i.tZ)(d.x,{children:"Connection Error"}),(0,i.tZ)(x.f,{children:(0,i.BX)(m.x,{children:["Cannot connect to server: ",null!==t?t.message:"",". Check if server is reachable at ",(0,l.e9)().href]})})]})})})}):(0,i.tZ)(o.Fragment,{})})}n(5202)}},function(e){e.O(0,[700,339,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);