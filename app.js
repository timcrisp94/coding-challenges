/*

*/
// create prerequisite map
// course : []

  // for each course, add prereqs 

  // visitSet = new Set()
  
  // depthfirst 
    // if course in visit set return false
    // if preMap[course] === [] return true

    // add course to visitSet
    // loop through prereqs of course
    // for each prereq dfs(prereq)
    // if !dfs(pre) return false
    // remove from visitSet
    // preMap[crs] = [] 
    // return true
    
    // for course in numCourses
    // if !dfs(crs) return false
    // return
  
  const courseSchedule = function(numCourses, prerequisites) {
    const visited = new Set()
    const visiting = new Set()

    const preArray = [...new Array(numCourses)].map(() => [])
    prerequisites.forEach(([course, prereq]) => {
      preArray[prereq].push(course)
    })

    for (let course = 0; course < numCourses; courses++) {
      if (!dfs(course)) return false
    }

    return true

    function dfs(course) {
      if (visited.has(course)) return true
      if (visiting.has(course)) return false

      visiting.add(course)

      for (let i = 0; i < preArray[course]; i++) {
        if (!preArray[course][i]) {
          return false
        }
      }
      visiting.delete(course)
      visited.add(course)
      return true
    }
  }