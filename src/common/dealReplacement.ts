export function dealReplacement(title:any){
    if(title.includes("!") || title.includes("?") || title.includes("&")){
        let replace:string
        replace = title.replaceAll("!","").replaceAll("?","").replaceAll("&","")
        console.log('PASSOU')
        return replace;
    }
    return title
}