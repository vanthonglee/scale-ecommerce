(this["webpackJsonpscale-ecommerce"]=this["webpackJsonpscale-ecommerce"]||[]).push([[5],{109:function(e,a,t){},128:function(e,a,t){},134:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(23),l=t(14),s=t(28),m=(t(109),Object(r.b)(null,(function(e){return{clearItem:function(a){return e(Object(s.c)(a))},addItem:function(a){return e(Object(s.a)(a))},removeItem:function(a){return e(Object(s.d)(a))}}}))((function(e){var a=e.cartItem,t=e.clearItem,n=e.addItem,r=e.removeItem,l=a.name,s=a.imageUrl,m=a.price,i=a.quantity;return c.a.createElement("div",{className:"checkout-item"},c.a.createElement("div",{className:"image-container"},c.a.createElement("img",{src:s,alt:"item"})),c.a.createElement("span",{className:"name"},l),c.a.createElement("span",{className:"quantity"},c.a.createElement("div",{className:"arrow",onClick:function(){return r(a)}},"\u276e"),c.a.createElement("span",{className:"value"},i),c.a.createElement("div",{className:"arrow",onClick:function(){return n(a)}},"\u276f")),c.a.createElement("span",{className:"price"},m),c.a.createElement("div",{className:"remove-button",onClick:function(){return t(a)}},"\u2715"))}))),i=t(110),o=t.n(i),u=t(111),d=t.n(u),p=function(e){var a=e.price,t=100*a;return c.a.createElement(o.a,{label:"Pay Now",name:"THONG CLOTHING Ltd",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your total is $".concat(a),amount:t,panelLabel:"Pay Now",token:function(e){d()({url:"payment",method:"post",data:{amount:t,token:e}}).then((function(e){alert("payment successful")})).catch((function(e){console.log("payment error",JSON.parse(e)),alert("There was an issue with your payment. Please sure you use the provided credit card.")}))},stripeKey:"pk_test_51GuEROKY0BxumztShDHka6ZCuwE55G4vUL0kICsJUJofIjN08hQrHTypQP61PzN9H4PntCA2Xyq4UyQWNOywz79400wqYdLW25"})},E=t(30),v=(t(128),Object(l.b)({cartItems:E.b,total:E.d}));a.default=Object(r.b)(v,null)((function(e){var a=e.cartItems,t=e.total;return c.a.createElement("div",{className:"checkout-page"},c.a.createElement("div",{className:"checkout-header"},c.a.createElement("div",{className:"header-block"},c.a.createElement("span",null,"Product")),c.a.createElement("div",{className:"header-block"},c.a.createElement("span",null,"Description")),c.a.createElement("div",{className:"header-block"},c.a.createElement("span",null,"Quantity")),c.a.createElement("div",{className:"header-block"},c.a.createElement("span",null,"Price")),c.a.createElement("div",{className:"header-block"},c.a.createElement("span",null,"Remove"))),a.map((function(e){return c.a.createElement(m,{key:e.id,cartItem:e})})),c.a.createElement("div",{className:"total"},c.a.createElement("span",null,"TOTAL: ",t)),c.a.createElement("div",{className:"test-warning"},"*Please use the following test credit card for payments",c.a.createElement("br",null),"4242 4242 4242 4242 - Exp: 01/25 - CVW 123"),c.a.createElement(p,{price:t}))}))}}]);
//# sourceMappingURL=5.8f253a68.chunk.js.map