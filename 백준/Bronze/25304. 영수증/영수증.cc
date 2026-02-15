#include <iostream>

int main() {
    int X, N;
    std::cin >> X;
    std::cin >> N;
    int sum = 0;
    
    for (int i = 0; i < N; i++) {
        int a, b;
        std::cin >> a >> b;
        sum += a * b;
    }
    
    std::cout << ((sum == X) ? "Yes" : "No");
}