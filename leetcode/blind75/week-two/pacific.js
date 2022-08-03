var canFinish = function(numCourses, prerequisites) {
  const visited = new Set();
  const visiting = new Set();
  
  // Initialize an array of all the courses (i.e. index 0 for course 0, index
  // 1 for course 1). For each course, populate an array of all the courses
  // that depend on it
  const prereqCourseArr = [...new Array(numCourses)].map(() => []);
  prerequisites.forEach(([course, prereq]) => {
      prereqCourseArr[prereq].push(course);
  });
  
  console.log(prereqCourseArr)
  // Do DFS on each course
  for (let course = 0 ; course < numCourses; course++) {
      // There is a cycle, this course cannot be finished
      if (!dfs(course)) {
         return false;
      } 
  };
  return true;
  
  function dfs(course) {
      // We have seen and verified this course can be finished
      if (visited.has(course)) {
          return true;
      }
      
      // This is one of the courses we are seeing during the current search
      // (i.e. there is a cycle)
      if (visiting.has(course)) {
          return false;
      }
      
      // Add the course to courses we are seeing during the current search
      visiting.add(course);
      
      // Iterate through all the other courses that depend on the current
      // course. For each one, do DFS
      const coursesDependingOnThis = prereqCourseArr[course];
      for (let i = 0; i < coursesDependingOnThis.length; i++) {
          const courseDependingOnThis = coursesDependingOnThis[i];
          if (!dfs(courseDependingOnThis)) {
              return false;
          }
      }
      
      visiting.delete(course);
      visited.add(course);
      return true;
  };
};

console.log(canFinish(2, [[1, 0]]))