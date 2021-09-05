


function init()
{

createcountry()

}

function createcountry(){
  
  for(var val of arr){
    country= new mcb1(val.country, val.goldOlympicMedals, val.silverOlympicMedals, val.bronzeOlympicMedials, val.totalOlympicMedals, val.pop2021);
    addobject(country)
  }
    /*    another option
    for(var i=0; i<arr.length; i++){
        country= new mcb1(arr[i].country, arr[i].goldOlympicMedals, arr[i].silverOlympicMedals, arr[i].bronzeOlympicMedials, arr[i].totalOlympicMedals, arr[i].pop2021);
        addobject(country)
    }
        */
}

function addobject(mcb1){
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    cell1.innerHTML = mcb1.country;
    cell2.innerHTML = mcb1.gold;
    cell3.innerHTML = mcb1.silver;
    cell4.innerHTML = mcb1.bronze;
    cell5.innerHTML = mcb1.total;
    cell6.innerHTML = mcb1.pop;
  }
  
