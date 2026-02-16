#include <iostream>

int main() {
    std::ios_base::sync_with_stdio(false);
    std::cin.tie(NULL);
    int N, X, v;
    std::cin >> N >> X;
    
    for (int i = 0; i < N; i++) {
        std::cin >> v;
        if (v < X) std::cout << v << " ";
    }
} 
