const start = document.querySelector(".start")

const questions =[{
    question:"Who won the 1966 world cup",
    options:["Brazil","England","France","Italy"],
    correct:"England"
},
{
    question:"Who is the 2008 puskas winner",
    options:["Kaka","Iniesta","Bale","Ronaldo"],
    correct:"Ronaldo"
},
{
    question:"Who is the top coach winner of ucl",
    options:["Pepe","Mourinhou","Ancelloti","Klope"],
    correct:"Ancelloti"
},
{
    question:"Who is the club who has the most trophies",
    options:["Al-Ahly(Egypt)","Real Madrid","Flamingo","Ac Milan"],
    correct:"Al-Ahly(Egypt)"
}]


start.addEventListener("click", () =>{
    document.body.style.backgroundColor ="#8c52ff"
    document.body.removeChild(start)


    const main = document.createElement("div")
    main.className = "main"
    document.body.append(main)

    const h1 = document.createElement("h1")
    h1.textContent = "Quiz Time"
    main.append(h1)

    const hr = document.createElement("hr")
    main.append(hr)

    const h2 = document.createElement("h2")
    h2.textContent = questions[0].question
    main.append(h2)

    

    questions[0].options.forEach(optionText => {
        const option =  document.createElement("button")
        option.className = "options"; 
        option.textContent = optionText
        main.append(option)
        option.addEventListener("click",()=>{
            main.querySelectorAll(".options").forEach(opt => {
                opt.disabled = true;
                opt.style.backgroundColor = "";
            });
            if(option.textContent === questions[0].correct){
                option.style.backgroundColor = "hsl(112, 96%, 68%)"
            }else{
                option.style.backgroundColor = "hsl(0, 96%, 68%)"
                

            }
        })
        

    });
    
    
    const next = document.createElement("button")
    next.className = "next"
    next.textContent = "next"
    main.append(next)


    let question_index = 0

    next.addEventListener("click",()=>{
        question_index++
        if(question_index<questions.length){
            h2.textContent = questions[question_index].question
            main.querySelectorAll(".options").forEach((option,index)=>{
                option.textContent = questions[question_index].options[index]
                option.style.backgroundColor = "";
                option.disabled = false; 

                option.addEventListener("click",()=>{
                    if(option.textContent === questions[question_index].correct){
                        option.style.backgroundColor = "hsl(112, 96%, 68%)"
                        
                    }else{
                        option.style.backgroundColor = "hsl(0, 96%, 68%)"
                        
                    }
                })
            })
        }
        
    })
   

})

