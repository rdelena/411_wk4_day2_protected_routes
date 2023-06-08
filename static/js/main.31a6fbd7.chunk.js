(window.webpackJsonp411_wk4_day1_react_router=window.webpackJsonp411_wk4_day1_react_router||[]).push([[0],{105:function(e,a,t){},106:function(e,a,t){},107:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=t(73),i=t(26),o=t(14),c=t(160),s=t(162),m=t(163),p=t(157),u=t(38),d=t.n(u),h=t(77),g=t.n(h),b=function(){var e=Object(o.g)();return r.a.createElement(c.a,{position:"relative"},r.a.createElement(s.a,null,r.a.createElement(m.a,{color:"inherit"},r.a.createElement(g.a,null)),r.a.createElement(p.a,{variant:"h6",style:{flexGrow:"1"}},"FakeCars.com"),r.a.createElement("ul",{className:"nav-list"},r.a.createElement("li",{className:"nav-list-item"},r.a.createElement(i.b,{to:"/"},"Home")),r.a.createElement("li",{className:"nav-list-item"},r.a.createElement(i.b,{to:"/about"},"About")),r.a.createElement("li",{className:"nav-list-item",onClick:function(){document.cookie=d.a.serialize("loggedIn",null,{maxAge:0}),e("/login")}},"Logout"))))},_=t(80),w=t(164),y=t(165),E=t(166),f=t(167),O=t(46),A=function(){return console.log("CARS",O),r.a.createElement("div",{className:"card-container"},O.map(function(e,a){return r.a.createElement(w.a,{key:a,className:"card"},r.a.createElement(y.a,{className:"text-gray"},r.a.createElement("span",null,e.Name.toUpperCase()),r.a.createElement("ul",null,r.a.createElement("li",null,"Miles_per_Gallon: ",e.Miles_per_Gallon),r.a.createElement("li",null,"Cylinders: ",e.Cylinders),r.a.createElement("li",null,"Displacement: ",e.Displacement),r.a.createElement("li",null,"Horsepower: ",e.Horsepower))),r.a.createElement(E.a,null),r.a.createElement(f.a,{style:{color:"mediumblue"}},r.a.createElement(i.b,{to:"/car/".concat(e.id)},"See More Details")))}))},v=t(52),N=t(53),k=t(79),C=t(78),S=t(81),D=t(154),W=t(155),j=function(e){function a(){var e,t;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(k.a)(this,(e=Object(C.a)(a)).call.apply(e,[this].concat(r)))).state={checked:!0,heading:"About FakeCars.com"},t.toggleSwitch=function(){var e=!t.state.checked;return e?t.setState({heading:"About FakeCars.com",checked:e}):t.setState({heading:"About Cars.com",checked:e})},t}return Object(S.a)(a,e),Object(N.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"text-gray"},r.a.createElement(D.a,{maxWidth:"sm"},r.a.createElement("h1",{style:{textAlign:"center"}},this.state.heading),r.a.createElement("p",null,'FakeCars.com was created to solve a specific problem. That problem is quick and reliable access to details about many different models, all in one place. We had to use the word "Fake" in our name so that we don\'t get sued by the real\xa0',r.a.createElement("a",{style:{color:"mediumblue"},href:"https://www.cars.com",target:"_blank",rel:"noopener noreferrer"},"Cars.com"),"\xa0but we won't worry too much about that. We've provided a link to the actual cars.com above and we did not receive any money from them to do so. Although, there's an argument that maybe we should since we are a top-notch coding bootcamp and anyone would want to be associated with us :)"),r.a.createElement(E.a,null),r.a.createElement("p",null,'If you\'d like you can toggle the word "Fake" because why not? We have the potential to be the real cars.com if we wanted to be.'),r.a.createElement(W.a,{checked:this.state.checked,color:"primary",onChange:this.toggleSwitch})))}}]),a}(n.Component),G=t(161),H=t(158),M=function(e){var a=Object(o.h)().id,t=O.find(function(e){return e.id===Number(a)});return r.a.createElement(D.a,{maxWidth:"sm",className:"car-container"},r.a.createElement(G.a,{className:"car-paper"},r.a.createElement("h2",null,t.Name),Object.keys(t).map(function(e,a){return r.a.createElement(H.a,{key:a,label:"".concat(e,": ").concat(t[e])})})))},U=t(3),Y=t(12),x=t(152),P=t(159);function F(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}var I=function(){var e=Object(o.g)(),a=Object(n.useState)({username:"",password:""}),t=Object(Y.a)(a,2),l=t[0],i=t[1],c=function(e){var a=e.target,t=a.name,n=a.value;i(function(e){return function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?F(t,!0).forEach(function(a){Object(U.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):F(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}({},e,Object(U.a)({},t,n))})};return r.a.createElement("div",{className:"App"},r.a.createElement(D.a,{maxWidth:"sm"},r.a.createElement("form",{className:"login-form",onSubmit:function(a){a.preventDefault(),document.cookie=d.a.serialize("loggedIn","true",{maxAge:60}),e("/")}},r.a.createElement(x.a,{required:!0,onChange:c,value:l.username,name:"username",label:"Username",type:"text"}),r.a.createElement(x.a,{required:!0,onChange:c,value:l.password,name:"password",label:"Password",type:"password"}),r.a.createElement(P.a,{type:"submit",className:"login-button",variant:"contained",color:"primary"},"Login"))))},q=function(e){var a=e.component,t=Object(_.a)(e,["component"]);return!0===!!d.a.parse(document.cookie).loggedIn?r.a.createElement(a,t):r.a.createElement(o.a,{to:"/login"})},J=function(){return r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/",element:r.a.createElement(q,{component:A})}),r.a.createElement(o.b,{path:"/login",element:r.a.createElement(I,null)}),r.a.createElement(o.b,{path:"/about",element:r.a.createElement(q,{component:j})}),r.a.createElement(o.b,{path:"/car/:id",element:r.a.createElement(q,{component:M})}))};t(105);var z=function(){return r.a.createElement(i.a,null,r.a.createElement(b,null),r.a.createElement(J,null))};t(106);Object(l.createRoot)(document.getElementById("root")).render(r.a.createElement(z,null)),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},46:function(e){e.exports=JSON.parse('[{"id":1,"Name":"chevrolet chevelle malibu","Miles_per_Gallon":18,"Cylinders":8,"Displacement":307,"Horsepower":130,"Weight_in_lbs":3504,"Acceleration":12,"Year":"1970-01-01","Origin":"USA"},{"id":2,"Name":"buick skylark 320","Miles_per_Gallon":15,"Cylinders":8,"Displacement":350,"Horsepower":165,"Weight_in_lbs":3693,"Acceleration":11.5,"Year":"1970-01-01","Origin":"USA"},{"id":3,"Name":"plymouth satellite","Miles_per_Gallon":18,"Cylinders":8,"Displacement":318,"Horsepower":150,"Weight_in_lbs":3436,"Acceleration":11,"Year":"1970-01-01","Origin":"USA"},{"id":4,"Name":"amc rebel sst","Miles_per_Gallon":16,"Cylinders":8,"Displacement":304,"Horsepower":150,"Weight_in_lbs":3433,"Acceleration":12,"Year":"1970-01-01","Origin":"USA"},{"id":5,"Name":"ford torino","Miles_per_Gallon":17,"Cylinders":8,"Displacement":302,"Horsepower":140,"Weight_in_lbs":3449,"Acceleration":10.5,"Year":"1970-01-01","Origin":"USA"},{"id":6,"Name":"ford galaxie 500","Miles_per_Gallon":15,"Cylinders":8,"Displacement":429,"Horsepower":198,"Weight_in_lbs":4341,"Acceleration":10,"Year":"1970-01-01","Origin":"USA"},{"id":7,"Name":"chevrolet impala","Miles_per_Gallon":14,"Cylinders":8,"Displacement":454,"Horsepower":220,"Weight_in_lbs":4354,"Acceleration":9,"Year":"1970-01-01","Origin":"USA"},{"id":8,"Name":"plymouth fury iii","Miles_per_Gallon":14,"Cylinders":8,"Displacement":440,"Horsepower":215,"Weight_in_lbs":4312,"Acceleration":8.5,"Year":"1970-01-01","Origin":"USA"},{"id":9,"Name":"pontiac catalina","Miles_per_Gallon":14,"Cylinders":8,"Displacement":455,"Horsepower":225,"Weight_in_lbs":4425,"Acceleration":10,"Year":"1970-01-01","Origin":"USA"},{"id":10,"Name":"amc ambassador dpl","Miles_per_Gallon":15,"Cylinders":8,"Displacement":390,"Horsepower":190,"Weight_in_lbs":3850,"Acceleration":8.5,"Year":"1970-01-01","Origin":"USA"},{"id":11,"Name":"citroen ds-21 pallas","Miles_per_Gallon":null,"Cylinders":4,"Displacement":133,"Horsepower":115,"Weight_in_lbs":3090,"Acceleration":17.5,"Year":"1970-01-01","Origin":"Europe"},{"id":12,"Name":"chevrolet chevelle concours (sw)","Miles_per_Gallon":null,"Cylinders":8,"Displacement":350,"Horsepower":165,"Weight_in_lbs":4142,"Acceleration":11.5,"Year":"1970-01-01","Origin":"USA"},{"id":13,"Name":"ford torino (sw)","Miles_per_Gallon":null,"Cylinders":8,"Displacement":351,"Horsepower":153,"Weight_in_lbs":4034,"Acceleration":11,"Year":"1970-01-01","Origin":"USA"},{"id":14,"Name":"plymouth satellite (sw)","Miles_per_Gallon":null,"Cylinders":8,"Displacement":383,"Horsepower":175,"Weight_in_lbs":4166,"Acceleration":10.5,"Year":"1970-01-01","Origin":"USA"},{"id":15,"Name":"amc rebel sst (sw)","Miles_per_Gallon":null,"Cylinders":8,"Displacement":360,"Horsepower":175,"Weight_in_lbs":3850,"Acceleration":11,"Year":"1970-01-01","Origin":"USA"},{"id":16,"Name":"dodge challenger se","Miles_per_Gallon":15,"Cylinders":8,"Displacement":383,"Horsepower":170,"Weight_in_lbs":3563,"Acceleration":10,"Year":"1970-01-01","Origin":"USA"},{"id":17,"Name":"plymouth \'cuda 340","Miles_per_Gallon":14,"Cylinders":8,"Displacement":340,"Horsepower":160,"Weight_in_lbs":3609,"Acceleration":8,"Year":"1970-01-01","Origin":"USA"},{"id":18,"Name":"ford mustang boss 302","Miles_per_Gallon":null,"Cylinders":8,"Displacement":302,"Horsepower":140,"Weight_in_lbs":3353,"Acceleration":8,"Year":"1970-01-01","Origin":"USA"},{"id":19,"Name":"chevrolet monte carlo","Miles_per_Gallon":15,"Cylinders":8,"Displacement":400,"Horsepower":150,"Weight_in_lbs":3761,"Acceleration":9.5,"Year":"1970-01-01","Origin":"USA"},{"id":20,"Name":"buick estate wagon (sw)","Miles_per_Gallon":14,"Cylinders":8,"Displacement":455,"Horsepower":225,"Weight_in_lbs":3086,"Acceleration":10,"Year":"1970-01-01","Origin":"USA"}]')},89:function(e,a,t){e.exports=t(107)}},[[89,1,2]]]);
//# sourceMappingURL=main.31a6fbd7.chunk.js.map