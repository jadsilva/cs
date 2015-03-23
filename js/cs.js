angular.module('cheat-sheets', []).controller('InputCtrl', function($scope) {
  $scope.render = function () {
    $scope.subjects = parseSubjects($scope.input);
    console.log($scope.subjects);
  };

});

function parseSubjects(str) {
  var blocks = [];
  var iblocks = 0;
  var ilines = 0;
  var consecNewLinesCount = 0;

  for (var i = 0; i < str.length; i++) {
    var c = str.charAt(i);
    if (c != '\n') {
      consecNewLinesCount = 0;
      if (blocks[iblocks] === undefined) {
        blocks[iblocks] = {title: '', itens: []};
      }
      if (ilines == 0) {
        blocks[iblocks].title += c;
      } else if (blocks[iblocks].itens[ilines-1] === undefined) {
        blocks[iblocks].itens[ilines-1] = c; 
      } else {
        blocks[iblocks].itens[ilines-1] += c; 
      }
    } else if (consecNewLinesCount == 1) {
      consecNewLinesCount++;
      iblocks++;
      ilines = 0;
    } else if (consecNewLinesCount == 0) {
      consecNewLinesCount++;
      ilines++;
    }
  }
  return blocks;
}
