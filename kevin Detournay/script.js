

const app={
    
    
    // init function
    init: ()=>{

    console.log('init !')

      const random = app.getRandomNumber(1,3)
      const computeurValue=app.getComputerValue(random)        
        const root = document.getElementById('root')
        const form = document.createElement('form')
        const input = document.createElement('input')
        input.setAttribute("class","playerInput")

        const submitButton =document.createElement('button')
        submitButton.textContent="jouer"
        submitButton.setAttribute("type","submit")

        form.appendChild(input)
        form.appendChild(submitButton)
        
        form.addEventListener('submit',(e)=>{
            e.preventDefault()
            const playerInput = form.querySelector('.playerInput').value
            console.log(playerInput)
          getPlayerValue()
            
            
            
        })
        
        
        root.appendChild(form)
    },

    getRandomNumber: (minValue, maxValue)=> {
        return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    }, 
    
    getComputerValue:(random)=>{
    switch(random){
        case 1:
            return computeur = 'pierre'
        case 2:
            return computeur ='feuille'
        default :
            return(computeur= 'ciseaux')        
            }
      }

      getPlayerValue:(playerInput)=>{
        switch(playerInput){
                
            case 'pierre':
            return 1
           
            case 'feuille':
            return 2

            case 'ciseaux':
              return 3  


        }

      }

}

document.addEventListener('DOMContentLoaded', app.init );