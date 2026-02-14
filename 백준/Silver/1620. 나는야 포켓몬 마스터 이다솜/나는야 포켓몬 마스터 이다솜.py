import sys

input = list(map(lambda x: x.strip(), sys.stdin.readlines()))
N, M = map(int, input[0].split())
pokemon_dict_forward = {}
pokemon_dict_backward = {}
result = []
for num, pokemon in enumerate(input[1: N+1]):
    pokemon_dict_forward[str(num+1)] = pokemon
    pokemon_dict_backward[pokemon] = str(num+1)

for query in input[N+1:]:
    result.append(pokemon_dict_forward[query] if query.isdigit() else pokemon_dict_backward[query])
    
print('\n'.join(result))