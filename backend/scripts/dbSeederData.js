const usersData = [
  {
    "name": {
      "first": "John",
      "last": "Doe",
    },
    "userName": "jhoni",
    "phone": "0501111111",
    "email": "john_doe@gmail.com",
    "password": "Aa123456&",
    "isAdmin": false,
    "address": {
      "state": "New York",
      "country": "USA",
      "city": "New York",
      "street": "Main Street",
      "houseNumber": "30",
    },
  },
  {
    "name": {
      "first": "Israel",
      "last": "Israeli",
    },
    "userName": "israel",
    "phone": "0503333333",
    "email": "israel_israeli@gmail.com",
    "password": "Aa123456&",
    "isAdmin": true,
    "address": {
      "state": "",
      "country": "Israel",
      "city": "Tel Aviv",
      "street": "Frishman",
      "houseNumber": "20",
    },
  },
  {
    "name": {
      "first": "Jane",
      "last": "Doe",
    },
    "userName": "jani",
    "phone": "0502222222",
    "email": "jane_doe@gmail.com",
    "password": "Aa123456&",
    "isAdmin": false,
    "address": {
      "state": "California",
      "country": "USA",
      "city": "Los Angeles",
      "street": "Main Street",
      "houseNumber": "10",
    },
  },
];

const productsData = [
  {
    "title": "Vacuum Cleanerr",
    "description": "Vacuum Cleaner Description",
    "brand": "Sauter",
    "category": "home",
    "price": 120,
    "image": {
      "url": "https://www.vac.co.il/images/itempics/1080_24022020143252_large.jpg",
      "alt": "Item image",
    },
    "stock": 5
  },
  {
    "title": "LG refrigerator",
    "description": "LG refrigerator Description",
    "brand": "LG",
    "category": "kitchen",
    "price": 490,
    "image": {
      "url": "https://www.lg.com/il/images/refrigerators/md05892837/gallery/GR-M6981W_261017_D04.jpg",
      "alt": "LG refrigerator",
    },
    "stock": 18
  },
  {
    "title": "Steel-Cucina cook",
    "description": "Steel-Cucina cook Description",
    "brand": "Bosch",
    "category": "kitchen",
    "price": 820,
    "image": {
      "url": "https://4cook.brafman.co.il/wp-content/uploads/%D7%AA%D7%A0%D7%95%D7%A8%D7%99-%D7%91%D7%99%D7%A9%D7%95%D7%9C-%D7%9E%D7%A9%D7%95%D7%9C%D7%91%D7%99%D7%9D/OXFORD-90/OXFORD90-Bronze.png",
      "alt": "Steel-Cucina cook",
    },
    "stock": 5
  },
  {
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like apple",
    "price": 549,
    "brand": "Apple",
    "category": "smartphones",
    "image": {
      "url": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      "alt": "iPhone 9"
    },
    "stock": 6
  },
  {
    "title": "iPhone X",
    "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    "price": 899,
    "brand": "Apple",
    "category": "smartphones",
    "image": {
      "url": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      "alt": "iPhone X"
    },
    "stock": 15
  },
  {
    "title": "Samsung Universe 9",
    "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
    "price": 1249,
    "brand": "Samsung",
    "category": "smartphones",
    "image": {
      "url": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      "alt": "Samsung Universe 9"
    },
    "stock": 36
  },
  {
    "title": "OPPO F19",
    "description": "OPPO F19 is officially announced on April 2021.",
    "price": 280,
    "brand": "OPPO",
    "category": "smartphones",
    "image": {
      "url": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      "alt": "OPPO F19"
    },
    "stock": 50
  },
  {
    "title": "Huawei P30",
    "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    "price": 499,
    "brand": "Huawei",
    "category": "smartphones",
    "image": {
      "url": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      "alt": "Huawei P30"
    },
    "stock": 32
  },
  {
    "title": "MacBook Pro",
    "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
    "price": 1749,
    "brand": "Apple",
    "category": "laptops",
    "image": {
      "url": "https://i.dummyjson.com/data/products/6/thumbnail.png",
      "alt": "MacBook Pro"
    },
    "stock": 83
  },
  {
    "title": "Samsung Galaxy Book",
    "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
    "price": 1499,
    "brand": "Samsung",
    "category": "laptops",
    "image": {
      "url": "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
      "alt": "Samsung Galaxy Book"
    },
    "stock": 0
  },
  {
    "title": "Microsoft Surface Laptop 4",
    "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
    "price": 1299,
    "brand": "Microsoft",
    "category": "laptops",
    "image": {
      "url": "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
      "alt": "Microsoft Surface Laptop"
    },
    "stock": 9
  },
  {
    "title": "Infinix INBOOK",
    "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
    "price": 1099,
    "brand": "Infinix",
    "category": "laptops",
    "image": {
      "url": "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
      "alt": "Infinix INBOOK"
    },
    "stock": 96
  },
  {
    "title": "HP Pavilion 15-DK1056WM",
    "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
    "price": 1099,
    "brand": "HP",
    "category": "laptops",
    "image": {
      "url": "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
      "alt": "HP Pavilion 15-DK1056WM"
    },
    "stock": 26
  },
  {
    "title": "3D Embellishment Art Lamp",
    "description": "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)",
    "price": 20,
    "brand": "LED Lights",
    "category": "lighting",
    "image": {
      "url": "https://i.dummyjson.com/data/products/28/thumbnail.jpg",
      "alt": "3D Embellishment Art Lamp"
    },
    "stock": 54
  },
  {
    "title": "lighting ceiling kitchen",
    "description": "Wholesale slim hanging decorative kid room lighting ceiling kitchen chandeliers pendant light modern",
    "price": 30,
    "brand": "lightingbrilliance",
    "category": "lighting",
    "image": {
      "url": "https://i.dummyjson.com/data/products/96/thumbnail.jpg",
      "alt": "lighting ceiling kitchen"
    },
    "stock": 7
  },
  {
    "title": "Metal Ceramic Flower",
    "description": "Metal Ceramic Flower Chandelier Home Lighting American Vintage Hanging Lighting Pendant Lamp",
    "price": 35,
    "brand": "Ifei Home",
    "category": "lighting",
    "image": {
      "url": "https://i.dummyjson.com/data/products/97/thumbnail.jpg",
      "alt": "Metal Ceramic Flower"
    },
    "stock": 67
  },
  {
    "title": "3 lights lndenpant kitchen islang",
    "description": "3 lights lndenpant kitchen islang dining room pendant rice paper chandelier contemporary led pendant light modern chandelier",
    "price": 34,
    "brand": "DADAWU",
    "category": "lighting",
    "image": {
      "url": "https://i.dummyjson.com/data/products/98/thumbnail.jpg",
      "alt": "3 lights lndenpant kitchen"
    },
    "stock": 44
  },
  {
    "title": "American Vintage Wood Pendant",
    "description": "American Vintage Wood Pendant Light Farmhouse Antique Hanging Lamp Lampara Colgante",
    "price": 46,
    "brand": "Ifei Home",
    "category": "lighting",
    "image": {
      "url": "https://i.dummyjson.com/data/products/99/thumbnail.jpg",
      "alt": "Vintage Wood Pendant Light"
    },
    "stock": 23
  },
  {
    "title": "Crystal chandelier - 12 light",
    "description": "Crystal chandelier maria theresa for 12 light",
    "price": 47,
    "brand": "YIOSI",
    "category": "lighting",
    "image": {
      "url": "https://i.dummyjson.com/data/products/100/thumbnail.jpg",
      "alt": "Crystal chandelier - 12 light"
    },
    "stock": 75
  },
  {
    "title": "SanDisk SSD 1TB Internal - SATA III",
    "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    "price": 109,
    "brand": "SanDisk",
    "category": "electronics",
    "image": {
      "url": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      "alt": "SanDisk HD 1TB"
    },
    "stock": 132
  },
  {
    "title": "Silicon Power 256GB SSD - SATA III",
    "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    "price": 109,
    "brand": "SP",
    "category": "electronics",
    "image": {
      "url": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
      "alt": "Silicon Power HD 256GB"
    },
    "stock": 166
  },
  {
    "title": "WD 4TB External Hard Drive",
    "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    "price": 114,
    "brand": "WD",
    "category": "electronics",
    "image": {
      "url": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
      "alt": "WD HD 4TB"
    },
    "stock": 10
  },
  {
    "title": "Acer 21.5 inches Full HD",
    "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    "price": 599,
    "brand": "Acer",
    "category": "electronics",
    "image": {
      "url": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
      "alt": "Acer screen 21.5 inches"
    },
    "stock": 107
  },
  {
    "title": "Samsung 49 inches QLED ",
    "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    "price": 999.99,
    "brand": "Samsung",
    "category": "electronics",
    "image": {
      "url": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
      "alt": "Samsung screen 49 inches"
    },
    "stock": 140
  }
];

module.exports = {
  usersData,
  productsData,
};
