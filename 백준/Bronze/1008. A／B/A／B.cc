#include <iostream>

int main() {
    double a, b;
    std::cout << std::fixed;
    std::cout.precision(9);
    std::cin >> a >> b;
    std::cout << a / b;
}