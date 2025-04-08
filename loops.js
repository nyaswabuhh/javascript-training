let days =["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"]

        // indenting not a must

        // for(let i=0; i< days.length; i++){
        //     console.log(days[i])
        // }
        let updays=[]
        for(const d of days){
            updays.push(d.toUpperCase())                 

        }
        console.log(updays)
        

        // days.forEach(day =>{
        //     console.log(day)
        // })
        
        
        // days.forEach(day => {
        //     console.log(day)
        // })