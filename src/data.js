const services = [
    {
     title: "Home Services",
     ser:  [{
         name: "Carpenter",
         img: "https://images.unsplash.com/photo-1505798577917-a65157d3320a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
 
     },
     {
         name:   "Electrician",
         img:      "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
     },
     {
         name:    "Plumber",
         img:      "https://cdn.pixabay.com/photo/2015/07/11/14/53/plumbing-840835_1280.jpg"
     },
     {
         name:     "Pest Control",
         img:        "https://images.unsplash.com/photo-1581578017093-cd30fce4eeb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
     },
    ]  
    },
    {
     title:  "Construction",
     ser: [{
         name: "Renovation",
         img:   "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
     },{
         name: "Painting and Polishing",
         img:   "https://images.unsplash.com/photo-1595814432314-90095f342694?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
     },{
         name: "Tile Fitting",
         img:   "https://thumbs.dreamstime.com/z/fitting-floor-tile-38284800.jpg"
     },{
         name: "POP and wall putty",
         img:   "https://images.unsplash.com/photo-1644331852140-fca65511e6d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
     },]
    }, {
     title:  "Appliance services and repair",
     ser: [{
         name: "Fan/water motor/cooler",
         img:   "https://img.freepik.com/free-photo/ceiling-fan-top-room-decoration_74190-8425.jpg?t=st=1655815260~exp=1655815860~hmac=6f27186934b1f9e1e496cefe4ab60b93324475a2fb6afbb8aa49c239d0a17801&w=900"
     },{
         name: "AC and Refrigerator",
         img:   "https://img.freepik.com/free-photo/young-woman-using-home-technology_23-2149216632.jpg?t=st=1655815328~exp=1655815928~hmac=1ffa576dc88b01ceb588e70e3567089ecb9277ccdff9c202e7f37dd4462ed7dd&w=900"
     },{
         name: "Water RO and Purifier",
         img:   "https://img.freepik.com/free-photo/close-up-disposable-cup-water-cooler-startup-office-water-dispenser-with-hot-cold-faucet-used-refreshment-beverage-space-purified-mineral-water-gallon_482257-36858.jpg?t=st=1655812612~exp=1655813212~hmac=7792a004c84730e88b6747aa8abfd98f8c876fd221e24092f6ed38f9efa67cf7&w=900"
     },{
         name: "Geyser",
         img:   "https://img.freepik.com/free-vector/boiler-water-heater-with-plastic-tubes-wall_107791-2735.jpg?t=st=1655815436~exp=1655816036~hmac=aaba127a87e6172d9369e61d9692af7abdc29364f03a5f5ba5f8fedbccfb3e0e&w=1060"
     },]
    }, {
     title:  "Legal Consultancy",
     ser: [{
         name: "Criminal",
         img:   "https://images.unsplash.com/photo-1521437100987-e1cb2178879b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
     },{
         name: "Civil",
         img:   "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
     },{
         name: "Tax Consultancy",
         img:   "https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
     },{
         name: "Family",
         img:   "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
     },]
    }, {
     title:  "Photography and videography",
     ser: [{
         name: "Birthday Photography",
         img:   "https://images.unsplash.com/photo-1648071598108-9723264da5bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
     },{
         name: "Wedding Photography",
         img:   "https://images.unsplash.com/photo-1542042161784-26ab9e041e89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
     },{
         name: "Party Photography",
         img:   "https://images.unsplash.com/photo-1473177027534-53d906e9abcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
     },{
         name: "Travel Photography",
         img:   "https://images.unsplash.com/photo-1579504344957-c09070053c7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
     },]
    }, {
     title:  "Events Management and caterers",
     ser: [{
         name: "Birthday Party ",
         img:   "https://images.unsplash.com/photo-1602631985686-1bb0e6a8696e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
     },{
         name: "Reception",
         img:   "https://images.unsplash.com/photo-1633978555421-1e67d524b227?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
     },{
         name: "wedding",
         img:   "https://images.unsplash.com/photo-1526092817387-8f07b2904e48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
     },{
         name: "Weekends",
         img:   "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
     },]
    }, {
     title:  "Architecture",
     ser: [{
         name: "House",
         img:   "https://images.unsplash.com/photo-1564703048291-bcf7f001d83d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
     },{
         name: "School",
         img:   "https://images.unsplash.com/photo-1494949649109-ecfc3b8c35df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
     },{
         name: "Complex construction",
         img:   "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=797&q=80"
     },{
         name: "Simple construction ",
         img:   "https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=879&q=80"
     },]
    }, {
     title:  "Printing",
     ser: [{
         name: "Book/ Pamplet/ Bill Book",
         img:   "https://images.unsplash.com/photo-1526554070137-7c1b3d21e478?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
     },{
         name: "Event Card/ Visiting Card ",
         img:   "https://images.unsplash.com/photo-1495846414472-6696652d955f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
     },{
         name: "Flex Print And Banner",
         img:   "https://5.imimg.com/data5/NK/MX/MY-5607647/flex-printing-services-500x500.jpg"
     },]
    }, {
     title:  "Web Development",
     ser: [{
         name: "Front-End",
         img:   "https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
     },{
         name: "Back-End",
         img:   "https://images.unsplash.com/photo-1555952494-efd681c7e3f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
     },{
         name: "Full Stack",
         img:   "https://images.unsplash.com/photo-1613068687893-5e85b4638b56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
     },]
    }, {
     title:  "Solar System",
     ser: [{
         name: "On Grid Solar System",
         img:   "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
     },{
         name: "Off Grid Solar System",
         img:   "https://images.unsplash.com/flagged/photo-1566838616631-f2618f74a6a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
     },]
    }, {
     title:  "Physiotherapy and Acupressure",
     ser: [{
         name: "Acupressure",
         img:   "https://img.freepik.com/free-photo/close-up-woman-doing-foot-massage-spa_1150-3096.jpg?t=st=1655815184~exp=1655815784~hmac=165be8231abf4bfc0ad1ee85b3e6df1594fece6e46de4b7d921e727d3788e710&w=900"
     },{
         name: "Sciatica",
         img:   "https://img.freepik.com/free-photo/side-view-woman-having-backache-while-working-from-home_23-2148813150.jpg?t=st=1655815110~exp=1655815710~hmac=4370bacb650f5c619a842fde598da9bfd333105e81af6e05ca43e85b6f32adcf&w=1060"
     },{
         name: "Back Pain",
         img:   "https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
     },{
         name: "Neck Pain",
         img:   "https://images.pexels.com/photos/4506105/pexels-photo-4506105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
     },]
    }, {
     title:  "Beautician and Mehndi",
     ser: [{
         name: "Haircuts",
         img:   "https://images.pexels.com/photos/3268732/pexels-photo-3268732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
     },{
         name: "Makeover",
         img:   "https://images.pexels.com/photos/3089849/pexels-photo-3089849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
     },{
         name: "Facial",
         img:   "https://images.pexels.com/photos/5069494/pexels-photo-5069494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
     },{
         name: "Bridal Makeover",
         img:   "https://images.pexels.com/photos/1229414/pexels-photo-1229414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
     },{
         name: "Waxing",
         img:   "https://media.istockphoto.com/photos/the-masters-hands-will-rub-their-feet-with-a-napkin-depilation-picture-id1400563510?s=2048x2048"
     },{
         name: "Bleach",
         img:   "https://thumbs.dreamstime.com/z/asian-woman-face-mask-28876005.jpg"
     },{
         name: "Mehndi",
         img:   "https://images.unsplash.com/photo-1583878544826-8f8c418033ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
     }]
    },
     {
        title:  "Car/Taxi Booking on Rent",
        ser: [{
            name: "Car/Taxi",
            img:   "https://images.unsplash.com/photo-1529369623266-f5264b696110?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            travel: true
        },{
            name: "Bus",
            img:   "https://images.unsplash.com/photo-1579985081815-efd0d0729c23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            travel: true
        },{
            name: "Pick-up",
            img:   "https://images.unsplash.com/photo-1602032071750-597bcf737afa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
            travel: true
        },{
            name: "Load-body",
            img:   "https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=875&q=80",
            travel: true
        }]
       },
       {
        title:  "Medical Testing",
        ser: [{
            name: "Blood Testing",
            img:   "https://images.unsplash.com/photo-1615461066159-fea0960485d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1016&q=80",
            medicalTest: true
        },]
       }
 ]

 export default services;