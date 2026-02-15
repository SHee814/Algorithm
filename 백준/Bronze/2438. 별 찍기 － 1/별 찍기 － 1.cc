#include <iostream>
#include <string>

int main() {
    int T;
    std::cin >> T;
    
    for (int i = 1; i <= T; i++) {
        std::string s(i, '*');
        std::cout << s << "\n";
    }
}