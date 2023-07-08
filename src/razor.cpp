#include <iostream>

using namespace std;

int main()
{
    double discountAmount, purchaseAmount, totalPayment, discount;
    char choice;

    do
    {
        cout << "Enter Purchase Amount: ";
        cin >> purchaseAmount;

        if (purchaseAmount >= 200000 && purchaseAmount <= 1000000)
        {
            discount = 0.03;
        }
        else if (purchaseAmount > 1000000)
        {
            discount = 0.07;
        }
        else
        {
            discount = 0.00;
        }

        discountAmount = discount * purchaseAmount;
        totalPayment = purchaseAmount - discountAmount;

        cout << "Discounted Amount: " << discountAmount << endl;
        cout << "Total Payment after discount: " << totalPayment << endl;

        cout << "Calculate for another customer? (Y/N): ";
        cin >> choice;
    } while (choice == 'Y' || choice == 'y');

    return 0;
}
