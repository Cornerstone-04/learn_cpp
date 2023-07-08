const prompt = require("prompt-sync")({ sigint: true });

const calculateTotalPayment = (purchaseAmount) => {
  let discount, discountAmount, totalPayment;

  if (purchaseAmount >= 200000 && purchaseAmount <= 1000000) {
    discount = 0.03; // 3% discount
  } else if (purchaseAmount > 1000000) {
    discount = 0.07; // 7% discount
  } else {
    discount = 0.0;
  }

  discountAmount = purchaseAmount * discount;
  totalPayment = purchaseAmount - discountAmount;
  return { discountAmount, totalPayment };
};

function processCustomers() {
  for (let choice = "Y"; choice === "Y" || choice === "y"; ) {
    let purchaseAmount = prompt(`Enter the purchase amount: `);
    purchaseAmount = parseFloat(purchaseAmount);

    const { discountAmount, totalPayment } =
      calculateTotalPayment(purchaseAmount);

    console.log(`Discounted Amount: $${discountAmount.toFixed(2)}`);
    console.log(`Total Payment after discount: $${totalPayment.toFixed(2)}\n`);

    choice = prompt("Do you want to continue (Y/N)? ");
  }
}

processCustomers();