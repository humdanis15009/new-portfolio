
const changeText = document.querySelector(".changeText")
const banner = document.querySelector(".banner")
const cursor = document.querySelector(".cursor")
const wordList = ["HUMD", ""]

// const autoType = (wordList) => {
//     let i = 0
//     let wordIndex = 0
//     let skipUpdate = 0
//     let isReverseTyping = false

//     const setIntervalIndex = setInterval(() => {
//         if (skipUpdate) {
//             skipUpdate--
//             return
//         }
//         if (isReverseTyping) {

//             changeText.innerText = changeText.innerText.slice(0, changeText.innerText.length - 1)
//             wordIndex--
//             if (changeText.innerText.length === 0) {
//                 wordIndex = 0
//                 isReverseTyping = false
//                 wordList[i++]
//                 if (i === wordList.length - 1) {
//                     i = 0
//                 }
//             }


//         } else {
//             skipUpdate = 40
//             changeText.innerText = changeText.innerText + wordList[i][wordIndex++]
//             if (wordIndex === wordList[i].length) {
//                 skipUpdate = 180
//                 isReverseTyping = true
//                 return
//             }

//         }


//     }, 12)
// }
// autoType(wordList)

banner.addEventListener("mousemove", (e) => {
    cursor.style.height="150px"
    cursor.style.width="150px"
    cursor.style.top = e.y-75 + "px"
    cursor.style.left = e.x-75+ "px"
})
