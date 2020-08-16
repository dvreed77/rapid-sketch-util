// npx ts-node examples/randomF.ts
import { randomF, randomFBST } from "../src/random";
import { TreeNode, BinarySearchTree } from "../src/utils/bst";

// import * as d3 from "d3";

const nPts = 1000;

console.time("myR");
const r = randomF((x) => Math.exp(-0.5 * ((x - 0.5) / 0.1) ** 2));
const p = [];
for (let i = 0; i < nPts; i++) {
  p.push(r());
}
console.timeEnd("myR");

// console.time("myR2");
// const f = d3.randomNormal(0.5, 0.1);
// const p2 = [];
// for (let i = 0; i < nPts; i++) {
//   p2.push(f());
// }
// console.timeEnd("myR2");

// const r = new TreeNode(10);

// insert(r, new TreeNode(5));

// console.log(r);

// const b = new BinarySearchTree();

// b.insert(10);
// b.insert(5);
// b.insert(2);
// b.insert(20);
// b.insert(11);
// // console.log(b);

// const d = b.search(b.root, 19);
// console.log(d);

console.time("myR3-build");
const r3 = randomFBST((x) => Math.exp(-0.5 * ((x - 0.5) / 0.1) ** 2));

console.timeEnd("myR3-build");
const p3 = [];
console.time("myR3");
for (let i = 0; i < nPts; i++) {
  p3.push(r3.sample());
}
console.timeEnd("myR3");
