// import "./App.css"
// const App = () => {
//   return (
//     <div className="main">
//       <div className="box-1">

//       </div>
//       <div className="box-container-2">
//         <div className="box-2"></div>
//       </div>
//     </div>
//   );
// };

// export default App;







// import "./App.css"
// const App = () => {
//   return (
//     <div className="main">
//       <button className="btn">Hover Me</button>
//     </div>
//   );
// };

// export default App;








// import "./Ani.css"
// const App = () => {
//   return (
//     <div className="main">
//       <div className="box"></div>
//     </div>
//   );
// };

// export default App;



// import "./Loading.css"
// const App = () => {
//   return (
//     <div className="main">
//       <div className="loading">
//         <div className="glass"></div>
//         <div className="box"></div>
//       </div>
//     </div>
//   );
// };

// export default App;


// import "./Clip.css"
// const App = () => {
//   return (
//     <div className="main">
//       <div className="card">
//         <h1>Heading</h1>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
//           Laborum ratione non itaque! Expedita, quod temporibus
//           consectetur sit quae libero. Libero obcaecati
//           necessitatibus deleniti dolorum, molestias officiis
//           accusamus enim blanditiis! Culpa.</p>
//       </div>
//     </div>
//   );
// };

// export default App;


import "./Javascript.css"
const App = () => {
  const name = "Programming Hero"

  const nameArr = name.split('')

  return (
    <div className="main">
      <div className="container">
        {
          nameArr.map((item, i) => <span className="alphabet" style={{ transitionDelay: `${i * 30}ms` }}>{item}</span>)
        }
      </div>
    </div>
  );
};

export default App;