let arr1 = [
    {
      img: "https://img.freepik.com/free-vector/realistic-christmas-sale_52683-52614.jpg?size=338&ext=jpg&ga=GA1.2.203370520.1669874264&semt=sph",
      price: "$ 399",
    },
    {
      img: "https://img.freepik.com/free-vector/realistic-christmas-sale_52683-52614.jpg?size=338&ext=jpg&ga=GA1.2.203370520.1669874264&semt=sph",

      price: "$ 899",
    },
    {
      img: "https://img.freepik.com/free-vector/realistic-christmas-sale_52683-52614.jpg?size=338&ext=jpg&ga=GA1.2.203370520.1669874264&semt=sph",
      price: "$ 499",
    },
  ];
  
  let temp = arr1;
  
  function print(temp) {
    let clutter = "";
    temp.forEach((val, index) => {
      if (index != 2) {
        clutter += `<div class="card1">
          <img src="${val.img}"alt="">
          <div class="price-sec">
              <h2>${val.price}</h2>
              <p>Earliest Delivery : Today</p>
          </div>
        </div>`;
      } else {
        clutter += `<div class="card1 less-op">
          <img src="${val.img}"alt="">
          <div class="price-sec">
              <h2>$ 399</h2>
              <p>Earliest Delivery : Today</p>
          </div>
        </div>`;
      }
    });
    document.querySelector(".bs-cards").innerHTML = clutter;
  }
  print(arr1);
  
  let arr2 = [
    {
      img: "https://img.freepik.com/free-vector/realistic-christmas-sale_52683-52614.jpg?size=338&ext=jpg&ga=GA1.2.203370520.1669874264&semt=sph",
      price: "$ 459",
    },
    {
      img: "https://img.freepik.com/free-vector/realistic-christmas-sale_52683-52614.jpg?size=338&ext=jpg&ga=GA1.2.203370520.1669874264&semt=sph",
      price: "$ 349",
    },
    {
      img: "https://img.freepik.com/free-vector/realistic-christmas-sale_52683-52614.jpg?size=338&ext=jpg&ga=GA1.2.203370520.1669874264&semt=sph",
      price: "$ 599",
    },
  ];
  
  let arr3 = [
    {
      img: "https://img.freepik.com/free-vector/realistic-christmas-sale_52683-52614.jpg?size=338&ext=jpg&ga=GA1.2.203370520.1669874264&semt=sph",
      price: "$ 289",
    },
    {
      img: "https://img.freepik.com/free-vector/realistic-christmas-sale_52683-52614.jpg?size=338&ext=jpg&ga=GA1.2.203370520.1669874264&semt=sph",
      price: "$ 879",
    },
    {
      img: "https://img.freepik.com/free-vector/realistic-christmas-sale_52683-52614.jpg?size=338&ext=jpg&ga=GA1.2.203370520.1669874264&semt=sph",
      price: "$ 219",
    },
  ];
  let arr4 = [
    {
      img: "https://img.freepik.com/free-vector/realistic-christmas-sale_52683-52614.jpg?size=338&ext=jpg&ga=GA1.2.203370520.1669874264&semt=sph",
      price: "$ 259",
    },
    {
      img: "https://img.freepik.com/free-vector/realistic-christmas-sale_52683-52614.jpg?size=338&ext=jpg&ga=GA1.2.203370520.1669874264&semt=sph",
      price: "$ 999",
    },
    {
      img: "https://img.freepik.com/free-vector/realistic-christmas-sale_52683-52614.jpg?size=338&ext=jpg&ga=GA1.2.203370520.1669874264&semt=sph",
      price: "$ 129",
    },
  ];
  function abcd(id) {
    if (id == 0) {
      print(arr1);
    }
    if (id == 1) {
      print(arr2);
    }
    if (id == 2) {
      print(arr3);
    }
    if (id == 3) {
      print(arr4);
    }
  }
  let card = document.querySelector(".right-cards");
  
  card.addEventListener("click", function (val) {
    abcd(val.target.id);
  });
  
  let rightarr = [
    {
      img: "https://img.freepik.com/free-vector/realistic-christmas-sale_52683-52614.jpg?size=338&ext=jpg&ga=GA1.2.203370520.1669874264&semt=sph",
    },
    {
      img: "https://img.freepik.com/free-vector/realistic-christmas-sale_52683-52614.jpg?size=338&ext=jpg&ga=GA1.2.203370520.1669874264&semt=sph",
    },
    {
      img: "https://img.freepik.com/free-vector/realistic-christmas-sale_52683-52614.jpg?size=338&ext=jpg&ga=GA1.2.203370520.1669874264&semt=sph",
    },
    {
      img: "https://img.freepik.com/free-vector/realistic-christmas-sale_52683-52614.jpg?size=338&ext=jpg&ga=GA1.2.203370520.1669874264&semt=sph",
    },
  ];
  
  let clutter = "";
  rightarr.forEach((val, index) => {
    clutter += ` <div class="card2">
      <img src="${val.img}"alt="">
      <button id="${index}">Click to view</button>
  </div>`;
  });
  document.querySelector(".right-cards").innerHTML = clutter;
  