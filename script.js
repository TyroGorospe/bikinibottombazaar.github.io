var cust_order= [];

//Patrick Merch
var pm1 = { prod_name: "Patrick mug", prod_price: 200 }
var pp1 = { prod_name: "Patrick pillow", prod_price: 150 }
var pp2 = { prod_name: "Patrick plush", prod_price: 150 }
var pb1 = { prod_name: "Patrick bag", prod_price: 500 }
var pf1 = { prod_name: "Patrick funkopop", prod_price: 999 }
var ps1 = { prod_name: "Patrick shirt", prod_price: 150 }
//Sandy Merch
var sc1 = { prod_name: "Sandy mug", prod_price: 200 }	
var sc2 = { prod_name: "Sandy pillow", prod_price: 150 }	
var sc3 = { prod_name: "Sandy plush", prod_price: 150 }		
var sc4 = { prod_name: "Sandy bag", prod_price: 150 }	
var sc5 = { prod_name: "Sandy funkopop", prod_price: 999 }		
var sc6 = { prod_name: "Sandy shirt", prod_price: 150 }
//Spongebob Merch
var ss1 = { prod_name: "Spongebob mug", prod_price: 200 }
var ss2 = { prod_name: "Spongebob pillow", prod_price: 150 }
var ss3 = { prod_name: "Spongebob plush", prod_price: 150 }
var ss4 = { prod_name: "Spongebob bag", prod_price: 500 }
var ss5 = { prod_name: "Spongebob funkopop", prod_price: 999 }
var ss6 = { prod_name: "Spongebob shirt", prod_price: 150 }
//Squidward Merch
var sw1 = { prod_name: "Squidward mug", prod_price: 200 }	
var sw2 = { prod_name: "Squidward pillow", prod_price: 200 }	
var sw3 = { prod_name: "Squidward plush",  prod_price: 150 }	
var sw4 = { prod_name: "Squidward bag", prod_price: 500 }	
var sw5 = { prod_name: "Squidward funkopop", prod_price: 500 }	
var sw6 = { prod_name: "Squidward shirt", prod_price: 150 }

//Patrick
function addpm1() {
    cust_order.push(pm1);
    console.log(cust_order);
    addToCart();
}
function addpp1() {
    cust_order.push(pp1);
    console.log(cust_order);
    addToCart();
}
function addpp2() {
    cust_order.push(pp2);
    console.log(cust_order);
    addToCart();
}
function addpb1() {
    cust_order.push(pb1);
    console.log(cust_order);
    addToCart();
}
function addpf1() {
    cust_order.push(pf1);
    console.log(cust_order);
    addToCart();
}
function addps1() {
    cust_order.push(ps1);
    console.log(cust_order);
    addToCart();
}
//Sandy
function addsc1() {
    cust_order.push(sc1);
    console.log(cust_order);
    addToCart();
}
function addsc2() {
    cust_order.push(sc2);
    console.log(cust_order);
    addToCart();
}
function addsc3() {
    cust_order.push(sc3);
    console.log(cust_order);
    addToCart();
}
function addsc4() {
    cust_order.push(sc4);
    console.log(cust_order);
    addToCart();
}
function addsc5() {
    cust_order.push(sc5);
    console.log(cust_order);
    addToCart();
}
function addsc6() {
    cust_order.push(sc6);
    console.log(cust_order);
    addToCart();
}
//Spongebob
function addss1() {
    cust_order.push(ss1);
    console.log(cust_order);
    addToCart();
}
function addss2() {
    cust_order.push(ss2);
    console.log(cust_order);
    addToCart();
}
function addss3() {
    cust_order.push(ss3);
    console.log(cust_order);
    addToCart();
}
function addss4() {
    cust_order.push(ss4);
    console.log(cust_order);
    addToCart();
}
function addss5() {
    cust_order.push(ss5);
    console.log(cust_order);
    addToCart();
}
function addss6() {
    cust_order.push(ss6);
    console.log(cust_order);
    addToCart();
}
//Squidward
function addsw1() {
    cust_order.push(sw1);
    console.log(cust_order);
    addToCart();
}
function addsw2() {
    cust_order.push(sw2);
    console.log(cust_order);
    addToCart();
}
function addsw3() {
    cust_order.push(sw3);
    console.log(cust_order);
    addToCart();
}
function addsw4() {
    cust_order.push(sw4);
    console.log(cust_order);
    addToCart();
}
function addsw5() {
    cust_order.push(sw5);
    console.log(cust_order);
    addToCart();
}
function addsw6() {
    cust_order.push(sw6);
    console.log(cust_order);
    addToCart();
}


function addToCart(){
    document.getElementById('cartList').innerHTML = "";
    for(var i=0; i<cust_order.length; i++){
        document.getElementById('cartList').innerHTML += '<li class="list-group-item" class="col-sm-4;">' + cust_order[i].prod_name + ' (PHP: '+ cust_order[i].prod_price +'.00) <p><button type="button" style="font-size:50%; background-color:#0457a0; color:#fff56c;" onclick="removeCart('+ i + ')">Remove</button></li>'
    }
	price();
}

function price(){
	totalCount = 0;
    document.getElementById('total').innerHTML = totalCount;
	for (var i=0; i<cust_order.length; i++){
		totalCount = cust_order[i].prod_price + totalCount;
		console.log("price: "+ totalCount);
    	document.getElementById('total').innerHTML = totalCount;
	}
}

function removeCart(i){
    cust_order.splice(i, 1);
    console.log(cust_order);
	price();
    addToCart();
}

function submitForm(){
	document.getElementById('cust_order').value = JSON.stringify(cust_order);
}
