#include <iostream>

int main() {
    int x;
    std::cin >> x;
    
    for (int i = 1; i < 10; i++) {
        std::cout << x << " * " << i << " = " << x * i << '\n';
    }
}