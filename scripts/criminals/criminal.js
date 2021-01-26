//exports to CelebrityList.js
export function criminal(criminalObject) {
    return `
    
    <div class="col">
      <div class="card" >
       
        <div class="card-body">
          <h5 class="card-title">${criminalObject.name}</h5>
          <p class="card-text">${criminalObject.age}</p>
      <p class="card-text">${criminalObject.conviction}</p>
      <p class="card-text">${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</p>
      <p class="card-text">${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</p>
      </div>
    </div>
    
    </div>
  
    `
}

{
    /* <section class="criminals">
<h2>Criminals</h2>
<div class="convictions-select-container"></div>
<div class="criminal-list flex-container">

</div>
</section> */}

{/* <div class="criminal-card">${criminalObject.name}


</div> */}


// <div class="card">
//       <div class="card-block">
//         <h4 class="card-title">${criminalObject.name}</h4>
//         <p class="card-text">${criminalObject.age}</p>
//         <p class="card-text">${criminalObject.conviction}</p>
//         <p class="card-text">${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</p>
//         <p class="card-text">${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</p>
//       </div>
//       </div>

//       <div class="card">
//       <h4 class="card-title">${criminalObject.name}</h4>
//         <p class="card-text">${criminalObject.age}</p>
//         <p class="card-text">${criminalObject.conviction}</p>
//         <p class="card-text">${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</p>
//         <p class="card-text">${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</p>
//     </div>
//   </div>

//   <div class="card">
//   <h4 class="card-title">${criminalObject.name}</h4>
//   <p class="card-text">${criminalObject.age}</p>
//   <p class="card-text">${criminalObject.conviction}</p>
//   <p class="card-text">${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</p>
//   <p class="card-text">${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</p>
//   </div>
// </div>

//     </div>