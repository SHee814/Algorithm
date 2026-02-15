#include <iostream>

int main() {
    while (true) {
        int a, b;
        std::cin >> a >> b;
        
        if (a + b == 0) break;
        
        std::cout << a + b << '\n';
    }
}