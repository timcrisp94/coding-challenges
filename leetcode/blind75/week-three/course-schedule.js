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