(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"3nLz":function(e,t,n){"use strict";n("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"4YRn":function(e,t,n){var r=n("P8UN"),a=n("dTG6"),i=String.fromCharCode,o=String.fromCodePoint;r(r.S+r.F*(!!o&&1!=o.length),"String",{fromCodePoint:function(e){for(var t,n=[],r=arguments.length,o=0;r>o;){if(t=+arguments[o++],a(t,1114111)!==t)throw RangeError(t+" is not a valid code point");n.push(t<65536?i(t):i(55296+((t-=65536)>>10),t%1024+56320))}return n.join("")}})},"9Um5":function(e,t,n){"use strict";var r=n("vOnD"),a=n("r2cD"),i=n("532r"),o=n("ek6p");function l(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n    padding: 0 2rem;\n  "]);return l=function(){return e},e}var s=r.c.main.withConfig({displayName:"Content",componentId:"sc-15t2dda-0"})(["",";max-width:80vw;width:100%;margin:0 auto;opacity:0;animation:"," 0.5s 0.3s ease-in-out forwards;grid-area:content-start / content-start / content-end / content-end;padding:2rem 2rem;",""],o.a.contentSpace,a.a,i.a.laptop(l()));t.a=s},"9eSz":function(e,t,n){"use strict";n("rzGZ"),n("Dq+y"),n("8npG"),n("YbXK"),n("eMsz"),n("zTTH"),n("3nLz");var r=n("TqRt");t.__esModule=!0,t.default=void 0;var a,i=r(n("PJYZ")),o=r(n("VbXa")),l=r(n("8OQS")),s=r(n("pVnL")),c=r(n("q1tI")),d=r(n("17x9")),u=function(e){var t=(0,s.default)({},e),n=t.resolutions,r=t.sizes,a=t.critical;return n&&(t.fixed=n,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,n=e.fixed;return p(t||n).src},p=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var n=e.findIndex((function(e){return void 0===e.media}));if(-1!==n)return e[n]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),n=m(t);return g[n]||!1},v="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,b=y&&window.IntersectionObserver,w=new WeakMap;function x(e){return e.map((function(e){var t=e.src,n=e.srcSet,r=e.srcSetWebp,a=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:a,srcSet:r,sizes:i}),c.default.createElement("source",{media:a,srcSet:n,sizes:i}))}))}function E(e){var t=[],n=[];return e.forEach((function(e){return(e.media?t:n).push(e)})),[].concat(t,n)}function I(e){return e.map((function(e){var t=e.src,n=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:n,srcSet:r})}))}function _(e){return e.map((function(e){var t=e.src,n=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:n,srcSet:r})}))}function S(e,t){var n=e.srcSet,r=e.srcSetWebp,a=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?r:n)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var C=function(e,t){var n=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return n&&(n.observe(e),w.set(e,t)),function(){n.unobserve(e),w.delete(e)}},k=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?S(e,!0):"")+S(e)})).join("")+"<img "+c+o+l+n+r+t+i+a+s+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},j=c.default.forwardRef((function(e,t){var n=e.src,r=e.imageVariants,a=e.generateSources,i=e.spreadProps,o=e.ariaHidden,l=c.default.createElement(z,(0,s.default)({ref:t,src:n},i,{ariaHidden:o}));return r.length>1?c.default.createElement("picture",null,a(r),l):l})),z=c.default.forwardRef((function(e,t){var n=e.sizes,r=e.srcSet,a=e.src,i=e.style,o=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,s.default)({"aria-hidden":m,sizes:n,srcSet:r,src:a},p,{onLoad:o,onError:d,ref:t,loading:u,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));z.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var O=function(e){function t(t){var n;(n=e.call(this,t)||this).seenBefore=y&&h(t),n.isCritical="eager"===t.loading||t.critical,n.addNoScript=!(n.isCritical&&!t.fadeIn),n.useIOSupport=!v&&b&&!n.isCritical&&!n.seenBefore;var r=n.isCritical||y&&(v||!n.useIOSupport);return n.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!n.seenBefore&&t.fadeIn},n.imageRef=c.default.createRef(),n.placeholderRef=t.placeholderRef||c.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,i.default)(n)),n.handleRef=n.handleRef.bind((0,i.default)(n)),n}(0,o.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},n.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=C(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},n.handleImageLoaded=function(){var e,t,n;e=this.props,t=u(e),n=m(t),g[n]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=u(this.props),t=e.title,n=e.alt,r=e.className,a=e.style,i=void 0===a?{}:a,o=e.imgStyle,l=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,m=e.placeholderClassName,g=e.fluid,h=e.fixed,v=e.backgroundColor,y=e.durationFadeIn,b=e.Tag,w=e.itemProp,E=e.loading,S=e.draggable,C=!1===this.state.fadeIn||this.state.imgLoaded,O=!0===this.state.fadeIn&&!this.state.imgCached,N=(0,s.default)({opacity:C?1:0,transition:O?"opacity "+y+"ms":"none"},l),L="boolean"==typeof v?"lightgray":v,R={transitionDelay:y+"ms"},D=(0,s.default)({opacity:this.state.imgLoaded?0:1},O&&R,l,f),P={title:t,alt:this.state.isVisible?"":n,style:D,className:m,itemProp:w};if(g){var M=g,q=p(g);return c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:q.maxWidth?q.maxWidth+"px":null,maxHeight:q.maxHeight?q.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},c.default.createElement(b,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),L&&c.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:L,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},O&&R)}),q.base64&&c.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:P,imageVariants:M,generateSources:_}),q.tracedSVG&&c.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:P,imageVariants:M,generateSources:I}),this.state.isVisible&&c.default.createElement("picture",null,x(M),c.default.createElement(z,{alt:n,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:E,draggable:S})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,s.default)({alt:n,title:t,loading:E},q,{imageVariants:M}))}}))}if(h){var W=h,A=p(h),T=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:A.width,height:A.height},i);return"inherit"===i.display&&delete T.display,c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:T,ref:this.handleRef,key:"fixed-"+JSON.stringify(A.srcSet)},L&&c.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:L,width:A.width,opacity:this.state.imgLoaded?0:1,height:A.height},O&&R)}),A.base64&&c.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:A.base64,spreadProps:P,imageVariants:W,generateSources:_}),A.tracedSVG&&c.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:A.tracedSVG,spreadProps:P,imageVariants:W,generateSources:I}),this.state.isVisible&&c.default.createElement("picture",null,x(W),c.default.createElement(z,{alt:n,title:t,width:A.width,height:A.height,sizes:A.sizes,src:A.src,crossOrigin:this.props.crossOrigin,srcSet:A.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:E,draggable:S})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,s.default)({alt:n,title:t,loading:E},A,{imageVariants:W}))}}))}return null},t}(c.default.Component);O.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var N=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),L=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});O.propTypes={resolutions:N,sizes:L,fixed:d.default.oneOfType([N,d.default.arrayOf(N)]),fluid:d.default.oneOfType([L,d.default.arrayOf(L)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var R=O;t.default=R},"A2+M":function(e,t,n){var r=n("X8hv");e.exports={MDXRenderer:r}},OdDz:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNDNEM0QzQiLz4KPC9zdmc+Cg=="},QeBL:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return je}));n("4YRn");var r=n("q1tI"),a=n.n(r),i=n("c5LU"),o=n("1mWn"),l=n("9Um5"),s=(n("pJf4"),n("MlwD")),c=n("vOnD"),d=c.c.section.attrs({"data-sal":"slide-up","data-sal-duration":"300","data-sal-easing":"ease-out"}).withConfig({displayName:"Section",componentId:"xp9rt3-0"})(["min-height:100vmin;display:flex;justify-content:center;flex-direction:column;"]),u=n("LeJ0"),f=n("A2+M"),m=n("ek6p"),p=n("532r");function g(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}([" font-size: var(--fs-3xl);"]);return g=function(){return e},e}var h=c.c.div.withConfig({displayName:"styles__IntroContainer",componentId:"sc-1vva520-0"})(["width:100%;display:flex;justify-content:center;flex-direction:column;"]),v=c.c.div.withConfig({displayName:"styles__Statement",componentId:"sc-1vva520-1"})(["p{line-height:var(--lh-xl);a{","}}h1{font-size:clamp(var(--fs-2xl),8vw,var(--fs-5xl));color:var(--cl-text-alt);margin:0;font-weight:600;strong{color:var(--cl-primary);font-weight:500;}}h2{color:var(--cl-text-alt);font-size:var(--fs-3xl);"," margin:0;}hr{width:100px;margin:2rem 0;border-top:3px solid var(--cl-primary);border-bottom:none;}"],m.a.inlineLink,p.a.mobile(g())),y=c.c.div.withConfig({displayName:"styles__SocialContainer",componentId:"sc-1vva520-2"})(["display:flex;flex-direction:row;padding:0;a{min-height:var(--min-press-size);margin-right:1rem;",";}"],m.a.flexCenter),b=function(e){var t=e.intro.edges[0].node;return a.a.createElement(d,{id:"introduction"},a.a.createElement(h,null,a.a.createElement(f.MDXRenderer,{components:{wrapper:v}},t.body),a.a.createElement(y,null,u.socials.map((function(e,t){return a.a.createElement("a",{key:t,title:e.name+" Link",href:e.url,target:"_blank",rel:"noreferrer"},a.a.createElement(s.a,{name:e.name}))})))))},w=n("rL/M"),x=n("Wbzz");function E(){var e=_(["\n    &::after{\n      content:'';\n      display: block;\n      position: relative;\n      top: 50%;\n      height: 1px;\n      width: 100%;\n      max-width: 300px;\n      margin-left: 1rem;\n      background-color: var(--cl-text-main);\n    }"]);return E=function(){return e},e}function I(){var e=_([" font-size: var(--fs-2xl)"]);return I=function(){return e},e}function _(e,t){return t||(t=e.slice(0)),e.raw=t,e}var S=c.c.h2.withConfig({displayName:"SectionHeader",componentId:"ckmusf-0"})(["",";display:flex;position:relative;align-items:center;padding-top:3rem;margin-bottom:2rem;font-size:var(--fs-xl);"," ",""],m.a.display,p.a.tablet(I()),p.a.mobile(E())),C=n("9eSz"),k=n.n(C),j=Object(c.c)(k.a).withConfig({displayName:"Image",componentId:"sc-1n4yxlt-0"})(["width:100%;height:auto;background-repeat:no-repeat;background-size:cover;background-position:50% 50%;border-radius:5px;"]);function z(){var e=N(["\n    grid-template-columns: repeat(2, 1fr);\n    /* Alternate image order */\n    &:nth-child(odd) {\n      text-align: right;\n      a {\n        order: 2;\n      }\n      "," {\n        &:hover {\n          img {\n            transform: scale(1.2);\n          }\n        }\n      }\n    }\n    "]);return z=function(){return e},e}function O(){var e=N(["grid-template-columns: repeat(1, 1fr);"]);return O=function(){return e},e}function N(e,t){return t||(t=e.slice(0)),e.raw=t,e}var L=Object(c.c)(d).attrs({id:"featured"}).withConfig({displayName:"styles__FeaturedSection",componentId:"sc-1n2qph8-0"})(["counter-reset:section;"]),R=c.c.div.withConfig({displayName:"styles__ProjectList",componentId:"sc-1n2qph8-1"})(["",";",""],m.a.grid,p.a.laptop(O())),D=c.c.div.withConfig({displayName:"styles__Card",componentId:"sc-1n2qph8-2"})(["width:100%;min-height:300px;margin:2rem 0;position:relative;overflow:hidden;border-radius:8px;",";"," ","{transition:scale 0.5s ease-in-out;height:100%;border-radius:8px;img{transition:all 0.5s ease-in-out !important;}&:hover{img{transform:scale(1.2);}}}"],m.a.grid,p.a.tablet(z(),j),j),P=c.c.div.withConfig({displayName:"styles__CardContent",componentId:"sc-1n2qph8-3"})(["height:100%;display:flex;flex-direction:column;justify-content:center;background-position:25% 0%;p,div,a,h2,div,span{width:100%;}"]),M=c.c.h1.withConfig({displayName:"styles__FeaturedHeader",componentId:"sc-1n2qph8-4"})(["font-family:var(--ff-mono);color:var(--cl-primary);font-size:var(--fs-sm);font-weight:600;margin:0;&::after{position:relative;counter-increment:section;content:' / 0' counter(section);margin-right:0.5rem;}"]),q=c.c.h2.withConfig({displayName:"styles__CardText",componentId:"sc-1n2qph8-5"})(["font-size:var(--fs-xl);margin-bottom:1rem;"]),W=c.c.p.withConfig({displayName:"styles__CardDescription",componentId:"sc-1n2qph8-6"})(["font-size:var(--fs-base);a{",";}"],m.a.inlineLink),A=c.c.div.withConfig({displayName:"styles__List",componentId:"sc-1n2qph8-7"})(["display:block;margin:0.5rem 0;a:not(:first-child)::before{content:' ';display:inline-block;width:1rem;}"]),T=c.c.span.withConfig({displayName:"styles__Skill",componentId:"sc-1n2qph8-8"})(["font-size:var(--fs-sm);font-family:var(--ff-mono);&:not(:first-child)::before{content:'  ·  ';}"]),G=n("isoJ"),H=n("NZY8"),V=function(e){var t=e.featured,n=t.edges.map((function(e){return e.node}));return a.a.createElement(L,null,a.a.createElement(S,null,"What I've worked on"),a.a.createElement(R,null,n.map((function(e,t){var n=e.frontmatter,r=n.title,i=n.description,o=n.image,l=n.skills,s=n.internal,c=n.external,d=n.github;return a.a.createElement(D,{key:t,"data-sal":"slide-up","data-sal-duration":"300","data-sal-easing":"ease-out"},a.a.createElement("a",{href:c,target:"_blank",rel:"noreferrer noopener"},a.a.createElement(j,{title:r,fluid:o.childImageSharp.fluid})),a.a.createElement(P,null,a.a.createElement(M,null,"Featured Project"),a.a.createElement(q,null,r),a.a.createElement(W,null,i),a.a.createElement(A,null,l.map((function(e,t){return a.a.createElement(T,{key:t},e)}))),a.a.createElement(A,null,s&&a.a.createElement(x.Link,{to:s},a.a.createElement(G.a,null)),d&&a.a.createElement("a",{href:d,target:"_blank",rel:"noreferrer noopener"},a.a.createElement(H.a,null)))))}))))},J=n("pS6H"),X=n("0n5T"),F=function(e,t){return void 0===t&&(t=1),"rgba("+parseInt(e.slice(1,3),16)+","+parseInt(e.slice(3,5),16)+","+parseInt(e.slice(5,7),16)+","+t+")"};function B(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))"]);return B=function(){return e},e}var U=c.c.div.withConfig({displayName:"styles__ArchiveGrid",componentId:"pefmrn-0"})(["",";",""],m.a.grid,p.a.mobile(B())),Y=c.c.div.withConfig({displayName:"styles__ArchiveCard",componentId:"pefmrn-1"})(["width:100%;display:flex;flex-direction:column;justify-content:space-between;min-height:5rem;padding:1rem;z-index:3;background:var(--background-alt);border-radius:8px;",";border:0.5px solid rgba(0,0,0,0.06);border-left:6px solid ",";box-shadow:1px 4px 6px -1px rgba(0,0,0,0.1),1px 2px 4px -1px rgba(0,0,0,0.06);&:hover{box-shadow:0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.1);transform:translateY(-6px);}"],m.a.transitionAll,(function(e){return e.color})),Z=c.c.div.withConfig({displayName:"styles__ArchiveHeader",componentId:"pefmrn-2"})(["height:3rem;",";"],m.a.flexBetween),K=c.c.div.withConfig({displayName:"styles__ArchiveHeaderTag",componentId:"pefmrn-3"})(["height:3rem;width:3rem;",";border-radius:50%;background-color:",";svg{stroke:",";}"],m.a.flexCenter,(function(e){var t=e.color;return F(t||"#000000",.2)}),(function(e){var t=e.color;return F(t||"#000000",.95)})),Q=c.c.p.withConfig({displayName:"styles__ArchiveTitle",componentId:"pefmrn-4"})(["font-size:var(--fs-xl);font-weight:500;margin:1rem 0 2rem 0;"]),$=c.c.div.withConfig({displayName:"styles__ArchiveDescription",componentId:"pefmrn-5"})(["p{margin-bottom:1.5rem;a{","}}"],m.a.inlineLink),ee=c.c.span.withConfig({displayName:"styles__ArchiveTag",componentId:"pefmrn-6"})(["font-size:var(--fs-sm);font-family:var(--ff-mono);&:not(:first-child)::before{content:' · ';}"]),te=c.c.div.withConfig({displayName:"styles__LinkWrapper",componentId:"pefmrn-7"})(["a{margin-left:0.5rem;}"]),ne=function(e){var t=e.archive.edges.map((function(e){return e.node}));return a.a.createElement(d,{id:"archive"},a.a.createElement(S,null,"Other Projects/Links"),a.a.createElement(U,null,t.map((function(e,t){var n=e.frontmatter,r=n.title,i=n.icon,o=n.iconColor,l=n.tags,c=n.github,d=n.external,u=n.internal;return a.a.createElement("div",{style:{display:"flex"},key:t,"data-sal":"slide-up","data-sal-duration":"300","data-sal-delay":t%3*150,"data-sal-easing":"ease-out"},a.a.createElement(Y,{color:o},a.a.createElement(Z,null,a.a.createElement(K,{color:o},a.a.createElement(s.a,{name:i,size:30})),a.a.createElement(te,null,c&&a.a.createElement("a",{href:c,target:"_blank",rel:"noreferrer"},a.a.createElement(s.a,{name:"GitHub"})),d&&a.a.createElement("a",{href:u,target:"_blank",rel:"noreferrer"},a.a.createElement(s.a,{name:"ExternalLink"})),u&&a.a.createElement(x.Link,{to:u},a.a.createElement(s.a,{name:"Link"})))),a.a.createElement("div",null,a.a.createElement(Q,null,r),a.a.createElement(f.MDXRenderer,{components:{wrapper:$}},e.body)),a.a.createElement("div",null," ",l.map((function(e,t){return a.a.createElement(ee,{key:t},e)})))))}))))},re=n("OdDz");function ae(){var e=oe(["\n\n    & > div {\n      overflow: visible !important;\n\n      &::before {\n        position: absolute;\n        content: '';\n        display: block;\n        top: 4rem;\n        left: 3rem;\n        height: 100%;\n        width: 100%;\n        background-size: 20px;\n        background-repeat: repeat;\n        background-color: var(--cl-primary);\n        -webkit-mask-image: url(",");\n        mask-image: url(",");\n      }\n    }\n    "]);return ae=function(){return e},e}function ie(){var e=oe(["\n    grid-template-columns:55% 30%;\n    justify-content: space-betweeen;\n"]);return ie=function(){return e},e}function oe(e,t){return t||(t=e.slice(0)),e.raw=t,e}var le=c.c.div.withConfig({displayName:"styles__Grid",componentId:"uwb108-0"})(["",";",";",""],m.a.flexCenter,m.a.grid,p.a.laptop(ie())),se=c.c.div.withConfig({displayName:"styles__AboutText",componentId:"uwb108-1"})(["max-width:90%;p{font-size:var(--fs-base);a{",";}}ul{"," grid-template-columns:1fr 1fr;width:100%;padding:0;margin:2rem 0;grid-row-gap:1rem;list-style-type:none;li{letter-spacing:var(--ls-wide);font-family:var(--ff-mono);font-size:var(--fs-sm);&::before{content:'○';position:relative;font-size:var(--fs-sm);left:0;margin-right:5px;color:var(--cl-primary);}}}"],m.a.inlineLink,m.a.grid),ce=c.c.div.withConfig({displayName:"styles__ImageContainer",componentId:"uwb108-2"})(["filter:contrast(90%);",";& > div{max-width:350px;img{background:var(--cl-primary);}}",""],m.a.flexCenter,p.a.tablet(ae(),re,re)),de=function(e){var t=e.about;return a.a.createElement(d,{id:"about"},a.a.createElement(le,null,a.a.createElement("div",null,a.a.createElement(S,null,"About Me"),a.a.createElement(f.MDXRenderer,{components:{wrapper:se}},t.edges[0].node.body)),a.a.createElement(ce,null,a.a.createElement(j,{fluid:t.edges[0].node.frontmatter.photo.childImageSharp.fluid}))))},ue=n("r2cD");function fe(){var e=ge(["\n    transform: translateY(","%);\n    border-left: 2px solid var(--cl-primary);\n    border-bottom: none;\n    width: 2px;\n"]);return fe=function(){return e},e}function me(){var e=ge(["\n    flex-direction: column;\n    border-bottom: none;\n    border-left: 1px solid var(--cl-text-main);\n\n  "]);return me=function(){return e},e}function pe(){var e=ge(["grid-template-columns: 25% 60%;"]);return pe=function(){return e},e}function ge(e,t){return t||(t=e.slice(0)),e.raw=t,e}var he=c.c.div.withConfig({displayName:"styles__JobContainer",componentId:"sc-1sjc024-0"})(["",";",";min-height:300px;"],m.a.grid,p.a.tablet(pe())),ve=c.c.div.withConfig({displayName:"styles__Tab",componentId:"sc-1sjc024-1"})(["",";width:100%;"],m.a.flexCenter),ye=c.c.ul.withConfig({displayName:"styles__TabList",componentId:"sc-1sjc024-2"})(["z-index:0;display:flex;padding:0;flex-direction:row;border-bottom:1px solid var(--cl-text-main);border-left:none;",";list-style:outside none none;"],p.a.tablet(me())),be=c.c.li.withConfig({displayName:"styles__TabItem",componentId:"sc-1sjc024-3"})(["",";z-index:8;padding:0;cursor:pointer;color:",";font-size:var(--fs-base);text-transform:uppercase;transition:all 0.3s ease-in-out;height:var(--min-press-size);width:100%;min-width:var(--tab-width);&:hover{background-color:var(--background-alt);}"],m.a.flexCenter,(function(e){return e.selected?"var(--cl-primary)":"var(--cl-text-alt)"})),we=c.c.div.withConfig({displayName:"styles__Glider",componentId:"sc-1sjc024-4"})(["transition:transform 0.3s ease;position:absolute;display:flex;height:var(min-press-size);border-bottom:2px solid var(--cl-primary);background:transparent;z-index:8;padding:0;width:var(--tab-width);border-left:none;height:var(--tab-height);transform:translateX(","%);",";"],(function(e){return 100*e.offset}),p.a.tablet(fe(),(function(e){return 100*e.offset}))),xe=c.c.div.withConfig({displayName:"styles__JobItem",componentId:"sc-1sjc024-5"})(["margin:0.5rem 0 2.5rem 0;transition:transform 0.4s ease-in-out;animation:"," 0.4s ease-in-out forwards,"," 0.4s ease-in-out forwards;opacity:0;"],ue.c,ue.a),Ee=c.c.h3.withConfig({displayName:"styles__JobHeader",componentId:"sc-1sjc024-6"})(["strong{color:var(--cl-primary);}font-size:var(--fs-xl);a{","}font-size:var(--fs-lg);font-weight:500;margin:0.4rem 0;"],m.a.inlineLink),Ie=c.c.p.withConfig({displayName:"styles__JobDuration",componentId:"sc-1sjc024-7"})(["font-size:var(--fs-sm);line-height:var(--lh-xl);color:var(--cl-text-alt);"]),_e=c.c.div.withConfig({displayName:"styles__JobDescription",componentId:"sc-1sjc024-8"})(["ul{padding:0;margin:0;list-style:outside none none;}li{position:relative;padding-left:1rem;margin:0.4rem 0;line-height:var(--lh-lg);&::before{content:'▹';position:absolute;left:0;color:var(--cl-primary);}}"]),Se=function(e){var t=e.jobs.edges.map((function(e){return e.node})),n=Object(r.useState)(0),i=n[0],o=n[1];return a.a.createElement(d,{id:"work"},a.a.createElement(S,null,"Where I've worked"),a.a.createElement(he,null,a.a.createElement(ve,null,a.a.createElement(ye,null,t.map((function(e,t){return a.a.createElement(be,{key:e.frontmatter.titleExtension,onClick:function(){return o(t)},selected:i==t},e.frontmatter.titleExtension)})),a.a.createElement(we,{offset:i}))),a.a.createElement("div",null,t.map((function(e,t){var n=e.frontmatter,r=n.title,o=n.subTitle,l=n.titleExtension,s=n.location;return i==t&&a.a.createElement(xe,{key:t},a.a.createElement("span",null,a.a.createElement(Ee,null,r," @ ",l)),a.a.createElement(Ie,null,o," // ",s),a.a.createElement(f.MDXRenderer,{components:{wrapper:_e}},e.body))})))))},Ce=n("cKXd"),ke=n("nvEY"),je="3547836518";t.default=function(e){var t=e.data;return Object(r.useEffect)((function(){console.log(String.fromCodePoint(128064)+" Hello there")})),a.a.createElement(w.b,null,a.a.createElement(J.a,null),a.a.createElement(i.a,{title:"Home"}),a.a.createElement(o.a,null,a.a.createElement(Ce.a,null),a.a.createElement(l.a,null,a.a.createElement(b,{intro:t.intro}),a.a.createElement(de,{about:t.about}),a.a.createElement(Se,{jobs:t.jobs}),a.a.createElement(V,{featured:t.featured}),a.a.createElement(ne,{archive:t.archive})),a.a.createElement(X.a,null),a.a.createElement(ke.a,null)))}},SGlo:function(e,t,n){"use strict";var r=n("rj/q"),a=n("N+BI").getWeak,i=n("1a8y"),o=n("BjK0"),l=n("xa9o"),s=n("yde8"),c=n("Wadk"),d=n("qDzq"),u=n("O1i0"),f=c(5),m=c(6),p=0,g=function(e){return e._l||(e._l=new h)},h=function(){this.a=[]},v=function(e,t){return f(e.a,(function(e){return e[0]===t}))};h.prototype={get:function(e){var t=v(this,e);if(t)return t[1]},has:function(e){return!!v(this,e)},set:function(e,t){var n=v(this,e);n?n[1]=t:this.a.push([e,t])},delete:function(e){var t=m(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,n,i){var c=e((function(e,r){l(e,c,t,"_i"),e._t=t,e._i=p++,e._l=void 0,null!=r&&s(r,n,e[i],e)}));return r(c.prototype,{delete:function(e){if(!o(e))return!1;var n=a(e);return!0===n?g(u(this,t)).delete(e):n&&d(n,this._i)&&delete n[this._i]},has:function(e){if(!o(e))return!1;var n=a(e);return!0===n?g(u(this,t)).has(e):n&&d(n,this._i)}}),c},def:function(e,t,n){var r=a(i(t),!0);return!0===r?g(e).set(t,n):r[e._i]=n,e},ufstore:g}},X8hv:function(e,t,n){function r(e,t,n){return(r=a()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var a=new(Function.bind.apply(e,r));return n&&i(a,n.prototype),a}).apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n("xtjI"),n("Dq+y"),n("Ggvi"),n("rzGZ"),n("m210"),n("4DPX"),n("YbXK"),n("cFtU"),n("pJf4"),n("q8oJ"),n("8npG"),n("nWfQ"),n("xtjI"),n("Dq+y"),n("Ggvi"),n("rzGZ"),n("m210"),n("4DPX"),n("YbXK"),n("cFtU"),n("pJf4"),n("q8oJ"),n("8npG"),n("nWfQ"),n("nWfQ"),n("pJf4"),n("q8oJ"),n("YbXK"),n("cFtU"),n("m210"),n("xtjI"),n("4DPX"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi");var u=n("q1tI"),f=n("7ljp").mdx,m=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.children,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["scope","children"]),i=m(t),l=u.useMemo((function(){if(!n)return null;var e=c({React:u,mdx:f},i),t=Object.keys(e),a=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(o(t),[""+n])).apply(void 0,[{}].concat(o(a)))}),[n,t]);return u.createElement(l,c({},a))}},eMsz:function(e,t,n){"use strict";var r,a=n("emib"),i=n("Wadk")(0),o=n("IYdN"),l=n("N+BI"),s=n("k5Iv"),c=n("SGlo"),d=n("BjK0"),u=n("O1i0"),f=n("O1i0"),m=!a.ActiveXObject&&"ActiveXObject"in a,p=l.getWeak,g=Object.isExtensible,h=c.ufstore,v=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},y={get:function(e){if(d(e)){var t=p(e);return!0===t?h(u(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return c.def(u(this,"WeakMap"),e,t)}},b=e.exports=n("94Pd")("WeakMap",v,y,c,!0,!0);f&&m&&(s((r=c.getConstructor(v,"WeakMap")).prototype,y),l.NEED=!0,i(["delete","has","get","set"],(function(e){var t=b.prototype,n=t[e];o(t,e,(function(t,a){if(d(t)&&!g(t)){this._f||(this._f=new r);var i=this._f[e](t,a);return"set"==e?this:i}return n.call(this,t,a)}))})))},nWfQ:function(e,t,n){var r=n("P8UN"),a=n("nsRs"),i=n("nONw"),o=n("1a8y"),l=n("BjK0"),s=n("96qb"),c=n("16Xr"),d=(n("emib").Reflect||{}).construct,u=s((function(){function e(){}return!(d((function(){}),[],e)instanceof e)})),f=!s((function(){d((function(){}))}));r(r.S+r.F*(u||f),"Reflect",{construct:function(e,t){i(e),o(t);var n=arguments.length<3?e:i(arguments[2]);if(f&&!u)return d(e,t,n);if(e==n){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var r=[null];return r.push.apply(r,t),new(c.apply(e,r))}var s=n.prototype,m=a(l(s)?s:Object.prototype),p=Function.apply.call(e,m,t);return l(p)?p:m}})},nvEY:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("vOnD"),o=n("ek6p"),l=i.c.footer.attrs({id:"contact"}).withConfig({displayName:"styles__FooterContainer",componentId:"sc-1r29uui-0"})(["grid-area:footer-start / footer-start / footer-end / footer-end;position:relative;margin:2.5rem 0 3rem 0;width:100%;"]),s=i.c.div.withConfig({displayName:"styles__Content",componentId:"sc-1r29uui-1"})(["",";",";grid-template-rows:auto auto;max-width:80vw;margin:0 auto;padding:0 1rem;"],o.a.contentSpace,o.a.grid),c=i.c.div.withConfig({displayName:"styles__ContentRow",componentId:"sc-1r29uui-2"})(["display:flex;justify-content:space-between;align-items:flex-end;margin:1.5rem 0;a{margin-right:1rem;}"]),d=i.c.div.withConfig({displayName:"styles__TextWrapper",componentId:"sc-1r29uui-3"})(["h2{font-family:var(--ff-alt);font-size:var(--fs-4xl);}a{",";}"],o.a.inlineLink),u=n("LeJ0"),f=n("4Lqt"),m=function(){return a.a.createElement(l,null,a.a.createElement(s,null,a.a.createElement(c,null,a.a.createElement(d,null,a.a.createElement("h2",null,"Let's Build Something Together"),a.a.createElement("p",null,"Need a developer? Or maybe you just want to chat? Feel free to reach me out."),a.a.createElement("a",{href:"mailto:"+u.email},u.email))),a.a.createElement(c,null,a.a.createElement(f.a,null),a.a.createElement("div",null,a.a.createElement("a",{target:"_blank",rel:"noreferrer",href:u.github},"github"),a.a.createElement("a",{target:"_blank",rel:"noreferrer",href:u.linkedin},"linkedin")))))};t.a=m},zTTH:function(e,t,n){"use strict";var r=n("P8UN"),a=n("Wadk")(6),i="findIndex",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),r(r.P+r.F*o,"Array",{findIndex:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),n("Dq1/")(i)}}]);
//# sourceMappingURL=component---src-pages-index-tsx-de75eb78b937c142ce46.js.map