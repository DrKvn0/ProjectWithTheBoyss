import logo from './logo.svg';
import './App.css';
import { useState } from "react";

// const user = {
//     name: 'Hedy Lamarr',
//     imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//     imageSize: 90,
// };
//
// export default function MyApp() {
//   return (
//       <>
//         <h1>{user.name}</h1>
//         <img
//             className="avatar"
//             src={user.imageUrl}
//             alt={'Photo of' + user.name}
//             style={{
//                 width: user.imageSize,
//                 height: user.imageSize
//             }}
//         />
//           <div><MyButton /></div>
//       </>
//   )
// }
//
function MyButton({ count, onClick }){


    return (
      <button onClick={onClick}>
          Click {count} times!
      </button>
  );
}

const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
];

export default function ShoppingList() {
    const listItems = products.map(product =>
        <li
            key ={product.id}
            style = {{
                color: product.isFruit? 'magenta' : 'darkgreen'
            }}
        >
            {product.title}
        </li>
    );
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }
    return (
        <>
            <div>
                <ul>{listItems}</ul>
                <li><MyButton count={count} onClick={handleClick} /></li>
                <li><MyButton count={count} onClick={handleClick} /></li>
            </div>
        </>
    );
}
// export default App;
