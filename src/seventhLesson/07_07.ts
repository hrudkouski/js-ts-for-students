export type ManType = {
    name: string
    age: number
    lessons: Array<{ title: string; name?: string}>
    address: {
        street: {
            title: string
        }
    }
}

// function useDimychState(m: string) {
//     return [m, function () {}];
// }

// export const ManComponent = (man: ManType) => {
//
//     // const {title, man, ...props} = props;
//
//     // const [message, setMessage] = useDimychState('hello');
//
//     return (
//         <div>
//             <h1>{man.age}</h1>
//             <hr/>
//             <div>
//                 {man.name}
//             </div>
//         </div>
//     )
// }