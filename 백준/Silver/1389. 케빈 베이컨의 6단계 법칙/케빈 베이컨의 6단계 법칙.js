const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const graph = Array.from({ length: N }, () => []);

for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  graph[a - 1].push(b - 1);
  graph[b - 1].push(a - 1);
}

function bfs(start) {
  const queue = [start];
  const visited = new Array(N).fill(-1);
  visited[start] = 0;

  while (queue.length > 0) {
    const current = queue.shift();

    for (const next of graph[current]) {
      if (visited[next] === -1) {
        visited[next] = visited[current] + 1;
        queue.push(next);
      }
    }
  }

  return visited.reduce((acc, val) => acc + val, 0);
}

let minSum = Infinity;
let minUser = 1;

for (let i = 0; i < N; i++) {
  const sum = bfs(i);
  if (sum < minSum) {
    minSum = sum;
    minUser = i + 1;
  } else if (sum === minSum && i + 1 < minUser) {
    minUser = i + 1;
  }
}

console.log(minUser);