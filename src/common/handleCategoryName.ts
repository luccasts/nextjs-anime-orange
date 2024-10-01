export function handleCategoryName(id: string, name?: string) {
    switch (id) {
        case '1':
            return 'Fantasia'
            break;
        case '2':
            return 'Aventura'
            break;
        case '3':
            return 'Ação'
            break;
        case '4':
            return 'Comédia'
            break;
        case '5':
            return 'Romance'
            break;
        case '6':
            return 'Sobrenatural'
            break;
        case '7':
            return 'Suspense'
            break;
        case '8':
            return 'Drama'
            break;
        case '9':
            return 'Violência'
            break;
        case '10':
            return 'Conteúdo Sexual'
            break;
        default:
            break;
    }
    // const minuscula = name?.slice(0, 1)
    // let maiuscula = minuscula?.toUpperCase()
    // maiuscula += name?.slice(1, name?.length)
    // return maiuscula
}