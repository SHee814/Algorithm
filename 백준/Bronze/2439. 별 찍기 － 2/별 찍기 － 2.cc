#include <iostream>
#include <string>

int main() {
    int T;
    std::cin >> T;
    
    for (int i = 1; i <= T; i++) {
        std::string a(T-i, ' ');
        std::string b(i, '*');
        std::cout << a + b << '\n';
    }
}