#include <iostream>

int main() {
    int n;
    std::cin >> n;
    
    for (int i = 0; i < n; i++) {
        int A, B;
        std::cin >> A >> B;
        std::cout << A + B << '\n';
    }
}