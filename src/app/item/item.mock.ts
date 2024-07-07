// Array de items
export const itemList: Item[] = [
    {id: 1, name: "Juego de tronos", description: "Lucha por el trono"},
    {id: 2, name: "La casa del dragon", description: "Pelea de dragones"},
    {id: 3, name: "Vikingos", description: "Conquista de los oceanos"},
    {id: 4, name: "La teoria del big bang", description: "Boda de Sheldon"},
    {id: 5, name: "Silicon Valley", description: "Iniciando una Start up"},
]

// interfaz de items
export interface Item{
    id: number;
    name: string;
    description: string;
}