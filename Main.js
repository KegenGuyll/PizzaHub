var orderCount = 0;
var s;
var m;
var l;
var c;
var sa;
var pep;
var size;
var topping;
var smallprice;
var mediumprice;
var largeprice;
var Cost = 0;

  const check = (Size) => {
    document.getElementById("answer1").value= Size;
    size = document.getElementById("answer1").value= Size;
    s = size.includes("Small");
    m = size.includes("Medium");
    l = size.includes("Large");

    if (s == true)
    {
        console.log("You want a small pizza")
        document.getElementById("pizzaSizeText").innerHTML = "Small";
    }

    if (m == true)
    {
        console.log("You want a medium pizza")
        document.getElementById("pizzaSizeText").innerHTML = "Medium";
    }

    if (l == true)
    {
        console.log("You want a large pizza")
        document.getElementById("pizzaSizeText").innerHTML = "Large";
    }
}

const check2 = (Topping) => {
    document.getElementById("answer2").value= Topping;
    topping = document.getElementById("answer2").value= Topping;
    c = topping.includes("Cheese");
    pep = topping.includes("Pepperoni");
    sa = topping.includes("Sausage");

    if (c == true)
    {
        console.log("You want a pizza with Cheese")
        var checkcheese = document.getElementById("checkcheese").checked;

        if (checkcheese == true)
        {
            document.getElementById("Cheese").style.visibility = "visible";
            localStorage.setItem("Cheese",topping);
            Cost += .50;
        }

        else
        {
            document.getElementById("Cheese").style.visibility = "hidden";
            localStorage.removeItem("Cheese",topping);
            Cost -= .50;
        }
    }


        if (pep == true)
    {
        console.log("You want a pizza with Pepperoni")
        document.getElementById("Pep").style.visibility = "visible";

        var checkpep = document.getElementById("checkpep").checked;

        if (checkpep == true)
        {
            document.getElementById("Pep").style.visibility = "visible";
            localStorage.setItem("Pepperoni",topping);
            Cost += .50;
        }

        else
        {
            document.getElementById("Pep").style.visibility = "hidden";
            localStorage.removeItem("Pepperoni",topping);
            Cost -= .50;
        }
    }

    if (sa == true)
    {
        console.log("You want a pizza with Sausage")
        document.getElementById("Sausage").style.visibility = "visible"

        var checksau = document.getElementById("checksau").checked;

        if (checksau == true)
        {
            document.getElementById("Sausage").style.visibility = "visible";
            localStorage.setItem("Sausage",topping);
            Cost += .50;
        }

        else
        {
            document.getElementById("Sausage").style.visibility = "hidden";
            localStorage.removeItem("Sausage",topping);
            Cost -= .50;
        }
    }
  }



  function order()
{
    document.getElementById("Order").value= Order;
    orderCount++;
    console.log(orderCount);
    alert("You have orderd " + orderCount + " Pizza(s)");

    if (s == true){
        localStorage.setItem("Small",size);
        smallprice = 2.30;
        Cost = smallprice;
        orderCost();
    }
    else
    {
        localStorage.removeItem("Small",size);
    }

    if (m == true){
        localStorage.setItem("Medium",size);
        mediumprice = 4.15;
        Cost = mediumprice;
        orderCost()
    }
    else
    {
        localStorage.removeItem("Medium",size);
    }

    if (l == true){
        localStorage.setItem("Large",size);
        largeprice = 7.23;
        Cost = largeprice;
        orderCost()
    }
    else
    {
        localStorage.removeItem("Large",size);
    }
}



function Addrow() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = "...";
    cell2.innerHTML = "...";
    cell3.innerHTML = "...";
    cell1.setAttribute('id','Size');
    cell2.setAttribute('id','Topping');
    cell3.setAttribute('id','Cost');
  }

function printorder() {
    document.getElementById("Size").innerHTML = localStorage.getItem(size);
    document.getElementById("Topping").innerHTML = localStorage.getItem(topping);
}



function orderCost()
{

 if (size.includes("Small"))
    {
        printorder();
        document.getElementById("Cost").innerHTML = "$" + Cost;

    }

 if (size.includes("Medium"))
    {
        printorder();
        document.getElementById("Cost").innerHTML = "$" + Cost;
    }
 if (size.includes("Large"))
    {
        printorder();
        document.getElementById("Cost").innerHTML = "$" + Cost;
    }
    var i = 0;
    if (i == 0)
    {
        var totalcost = Cost;
        i++;
        console.log("i = 0");
    }
    console.log("cost before: " + Cost);
    if (i >= 2)
    {
        totalcost += Cost;
        console.log("i > 0")
    }

    console.log("cost after: " + Cost);
    Addrow();
    Cost = 0;
    document.getElementById("totalcost").innerHTML = totalcost;
}

