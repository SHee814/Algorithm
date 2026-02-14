N = int(input())
card_set = set(map(int, input().split()))
M = int(input())
card_list = map(int, input().split())
result = []

for card in card_list:
    result.append('1' if card in card_set else '0')
    
print(' '.join(result))