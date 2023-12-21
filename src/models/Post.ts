// enum Status {
//     Message = 'Message',
//     Response = 'Response',
//     Typing  = 'Typing',
// }



export interface Post {
    id: string,
    from: {name : string},
    type: string
    time: string
    text?: string
}

