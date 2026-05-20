// console.log('hello word 123')

// const userName = 'Giorgi'
// const fruit = 'apple, banana, grape'

// const fruits = ['apple', 'banana', 'grape']
// console.log(fruits.length)
// console.log(fruits[1])
// fruits[0] = 'pear'
// console.log(fruits[fruits.length - 1])
// console.log(fruits.indexOf('test'))
// pop(), pudh(), shift(), unshift()
// fruits.push('kirpicha')
// fruits.pop()
// fruits.unshift('test')
// fruits.shift()
// console.log(fruits)

// masivis metodebis ori kategoria 
// 1) original masivs uketebs mutacias (zevit reebica)
// 2) aketebs kopios modificirebuli masivis (slice)
// const nums = [1,2,3]
// const nums2 = [4,5,6]
// console.log(nums.concat(nums2))
// for + arr
// for(let i = 0; i < nums.length; i++){
//     console.log('ramdenjer')
// }
// console.log(nums)

// const slicedArr = nums.slice(0, 3)
// console.log(nums, 'nums')
// console.log(slicedArr, 'slicedArr')

// const joinedArr = nums.join('A')
// console.log(typeof joinedArr)

// const deletedItem = nums.splice(6, 2, 'test')
// console.log(nums, 'nums')
// console.log(deletedItem, 'deletedItem')

// let nums = [20,44,15,61,45,78,90,11,21]
// console.log(nums, 'nums')
// console.log(...nums, '...nums')
// const max = Math.max(...nums)
// console.log(max, 'max')
// for(let i = 1; i <= 10; i++){
//     nums.push(i)
// }
//console.log(nums)

         // 2
// let max = nums[0]
// for(let i = 1; i < nums.length; i++){
//     if(nums[i] > max){
//         max = nums[i]
//     }
// }
// console.log(max)

        // 3

// const max = nums.sort((a, b)=> b-a)
// console.log(max[0])


// const arr = [1, '2', false, 3, {}, [1,2], 'test', 4]
// const numsArr = []
// for(let i = 0; i < arr.length; i++){
//     if(typeof arr[i] === 'number'){
//         numsArr.push(arr[i])
//     }
// }
// console.log(numsArr, 'numsArr')

// && || !
// daweret kodi romelic gafiltravs masivs mxolod unikalur elementebze
// const nums = [21, 12, 21, 44, 34, 12, 65, 89, 9, 44]
    // 1
// console.log(Array.from(new Set(nums)))
    // 2
// const uniqueNums = []
// for(let i = 0; i < nums.length; i++){
//     if(!uniqueNums.includes(nums[i])){
//         uniqueNums.push(nums[i])
//     }

// }

// console.log(uniqueNums, 'uniqueNums')


// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
// dadebitis raodenoba, uaryofitis jami // [10, -65]
// const result = [0, 0]
// for(let i = 0; i < nums.length; i++){
//     if(nums[i] > 0){
//         result[0] += 1
//     }else{
//         result[1] += nums[i]
//     }
// }
// console.log(result, 'result')

// const nums = [12, 21, 12, 43, 55, 68, 92, 55, 2]
// let sumOfUniqueNums = 0
// const uniques = []
// for(let i = 0; i < nums.length; i++){
//     if(!uniques.includes(nums[i])){
//         uniques.push(nums[i])
//         sumOfUniqueNums += nums[i]
//     }
// }
// console.log(sumOfUniqueNums, 'sum')