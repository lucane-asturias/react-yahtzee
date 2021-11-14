(this["webpackJsonpreact-yahtzee-game"]=this["webpackJsonpreact-yahtzee-game"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(5),c=n.n(r),o=n(17),i=n.n(o),a=(n(24),n(2)),s=n(6),l=n(4),u=n(3),d=n(11),h=n(15),f=n(16),j=n(7),p=(n(25),n(18)),b=n(8),v=n(0),O=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).handleClick=r.handleClick.bind(Object(j.a)(r)),r}return Object(s.a)(n,[{key:"handleClick",value:function(){this.props.handleClick(this.props.idx)}},{key:"render",value:function(){var e=this.props,t=e.numberWords,n=e.locked,r=e.val,c=e.disabled,o="Die ";return n&&(o+="Die-locked"),e.rolling&&(o+="Die-rolling"),Object(v.jsx)(p.a,{icon:t.get(r),className:o,size:"5x",disabled:c,onClick:this.handleClick})}}]),n}(r.Component);O.defaultProps={numberWords:new Map([[1,b.c],[2,b.f],[3,b.e],[4,b.b],[5,b.a],[6,b.d]]),val:5};var m=O,g=(n(32),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return Object(v.jsx)("div",{className:"Dice",children:this.props.dice.map((function(t,n){return Object(v.jsx)(m,{handleClick:e.props.handleClick,val:t,locked:e.props.locked[n],idx:n,disabled:e.props.disabled,rolling:e.props.rolling&&!e.props.locked[n]},n)}))})}}]),n}(r.Component)),y=g,S=(n(33),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.score,n=e.name,r=e.doScore,c=e.description,o=void 0!==t;return Object(v.jsxs)("tr",{className:"RuleRow RuleRow-".concat(o?"disabled":"active"),onClick:o?null:r,children:[Object(v.jsx)("td",{className:"RuleRow-name",children:n}),Object(v.jsx)("td",{className:"RuleRow-score",children:o?t:c})]})}}]),n}(r.Component)),k=S,x=(n(34),n(19)),R=function(){function e(t){Object(a.a)(this,e),Object.assign(this,t)}return Object(s.a)(e,[{key:"sum",value:function(e){return e.reduce((function(e,t){return e+t}))}},{key:"freq",value:function(e){var t,n=new Map,r=Object(x.a)(e);try{for(r.s();!(t=r.n()).done;){var c=t.value;n.set(c,(n.get(c)||0)+1)}}catch(o){r.e(o)}finally{r.f()}return Array.from(n.values())}},{key:"count",value:function(e,t){return e.filter((function(e){return e===t})).length}}]),e}(),w=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).evalRoll=function(t){return e.val*e.count(t,e.val)},e}return n}(R),C=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).evalRoll=function(t){return e.freq(t).some((function(t){return t>=e.count}))?e.sum(t):0},e}return n}(R),L=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).evalRoll=function(t){var n=e.freq(t);return n.includes(2)&&n.includes(3)?e.score:0},e}return n}(R),N=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).evalRoll=function(t){var n=new Set(t);return n.has(2)&&n.has(3)&&n.has(4)&&(n.has(1)||n.has(5))||n.has(3)&&n.has(4)&&n.has(5)&&(n.has(2)||n.has(6))?e.score:0},e}return n}(R),A=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).evalRoll=function(t){var n=new Set(t);return 5!==n.size||n.has(1)&&n.has(6)?0:e.score},e}return n}(R),T=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).evalRoll=function(t){return 5===e.freq(t)[0]?e.score:0},e}return n}(R),z=new w({val:1,description:"1 point per 1"}),F=new w({val:2,description:"2 points per 2"}),K=new w({val:3,description:"3 points per 3"}),D=new w({val:4,description:"4 points per 4"}),M=new w({val:5,description:"5 points per 5"}),G=new w({val:6,description:"6 points per 6"}),q=new C({count:3,description:"Sum all dice if 3 are the same"}),H=new C({count:4,description:"Sum all dice if 4 are the same"}),I=new L({score:25,description:"25 points for a full house"}),P=new N({score:30,description:"30 points for a small straight"}),B=new A({score:40,description:"40 points for a large straight"}),E=new T({score:50,description:"50 points for yahtzee"}),J=new C({count:0,description:"Sum of all dice"}),W=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"getTotalScore",value:function(){var e=this.props.scores,t=0;for(var n in e)e[n]&&(t+=e[n]);return t}},{key:"render",value:function(){var e=this.props,t=e.scores,n=e.doScore;return Object(v.jsxs)("div",{className:"ScoreTable",children:[Object(v.jsxs)("section",{className:"ScoreTable-section",children:[Object(v.jsx)("h2",{children:"Upper"}),Object(v.jsx)("table",{cellSpacing:"0",children:Object(v.jsxs)("tbody",{children:[Object(v.jsx)(k,{name:"Ones",score:t.ones,description:z.description,doScore:function(e){return n("ones",z.evalRoll)}}),Object(v.jsx)(k,{name:"Twos",score:t.twos,description:F.description,doScore:function(e){return n("twos",F.evalRoll)}}),Object(v.jsx)(k,{name:"Threes",score:t.threes,description:K.description,doScore:function(e){return n("threes",K.evalRoll)}}),Object(v.jsx)(k,{name:"Fours",score:t.fours,description:D.description,doScore:function(e){return n("fours",D.evalRoll)}}),Object(v.jsx)(k,{name:"Fives",score:t.fives,description:M.description,doScore:function(e){return n("fives",M.evalRoll)}}),Object(v.jsx)(k,{name:"Sixes",score:t.sixes,description:G.description,doScore:function(e){return n("sixes",G.evalRoll)}})]})})]}),Object(v.jsxs)("section",{className:"ScoreTable-section ScoreTable-section-lower",children:[Object(v.jsx)("h2",{children:"Lower"}),Object(v.jsx)("table",{cellSpacing:"0",children:Object(v.jsxs)("tbody",{children:[Object(v.jsx)(k,{name:"Three of Kind",score:t.threeOfKind,description:q.description,doScore:function(e){return n("threeOfKind",q.evalRoll)}}),Object(v.jsx)(k,{name:"Four of Kind",score:t.fourOfKind,description:H.description,doScore:function(e){return n("fourOfKind",H.evalRoll)}}),Object(v.jsx)(k,{name:"Full House",score:t.fullHouse,description:I.description,doScore:function(e){return n("fullHouse",I.evalRoll)}}),Object(v.jsx)(k,{name:"Small Straight",score:t.smallStraight,description:P.description,doScore:function(e){return n("smallStraight",P.evalRoll)}}),Object(v.jsx)(k,{name:"Large Straight",score:t.largeStraight,description:B.description,doScore:function(e){return n("largeStraight",B.evalRoll)}}),Object(v.jsx)(k,{name:"Yahtzee",score:t.yahtzee,description:E.description,doScore:function(e){return n("yahtzee",E.evalRoll)}}),Object(v.jsx)(k,{name:"Chance",score:t.chance,description:J.description,doScore:function(e){return n("chance",J.evalRoll)}})]})})]}),Object(v.jsxs)("h2",{children:["TOTAL SCORE: ",this.getTotalScore()]})]})}}]),n}(r.Component),Y=W,U=(n(35),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={dice:Array.from({length:5}),locked:Array(5).fill(!1),rollsLeft:3,rolling:!1,scores:{ones:void 0,twos:void 0,threes:void 0,fours:void 0,fives:void 0,sixes:void 0,threeOfKind:void 0,fourOfKind:void 0,fullHouse:void 0,smallStraight:void 0,largeStraight:void 0,yahtzee:void 0,chance:void 0}},r.roll=r.roll.bind(Object(j.a)(r)),r.doScore=r.doScore.bind(Object(j.a)(r)),r.toggleLocked=r.toggleLocked.bind(Object(j.a)(r)),r.animateRoll=r.animateRoll.bind(Object(j.a)(r)),r}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.animateRoll()}},{key:"animateRoll",value:function(){var e=this;this.setState({rolling:!0},(function(){setTimeout(e.roll,1e3)}))}},{key:"roll",value:function(e){this.setState((function(e){return{dice:e.dice.map((function(t,n){return e.locked[n]?t:Math.ceil(6*Math.random())})),locked:e.rollsLeft>1?e.locked:Array(5).fill(!0),rollsLeft:e.rollsLeft-1,rolling:!1}}))}},{key:"toggleLocked",value:function(e){this.state.rollsLeft>0&&!this.state.rolling&&this.setState((function(t){return{locked:[].concat(Object(f.a)(t.locked.slice(0,e)),[!t.locked[e]],Object(f.a)(t.locked.slice(e+1)))}}))}},{key:"doScore",value:function(e,t){var n=this;this.setState((function(r){return{scores:Object(h.a)(Object(h.a)({},r.scores),{},Object(d.a)({},e,t(n.state.dice))),rollsLeft:3,locked:Array(5).fill(!1)}})),this.animateRoll()}},{key:"displayRollInfo",value:function(){return["0 Rolls Left","1 Roll Left","2 Rolls Left","Starting Round"][this.state.rollsLeft]}},{key:"render",value:function(){var e=this.state,t=e.dice,n=e.locked,r=e.rollsLeft,c=e.rolling,o=e.scores;return Object(v.jsxs)("div",{className:"Game",children:[Object(v.jsxs)("header",{className:"Game-header",children:[Object(v.jsx)("h1",{className:"App-title",children:"Yahtzee!"}),Object(v.jsxs)("section",{className:"Game-dice-section",children:[Object(v.jsx)(y,{dice:t,locked:n,handleClick:this.toggleLocked,disabled:0===r,rolling:c}),Object(v.jsx)("div",{className:"Game-button-wrapper",children:Object(v.jsx)("button",{className:"Game-reroll",disabled:n.every((function(e){return e}))||0===r||c,onClick:this.animateRoll,children:this.displayRollInfo()})})]})]}),Object(v.jsx)(Y,{doScore:this.doScore,scores:o})]})}}]),n}(r.Component)),Q=(n(36),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(U,{})})}}]),n}(r.Component)),V=Q,X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),o(e),i(e)}))};i.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(V,{})}),document.getElementById("root")),X()}},[[37,1,2]]]);
//# sourceMappingURL=main.ef7bc42a.chunk.js.map