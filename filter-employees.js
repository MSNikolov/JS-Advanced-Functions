function filtrate (params, crit){
    let criteria = crit.split("-");

    let k = criteria[0];

    let v = criteria[1];

    let employees = JSON.parse(params);

    let result;

    if (k != "all") {
        result = employees.filter(e => e[k] == v);
    }

    else{
        result = employees;
    }

    let res = "";

    for (i = 0; i < result.length; i++){
        res += `${i}. ${result[i].first_name} ${result[i].last_name} - ${result[i].email}\n`
    }

    console.log(res);
}

console.log(filtrate(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female'


))