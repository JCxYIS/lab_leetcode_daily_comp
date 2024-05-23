// https://github.com/alfaarghya/alfa-leetcode-api/tree/main
// const HOST_URL =  'https://alfa-leetcode-api.onrender.com'
const HOST_URL =  'http://localhost:3001'
const DUMMY_DATA = false

export const LeetcodeDataApi =  {

  qId:'0',
  qTitle:'',

  getProblem: async () => {
    let data = EX;
    if(!DUMMY_DATA) {
      const response = await fetch(HOST_URL+'/daily')
      data = await response.json()
    }

    LeetcodeDataApi.qId = data.questionId
    LeetcodeDataApi.qTitle = data.questionTitle

    return data
  },

  getUserStatus: async (username: string) => {
    let data = username.startsWith('ja') ?  EU2 : EU
    
    if(!DUMMY_DATA) {
      const response = await fetch(HOST_URL+`/${username}/acSubmission`)
      data = await response.json()
    }
    return data
  }
}


const EX =  {
  "questionLink": "https://leetcode.com/problems/the-number-of-beautiful-subsets/",
  "date": "2024-05-23",
  "questionId": "2696",
  "questionFrontendId": "2597",
  "questionTitle": "The Number of Beautiful Subsets",
  "titleSlug": "the-number-of-beautiful-subsets",
  "difficulty": "Medium",
  "isPaidOnly": false,
  "question": "\u003Cp\u003EYou are given an array \u003Ccode\u003Enums\u003C/code\u003E of positive integers and a \u003Cstrong\u003Epositive\u003C/strong\u003E integer \u003Ccode\u003Ek\u003C/code\u003E.\u003C/p\u003E\n\n\u003Cp\u003EA subset of \u003Ccode\u003Enums\u003C/code\u003E is \u003Cstrong\u003Ebeautiful\u003C/strong\u003E if it does not contain two integers with an absolute difference equal to \u003Ccode\u003Ek\u003C/code\u003E.\u003C/p\u003E\n\n\u003Cp\u003EReturn \u003Cem\u003Ethe number of \u003Cstrong\u003Enon-empty beautiful \u003C/strong\u003Esubsets of the array\u003C/em\u003E \u003Ccode\u003Enums\u003C/code\u003E.\u003C/p\u003E\n\n\u003Cp\u003EA \u003Cstrong\u003Esubset\u003C/strong\u003E of \u003Ccode\u003Enums\u003C/code\u003E is an array that can be obtained by deleting some (possibly none) elements from \u003Ccode\u003Enums\u003C/code\u003E. Two subsets are different if and only if the chosen indices to delete are different.\u003C/p\u003E\n\n\u003Cp\u003E&nbsp;\u003C/p\u003E\n\u003Cp\u003E\u003Cstrong class=\"example\"\u003EExample 1:\u003C/strong\u003E\u003C/p\u003E\n\n\u003Cpre\u003E\n\u003Cstrong\u003EInput:\u003C/strong\u003E nums = [2,4,6], k = 2\n\u003Cstrong\u003EOutput:\u003C/strong\u003E 4\n\u003Cstrong\u003EExplanation:\u003C/strong\u003E The beautiful subsets of the array nums are: [2], [4], [6], [2, 6].\nIt can be proved that there are only 4 beautiful subsets in the array [2,4,6].\n\u003C/pre\u003E\n\n\u003Cp\u003E\u003Cstrong class=\"example\"\u003EExample 2:\u003C/strong\u003E\u003C/p\u003E\n\n\u003Cpre\u003E\n\u003Cstrong\u003EInput:\u003C/strong\u003E nums = [1], k = 1\n\u003Cstrong\u003EOutput:\u003C/strong\u003E 1\n\u003Cstrong\u003EExplanation:\u003C/strong\u003E The beautiful subset of the array nums is [1].\nIt can be proved that there is only 1 beautiful subset in the array [1].\n\u003C/pre\u003E\n\n\u003Cp\u003E&nbsp;\u003C/p\u003E\n\u003Cp\u003E\u003Cstrong\u003EConstraints:\u003C/strong\u003E\u003C/p\u003E\n\n\u003Cul\u003E\n\t\u003Cli\u003E\u003Ccode\u003E1 &lt;= nums.length &lt;= 20\u003C/code\u003E\u003C/li\u003E\n\t\u003Cli\u003E\u003Ccode\u003E1 &lt;= nums[i], k &lt;= 1000\u003C/code\u003E\u003C/li\u003E\n\u003C/ul\u003E\n",
  "exampleTestcases": "[2,4,6]\n2\n[1]\n1",
  "topicTags": [
    {
      "name": "Array",
      "slug": "array",
      "translatedName": null
    },
    {
      "name": "Dynamic Programming",
      "slug": "dynamic-programming",
      "translatedName": null
    },
    {
      "name": "Backtracking",
      "slug": "backtracking",
      "translatedName": null
    },
    {
      "name": "Sorting",
      "slug": "sorting",
      "translatedName": null
    }
  ],
  "hints": [
    "Sort the array nums and create another array cnt of size nums[i].",
    "Use backtracking to generate all the beautiful subsets. If cnt[nums[i] - k] is positive, then it is impossible to add nums[i] in the subset, and we just move to the next index. Otherwise, it is also possible to add nums[i] in the subset, in this case, increase cnt[nums[i]], and move to the next index.",
    "Bonus: Can you solve the problem in O(n log n)?"
  ],
  "solution": {
    "id": "2319",
    "canSeeDetail": true,
    "paidOnly": false,
    "hasVideoSolution": false,
    "paidOnlyVideo": true
  },
  "companyTagStats": null,
  "likes": 774,
  "dislikes": 139,
  "similarQuestions": "[{\"title\": \"Construct the Lexicographically Largest Valid Sequence\", \"titleSlug\": \"construct-the-lexicographically-largest-valid-sequence\", \"difficulty\": \"Medium\", \"translatedTitle\": null}]"
}

const EU = {
  "count": 20,
  "submission": [
    {
      "title": "Subsets",
      "titleSlug": "subsets",
      "timestamp": "1716262138",
      "statusDisplay": "Accepted",
      "lang": "cpp"
    },
    {
      "title": "Delete Leaves With a Given Value",
      "titleSlug": "delete-leaves-with-a-given-value",
      "timestamp": "1715918316",
      "statusDisplay": "Accepted",
      "lang": "cpp"
    },
    {
      "title": "Double a Number Represented as a Linked List",
      "titleSlug": "double-a-number-represented-as-a-linked-list",
      "timestamp": "1715049059",
      "statusDisplay": "Accepted",
      "lang": "cpp"
    },
    {
      "title": "Add One Row to Tree",
      "titleSlug": "add-one-row-to-tree",
      "timestamp": "1713235101",
      "statusDisplay": "Accepted",
      "lang": "cpp"
    },
    {
      "title": "Time Needed to Buy Tickets",
      "titleSlug": "time-needed-to-buy-tickets",
      "timestamp": "1712654100",
      "statusDisplay": "Accepted",
      "lang": "cpp"
    },
    {
      "title": "Isomorphic Strings",
      "titleSlug": "isomorphic-strings",
      "timestamp": "1712024586",
      "statusDisplay": "Accepted",
      "lang": "cpp"
    },
    {
      "title": "Subarray Product Less Than K",
      "titleSlug": "subarray-product-less-than-k",
      "timestamp": "1711510880",
      "statusDisplay": "Accepted",
      "lang": "cpp"
    },
    {
      "title": "First Missing Positive",
      "titleSlug": "first-missing-positive",
      "timestamp": "1711421914",
      "statusDisplay": "Accepted",
      "lang": "cpp"
    },
    {
      "title": "Reverse Linked List",
      "titleSlug": "reverse-linked-list",
      "timestamp": "1711008857",
      "statusDisplay": "Accepted",
      "lang": "cpp"
    },
    {
      "title": "Merge In Between Linked Lists",
      "titleSlug": "merge-in-between-linked-lists",
      "timestamp": "1710937261",
      "statusDisplay": "Accepted",
      "lang": "cpp"
    },
    {
      "title": "Minimum Number of Arrows to Burst Balloons",
      "titleSlug": "minimum-number-of-arrows-to-burst-balloons",
      "timestamp": "1710734970",
      "statusDisplay": "Accepted",
      "lang": "cpp"
    },
    {
      "title": "Product of Array Except Self",
      "titleSlug": "product-of-array-except-self",
      "timestamp": "1710472546",
      "statusDisplay": "Accepted",
      "lang": "cpp"
    },
    {
      "title": "Find the Pivot Integer",
      "titleSlug": "find-the-pivot-integer",
      "timestamp": "1710301763",
      "statusDisplay": "Accepted",
      "lang": "cpp"
    },
    {
      "title": "Remove Zero Sum Consecutive Nodes from Linked List",
      "titleSlug": "remove-zero-sum-consecutive-nodes-from-linked-list",
      "timestamp": "1710211127",
      "statusDisplay": "Accepted",
      "lang": "cpp"
    },
    {
      "title": "Custom Sort String",
      "titleSlug": "custom-sort-string",
      "timestamp": "1710126621",
      "statusDisplay": "Accepted",
      "lang": "cpp"
    },
    {
      "title": "Intersection of Two Arrays",
      "titleSlug": "intersection-of-two-arrays",
      "timestamp": "1710083131",
      "statusDisplay": "Accepted",
      "lang": "cpp"
    },
    {
      "title": "Minimum Common Value",
      "titleSlug": "minimum-common-value",
      "timestamp": "1709961700",
      "statusDisplay": "Accepted",
      "lang": "cpp"
    },
    {
      "title": "Count Elements With Maximum Frequency",
      "titleSlug": "count-elements-with-maximum-frequency",
      "timestamp": "1709868324",
      "statusDisplay": "Accepted",
      "lang": "cpp"
    },
    {
      "title": "Middle of the Linked List",
      "titleSlug": "middle-of-the-linked-list",
      "timestamp": "1709783695",
      "statusDisplay": "Accepted",
      "lang": "cpp"
    },
    {
      "title": "Linked List Cycle",
      "titleSlug": "linked-list-cycle",
      "timestamp": "1709695073",
      "statusDisplay": "Accepted",
      "lang": "cpp"
    }
  ]
}

const EU2 = {"count":20,"submission":[{"title":"The Number of Beautiful Subsets","titleSlug":"the-number-of-beautiful-subsets","timestamp":"1716450163","statusDisplay":"Accepted","lang":"java"},{"title":"Evaluate Boolean Binary Tree","titleSlug":"evaluate-boolean-binary-tree","timestamp":"1715831790","statusDisplay":"Accepted","lang":"cpp"},{"title":"Find the Safest Path in a Grid","titleSlug":"find-the-safest-path-in-a-grid","timestamp":"1715830574","statusDisplay":"Accepted","lang":"java"},{"title":"Length of Longest Subarray With at Most K Frequency","titleSlug":"length-of-longest-subarray-with-at-most-k-frequency","timestamp":"1711598556","statusDisplay":"Accepted","lang":"java"},{"title":"Subarray Product Less Than K","titleSlug":"subarray-product-less-than-k","timestamp":"1711511769","statusDisplay":"Accepted","lang":"java"},{"title":"Count Elements With Maximum Frequency","titleSlug":"count-elements-with-maximum-frequency","timestamp":"1709869316","statusDisplay":"Accepted","lang":"java"},{"title":"Find Bottom Left Tree Value","titleSlug":"find-bottom-left-tree-value","timestamp":"1709141881","statusDisplay":"Accepted","lang":"java"},{"title":"Longest Common Subsequence","titleSlug":"longest-common-subsequence","timestamp":"1706203751","statusDisplay":"Accepted","lang":"java"},{"title":"Count of Matches in Tournament","titleSlug":"count-of-matches-in-tournament","timestamp":"1701757273","statusDisplay":"Accepted","lang":"cpp"},{"title":"Number of 1 Bits","titleSlug":"number-of-1-bits","timestamp":"1701268261","statusDisplay":"Accepted","lang":"java"},{"title":"Number of Ways to Divide a Long Corridor","titleSlug":"number-of-ways-to-divide-a-long-corridor","timestamp":"1701225070","statusDisplay":"Accepted","lang":"java"},{"title":"Partition List","titleSlug":"partition-list","timestamp":"1692088066","statusDisplay":"Accepted","lang":"java"},{"title":"Number of Closed Islands","titleSlug":"number-of-closed-islands","timestamp":"1680792755","statusDisplay":"Accepted","lang":"java"},{"title":"Binary Search","titleSlug":"binary-search","timestamp":"1680320304","statusDisplay":"Accepted","lang":"java"},{"title":"Reducing Dishes","titleSlug":"reducing-dishes","timestamp":"1680095463","statusDisplay":"Accepted","lang":"java"},{"title":"Minimum Cost For Tickets","titleSlug":"minimum-cost-for-tickets","timestamp":"1680011875","statusDisplay":"Accepted","lang":"java"},{"title":"Minimum Path Sum","titleSlug":"minimum-path-sum","timestamp":"1679924330","statusDisplay":"Accepted","lang":"java"},{"title":"Reorder Routes to Make All Paths Lead to the City Zero","titleSlug":"reorder-routes-to-make-all-paths-lead-to-the-city-zero","timestamp":"1679664302","statusDisplay":"Accepted","lang":"java"},{"title":"Number of Zero-Filled Subarrays","titleSlug":"number-of-zero-filled-subarrays","timestamp":"1679393052","statusDisplay":"Accepted","lang":"java"},{"title":"Construct Binary Tree from Inorder and Postorder Traversal","titleSlug":"construct-binary-tree-from-inorder-and-postorder-traversal","timestamp":"1678975680","statusDisplay":"Accepted","lang":"java"}]}