import sys

input = sys.stdin.readlines();
card_dict = {}
card_list = map(int, input[3].split())

for card in map(int, input[1].split()):
    if card in card_dict:
        card_dict[card] += 1
    else:
        card_dict[card] = 1

result = [card_dict[card] if card in card_dict else 0 for card in card_list]

print(' '.join(map(str, result)))