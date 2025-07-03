 
const selectElement = document.getElementById("vegSelect");
const wrapper = document.getElementById("wrapper");

const vegData = {
  "Leafy" :[
    {
      img: "https://www.jiomart.com/images/product/original/590004479/spinach-paalak-1-bunch-approx-100-g-300-g-product-images-o590004479-p590004479-0-202409171906.jpg?im=Resize=(420,420)",
      name: "Spanich",
      local: "Palak"
    }, 
    {
      img: "https://www.jiomart.com/images/product/original/590000530/methi-leaves-bunch-approx-90-g-100-g-product-images-o590000530-p592481239-0-202410011802.jpg?im=Resize=(420,420)",
      name: "Fenugreek Leaves",
      local: "Methi"
    },
    { 
      img: "./images/Amaranth.jpg",
      name: "Amaranth Leaves",
      local: "Chaulai"
    },
    {
      img: "https://www.jiomart.com/images/product/original/590004479/spinach-paalak-1-bunch-approx-100-g-300-g-product-images-o590004479-p590004479-0-202409171906.jpg?im=Resize=(420,420)",
      name: "Coriander Leaves",
      local: "Dhaniya"
    },
    {
      img: "https://www.jiomart.com/images/product/original/590004479/spinach-paalak-1-bunch-approx-100-g-300-g-product-images-o590004479-p590004479-0-202409171906.jpg?im=Resize=(420,420)",
      name: "Mint Leaves",
      local: "Pudina"
    },
    {
      img: "https://www.jiomart.com/images/product/original/590004479/spinach-paalak-1-bunch-approx-100-g-300-g-product-images-o590004479-p590004479-0-202409171906.jpg?im=Resize=(420,420)",
      name: "Curry Leaves",
      local: "Curry Patta"
    }

  ],

  "Root": [    
    { 
      img: "https://www.jiomart.com/images/product/original/590004163/sambar-onion-250-g-product-images-o590004163-p590004163-0-202408070949.jpg?im=Resize=(1000,1000)",
      name: "Onion",
      local: "Pyaz/Kanda"
    },
    { 
      img: "https://www.jiomart.com/images/product/original/590003532/indian-garlic-200-g-product-images-o590003532-p590003532-0-202408070949.jpg?im=Resize=(1000,1000)",
      name: "Garlic",
      local: "Lahsun"
    },
    { 
      img: "https://www.jiomart.com/images/product/original/590003531/ginger-indian-200-g-product-images-o590003531-p590003531-0-202408070949.jpg?im=Resize=(420,420)",
      name: "Ginger",
      local: "Adrak"
    },

    { 
      img: "https://www.jiomart.com/images/product/original/590004556/ooty-carrot-500-g-product-images-o590004556-p592487297-0-202409171905.jpg?im=Resize=(1000,1000)",
      name: "Carrot",
      local: "Chaulai"
    },  
    {
      img: "https://www.jiomart.com/images/product/original/590002893/beetroot-500-g-product-images-o590002893-p590002893-0-202410141245.jpg?im=Resize=(1000,1000)",
      name: "Beetroot",
      local: "Beet"
    },   
     { 
      img: "https://www.jiomart.com/images/product/original/590000466/turmeric-fresh-250-g-product-images-o590000466-p590000466-0-202503032347.jpg?im=Resize=(1000,1000)",
      name: "Turmeric",
      local: "Haldi"
    },
    { 
      img: "https://www.jiomart.com/images/product/original/590000138/sweet-potato-500-g-product-images-o590000138-p590000138-0-202409251832.jpg?im=Resize=(1000,1000)",
      name: "Sweet Potato",
      local: "Shakarkand"
    },
    { 
      img: "https://www.jiomart.com/images/product/original/590000141/yam-1-5-kg-product-images-o590000141-p590000141-0-202409171905.jpg?im=Resize=(1000,1000)",
      name: "Yam",
      local: "Suran"
    },
    { 
      img: "https://www.jiomart.com/images/product/original/590002899/small-colocasia-250-g-product-images-o590002899-p590002899-0-202410141245.jpg?im=Resize=(1000,1000)",
      name: "Colocasia",
      local: "Arbi/Alu"
    }
  ],


  "Cruciferous" :[
    {
      img: "https://www.bbassets.com/media/uploads/p/l/40023473_6-fresho-cabbage-organically-grown.jpg",
      name: "Cabbage",
      local: "Patta Gobhi"
    },
    {
      img: "https://www.bbassets.com/media/uploads/p/l/10000074_20-fresho-cauliflower.jpg",
      name: "Cauliflower",
      local: "Phool Gobhi"
    },
    {
      img: "https://www.bbassets.com/media/uploads/p/l/10000063_21-fresho-broccoli.jpg",
      name: "Broccoli",
      local: "Broccoli"
    },
    { 
      img: "https://www.jiomart.com/images/product/original/590001892/radish-white-1-pc-approx-80-g-150-g-product-images-o590001892-p590001892-0-202410141245.jpg?im=Resize=(1000,1000)",
      name: "Radish",
      local: "Mooli"
    },
    {
      img: "/images/Turnip.jpg",
      name: "Turnip",
      local: "shalgam"
    },
    { 
      img: "/images/Mustard.jpg",
      name: "Mustard Green",
      local: "Sarson"
    },
    {
      img: "https://www.bbassets.com/media/uploads/p/l/10000279-2_24-fresho-knol-khol.jpg",
      name: "Knol-Khole",
      local: "Type-gobhi"
    }
  ],

  "Nightshade" :[
    { 
      img: "https://www.bbassets.com/media/uploads/p/l/40023476-2_3-fresho-potato-organically-grown.jpg",
      name: "Potato",
      local: "Aloo/Batata"
    },
    {
      img: "https://www.bbassets.com/media/uploads/p/l/50000557-5_2-fresho-tomato-hybrid-organically-grown.jpg",
      name: "Tomato",
      local: "Tamatar"
    },
    {
      img: "https://www.bbassets.com/media/uploads/p/l/10000060_22-fresho-brinjal-varikatri.jpg",
      name: "Brinjal",
      local: "Baingan"
    },
    {
      img: "https://www.bbassets.com/media/uploads/p/l/10000082_20-fresho-chilli-green-long-medium.jpg",
      name: "Green Chillies",
      local: "Hari Mirch"
    },
    {
      img: "https://organicmandya.com/cdn/shop/files/RedChilly_a59e380b-8a1e-4ee7-aaf7-2f0571b6db63.jpg?v=1745411173&width=1000",
      name: "Red chillies",
      local: "Sukhi Mirch"
    },
    {
      img: "https://www.bbassets.com/media/uploads/p/l/10000067-2_35-fresho-capsicum-green.jpg",
      name: "Capsicum",
      local: "Shimla Mirch"
    },
  ],

  "Gourds" :[
    {
      img: "https://www.bbassets.com/media/uploads/p/l/50000468-2_3-fresho-bottle-gourd-organically-grown.jpg",
      name: "Bottle Gourd",
      local: "lauki"
    },
    {
      img: "https://www.bbassets.com/media/uploads/p/l/10000176_18-fresho-ridge-gourd.jpg",
      name: "Ridge Gourd",
      local: "Turai"
    },
    {
      img: "https://www.bbassets.com/media/uploads/p/l/10000050-2_3-fresho-bitter-gourd.jpg",
      name: "Bitter Gourd",
      local: "Karela"
    },
    {
      img: "https://www.bbassets.com/media/uploads/p/l/40202912-2_4-fresho-pumpkin-disco.jpg",
      name: "Pumkin",
      local: "Kaddu/Bhopala"
    },
    {
      img: "https://www.jiomart.com/images/product/original/590000697/sponge-gourd-500-g-product-images-o590000697-p590000697-0-202410011802.jpg?im=Resize=(420,420)",
      name: "Sponge Gourd",
      local: "Gilke"
    }
  ],

  "Others": [
    {
      img: "https://www.bbassets.com/media/uploads/p/l/10000142-2_1-fresho-ladies-finger.jpg",
      name: "Lady Finger",
      local: "Bhindi"
    },
    {
      img: "https://www.bbassets.com/media/uploads/p/l/10000109-2_3-fresho-drumstickmoringa.jpg",
      name: "Drumstick",
      local: "Sahjan/Shevga"
    },
    {
      img: "https://www.bbassets.com/media/uploads/p/l/10000039-2_4-fresho-beans-cluster.jpg",
      name: "Cluster Beans",
      local: "Gavar"
    },
    {
      img: "https://www.bbassets.com/media/uploads/p/l/10000284_15-fresho-green-peas.jpg",
      name: "Peas",
      local: "Matar"
    },
    {
      img: "https://www.bbassets.com/media/uploads/p/l/40004992-3_2-fresho-sweet-corn.jpg",
      name: "Corn",
      local: "Makka"
    },
    {
      img: "https://www.bbassets.com/media/uploads/p/l/10000169_17-fresho-banana-raw-green.jpg",
      name: "Raw Banana",
      local: "Kachha kela"
    },
    {
      img: "https://www.bbassets.com/media/uploads/p/l/40292145_4-fresho-organic-sprouts-moong-green.jpg",
      name: "Sprout",
      local: "Moong"
    },
    {
      img: "https://www.bbassets.com/media/uploads/p/l/40292146_4-fresho-organic-sprouts-channa-brown.jpg",
      name: "Sprout",
      local: "Chana"
    },
  ],
  "default":[
    {
      img: "https://www.bbassets.com/media/uploads/p/l/10000142-2_1-fresho-ladies-finger.jpg",
      name: "Lady Finger",
      local: "Bhindi"
    },
    {
      img: "https://www.bbassets.com/media/uploads/p/l/10000284_15-fresho-green-peas.jpg",
      name: "Peas",
      local: "Matar"
    },
    {
      img: "https://www.bbassets.com/media/uploads/p/l/10000050-2_3-fresho-bitter-gourd.jpg",
      name: "Bitter Gourd",
      local: "Karela"
    },
    {
      img: "https://www.bbassets.com/media/uploads/p/l/10000060_22-fresho-brinjal-varikatri.jpg",
      name: "Brinjal",
      local: "Baingan"
    },
    { 
      img: "https://www.bbassets.com/media/uploads/p/l/40023476-2_3-fresho-potato-organically-grown.jpg",
      name: "Potato",
      local: "Aloo/Batata"
    },
    {
      img: "https://www.bbassets.com/media/uploads/p/l/40023473_6-fresho-cabbage-organically-grown.jpg",
      name: "Cabbage",
      local: "Patta Gobhi"
    },
    { 
      img: "https://www.jiomart.com/images/product/original/590004163/sambar-onion-250-g-product-images-o590004163-p590004163-0-202408070949.jpg?im=Resize=(1000,1000)",
      name: "Onion",
      local: "Pyaz/Kanda"
    },
  ]
};

function changeVegies(vegType){
  wrapper.innerHTML="";

  if(vegData[vegType]){
    vegData[vegType].forEach(veg => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `<div class="card-img">
                <img src="${veg.img}" alt="${veg.name}">
              </div>
              <div class="info">
                <h5>${veg.name} (${veg.local})</h5>
                <h5 class="quantity"> 200g</h5>
                <h5 class="price">₹35</h5>
              </div>
              <h5 class="addBtn">Add</h5> `;
              wrapper.appendChild(card);
    });
  }
}

selectElement.addEventListener("change",()=>{
  const vegType = selectElement.value
  setTimeout(() => {
    changeVegies(vegType);
  }, 500);
});

changeVegies("default");








