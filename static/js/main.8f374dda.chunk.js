(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{103:function(e,t,n){e.exports={select:"CountrySelect_select__2vApv"}},254:function(e,t,n){},255:function(e,t,n){"use strict";n.r(t);var r,a=n(0),c=n.n(a),s=n(97),o=n.n(s),i=n(276),u=n(278),d=n(269),l=n(110),p=n(281),f=n(270),j=n(271),b=n(98),h=n.n(b),v=n(31),O=n.n(v),x=n(64),m=n(2),_=function(e){var t=e.name,n=e.value,r=e.type,a=e.lastUpdate,c=e.description,s=new Date(a).toLocaleDateString();return Object(m.jsx)(d.a,{item:!0,children:Object(m.jsx)(p.a,{children:Object(m.jsxs)(f.a,{className:O()(x.card,x[r]),children:[Object(m.jsx)(j.a,{color:"textSecondary",gutterBottom:!0,children:t}),Object(m.jsx)(j.a,{variant:"h5",children:Object(m.jsx)(h.a,{start:0,end:n,duration:1,separator:","})}),Object(m.jsx)(j.a,{color:"textSecondary",children:s}),Object(m.jsx)(j.a,{variant:"body2",children:c})]})})})},S={confirmed:{name:"\u0418\u043d\u0444\u0435\u0446\u0438\u0440\u043e\u0432\u0430\u043d\u043e",text:"\u0427\u0438\u0441\u043b\u043e \u0437\u0430\u0431\u043e\u043b\u0435\u0432\u0448\u0438\u0445"},recovered:{name:"\u0412\u044b\u0437\u0434\u043e\u0440\u043e\u0432\u0435\u043b\u043e",text:"\u0427\u0438\u0441\u043b\u043e \u0432\u044b\u043b\u0435\u0447\u0438\u0432\u0448\u0438\u0445\u0441\u044f"},deaths:{name:"\u041b\u0435\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0438\u0441\u0445\u043e\u0434\u044b",text:"\u0427\u0438\u0441\u043b\u043e \u0443\u043c\u0435\u0440\u0448\u0438\u0445"}},y=function(e){var t=e.data,n=t.lastUpdate,r=Object(l.a)(t,["lastUpdate"]);return Object(m.jsx)(d.a,{spacing:3,justify:"center",container:!0,children:Object.keys(r).map((function(e){return Object(m.jsx)(_,{name:S[e].name,description:S[e].text,value:t[e],type:e,lastUpdate:n},e)}))})},C=n(279),g=n(103),T=function(e){var t=e.countries,n=e.isLoading,r=e.handleCountryChange;return Object(m.jsxs)(u.a,{display:"flex",alignItems:"flex-end",justifyContent:"center",marginTop:7,marginBottom:7,children:[n&&Object(m.jsx)(B,{small:!0,fast:!0}),Object(m.jsxs)(C.a,{className:g.select,onChange:function(e){return r(e.currentTarget.value)},children:[Object(m.jsx)("option",{value:"all",children:"\u0412\u0435\u0441\u044c \u043c\u0438\u0440"}),t.map((function(e){return Object(m.jsx)("option",{value:e.name,children:e.name},e.name)}))]})]})},k=n(104),w=function(e){var t=e.data,n=t.confirmed,r=t.recovered,a=t.deaths,c=e.country;return Object(m.jsx)(d.a,{item:!0,xs:12,md:8,children:Object(m.jsx)(k.a,{type:"bar",data:{labels:["\u0418\u043d\u0444\u0435\u0446\u0438\u0440\u043e\u0432\u0430\u043d\u043e","\u0412\u044b\u0437\u0434\u043e\u0440\u043e\u0432\u0435\u043b\u043e","\u041b\u0435\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0438\u0441\u0445\u043e\u0434\u044b"],datasets:[{hoverBackgroundColor:["rgba(0, 0, 255, .5)","rgba(0, 255, 0, .5)","rgba(255, 0, 0, .5)"],borderWidth:1,borderColor:["rgba(0, 0, 255, .5)","rgba(0, 255, 0, .5)","rgba(255, 0, 0, .5)"],backgroundColor:["rgba(0, 0, 255, .3)","rgba(0, 255, 0, .3)","rgba(255, 0, 0, .3)"],data:[n,r,a]}]},options:{legend:!1,title:{display:!0,text:"\u0410\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 ".concat(c||"\u0412\u0441\u0435\u043c \u043c\u0438\u0440\u0435")},animation:{duration:250,easing:"linear"}}})})},L=n(272),E=n(273),N=n(274),F=n(275),I=n(50),U=function(e){var t=e.countriesStats,n=e.isLoading,r=t.length>0?t.filter((function(e){return e})).map((function(e,t){return Object(m.jsxs)(L.a,{children:[Object(m.jsx)(E.a,{className:I.cell,padding:"none",children:e.name}),Object(m.jsx)(E.a,{className:I.cell,padding:"none",children:e.confirmed})]},t)})):[];return Object(m.jsx)(d.a,{item:!0,xs:8,md:4,children:Object(m.jsxs)(u.a,{marginTop:5,children:[Object(m.jsx)(u.a,{fontSize:"1.1rem",fontWeight:500,marginBottom:1,component:"p",children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u043d\u044b\u0435 \u0441\u043b\u0443\u0447\u0430\u0438 \u043f\u043e \u0441\u0442\u0440\u0430\u043d\u0430\u043c"}),Object(m.jsx)("div",{className:I.tableWrapper,children:n||0===r.length?Object(m.jsx)(B,{center:!0}):Object(m.jsx)(N.a,{children:Object(m.jsx)(F.a,{children:r})})})]})})},A=c.a.memo(U),W=n(11),D=n(27),B=function(e){var t,n=e.small,r=e.center,a=e.fast;return Object(m.jsx)("div",{className:O()(Object(W.a)({},D.center,r)),children:Object(m.jsx)("svg",{className:O()(D.spinner,(t={},Object(W.a)(t,D.small,n),Object(W.a)(t,D.fast,a),t)),viewBox:"0 0 50 50",children:Object(m.jsx)("circle",{className:D.path,cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"5"})})})},G=Object(a.createContext)(null),R=function(){var e=Object(a.useContext)(G),t=e.stats,n=e.countries,r=e.countriesStats,c=e.country,s=e.isFetchingCountriesStats,o=e.isFetchingCovidStats,l=e.fetchCovidStats,p=e.fetchCountries,f=e.fetchCountryStats,j=e.fetchCountriesStats;return Object(a.useEffect)((function(){l(),p()}),[]),Object(a.useEffect)((function(){j()}),[n]),Object(m.jsxs)(i.a,{maxWidth:"lg",children:[Object(m.jsx)(u.a,{component:"h1",fontSize:"5rem",textAlign:"center",fontWeight:700,children:"Covid-19"}),Object(m.jsx)(y,{data:t}),Object(m.jsx)(T,{isLoading:o,handleCountryChange:f,countries:n}),Object(m.jsxs)(d.a,{container:!0,justify:"center",spacing:3,children:[Object(m.jsx)(w,{data:t,country:c}),Object(m.jsx)(A,{isLoading:s,countriesStats:r})]})]})},H=n(107),V=n(7),z=n.n(V),J=n(16),P=n(109),M=n(68),Y=n(12),K="SET_COVID_STATS",Q="SET_COUNTRIES",q="SET_COUNTRY",X="SET_COUNTRIES_STATS",Z="SET_IS_FETCHING_COVID_STATS",$="SET_IS_FETCHING_COUNTRIES_STATS",ee=(r={},Object(W.a)(r,K,(function(e,t){var n=t.payload;return Object(Y.a)(Object(Y.a)({},e),{},{stats:Object(Y.a)({},n)})})),Object(W.a)(r,Q,(function(e,t){var n=t.payload;return Object(Y.a)(Object(Y.a)({},e),{},{countries:Object(M.a)(n)})})),Object(W.a)(r,q,(function(e,t){var n=t.payload;return Object(Y.a)(Object(Y.a)({},e),{},{country:n})})),Object(W.a)(r,X,(function(e,t){var n=t.payload;return Object(Y.a)(Object(Y.a)({},e),{},{countriesStats:Object(M.a)(n)})})),Object(W.a)(r,Z,(function(e,t){var n=t.payload;return Object(Y.a)(Object(Y.a)({},e),{},{isFetchingCovidStats:n})})),Object(W.a)(r,$,(function(e,t){var n=t.payload;return Object(Y.a)(Object(Y.a)({},e),{},{isFetchingCountriesStats:n})})),Object(W.a)(r,"DEFAULT",(function(e){return e})),r),te=function(e,t){return(ee[t.type]||ee.DEFAULT)(e,t)},ne=n(108),re=n.n(ne).a.create({baseURL:"https://covid19.mathdro.id/api"}),ae=function(){var e=Object(J.a)(z.a.mark((function e(t){var n,r,a,c,s,o;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re.get(t);case 2:return n=e.sent,r=n.data,a=r.confirmed,c=r.recovered,s=r.deaths,o=r.lastUpdate,e.abrupt("return",{confirmed:a.value,recovered:c.value,deaths:s.value,lastUpdate:o});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ce={fetchGeneralStats:function(){return Object(J.a)(z.a.mark((function e(){var t,n,r,a,c;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ae();case 3:return t=e.sent,n=t.confirmed,r=t.recovered,a=t.deaths,c=t.lastUpdate,e.abrupt("return",{confirmed:n,recovered:r,deaths:a,lastUpdate:c});case 11:e.prev=11,e.t0=e.catch(0),console.error("fetchGeneralStats",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()},fetchCountries:function(){return Object(J.a)(z.a.mark((function e(){var t,n;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,re.get("countries");case 3:return t=e.sent,n=t.data.countries,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.error("fetchCountries",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},fetchCountryStats:function(e){return Object(J.a)(z.a.mark((function t(){var n,r,a,c;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ae("countries/".concat(e));case 3:return n=t.sent,r=n.confirmed,a=n.recovered,c=n.deaths,t.abrupt("return",{confirmed:r,recovered:a,deaths:c});case 10:t.prev=10,t.t0=t.catch(0),console.error("fetchCountryStats",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()}},se={stats:{},countries:[],countriesStats:[],country:null,isFetchingCountriesStats:!1,isFetchingCovidStats:!1},oe=function(e){var t=e.children,n=Object(a.useReducer)(te,se),r=Object(P.a)(n,2),c=r[0],s=r[1],o=c.stats,i=c.countries,u=c.countriesStats,d=c.country,l=c.isFetchingCountriesStats,p=c.isFetchingCovidStats,f=function(e){return s({type:Z,payload:e})},j=function(e){return s({type:$,payload:e})},b=function(){var e=Object(J.a)(z.a.mark((function e(){var t;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,ce.fetchGeneralStats();case 3:t=e.sent,f(!1),s({type:K,payload:t});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(J.a)(z.a.mark((function e(){var t;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ce.fetchCountries();case 2:t=e.sent,s({type:Q,payload:t});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(J.a)(z.a.mark((function e(t){var n;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("all"===t){e.next=9;break}return f(!0),e.next=4,ce.fetchCountryStats(t);case 4:n=e.sent,s({type:K,payload:n}),f(!1),e.next=10;break;case 9:b();case 10:s({type:q,payload:"all"!==t?t:null});case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(J.a)(z.a.mark((function e(){var t,n,r,a,c,o;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j(!0),t=[],e.prev=2,!(i.length>0)){e.next=24;break}n=i.filter((function(e){return"Gambia"!==e.name})),r=Object(H.a)(n),e.prev=6,r.s();case 8:if((a=r.n()).done){e.next=16;break}return c=a.value,e.next=12,ce.fetchCountryStats(c.name);case 12:o=e.sent,t.push(o);case 14:e.next=8;break;case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(6),r.e(e.t0);case 21:return e.prev=21,r.f(),e.finish(21);case 24:e.next=29;break;case 26:e.prev=26,e.t1=e.catch(2),console.error("fetchCountriesStats",e.t1);case 29:return e.prev=29,j(!1),s({type:X,payload:t}),e.finish(29);case 33:case"end":return e.stop()}}),e,null,[[2,26,29,33],[6,18,21,24]])})));return function(){return e.apply(this,arguments)}}();return Object(m.jsx)(G.Provider,{value:{fetchCovidStats:b,fetchCountries:h,fetchCountryStats:v,fetchCountriesStats:O,stats:o,countries:i,country:d,countriesStats:u,isFetchingCountriesStats:l,isFetchingCovidStats:p},children:t})};n(254);o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(oe,{children:Object(m.jsx)(R,{})})}),document.getElementById("root"))},27:function(e,t,n){e.exports={center:"Loader_center__3K0uA",spinner:"Loader_spinner__LDYWH",rotate:"Loader_rotate__1aCys",path:"Loader_path__2Nl2P",dash:"Loader_dash__2ueTb",small:"Loader_small__1NbJD",fast:"Loader_fast__1P3eN"}},50:function(e,t,n){e.exports={title:"CountriesList_title__zlQAc",cell:"CountriesList_cell__3F0cl",tableWrapper:"CountriesList_tableWrapper__3VMC8"}},64:function(e,t,n){e.exports={card:"CardItem_card__1lSfp",confirmed:"CardItem_confirmed__2uEaA",recovered:"CardItem_recovered__3aVev",deaths:"CardItem_deaths__3-9H1"}}},[[255,1,2]]]);
//# sourceMappingURL=main.8f374dda.chunk.js.map