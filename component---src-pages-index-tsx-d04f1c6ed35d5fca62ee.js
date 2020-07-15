(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{QeBL:function(e,n,t){"use strict";t.r(n),t.d(n,"query",(function(){return re}));var r=t("q1tI"),a=t.n(r),i=t("c5LU"),o=t("1mWn"),l=t("9Um5"),c=(t("pJf4"),t("vOnD")),m=t("mAh5"),u=t("MlwD"),d=t("ek6p"),s=t("532r"),f=t("eVT4"),p=t("LeJ0");function g(){var e=C(["font-size: 1.2rem;"]);return g=function(){return e},e}function h(){var e=C(["\n     grid-column: 5 /8;\n     grid-row: 2 / auto;\n     "]);return h=function(){return e},e}function v(){var e=C(["\n     grid-column: 4 / span 2;\n     grid-row: 2 / auto;\n     & > div {\n       overflow: visible !important;\n       &::before {\n         position: absolute;\n         content: '';\n         display: block;\n         top: 1.5rem;\n         left: 1.5rem;\n         height: 100%;\n         width: 100%;\n         border: 2px solid ",";\n\n       }\n     }\n     "]);return v=function(){return e},e}function E(){var e=C(["\n    grid-template-columns: repeat(8, 1fr);\n    grid-template-rows: repeat(4, minmax(calc((100vmin - 64px) / 4), 200px));\n  "]);return E=function(){return e},e}function x(){var e=C(["\n    grid-template-columns: repeat(6, 1fr);\n    grid-template-rows: repeat(4, minmax(calc((100vmin - 64px) / 4),150px));\n  "]);return x=function(){return e},e}function w(){var e=C(["\n   grid-column: 1 / 6;\n   grid-row: 2 / auto;\n   "]);return w=function(){return e},e}function b(){var e=C(["\n   grid-column: 2 / 5;\n   grid-row: 2 / auto;\n   "]);return b=function(){return e},e}function _(){var e=C(["\n    grid-column: 1 / -1;\n    grid-row: 2 / auto;"]);return _=function(){return e},e}function y(){var e=C(["\n    grid-column: 1 / -1;\n    grid-row: 2 / auto;\n    "]);return y=function(){return e},e}function k(){var e=C(["\n    grid-column: 1 / 1;\n    grid-row: 1 / auto;\n  "]);return k=function(){return e},e}function I(){var e=C(["\n    grid-column: 1 / 1;\n    grid-row: 1 / auto;"]);return I=function(){return e},e}function C(e,n){return n||(n=e.slice(0)),e.raw=n,e}var A=c.d.h1.withConfig({displayName:"Intro__Headline",componentId:"sc-1srajtn-0"})(["font-family:",";z-index:4;color:black;filter:blur(0.2px);grid-area:1 / 1 / -1 / -1;"," "," ",""],f.b.muli,d.a.heading,s.a.sm(I()),s.a.lg(k())),N=c.d.div.withConfig({displayName:"Intro__CTA",componentId:"sc-1srajtn-1"})([""," ",""],s.a.sm(y()),s.a.lg(_())),L=c.d.div.withConfig({displayName:"Intro__IntroTextContainer",componentId:"sc-1srajtn-2"})(["display:grid;grid-template-columns:1fr;grid-template-rows:auto auto;"," ",""],s.a.sm(b()),s.a.lg(w())),j=c.d.div.withConfig({displayName:"Intro__IntroContainer",componentId:"sc-1srajtn-3"})(["width:100%;display:grid;grid-template-columns:1fr;grid-template-rows:auto auto;"," "," ",":nth-child(2){z-index:9;color:white;mix-blend-mode:color-dodge;}",":nth-child(3){z-index:10;mix-blend-mode:exclusion;color:",";}"],s.a.sm(x()),s.a.lg(E()),A,A,(function(e){return e.theme.reverse})),z=c.d.div.withConfig({displayName:"Intro__ImageContainer",componentId:"sc-1srajtn-4"})(["z-index:5;position:relative;filter:contrast(90%);grid-column:1 / 1;grid-row:2 / 2;& > div{img{background:",";}}"," ",""],(function(e){return e.theme.primary}),s.a.sm(v(),(function(e){return e.theme.primary})),s.a.lg(h())),H=c.d.div.withConfig({displayName:"Intro__Statement",componentId:"sc-1srajtn-5"})(["position:relative;max-width:75%;z-index:10;p{"," a{","}}"],s.a.md(g()),d.a.inlineLink),T=c.d.div.withConfig({displayName:"Intro__Line",componentId:"sc-1srajtn-6"})(["height:1px;width:80px;background-color:",";"],(function(e){return e.theme.onBackground})),S=c.d.div.withConfig({displayName:"Intro__SocialContainer",componentId:"sc-1srajtn-7"})(["display:table;padding:1rem 0;a{margin-right:0.8rem;}"]),D=function(e){var n=e.intro,t=n.edges[0].node.frontmatter,r=t.welcomeMessage,i=t.profilePic;return a.a.createElement("section",{id:"introduction"},a.a.createElement(j,null,a.a.createElement(L,null,a.a.createElement(A,null,r),a.a.createElement(A,null,r),a.a.createElement(A,null,r),a.a.createElement(N,null,a.a.createElement(H,{dangerouslySetInnerHTML:{__html:n.edges[0].node.html}}),a.a.createElement(T,null),a.a.createElement(S,null,p.socials.map((function(e,n){return a.a.createElement("a",{key:n,title:e.name+" Link",href:e.url,target:"_blank",rel:"noreferrer"},a.a.createElement(u.a,{name:e.name}))}))))),a.a.createElement(z,null,a.a.createElement(m.a,{fluid:i.childImageSharp.fluid}))))},M=t("rL/M"),O=t("c2Qm"),B=t("t09W"),W=t("NZY8"),J=t("g//x"),G=function(e){var n=e.featured,t=n.edges.map((function(e){return e.node}));return a.a.createElement("section",{id:"featured",style:{minHeight:"100vh"}},a.a.createElement(B.a,null,"Featured Projects"),t.map((function(e,n){var t=e.frontmatter,r=t.title,i=t.description,o=t.image,l=t.skills,c=t.external,u=t.github,d=t.blog,s=t.darkCover;return a.a.createElement(O.g,{alignment:"left",key:n,"data-sal":"slide-up","data-sal-duration":"300","data-sal-easing":"ease-out",isBackgroundDark:s},a.a.createElement(m.a,{title:r,fluid:o.childImageSharp.fluid}),a.a.createElement(O.c,null,r),a.a.createElement(O.b,null,i),a.a.createElement(O.f,null,l.map((function(e,n){return a.a.createElement(O.e,{key:n},e)}))),a.a.createElement(O.a,null,d&&a.a.createElement(O.d,{to:d},"Read More"),u&&a.a.createElement("a",{title:"GitHub Repo",href:u,target:"_blank",rel:"noreferrer"},a.a.createElement(W.a,null)),c&&a.a.createElement("a",{title:"Demo site",href:c,target:"_blank",rel:"noreferrer"},a.a.createElement(J.a,null))))})))},P=t("pS6H"),Y=t("0n5T"),q=t("Wbzz"),Q=t("0lfv"),R=c.d.div.withConfig({displayName:"Archive__ArchiveGrid",componentId:"sc-2amud1-0"})(["",""],d.a.grid("repeat(auto-fill, minmax(300px, 1fr))")),U=c.d.div.withConfig({displayName:"Archive__ArchiveCard",componentId:"sc-2amud1-1"})(["display:flex;flex-direction:column;justify-content:space-between;min-height:5rem;padding:1rem;z-index:3;background:",";",";border:0.5px solid rgba(0,0,0,0.06);box-shadow:1px 4px 6px -1px rgba(0,0,0,0.1),1px 2px 4px -1px rgba(0,0,0,0.06);&:hover{box-shadow:0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.1);transform:translateY(-6px);}"],(function(e){return e.theme.surface}),d.a.transitionAll),V=c.d.div.withConfig({displayName:"Archive__ArchiveHeader",componentId:"sc-2amud1-2"})(["height:3rem;",";margin-bottom:1rem;"],d.a.flexBetween),F=c.d.div.withConfig({displayName:"Archive__ArchiveHeaderTag",componentId:"sc-2amud1-3"})(["height:3rem;width:3rem;",";border-radius:50%;background-color:",";svg{stroke:",";}"],d.a.flexCenter,(function(e){var n=e.color;return Object(Q.a)(n||"#000000",.2)}),(function(e){var n=e.color;return Object(Q.a)(n||"#000000",.95)})),K=c.d.p.withConfig({displayName:"Archive__ArchiveTitle",componentId:"sc-2amud1-4"})(["",";font-size:",";"],d.a.muli,f.a.xl),X=c.d.div.withConfig({displayName:"Archive__ArchiveDescription",componentId:"sc-2amud1-5"})(["p{"," a{","}}"],d.a.muli,d.a.inlineLink),Z=c.d.span.withConfig({displayName:"Archive__ArchiveTag",componentId:"sc-2amud1-6"})(["",' &:not(:first-child)::before{content:" · "}'],d.a.roboto),$=c.d.div.withConfig({displayName:"Archive__LinkWrapper",componentId:"sc-2amud1-7"})(["a{margin-left:0.5rem;}"]),ee=function(e){var n=e.archive.edges.map((function(e){return e.node}));return a.a.createElement("section",{id:"archive"},a.a.createElement(B.a,null,"Other Projects/Links"),a.a.createElement(R,null,n.map((function(e,n){var t=e.frontmatter,r=t.title,i=t.icon,o=t.iconColor,l=t.tags,c=t.github,m=t.external,d=t.internal;return a.a.createElement(U,{key:n},a.a.createElement(V,null,a.a.createElement(F,{color:o},a.a.createElement(u.a,{name:i,size:30})),a.a.createElement($,null,c&&a.a.createElement("a",{href:c,target:"_blank",rel:"noreferrer"},a.a.createElement(u.a,{name:"GitHub"})),m&&a.a.createElement("a",{href:d,target:"_blank",rel:"noreferrer"},a.a.createElement(u.a,{name:"ExternalLink"})),d&&a.a.createElement(q.Link,{to:d},a.a.createElement(u.a,{name:"Link"})))),a.a.createElement("div",null,a.a.createElement(K,null,r),a.a.createElement(X,{dangerouslySetInnerHTML:{__html:e.html}})),a.a.createElement("div",null," ",l.map((function(e,n){return a.a.createElement(Z,{key:n},e)}))))}))))},ne=t("cKXd"),te=t("nvEY"),re="3052193928";n.default=function(e){var n=e.data;return Object(r.useEffect)((function(){console.log("\n    #     #                              #######                             ### \n    #     # ###### #      #      ######     #    #    # ###### #####  ###### ### \n    #     # #      #      #      #    #     #    #    # #      #    # #      ### \n    ####### #####  #      #      #    #     #    ###### #####  #    # #####   #  \n    #     # #      #      #      #    #     #    #    # #      #####  #          \n    #     # #      #      #      #    #     #    #    # #      #   #  #      ### \n    #     # ###### ###### ###### ######     #    #    # ###### #    # ###### ### ")})),a.a.createElement(M.b,null,a.a.createElement(P.a,null),a.a.createElement(i.a,{title:"Home"}),a.a.createElement(o.a,null,a.a.createElement(ne.a,null),a.a.createElement(l.a,null,a.a.createElement(D,{intro:n.intro}),a.a.createElement(G,{featured:n.featured}),a.a.createElement(ee,{archive:n.archive})),a.a.createElement(Y.a,null),a.a.createElement(te.a,null)))}},t09W:function(e,n,t){"use strict";var r=t("vOnD"),a=t("ek6p"),i=t("eVT4"),o=t("532r");function l(){var e=m(["\n    &::after{\n      content:'';\n      display: block;\n      position: relative;\n      top: 50%;\n      height: 1px;\n      width: 100%;\n      max-width: 200px;\n      margin-left: 1rem;\n      background-color: gray;\n    }"]);return l=function(){return e},e}function c(){var e=m([" font-size: ",""]);return c=function(){return e},e}function m(e,n){return n||(n=e.slice(0)),e.raw=n,e}var u=r.d.p.withConfig({displayName:"SectionHeader",componentId:"sc-1r54xzi-0"})([""," display:flex;position:relative;align-items:center;padding-top:3rem;margin-bottom:5rem;font-size:",";"," &::before{position:relative;color:",";counter-increment:section;content:","}",""],a.a.teko,i.a.xl,o.a.sm(c(),i.a.xxl),(function(e){return e.theme.primary}),(function(e){return e.contentBefore||'"0" counter(section) ". "'}),o.a.sm(l()));n.a=u}}]);
//# sourceMappingURL=component---src-pages-index-tsx-d04f1c6ed35d5fca62ee.js.map