#include <iostream>

int main() {
    std::ios_base::sync_with_stdio(false);
    std::cin.tie(NULL);
    int max = -1000000;
    int min = 1000000;
    int N, x;
    std::cin >> N;
    
    for (int i = 0; i < N; i++) {
        std::cin >> x;
        
        if (max < x) max = x;
        if (min > x) min = x;
    }
    
    std::cout << min << " " << max;
}