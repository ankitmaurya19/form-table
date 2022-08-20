let arr = [{
    "machine_name":"Auto Winding Machine" ,
    "machine_id" : "machine001" ,
    "current" : 0,
    "voltage":1,
    "power_factor":2,
    "active_power":3,
    "apparent_power":4,
    "reactive_power":5,
    "daily_energy":6,
    "monthly_energy":7,
    "yearly_energy":8,
    "idle_daily":9,
    "idle_monthly":33,
    "idle_yearly":44
}]
let array = arr;
 
for(let i = 0 ; i < array.length ; i++) {


    var table = document.getElementById('main');
    var tb1 = document.getElementById('tb1');
    var tb2 = document.getElementById('tb2');
    var row = document.createElement('tr');

    var cell = document.createElement('td');
    var txt = document.createTextNode(array[i].machine_name);
    cell.appendChild(txt);row.appendChild(cell);

    cell = document.createElement('td');
    txt = document.createTextNode(array[i].machine_id);
    cell.appendChild(txt);row.appendChild(cell);

    cell = document.createElement('td');
    cell.colSpan = 3;
    var r1 = document.createElement('tr');
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(array[i].daily_energy));
    r1.appendChild(td);
    td = document.createElement('td');
    td.appendChild(document.createTextNode(array[i].monthly_energy));
    r1.appendChild(td);
    td = document.createElement('td');
    td.appendChild(document.createTextNode(array[i].yearly_energy));
    r1.appendChild(td);
    tb1.appendChild(r1);
    cell.appendChild(tb1);row.appendChild(cell);

    cell = document.createElement('td');
    txt = document.createTextNode(array[i].active_power);
    cell.appendChild(txt);row.appendChild(cell);
    
    cell = document.createElement('td');
    txt = document.createTextNode(array[i].apparent_power);
    cell.appendChild(txt);row.appendChild(cell);

    cell = document.createElement('td');
    txt = document.createTextNode(array[i].reactive_power);
    cell.appendChild(txt);row.appendChild(cell);

    cell = document.createElement('td');
    txt = document.createTextNode(array[i].current);
    cell.appendChild(txt);row.appendChild(cell);

    cell = document.createElement('td');
    txt = document.createTextNode(array[i].voltage);
    cell.appendChild(txt);row.appendChild(cell);

    cell = document.createElement('td');
    txt = document.createTextNode(array[i].power_factor);
    cell.appendChild(txt);row.appendChild(cell);

    cell = document.createElement('td');
    cell.colSpan = 3;
    r1 = document.createElement('tr');
    td = document.createElement('td');
    td.appendChild(document.createTextNode(array[i].idle_daily));
    r1.appendChild(td);
    td = document.createElement('td');
    td.appendChild(document.createTextNode(array[i].idle_monthly));
    r1.appendChild(td);
    td = document.createElement('td');
    td.appendChild(document.createTextNode(array[i].idle_yearly));
    r1.appendChild(td);
    tb2.appendChild(r1);
    cell.appendChild(tb2);row.appendChild(cell);
    table.appendChild(row);

}