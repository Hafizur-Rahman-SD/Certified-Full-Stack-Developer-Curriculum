let inventory = [];

//  find product index by name (case-insensitive)
function findProductIndex(productName) {
  productName = productName.toLowerCase();

  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === productName) {
      return i;
    }
  }
  return -1;
}

//  add product
function addProduct(product) {
  let name = product.name.toLowerCase();
  let quantity = product.quantity;

  let index = findProductIndex(name);

  if (index !== -1) {
    inventory[index].quantity += quantity;
    console.log(name + " quantity updated");
  } else {
    inventory.push({ name: name, quantity: quantity });
    console.log(name + " added to inventory");
  }
}

//  remove product
function removeProduct(productName, quantity) {
  productName = productName.toLowerCase();
  let index = findProductIndex(productName);

  if (index === -1) {
    console.log(productName + " not found");
    return;
  }

  let currentQuantity = inventory[index].quantity;

  if (currentQuantity < quantity) {
    console.log(
      "Not enough " +
        productName +
        " available, remaining pieces: " +
        currentQuantity
    );
  } else {
    inventory[index].quantity -= quantity;

    if (inventory[index].quantity === 0) {
      inventory.splice(index, 1);
    } else {
      console.log(
        "Remaining " +
          productName +
          " pieces: " +
          inventory[index].quantity
      );
    }
  }
}