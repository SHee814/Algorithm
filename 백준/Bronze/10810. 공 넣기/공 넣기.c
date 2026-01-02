#include <stdio.h>

int main(void) {
    int N, M;
    scanf("%d %d", &N, &M);
    
    int arr[N];
    
    for (int n = 0; n < N; n++) {
        arr[n] = 0;
    }
    
    for (int m = 0; m < M; m++) {
        int i, j, k;
        scanf("%d %d %d", &i, &j, &k);
        
        while (i <= j) {
            arr[i-1] = k;
            i++;
        }
    }
    
    for (int n = 0; n < N; n++) {
        printf("%d ", arr[n]);
    }
}