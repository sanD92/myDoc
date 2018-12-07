

    var personalInfo = [
            {
                "name": "sandip",
                "age": "27",
                "city": "pune",
                "status": "1"
            },
            {
               "name": "Deepak",
                "age": "28",
                "city": "pune",
                "status":"1"
            },
            {
                "name": "Aks",
                "age": "29",
                "city": "pune",
                "status": "0"
            }
        ]
        
        
   // create table;
   
   var table = document.createElement('table');
   var tr = table.insertRow(-1);
   
//Create Header row
var headerRow =[];

for(var i=0;i<personalInfo.length;i++){
		for(var key in personalInfo[i] ){
    if(headerRow.indexOf(key)===-1)
    		headerRow.push(key);
    }
}
console.log(headerRow);

//Append Header row to to tr tage

for(var i=0;i<headerRow.length;i++){
	var th = document.createElement('th');
	th.innerHTML=headerRow[i];
  tr.appendChild(th);
}

// Now Add header tr and  json data  to table

for(var i=0;i<personalInfo.length;i++){

		tr = table.insertRow(-1);
		for(var j=0;j<headerRow.length;j++){
    	var tableCell = tr.insertCell(-1);
      tableCell.innerHTML = personalInfo[i][headerRow[j]];
    }

}

console.log(table);

var show =document.getElementById('show');
show.innerHTML="";
 show.appendChild(table);

   
   

<div id='show'>

</div>