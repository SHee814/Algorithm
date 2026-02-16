#include <iostream>
#include <algorithm>
#include <vector>
#include <string>
#include <sstream>
#include <iterator>

int main() {
    int N, v;
    std::cin >> N;
    std::cin.ignore();
    std::string line;
    std::getline(std::cin, line);
    std::stringstream ss(line);
    std::vector<int> nums((std::istream_iterator<int>(ss)), std::istream_iterator<int>());
    std::cin >> v;
    std::cout << std::count(nums.begin(), nums.end(), v);
}
