(this["webpackJsonpreact-projects"]=this["webpackJsonpreact-projects"]||[]).push([[0],{33:function(e,a,t){e.exports=t(50)},38:function(e,a,t){},39:function(e,a,t){},50:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(29),c=t.n(r),m=(t(38),t(12)),s=(t(39),t(1)),o=t(8);var i=function(e){return l.a.useEffect((function(){e.setName("")}),[]),l.a.createElement("div",null,l.a.createElement("div",{className:"welcome-page"},l.a.createElement("h1",null,"WELCOME!"),l.a.createElement("h2",null," \ud83d\ude0e Please open your account to start the game \ud83d\ude0e "),l.a.createElement("label",null,"Screen Name: "),l.a.createElement("input",{onChange:function(a){e.setName(a.currentTarget.value)},value:e.name})),l.a.createElement("footer",{className:"next-page"},l.a.createElement("h3",null,l.a.createElement(s.b,{to:"/pages/second-page",className:"remove-link"},"\ud83d\udc49"))))};var E=function(e){return l.a.useEffect((function(){e.setCounter(10)}),[]),l.a.createElement("div",null,l.a.createElement("div",{className:"second-page"},l.a.createElement("h1",null,"Congratulations, ",e.userName,"!"),l.a.createElement("h2",null,"Your account opening balance is: 10 COINS"),l.a.createElement("h2",null," \ud83d\ude00 ")),l.a.createElement("footer",{className:"next-page"},l.a.createElement("h3",null,l.a.createElement(s.b,{to:"/pages/third-page",className:"remove-link"},"\ud83d\udc49"))))};var u=function(){return l.a.createElement("div",{className:"third-page"},l.a.createElement("h1",null,"Please select the level : "),l.a.createElement("ul",null,l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/pages/beginner1",className:"remove-link"}," \ud83d\ude42  Beginner "),"  "),l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/pages/intermediate1",className:"remove-link"}," \ud83d\ude04  Intermediate "),"  "),l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/pages/expert1",className:"remove-link"}," \ud83d\ude01  Expert "),"  ")))};var p=function(e){return l.a.useEffect((function(){e.setNextComponent("/pages/beginner2")}),[]),l.a.createElement("div",null,l.a.createElement("p",{className:"level"}," BEGINNER "),l.a.createElement("h1",{className:"display"},"1. What is your favourite color?"),l.a.createElement("ul",{className:"remove-bullets"},l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/pages/correct-answer",className:"remove-link2"}," a) Green "),"  "),l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/pages/correct-answer",className:"remove-link2"}," b) Blue "),"  "),l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/pages/correct-answer",className:"remove-link2"}," c) Yellow "),"  ")))};var N=function(e){return l.a.useEffect((function(){e.setNextComponent("/pages/beginner3")}),[]),l.a.createElement("div",null,l.a.createElement("p",{className:"level"}," BEGINNER "),l.a.createElement("h1",{className:"display"},"2. What is the French translation of 'Good Morning'?"),l.a.createElement("ul",{className:"remove-bullets"},l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/pages/wrong-answer",className:"remove-link2"}," a) Bonne nuit! "),"  "),l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/pages/correct-answer",className:"remove-link2"}," b) Bonjour! "),"  "),l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/pages/wrong-answer",className:"remove-link2"}," c) Bonne journ\xe9e! "),"  ")))};var g=function(e){return l.a.useEffect((function(){e.setNextComponent("/pages/beginner4")}),[]),l.a.createElement("div",null,l.a.createElement("p",{className:"level"}," BEGINNER "),l.a.createElement("h1",{className:"display"},"3. How many sides does an isosceles triangle have?"),l.a.createElement("ul",{className:"remove-bullets"},l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/pages/wrong-answer",className:"remove-link2"}," a) 2 "),"  "),l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/pages/correct-answer",className:"remove-link2"}," b) 3 "),"  "),l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/pages/wrong-answer",className:"remove-link2"}," c) 4 "),"  ")))};var v=function(e){return l.a.useEffect((function(){e.setNextComponent("/pages/beginner5")}),[]),l.a.createElement("div",null,l.a.createElement("p",{className:"level"}," BEGINNER "),l.a.createElement("div",null,l.a.createElement("h1",{className:"display"},"4. Complete the title of the play by Shakespeare \u2013 "),l.a.createElement("h1",{className:"display4"},"'The Merchant of ________ '?")),l.a.createElement("ul",{className:"remove-bullets"},l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/pages/correct-answer",className:"remove-link2"}," a) Venice "),"  "),l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/pages/wrong-answer",className:"remove-link2"}," b) Spain "),"  "),l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/pages/wrong-answer",className:"remove-link2"}," c) Greece "),"  ")))};var h=function(e){return l.a.useEffect((function(){e.setNextComponent("/pages/level-change-to-intermediate")}),[]),l.a.createElement("div",null,l.a.createElement("p",{className:"level"}," BEGINNER "),l.a.createElement("h1",{className:"display"},"5. In TV series 'F.R.I.E.N.D.S', how many friends were there?"),l.a.createElement("ul",{className:"remove-bullets"},l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/pages/wrong-answer",className:"remove-link2"}," a) 5 "),"  "),l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/pages/correct-answer",className:"remove-link2"}," b) 6 "),"  "),l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/pages/wrong-answer",className:"remove-link2"}," c) 7 "),"  ")))};var f=function(e){return l.a.useEffect((function(){e.setNextComponent("/pages/intermediate2")}),[]),l.a.createElement("div",null,l.a.createElement("p",{className:"level2"}," INTERMEDIATE "),l.a.createElement("h1",{className:"display"},"1. What is the color of 'M' in McDonald's?"),l.a.createElement("ul",{className:"remove-bullets"},l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/pages/wrong-answer",className:"remove-link2"}," a) Red "),"  "),l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/pages/wrong-answer",className:"remove-link2"}," b) White "),"  "),l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/pages/correct-answer",className:"remove-link2"}," c) Yellow "),"  ")))};var d=function(e){return l.a.useEffect((function(){e.setNextComponent("/pages/intermediate3")}),[]),l.a.createElement("div",null,l.a.createElement("p",{className:"level2"}," INTERMEDIATE "),l.a.createElement("h1",{className:"display"},"2. Shawn Mendes is the name of a/an _____?"),l.a.createElement("ul",{className:"remove-bullets"},l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/pages/wrong-answer",className:"remove-link2"}," a) Actor "),"  "),l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/pages/correct-answer",className:"remove-link2"}," b) Singer "),"  "),l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/pages/wrong-answer",className:"remove-link2"}," c) Comedian "),"  ")))};var b=function(e){return l.a.useEffect((function(){e.setNextComponent("/pages/intermediate4")}),[]),l.a.createElement("div",null,l.a.createElement("p",{className:"level2"}," INTERMEDIATE "),l.a.createElement("h1",{className:"display"},"3. What is the capital city of Manitoba? "),l.a.createElement("ul",{className:"remove-bullets"},l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/pages/wrong-answer",className:"remove-link2"}," a) Regina "),"  "),l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/pages/wrong-answer",className:"remove-link2"}," b) Victoria "),"  "),l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/pages/correct-answer",className:"remove-link2"}," c) Winnipeg "),"  ")))};var w=function(e){return l.a.useEffect((function(){e.setNextComponent("/pages/intermediate5")}),[]),l.a.createElement("div",null,l.a.createElement("p",{className:"level2"}," INTERMEDIATE "),l.a.createElement("h1",{className:"display"},"4. Which pair of superheroes are known as the \u2018Dynamic Duo\u2019?"),l.a.createElement("ul",{className:"remove-bullets"},l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/pages/correct-answer",className:"remove-link2"}," a) Batman and Robin "),"  "),l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/pages/wrong-answer",className:"remove-link2"}," b) Spiderman and Ironman "),"  "),l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/pages/wrong-answer",className:"remove-link2"}," c) Superman and Wonder Woman "),"  ")))},x=t(32),C=t.n(x);var k=function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"video-page"},l.a.createElement("br",null),l.a.createElement("h1",null," Watch the video to answer the next question ")),l.a.createElement("div",{className:"video"},l.a.createElement(C.a,{url:"https://www.youtube.com/watch?v=Nctps4PE8Ac",controls:!0})),l.a.createElement("footer",{className:"next-page-video"},l.a.createElement("h3",null,l.a.createElement(s.b,{to:"/pages/intermediate6",className:"remove-link"},"\ud83d\udc49"))))};var y=function(e){return l.a.useEffect((function(){e.setNextComponent("/pages/level-change-to-expert")}),[]),l.a.createElement("div",null,l.a.createElement("p",{className:"level2"}," INTERMEDIATE "),l.a.createElement("h1",{className:"display"},"5. What is the name of the character of Jerry's special friend in the video?"),l.a.createElement("ul",{className:"remove-bullets"},l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/pages/correct-answer",className:"remove-link2"}," a) Spike "),"  "),l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/pages/wrong-answer",className:"remove-link2"}," b) Tuffy "),"  "),l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/pages/wrong-answer",className:"remove-link2"}," c) Quacker "),"  ")))};var I=function(e){return l.a.useEffect((function(){e.setNextComponent("/pages/expert2")}),[]),l.a.createElement("div",null,l.a.createElement("p",{className:"level3"}," EXPERT "),l.a.createElement("h1",{className:"display"},"1. If you have 'arachnophobia', what are you afraid of?"),l.a.createElement("ul",{className:"remove-bullets"},l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/pages/wrong-answer",className:"remove-link2"}," a) Needles "),"  "),l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/pages/wrong-answer",className:"remove-link2"}," b) Snakes "),"  "),l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/pages/correct-answer",className:"remove-link2"}," c) Spiders "),"  ")))};var S=function(e){return l.a.useEffect((function(){e.setNextComponent("/pages/expert3")}),[]),l.a.createElement("div",null,l.a.createElement("p",{className:"level3"}," EXPERT "),l.a.createElement("h1",{className:"display"},"2. What is the number of provinces in Canada?"),l.a.createElement("ul",{className:"remove-bullets"},l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/pages/wrong-answer",className:"remove-link2"}," a) 8 "),"  "),l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/pages/correct-answer",className:"remove-link2"}," b) 10 "),"  "),l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/pages/wrong-answer",className:"remove-link2"}," c) 12 "),"  ")))};var T=function(e){return l.a.useEffect((function(){e.setNextComponent("/pages/expert4")}),[]),l.a.createElement("div",null,l.a.createElement("p",{className:"level3"}," EXPERT "),l.a.createElement("h1",{className:"display"},"3. What does the \u2018MI\u2019 in \u2018MI6\u2019 stand for?"),l.a.createElement("ul",{className:"remove-bullets"},l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/pages/correct-answer",className:"remove-link2"}," a) Military Intelligence "),"  "),l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/pages/wrong-answer",className:"remove-link2"}," b) Mission Impossible "),"  "),l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/pages/wrong-answer",className:"remove-link2"}," c) Management Information "),"  ")))};var W=function(e){return l.a.useEffect((function(){e.setNextComponent("/pages/expert5")}),[]),l.a.createElement("div",null,l.a.createElement("p",{className:"level3"}," EXPERT "),l.a.createElement("h1",{className:"display"},"4. The \u2018Financial Times\u2019 newspaper is printed on what color paper?"),l.a.createElement("ul",{className:"remove-bullets"},l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/pages/correct-answer",className:"remove-link2"}," a) Pink "),"  "),l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/pages/wrong-answer",className:"remove-link2"}," b) Off White "),"  "),l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/pages/wrong-answer",className:"remove-link2"}," c) White "),"  ")))};var R=function(e){return l.a.useEffect((function(){e.setNextComponent("/pages/last-page")}),[]),l.a.createElement("div",null,l.a.createElement("p",{className:"level3"}," EXPERT "),l.a.createElement("h1",{className:"display"},"5. Who is the director of the movie 'Titanic'?"),l.a.createElement("ul",{className:"remove-bullets"},l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/pages/correct-answer",className:"remove-link2"}," a) James Cameron "),"  "),l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/pages/wrong-answer",className:"remove-link2"}," b) Steven Spielberg "),"  "),l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/pages/wrong-answer",className:"remove-link2"}," c) Peter Jackson "),"  ")))};var M=function(e){return l.a.useEffect((function(){e.setCounter(e.counter+5)}),[]),l.a.createElement("div",null,l.a.createElement("div",{className:"correct"},l.a.createElement("h1",null,"\ud83d\udc4f AWESOME !!"),l.a.createElement("h2",null,"Your current balance is:  ",e.counter," COINS ")),l.a.createElement("footer",{className:"next-page"},l.a.createElement("h3",null,l.a.createElement(s.b,{to:e.nextComponent,className:"remove-link"},"\ud83d\udc49"))))};var O=function(e){return l.a.useEffect((function(){e.setCounter(e.counter-2),document.getElementsByClassName("audio-element")[0].play()}),[]),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("audio",{className:"audio-element"},l.a.createElement("source",{src:"https://api.coderrocketfuel.com/assets/pomodoro-times-up.mp3"}))),l.a.createElement("div",{className:"wrong"},l.a.createElement("h1",null," \ud83d\ude43 Oops !! Wrong Answer ! "),l.a.createElement("h2",null," You lost 2 COINS ! \u2639\ufe0f "),l.a.createElement("h2",null,"Your current balance is:  ",e.counter," COINS ")),l.a.createElement("footer",{className:"next-page"},l.a.createElement("h3",null,l.a.createElement(s.b,{to:e.nextComponent,className:"remove-link"},"\ud83d\udc49"))))};var A=function(e){return l.a.useEffect((function(){e.setNextComponent("/")}),[]),l.a.createElement("div",null,e.counter<=10?l.a.createElement("div",{className:"second-page"},l.a.createElement("h1",null,"No Worries, ",e.userName,"! \ud83e\udd13 You can try AGAIN!"),l.a.createElement("h2",null,"Your account closing balance is: ",e.counter," COINS")):l.a.createElement("div",{className:"second-page"},l.a.createElement("h1",null," \ud83d\udc4d CONGRATULATIONS, ",e.userName," !! \ud83d\udc4d"),l.a.createElement("h2",null,"Your account closing balance is: ",e.counter," COINS"),l.a.createElement("h2",null," \ud83e\udd73 ")),l.a.createElement("footer",{className:"last-page"},l.a.createElement("h3",null,l.a.createElement(s.b,{to:"/",className:"remove-link"},"END GAME"))))};var B=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"second-page"},l.a.createElement("h1",null," WooHoo !! "),l.a.createElement("h2",null," You entered into the higher level "),l.a.createElement("h2",null," \ud83e\udd17 ")),l.a.createElement("footer",{className:"next-page"},l.a.createElement("h3",null,l.a.createElement(s.b,{to:"/pages/intermediate1",className:"remove-link"},"\ud83d\udc49"))))};var _=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"second-page"},l.a.createElement("h1",null," WooHoo !! "),l.a.createElement("h2",null," You entered into the higher level "),l.a.createElement("h2",null," \ud83e\udd17 ")),l.a.createElement("footer",{className:"next-page"},l.a.createElement("h3",null,l.a.createElement(s.b,{to:"/pages/expert1",className:"remove-link"},"\ud83d\udc49"))))};var G=function(){var e=l.a.useState(""),a=Object(m.a)(e,2),t=a[0],n=a[1],r=l.a.useState(10),c=Object(m.a)(r,2),x=c[0],C=c[1],G=l.a.useState("/pages/beginner1"),Y=Object(m.a)(G,2),D=Y[0],P=Y[1];return l.a.createElement(s.a,{basename:"/comit-final-project"},l.a.createElement("div",null,l.a.createElement(o.a,{path:"/",exact:!0},l.a.createElement(i,{name:t,setName:n})),l.a.createElement(o.a,{path:"/pages/second-page",exact:!0},l.a.createElement(E,{userName:t,counter:x,setCounter:C})),l.a.createElement(o.a,{path:"/pages/third-page",exact:!0},l.a.createElement(u,null)),l.a.createElement(o.a,{path:"/pages/beginner1",exact:!0},l.a.createElement(p,{nextComponent:D,setNextComponent:P})),l.a.createElement(o.a,{path:"/pages/correct-answer",exact:!0},l.a.createElement(M,{counter:x,setCounter:C,nextComponent:D,setNextComponent:P})),l.a.createElement(o.a,{path:"/pages/beginner2",exact:!0},l.a.createElement(N,{nextComponent:D,setNextComponent:P})),l.a.createElement(o.a,{path:"/pages/wrong-answer",exact:!0},l.a.createElement(O,{counter:x,setCounter:C,nextComponent:D})),l.a.createElement(o.a,{path:"/pages/beginner3",exact:!0},l.a.createElement(g,{nextComponent:D,setNextComponent:P})),l.a.createElement(o.a,{path:"/pages/beginner4",exact:!0},l.a.createElement(v,{nextComponent:D,setNextComponent:P})),l.a.createElement(o.a,{path:"/pages/beginner5",exact:!0},l.a.createElement(h,{nextComponent:D,setNextComponent:P})),l.a.createElement(o.a,{path:"/pages/level-change-to-intermediate",exact:!0},l.a.createElement(B,null)),l.a.createElement(o.a,{path:"/pages/level-change-to-expert",exact:!0},l.a.createElement(_,null)),l.a.createElement(o.a,{path:"/pages/intermediate1",exact:!0},l.a.createElement(f,{nextComponent:D,setNextComponent:P})),l.a.createElement(o.a,{path:"/pages/intermediate2",exact:!0},l.a.createElement(d,{nextComponent:D,setNextComponent:P})),l.a.createElement(o.a,{path:"/pages/intermediate3",exact:!0},l.a.createElement(b,{nextComponent:D,setNextComponent:P})),l.a.createElement(o.a,{path:"/pages/intermediate4",exact:!0},l.a.createElement(w,{nextComponent:D,setNextComponent:P})),l.a.createElement(o.a,{path:"/pages/intermediate5",exact:!0},l.a.createElement(k,{nextComponent:D,setNextComponent:P})),l.a.createElement(o.a,{path:"/pages/intermediate6",exact:!0},l.a.createElement(y,{nextComponent:D,setNextComponent:P})),l.a.createElement(o.a,{path:"/pages/expert1",exact:!0},l.a.createElement(I,{nextComponent:D,setNextComponent:P})),l.a.createElement(o.a,{path:"/pages/expert2",exact:!0},l.a.createElement(S,{nextComponent:D,setNextComponent:P})),l.a.createElement(o.a,{path:"/pages/expert3",exact:!0},l.a.createElement(T,{nextComponent:D,setNextComponent:P})),l.a.createElement(o.a,{path:"/pages/expert4",exact:!0},l.a.createElement(W,{nextComponent:D,setNextComponent:P})),l.a.createElement(o.a,{path:"/pages/expert5",exact:!0},l.a.createElement(R,{nextComponent:D,setNextComponent:P})),l.a.createElement(o.a,{path:"/pages/last-page",exact:!0},l.a.createElement(A,{counter:x,nextComponent:D,setNextComponent:P,userName:t}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.d72aaab9.chunk.js.map