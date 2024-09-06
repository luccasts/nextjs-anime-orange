export function handleLink(title:any, id:string){
    const replace = title.replaceAll(" ", "-").toLocaleLowerCase();
    const NospecialCharacters = handleCharacteres(replace);

    const link = `http://localhost:3000/watch/${NospecialCharacters}-episodio-${id}`;
    return link;
}


function handleCharacteres(title:string){
    if(title.includes("!") || title.includes("?") || title.includes("&")){
        const characteres = title.replaceAll("!","").replaceAll("?","").replaceAll("&","");
        return characteres
    }
    return title
}