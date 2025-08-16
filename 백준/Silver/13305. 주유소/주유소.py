N = int(input())
dist = list(map(int, input().split()))
price = list(map(int, input().split()))
current_price = price[0]
x = 0
cost = 0

while x < N - 1:
    current_price = min(current_price, price[x])
    cost += current_price * dist[x]
    x += 1

print(cost)