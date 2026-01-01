#include <stdio.h>

int main(void) {
    int N;
    scanf("%d", &N);
    
    int arr[N];
    
    for (int i = 0; i < N; i++) {
        scanf("%d", &arr[i]);
    }
    
    int cnt = 0;
    int v;
    scanf("%d", &v);
    
    for (int i = 0; i < N; i++) {
        if (v == arr[i]) cnt++;
    }
    
    printf("%d", cnt);
}