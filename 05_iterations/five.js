const coding = ["JavaScript", "Python", "Java", "C++", "Ruby"]

// coding.forEach( function (val) {console.log(val);
// } )

// coding.forEach( (val) => {console.log(val);
// })

// function printMe(item){
//     console.log(item);

// }
// coding.forEach(printMe) 

// coding.forEach((item, index, arr)=> {
//     console.log(item, index, arr);
   
// })

const mycoding = [ 
    {
        langauge : "JavaScript",
        languagefilename : "js",
    },
    {
        langauge : "Python",
        languagefilename : "py",
    },
   
]

mycoding.forEach( (item) => {
    console.log(item.langauge);
    
})
