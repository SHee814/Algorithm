#include <stdio.h>

int main(void) {
    int N, M;
    scanf("%d %d", &N, &M);
    int arr[N];
    
    for (int n = 0; n < N; n++) {
        arr[n] = n+1;
    }
    
    for (int m = 0; m < M; m++) {
        int i, j;
        scanf("%d %d", &i, &j);
        
        int vi = arr[i-1];
        int vj = arr[j-1];
        arr[i-1] = vj;
        arr[j-1] = vi;
    }
    
    for (int n = 0; n < N; n++) {
        printf("%d ", arr[n]);
    }
}