#include <iostream>
#include <algorithm>
#include <vector>
#include <sstream>
#include <string>
#include <iterator>

int main() {
    int N, X;
    std::cin >> N >> X;
    std::cin.ignore();
    std::string line;
    std::getline(std::cin, line);
    std::stringstream ss(line);
    std::vector<int> nums((std::istream_iterator<int>(ss)), std::istream_iterator<int>());
    nums.erase(std::remove_if(nums.begin(), nums.end(), [X](int n) { return n >= X; }), nums.end());
    std::ostringstream oss;
    std::copy(nums.begin(), nums.end(), std::ostream_iterator<int>(oss, " "));
    std::string result = oss.str();
    std::cout << result;
} 
