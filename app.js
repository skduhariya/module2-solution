!function(){"use-strict";function t(t){var i=this;i.buyList=t.buyList,i.buyItem=function(e){try{t.buyItem(i.buyList[e].itemName,i.buyList[e].itemQty,e)}catch(o){i.msg=o.message}}}function i(t){var i=this;i.boughtList=t.boughtList(),i.msg=t.boughtMsg}function e(){var t=this;t.buyList=[{itemName:"Chips",itemQty:5},{itemName:"Oreos",itemQty:25},{itemName:"Pop-Tarts",itemQty:20},{itemName:"Goldfish Crackers",itemQty:15},{itemName:"Popcorn",itemQty:10}];var i=[];t.buyItem=function(e,o,r){var s={name:e,quantity:o};if(i.push(s),t.buyList.splice(r,1),0==t.buyList.length)throw new Error("Everything is bought!")},t.boughtList=function(){return i}}angular.module("ShoppingListCheckOff",[]).controller("ToBuyController",t).controller("AlreadyBoughtController",i).service("ShoppingListCheckOffService",e),t.$inject=["ShoppingListCheckOffService"],i.$inject=["ShoppingListCheckOffService"]}();
