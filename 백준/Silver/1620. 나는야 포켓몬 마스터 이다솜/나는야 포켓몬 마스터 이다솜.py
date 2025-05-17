N, M = map(int, input().split())
dictionary = {}

for i in range(N):
    dictionary[input()] = i + 1

dictionary_sorted = sorted(list(dictionary), key = lambda x: dictionary[x]) 
   
for _ in range(M):
    q = input()
    
    if q in dictionary:
        print(dictionary[q])
    else:
        print(dictionary_sorted[int(q) - 1])