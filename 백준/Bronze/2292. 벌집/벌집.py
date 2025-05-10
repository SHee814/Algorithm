N = int(input())
shell = 1
shell_end = 1

while shell_end < N:
    shell_end += shell * 6
    shell += 1
    
print(shell)
