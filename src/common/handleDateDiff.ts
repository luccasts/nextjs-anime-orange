export function handleDateDiff(anime:any) {
        const eps = anime.eps
        const filter = eps.filter((data) => data.date)
        console.log(filter.map((d) => d.date))
        // for(let i = 0; i < eps.length; i++){
        //   let date = eps.date
        //   console.log(date)
        // }
        // const date1 = new Date(dateProps);
        // const date2 = new Date(dateProps2);
        // if(date1 > date2) {
        //   return console.log("a data 1 é maiior");
        // }else if(date1 > date2) {
        //   return console.log("a data 2 é maiior")
        // }

      
}