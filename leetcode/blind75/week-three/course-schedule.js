/*

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.

pseduo : 
- prereq's is a directed graph. use dfs to detect a cycle. if the graph has a cycle, return false

- build adjacency list/prereq array, push empty arrays for each course
-- iterate prereqs, add course to prereq index

- iterate courses, run dfs on each course

- build dfs helper function
-- if visited return true
-- if visiting return false
-- iterate course edges (prereqArray[course])
--- run dfs on each course edge
-- delete from visiting
-- add to visited

*/

const canFinish = function(numCourses, prerequisites) {
  const visited = new Set()
  const visiting = new Set()

  const prereqArray = Array.from({length: numCourses}, () => [])
  prerequisites.forEach(([course, prereq]) => {
    prereqArray[prereq].push(course)
  })

  for (let course = 0; course < numCourses; course++) {
    if (!dfs(course)) return false
  }
  
  return true

  function dfs(course) {
    if (visited.has(course)) return true
    if (visiting.has(course)) return false
    visiting.add(course)

    const courseEdges = prereqArray[course]
    for (let i = 0; i < courseEdges.length; i++) {
      if (!dfs(courseEdges[i])) return false
    }
    visiting.delete(course)
    visited.add(course)
    return true
  }
}

console.log(canFinish(2, [[1, 0]]))


// const buildAdjList = (n, edges) => {
//   const adjList = Array.from({length: n}, () => [])
  
//   for (let edge of edges) {
//     let [src, dest] = edge
//     adjList[src].push(dest)
//   }
//   return adjList
// }

// const hasCycleDFS = (node, adjList, visited, arrive, depart) => {
//   arrive[node]++
//   visited[node] = true

//   for (let neighbor of adjList) {
//     if (!visited[neighbor]) {
//       visited[neighbor] = true
//     }

//     if (hasCycleDFS(node, adjList, visited, arrive, depart)) {
//       return true
//     } else {
//       if (depart[neighbor] === 0) {
//         return true
//       }
//     }
//   }
//   depart[node]++
//   return false
// }

// const canFinish = function(numCourses, prerequisites) {
//   const adjList = buildAdjList(numCourses, prerequisites)
//   const visited = {}
//   const arrive = Array.from({length: numCourses}, () => 0)
//   const depart = Array.from({length: numCourses}, () => 0)

//   for (let vertex = 0; vertex < adjList.length; vertex++) {
//     if (!visited[vertex]) {
//       if (hasCycleDFS(vertex, adjList, visited, arrive, depart)) {
//         return false
//       }
//     }
//   }
//   return true
// }



// const canFinish = function(numCourses, prerequisites) {
//   const visited = new Set()
//   const visiting = new Set()

//   // initialize an array of courses, populate with an empty array for each cours
//   const prereqCoursesArr = [...new Array(numCourses)].map(() => [])
//   // fill array with each course that index depends on
//   prerequisites.forEach(([course, prereq]) => {
//     prereqCoursesArr[prereq].push(course)
//   })

//   for (let course = 0; course < numCourses; course++) {
//     if (!dfs(course)) return false
//   }
//   return true
  
//   function dfs(course) {
//     if (visited.has(course)) return true
//     if (visiting.has(course)) return false
//     visiting.add(course)
    
//     const courseEdges = prereqCoursesArr[course]
    
//     for (let i = 0; i < courseEdges.length; i++) {
//       if (!dfs(courseEdges[i])) return false
//     }
//     visiting.delete(course)
//     visited.add(course)
//     return true
//   }
// }