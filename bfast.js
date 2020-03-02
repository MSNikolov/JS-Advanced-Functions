function solution(){
      let products = {
          protein: 0,
          carbohydrate: 0,
          fat: 0,
          flavour: 0
      };

      let recipes = {
          apple: {
              protein: 0,
              carbohydrate: 1,
              fat: 0,
              flavour: 2
          },
          lemonade: {
              protein: 0,
              carbohydrate: 10,
              fat: 0,
              flavour: 20
          },
          burger: {
              protein: 0,
              carbohydrate: 5,
              fat: 7,
              flavour: 3
          },
          eggs: {
              protein: 5,
              carbohydrate: 0,
              fat: 1,
              flavour: 1
          },
          turkey: {
              protein: 10,
              carbohydrate: 10,
              fat: 10,
              flavour: 10
          }
      };

      return function (input){
          let command = input.split(" ");

          switch (command[0]) {
              case "restock":
                  let product = command[1];
                  let quantity = Number(command[2]);
                  products[product] += quantity;
                  return "Success";
                  break;

              case "prepare":
                  let recipe = command[1].toLowerCase();
                  let quant = Number(command[2]);
                  let prods = Object.keys(products);
                  for (i = 0; i < prods.length; i++){
                      if (products[prods[i]] < recipes[recipe][prods[i]]*quant){
                          return `Error: not enough ${prods[i]} in stock`
                      }
                  }
                  for (i = 0; i < prods.length; i++){
                      products[prods[i]] -= recipes[recipe][prods[i]]*quant
                  }
                  return "Success";
                  break;

              case "report":
                  return `protein=${products.protein} carbohydrate=${products.carbohydrate} fat=${products.fat} flavour=${products.flavour}`
          }
      }
}

console.log(result("restock carbohydrate 10"))
console.log(result("restock flavour 10"))
console.log(result("prepare apple 1"))
console.log(result("restock fat 10"))
console.log(result ("prepare burger 1"))
console.log(result ("report"))

