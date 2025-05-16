N = int(input())
words = []

for _ in range(N):
    word = input()
    
    if word not in words:
        words.append(word)

words.sort(key=lambda x: (len(x), x))
print('\n'.join(words))