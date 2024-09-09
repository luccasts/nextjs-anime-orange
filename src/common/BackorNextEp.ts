export default function BackorNextEp(type: string, data: any, id: string | string[] | undefined) {
    const boolean = data.eps.map((ep: any) => ep.id === id);
    let indexArray = boolean.indexOf(true)
    let ep
    switch (type) {
        case 'next':
            indexArray += 1
            ep = data.eps[indexArray]
            if (ep === undefined) {
                window.alert('Último Episódio Alcançado!')
            } else {
                window.location.pathname = `/watch/${ep.id}`
            }
            break;
        case 'back':
            indexArray -= 1;
            ep = data.eps[indexArray]
            if (indexArray === -1) {
                window.location.pathname = `/info/${data.id}`
            } else {
                window.location.pathname = `/watch/${ep.id}`
            }

            break;
        default:
            break;
    }
}