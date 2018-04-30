// import React from 'react';
// import PropTypes from 'prop-types';


// export default function Grid (props) {
//     console.log(props);
//     return (
//         <ul>
            
//             {props.enemies.map(function(enemy, index) {
//                 return (
//                     <li key={enemy.name_en}>
//                         {enemy.name_en}
//                     </li>
//                 )
//             })}
//         </ul>
//     )
// };

// Grid.propTypes = {
//     enemies: PropTypes.array.isRequired
// };

// I'm going to turn the grid component being used in each of the pages into it's own component that can handle both
// pages state.