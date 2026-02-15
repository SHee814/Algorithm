#include <iostream>
#include <string>

int main() {
    int n;
    std::string result = "";
    std::cin >> n;
    
    for (int i = 0; i < n / 4; i++) {
        result += "long ";
    }
    
    std::cout << result + "int";
}