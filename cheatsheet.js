var CheatsheetApp = angular.module('CheatsheetApp', []);

CheatsheetApp.controller('CheatsheetController', function ($scope) {
  $scope.stringOnly = false;
  $scope.arrayOnly = false;
  $scope.objOnly = false;
  $scope.toggleStringOnly = function () {
    $scope.stringOnly = !$scope.stringOnly;
    console.log($scope.stringOnly);
  };
  $scope.toggleArrayOnly = function () {
    $scope.arrayOnly = !$scope.arrayOnly;
    console.log($scope.arrayOnly);
  };
  $scope.toggleObjectOnly = function () {
    $scope.objectOnly = !$scope.objectOnly;
    console.log($scope.objectOnly);
  };
  $scope.methods = [
    {
      name: '.length',
      string: { code: '"abc".length', comment: '// 3'},
      array: { code: '[1,2,3].length', comment: '// 3'},
      object: null
    },
    {
      name: '.concat()',
      string: { code: '"ab".concat("cd")', comment: '// "abcd"'},
      array: { code: '[1,2].concat([3,4])', comment: '// [1,2,3,4]'},
      object: null
    },
    {
      name: '.includes()',
      string: { code: '"abc".includes("a")', comment: '// true', experimental: true},
      array: { code: '[1,2].includes(2)', comment: '// true', experimental: true},
      object: null
    },
    {
      name: '.toString()',
      string: { code: '"abc".toString()', comment: '// "abc"'},
      array: { code: '[1,2,3].toString()', comment: '// "123"'},
      object: { code: 'anyObj.toString()', comment: '// "[object Object]"'}
    },
    {
      name: '.charAt()',
      string: { code: '"abc".charAt(1)', comment: '// "b"'},
      array: null,
      object: null
    },
    {
      name: '.charCodeAt()',
      string: { code: '"abc".charCodeAt(1)', comment: '// 98'},
      array: null,
      object: null
    },
    {
      name: '.codePointAt()',
      string: { code: '"abc".codePointAt(1)', comment: '// 98', experimental: true},
      array: null,
      object: null
    },
    {
      name: '.endsWith()',
      string: { code: '"abc".endsWith("c")', comment: '// true', experimental: true},
      array: null,
      object: null
    },
    {
      name: '.indexOf()',
      string: { code: '"abc".indexOf("c")', comment: '// 2'},
      array: null,
      object: null
    },
    {
      name: '.lastIndexOf()',
      string: { code: '"abb".lastIndexOf("b")', comment: '// 2'},
      array: null,
      object: null
    },
    {
      name: '.match()',
      string: { code: '"abc".match(/./g)', comment: '// ["a","b","c"]'},
      array: null,
      object: null
    },
    {
      name: '.repeat()',
      string: { code: '"abc".repeat(2)', comment: '// "abcabc"', experimental: true},
      array: null,
      object: null
    },
    {
      name: '.replace()',
      string: { code: '"abc".replace(/a/, "x")', comment: '// "xbc"'},
      array: null,
      object: null
    },
    {
      name: '.search()',
      string: { code: '"abc".search(/b/)', comment: '// 1'},
      array: null,
      object: null
    },
    {
      name: '.slice()',
      string: { code: '"abc".slice(1)', comment: '// "bc"'},
      array: null,
      object: null
    },
    {
      name: '.split()',
      string: { code: '"a,b,c".split(",")', comment: '// ["a","b","c"]'},
      array: null,
      object: null
    },
    {
      name: '.startsWith()',
      string: { code: '"abc".startsWith("a")', comment: '// true', experimental: true},
      array: null,
      object: null
    },
    {
      name: '.substr()',
      string: { code: '"abcd".substr(2,2)', comment: '// "cd"'},
      array: null,
      object: null
    },
    {
      name: '.substring()',
      string: { code: '"abcd".substr(1,2)', comment: '// "b"'},
      array: null,
      object: null
    },
    {
      name: '.toLowerCase()',
      string: { code: '"AbCd".toLowerCase()', comment: '// "abcd"'},
      array: null,
      object: null
    },
    {
      name: '.toUpperCase()',
      string: { code: '"AbCd".toUpperCase()', comment: '// "ABCD"'},
      array: null,
      object: null
    },
    {
      name: '.trim()',
      string: { code: '" ab ".trim()', comment: '// "ab"'},
      array: null,
      object: null
    },
    {
      name: '.copyWithin()',
      string: null,
      array: {  code: '[1,2,3,4].copyWithin(0,3)',
                comment: '// [4,2,3,4]',
                experimental: true,
                mutator: true},
      object: null
    },
    {
      name: '.fill()',
      string: null,
      array: { code: '[1,2,3].fill(4)', comment: '// [4,4,4]', experimental: true},
      object: null
    },
    {
      name: '.hasOwnProperty()',
      string: null,
      array: null,
      object: { code: '{x: 1}.hasOwnProperty("x"}', comment: '// true'}
    },
  ];
});