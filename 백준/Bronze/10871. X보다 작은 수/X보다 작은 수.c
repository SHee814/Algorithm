#include <stdio.h>

int main(void) {
    int N, X;
    scanf("%d %d", &N, &X);
    
    for (int i = 0; i < N; i++) {
        int t;
        scanf("%d", &t);
        
        if (t < X) printf("%d ", t);
    }
}