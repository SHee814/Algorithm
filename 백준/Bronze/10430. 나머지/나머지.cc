#include <iostream>
// (A+B)%C는 ((A%C) + (B%C))%C 와 같을까?
// (A×B)%C는 ((A%C) × (B%C))%C 와 같을까?

int main() {
    int A, B, C;
    std::cin >> A >> B >> C;
    std::cout << (A + B) % C << '\n';
    std::cout << ((A % C) + (B % C)) %C << '\n';
    std::cout << (A * B) % C << '\n';
    std::cout << ((A % C) * (B % C)) % C << '\n';
}