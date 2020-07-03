const head=document.getElementById('main')

const key=document.querySelectorAll('section.keyboard div li')


const answer=document.getElementById('jawab') 
const status=document.getElementById('status')
const pBaru=document.createElement('p')
const benar=document.createTextNode('Benar')
const salah=document.createTextNode('Salah')
const gambar=document.getElementById("gambar1")

    let questions=[
        {nomor:1,
        jawaban:'TITANIC',
        gambar:'https://cdns.klimg.com/dream.co.id/resized/750x500/news/2019/03/05/103476/kapal-raksasa-titanic-bangkit-lagi-190305d_3x2.jpg'
        }
    ]

    for(let x=0;x<questions.length;x++){
        // gambar.style.backgroundImage= `${questions[x]["gambar"]}` 

        for(let i=0;i<key.length;i++){
            key[i].addEventListener('click',function(){
                
                if(event.target.id==='delete'){
                    answer.innerText=''
                }
                else if(event.target.id==='OK'){
                    if(answer.innerText===questions[x].jawaban){
                        pBaru.appendChild(benar)
                        pBaru.style.backgroundColor='white'
                        status.style.width='content-fit'
                        status.appendChild(pBaru)
                        
                        
    
                    }
                    else{
                        pBaru.appendChild(salah)
                        pBaru.style.backgroundColor='white'
                        status.appendChild(pBaru)
                    }
    
                }
                else{answer.innerText+=event.target.id}
            })
            
        }

    }
    







    
    



