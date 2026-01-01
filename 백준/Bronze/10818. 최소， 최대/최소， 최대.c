#include <stdio.h>

int main(void) {
    int N;
    scanf("%d", &N);
    int max = -1000000;
    int min = 1000000;
    
    for (int i = 0; i < N; i++) {
        int x;
        scanf("%d", &x);
        
        if (x > max) {
            max = x;
        }
        
        if (x < min) {
            min = x;
        }
    }
    
    printf("%d %d", min, max);
}