
 let raktar = [];
 let list = [];
 let btnVlue =  document.getElementById("btn");
 let x = "";
 let voltam  = [];
  let data = [];
// JSON fájl kibontása
async function getList(){

    const response = await fetch('http://127.0.0.1:8080/js/beers.json')
    const dataList = await response.json();
    raktar = dataList;
   data.push(dataList);
    console.log(dataList);
    
}



// Elso feladat
getList();

// gombok valuának megszerzése

     function getValue(){

     let a = document.getElementById("btn").value
            console.log(x)
};
function getValue1(){

   let b = document.getElementById("btn1").value
           console.log(x)
};
function getValue2(){

    let c = document.getElementById("btn2").value
           console.log(x)
};



// lista kiirása
 function brandList(){
      raki = raktar;
   for(let i = 0; i < raki.length; i++  ){ 
       
        for(let key in raki[i]){
          
            if( raki[i][key] === "Arany Fácán" ){
               
               list.push(raki[i])
               console.log(list)
               
            }else{
                voltam.push(raki[i])
            }
                
        }
        

    }
    
            document.getElementById("dreher").innerHTML = JSON.stringify(list[0]);
            document.getElementById("dreher1").innerHTML = JSON.stringify(list[1]);
            document.getElementById("dreher2").innerHTML = JSON.stringify(list[2]) 
            document.getElementById("dreher3").innerHTML = JSON.stringify(list[3]);
            document.getElementById("dreher4").innerHTML = JSON.stringify(list[4]);

                                      
}


// második feladat 

let beerInput = "";
let beerType = [];
// Megkapni az input valuet
function getBeerType( beerInput){
    beerInput = document.getElementById("typeinput").value;
    console.log(beerInput);

    beerType = data.filter(function(i){
        if(i.type === beerInput){
            return true;
        }
    });
}


console.log(beerType);

// beerType = list.filter(data => data.type === beerInput);



/*
let aMarka = [];

//Harmadik feladat 
function getBrand(brand){
      aMarka =  data.filter(item => item.brand === brand)
}

function getPrice(aMarka){
    return aMarka.price;
}
function addPrices(runtotal, prices){
    return runtotal + prices 
}

const priceScore = data.map(getPrice);
const priceTotal = priceScore.reduce(addPrices, 0 );
const avargePrcie = priceTotal / priceScore.length;


//negyedik feladat 
let getIngrid = "";
function getAnyagType(){
 getIngrid = document.getElementById("typeinput").value;
}

let goodBeers = data.filter()
*/