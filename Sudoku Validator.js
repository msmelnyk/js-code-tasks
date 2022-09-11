var arr = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ];
  
  
  function validSolution(array) {
      base_list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      kvadr = [
              [],
              [],
              [],
              [],
              [],
              [],
              [],
              [],
              [],
          ];
  
      if (array.length == 9) {
          for (var i = 0; i < array.length; i++) {
              if (array[i].length == 9) {
                  hor = []
                  vert = [];
                  for (var j = 0; j < array[i].length; j++) {
                      if (base_list.includes(array[i][j]) && !hor.includes(array[i][j])) {
                          hor.push(array[i][j]);
                      } else {
                          return false;
                      }
                      if (base_list.includes(array[j][i]) && !vert.includes(array[j][i])) {
                          vert.push(array[j][i]);
                      } else {
                          return false;
                      }
                      if (i >= 0 && i < 3 && j >= 0 && j < 3) {
                          if (!kvadr[0].includes(array[i][j])) {
                              kvadr[0].push(array[i][j]);
                          } else {
                              return false;
                          }
                      }
                      if (i >= 3 && i < 6 && j >= 0 && j < 3) {
                          if (!kvadr[1].includes(array[i][j])) {
                              kvadr[1].push(array[i][j]);
                          } else {
                              return false;
                          }
                      }
                      if (i >= 6 && i < 9 && j >= 0 && j < 3) {
                          if (!kvadr[2].includes(array[i][j])) {
                              kvadr[2].push(array[i][j]);
                          } else {
                              return false;
                          }
                      }
                      if (i >= 0 && i < 3 && j >= 3 && j < 6) {
                          if (!kvadr[3].includes(array[i][j])) {
                              kvadr[3].push(array[i][j]);
                          } else {
                              return false;
                          }
                      }
                      if (i >= 3 && i < 6 && j >= 3 && j < 6) {
                          if (!kvadr[4].includes(array[i][j])) {
                              kvadr[4].push(array[i][j]);
                          } else {
                              return false;
                          }
                      }
                      if (i >= 6 && i < 9 && j >= 3 && j < 6) {
                          if (!kvadr[5].includes(array[i][j])) {
                              kvadr[5].push(array[i][j]);
                          } else {
                              return false;
                          }
                      }
                      if (i >= 0 && i < 3 && j >= 6 && j < 9) {
                          if (!kvadr[6].includes(array[i][j])) {
                              kvadr[6].push(array[i][j]);
                          } else {
                              return false;
                          }
                      }
                      if (i >= 3 && i < 6 && j >= 6 && j < 9) {
                          if (!kvadr[7].includes(array[i][j])) {
                              kvadr[7].push(array[i][j]);
                          } else {
                              return false;
                          }
                      }
                      if (i >= 6 && i < 9 && j >= 6 && j < 9) {
                          if (!kvadr[8].includes(array[i][j])) {
                              kvadr[8].push(array[i][j]);
                          } else {
                              return false;
                          }
                      }
                  }
              } else {
                  return false;
              }
          }
      } else {
          return false;
      }
      return true;
  }
  
  console.log(validSolution(arr))