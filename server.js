import express from "express";
import mongoose from 'mongoose';
import ProductDto from "./NewProductModel.js";
import User from "./Users.js";
import cors from 'cors';
import dotenv from "dotenv";
import multer from "multer";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import cookieParser from "cookie-parser";
import { v4 as uuidv4 } from 'uuid';
import CategoryLookUpModel from "./CategoryLookUpModel.js";
import RegionsTowns from "./GeographicsLookUps.js"
import ShippingDetails from "./ShippingDetails.js"
import ItemSizeModel from "./ItemSizeModel.js";
import NewProductModel from "./NewProductModel.js";
import https from 'https';
import Billing from "./Billing.js";
import Categories from "./Mockdata.js";
import OrderDetails from "./OrderDetails.js";
import nodemailer from "nodemailer";
import ItemSizeMockdata from "./ItemSizeMockdata.js";
import feedbackModel from "./models/feedbackModel.js";
import html from "./html.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 9000;

const storage = multer.diskStorage({
     destination: (req, file, callback) =>{
       callback(null, "../CaspianShops/public/uploads/");
     },
    filename: (req, file, callback) =>{
      callback(null, file.originalname);
    }
   })


  const upload = multer({storage: storage});

//  middlewares
app.use(express.json());
app.use(cors({
    origin: "https://caspianshops.netlify.app",
    credentials: true
}));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) =>res.status(200).send('hello world'));

// DB config
// const connection_url = "mongodb+srv://emmanuelamefia:bdDQaXp8wyGjRsZx@caspianoutlets.ruzdftq.mongodb.net/CaspianShops?retryWrites=true&w=majority/";
// mongoose.connect(connection_url, {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

//const uri = "mongodb+srv://emmanuelamefia:bdDQaXp8wyGjRsZx@caspianoutlets.ruzdftq.mongodb.net/?retryWrites=true/";
const uri = process.env.ConnectionString3;
//const uri = "mongodb+srv://emmanuelamefia:bdDQaXp8wyGjRsZx@caspianoutlets.ruzdftq.mongodb.net/?retryWrites=true/";

async function connect() {
  try {
    await mongoose.connect(uri, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

connect();

// db.once("open", () => {
//     console.log('DB connected');
 
// });


app.post("/product/new", upload.single("profileImg"), async (req, res)=>{
    try {
        const productName = req.body.productName;
        const regularPrice = req.body.regularPrice;
        const salePrice = req.body.salePrice;
        const brandName = req.body.brandName;
        const itemsize = req.body.itemsize;
        const category = req.body.category;
        // const subCategory = req.body.subCategory.split(',');
        const subCategory = req.body.subCategory;
        const discription = req.body.discription;
        const fileName = req.file.filename;
        
        // validation
    
        if ( !productName || !regularPrice || !salePrice || !brandName || !fileName)
          return res
            .status(400)
            .json({ errorMessage: "Please enter all required fields." });
    
        // save a new product to the db
    
        const newProduct = new ProductDto({
          productName,
          regularPrice,
          salePrice,
          brandName,
          category,
          itemsize,
          itemsize,
          subCategory,
          discription,
          fileName,
        });

         ProductDto.create(newProduct, (err, data)=>{
             if(err){
                 res.status(500).send(err);
             }else{ 
                 res.status(201).send(data);
             }
        });

        
      } catch (err) {
        console.error(err);
        res.status(500).send();
      }
  });

  app.get('/getlocationlookups', async (req, res) => {

    try {
      const location = await RegionsTowns.find({});
      res.status(200).json(location);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  app.post("/shipping/new", async (req, res)=>{
    try {
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const address = req.body.address;
        const phone = req.body.phone;
        const region = req.body.region;
        const city = req.body.city;
        const addressdiscription = req.body.addresscity;
        
        // validation
    
        if ( !firstName || !lastName || !address || !region || !city || !phone)
          return res
            .status(400)
            .json({ errorMessage: "Please enter all required fields." });
    
        // save a new product to the db
    
        const newShippingDetails = new ShippingDetails({
          firstName,
          lastName,
          address,
          city,
          phone,
          addressdiscription,
          region
        });

        ShippingDetails.create(newShippingDetails, (err, data)=>{
             if(err){
                 res.status(500).send(err);
             }else{
                 res.status(201).send(data);
             }
        });

        
      } catch (err) {
        console.error(err);
        res.status(500).send();
      }
  });

  app.post("/billing/new", async (req, res)=>{
    try {
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const address = req.body.address;
        const phone = req.body.phone;
        const region = req.body.region;
        const city = req.body.city;
        const addressdiscription = req.body.addresscity;
        const email = req.body.email;
        
        // validation
    
        if ( !firstName || !lastName || !address || !region || !city || !phone || !email)
          return res
            .status(400)
            .json({ errorMessage: "Please enter all required fields." });
    
        // save a new product to the db
    
        const newShippingDetails = new Billing({
          firstName,
          lastName,
          email,
          address,
          city,
          phone,
          addressdiscription,
          region
        });

        ShippingDetails.create(newShippingDetails, (err, data)=>{
             if(err){
                 res.status(500).send(err);
             }else{
                 res.status(201).send(data);
             }
        });

        
      } catch (err) {
        console.error(err);
        res.status(500).send();
      }
  });


   app.post("/regiontowns/new", async (req, res)=>{
     try {
      
      // const region = "Western North";
      // const townLookUps = {"Bibiani": 20}

      //    // validatio
    
      //    // save a new product to the db
    
      //    const newCategory = new RegionsTowns({
      //      region,
      //      townLookUps
      //    });

         RegionsTowns.insertMany(Locationdata, (err, data)=>{
              if(err){
                  res.status(500).send(err);
              }else{
                  res.status(201).send(data);
              }
         });

        
       } catch (err) {
         console.error(err);
         res.status(500).send();
       }
   });

  app.get('/', (req, res) =>res.status(200).send('hello world'));

app.get('/products', async (req, res) => {

  try {
    const products = await ProductDto.find({});
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.get('/products/:id', async (req, res) => {

  try {
    const products = await ProductDto.findById(req.params.id);
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.get('/api/:categoryitem', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  try {
    const catitem = await ProductDto.find({$or: [ {category: req.params.categoryitem}, 
      {subCategory: req.params.categoryitem }]}).skip((page - 1) * limit).limit(limit);
    const total = await ProductDto.countDocuments({$or: [ {category: req.params.categoryitem}, 
      {subCategory: req.params.categoryitem }]});
      res.status(200).json({catitem, totalPages: Math.ceil(total / limit), currentPage:page});
  } catch (err) {
    res.status(500).json(err);
  }
});

app.get('/api/category/:categoryitem', async (req, res) => {

  try {
    const existingdata = {}
    const arr = []
    const catitem = await ProductDto.find({$or: [ {category: req.params.categoryitem}, 
      {subCategory: req.params.categoryitem }]});

      for (let i = 0; i < catitem.length; i++) {
        if (catitem[i].subCategory in existingdata) {
          
        }else{
          if (arr.length<4){
            existingdata[catitem[i].subCategory] = true;
            arr.push(catitem[i])
          }
        }
        
      }

    //const catitems = await ProductDto.find({$where:[{category:req.params.categoryitem}]})
    res.status(200).json(arr);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.get('/api/categories/:categoryitem', async (req, res) => {

  try {
    const catitem = await ProductDto.find({$or: [ {category: req.params.categoryitem}, 
      {subCategory: req.params.categoryitem }]});

    res.status(200).json(catitem);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.get('/genericproducts', async (req, res) => {

  try {
    await ProductDto.find({ subCategory: 'Home Appliances'}, (error, data) => {
      if (error) {
        res.status(400).json(error);
      } else {
        res.status(200).json(data);
      }
    }).limit(4);
    
  } catch (err) {
    res.status(500).json(err);
  }
});



app.get('/searchproducts/:searchParam', async (req, res) => {

  try {
    const serachprod = await ProductDto.find({ $or: [ {category: req.params.searchParam}, {productName: req.params.searchParam },
    {brandName: req.params.searchParam } ]});

    if (serachprod.length !== 0) {
      res.status(200).json(serachprod);
    } else {
      const subSerach= await ProductDto.find({ subCategory: req.params.searchParam});
      res.status(200).json(subSerach);
    }  
    
  } catch (err) {
    res.status(500).json(err);
  }
});

app.get('/lowestprice', async (req, res) => {
  let prodarr = [];
  try {
    await ProductDto.find({subCategory: "Home Appliances" }, (error, data) => {
      if (error) {
        res.status(400).json(error);
      } else {
          for (let i = 0; i < data.length; i++) {
            if (parseFloat((data[i].regularPrice).replace(/,/g, '')) < 500.00 && prodarr.length != 4) {
              prodarr.push(data[i])
            }
          }
          // res.status(200).json(prodarr);
      }
    }).limit(2);
    await ProductDto.find({subCategory: "Televisions" }, (error, data) => {
      if (error) {
        res.status(400).json(error);
      } else {
          for (let i = 0; i < data.length; i++) {
            if (parseFloat((data[i].regularPrice).replace(/,/g, '')) < 1500.00 && prodarr.length != 4) {
              prodarr.push(data[i])
            }
          }
          // res.status(200).json(prodarr);
      }
    }).limit(1);
    await ProductDto.find({subCategory: "Audio & Music Equipments" }, (error, data) => {
      if (error) {
        res.status(400).json(error);
      } else {
          for (let i = 0; i < data.length; i++) {
            if (parseFloat((data[i].regularPrice).replace(/,/g, '')) < 2500.00 && prodarr.length != 4) {
              prodarr.push(data[i])
            }
          }
          // res.status(200).json(prodarr);
      }
    }).limit(1);
    await ProductDto.find({subCategory: "Carpentry Materials" }, (error, data) => {
      if (error) {
        res.status(400).json(error);
      } else {
          for (let i = 0; i < data.length; i++) {
            if (parseFloat((data[i].regularPrice).replace(/,/g, '')) < 500.00 && prodarr.length != 4) {
              prodarr.push(data[i])
            }
          }
          res.status(200).json(prodarr);
      }
    }).limit(1);
    
  } catch (err) {
    res.status(500).json(err);
  }
});

app.get('/chainedproducts/:queryone/:querytwo/:querythree/:queryfour', async (req, res) => {
  let productItem = [];
  
  try {
    await ProductDto.find({ subCategory: req.params.queryone}, (error, data) => {
      if (error) {
        res.status(400).json(error);
      } else {
        // res.status(200).json(data);
        for (let i = 0; i < data.length; i++) {
          productItem.push(data[i])
        }
      }
    }).limit(4)
    await ProductDto.find({ subCategory: req.params.querytwo}, (error, data) => {
      if (error) {
        res.status(400).json(error);
      } else {
        for (let i = 0; i < data.length; i++) {
          productItem.push(data[i])
        }
      }
    }).limit(4)
    await ProductDto.find({ subCategory: req.params.querythree}, (error, data) => {
      if (error) {
        res.status(400).json(error);
      } else {
        for (let i = 0; i < data.length; i++) {
          productItem.push(data[i])
        }
      }
    }).limit(4)
    await ProductDto.find({ subCategory: req.params.queryfour}, (error, data) => {
      if (error) {
        res.status(400).json(error);
      } else {
        for (let i = 0; i < data.length; i++) {
          productItem.push(data[i])
        }
        res.status(200).json(productItem);
        return;
      }
    }).limit(4)
    
  } catch (err) {
    res.status(500).json(err);
  }
});

app.get('/categoryLookups', async (req, res) => {

  try {
    const categoryLookups = await CategoryLookUpModel.find({});
    res.status(200).json(categoryLookups);
  } catch (err) {
    res.status(500).json(err);
  }
});

// app.post('/users', async (req, res) => {
//   try {
//     const user = await User.save(req.body);
//     res.status(200).json(user);
//   } catch (err) {
//     res.status(501).json(err);
//   }
// });

app.post('/users', async(req, res) => {
  try {
      const user = await User.create(req.body)
      res.status(200).json(user);
      
  } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})
  }
});


app.get("/users/:uid", async (req, res) =>{
  try {
const user = await Signup.find({ unique_id: { $ne: req.params.uid }});
res.status(200).json(user);
} catch (err) {
res.status(500).json(err);
}
});

// Register user
app.post('/signup/new',  async (req, res)=> {
  try {
      const firstName = req.body.firstname;
      const lastName = req.body.surname;
      const email = req.body.email
      const telnumber = req.body.phone_number;
      const passwordraw = req.body.password;
      
      // validation
  
      if ( !telnumber || !passwordraw || !email || !firstName || !lastName )
        return res
          .status(400)
          .json({ errorMessage: "Please enter all required fields." });
  
      if (passwordraw.length < 6)
        return res.status(402).json({
          errorMessage: "Please enter a password of at least 6 characters.",
        });
  
  
      const existingUser = await User.findOne({ telnumber });
      if (existingUser)
        return res.status(400).json({
          errorMessage: "An account with this number already exists.",
        });
  
      // hash the password
  
      const salt = await bcrypt.genSalt();
      const password = await bcrypt.hash(passwordraw, salt);
      const unique_id = uuidv4();

  
      // save a new user account to the db
  
      const newUser = new User({
        unique_id,
        firstName,
        lastName,
        email,
        telnumber,
        password,
      });
  
      const savedUser = await newUser.save();
  
      // sign the token
  
      const token = jwt.sign(
        {
          user: savedUser.unique_id,
        },
        process.env.JWT_SECRET
      );
      console.log(token)
      // send the token in a HTTP-only cookie
       res
         .cookie("token", token, {
           httpOnly: true,
           secure: true,
           sameSite: "none",
         })
         .send();

      // res.header("authtoken", token).send(token)
    } catch (err) {
      console.error(err);
      res.status(500).send();
    }
});



 //validate to login the user
 app.post("/login", async (req, res) => {
   try {
     const { telnumber, password } = req.body;
 
     // validate
 
     if (!telnumber || !password)
       return res
         .status(400)
         .json({ errorMessage: "Please enter all required fields." });
 
     const existingUser = await User.findOne({ telnumber });
     if (!existingUser)
       return res.status(401).json({ errorMessage: "Wrong email or password." });
 
     const passwordCorrect =  await bcrypt.compare(password, existingUser.password)
     if (!passwordCorrect)
       return res.status(401).json({ errorMessage: "Wrong email or password." });
 
     // sign the token
 
     const token = jwt.sign(
       {
         user: existingUser.unique_id,
       },
       process.env.JWT_SECRET
     );
 
     // send the token in a HTTP-only cookie
 
    res
       .cookie("token", token, {
         httpOnly: true,
         secure: true,
         sameSite: "none",
       })
       .send();
   } catch (err) {
     console.error(err);
     res.status(500).send();
   }
 });
  
 // logout the user
app.get("/logout", (req, res) => {
   res
     .cookie("token", "", {
       httpOnly: true,
       expires: new Date(0),
       secure: true,
       sameSite: "none",
     })
     .send();
 });

  // get the logged in user
  app.get("/loggedIn", (req, res) => {
    try {
      const token = req.cookies.token;
      if (!token) return res.json(false);
  
      jwt.verify(token, process.env.JWT_SECRET);
  
      res.send(true);
    } catch (err) {
      res.json(false);
    }
  });

  app.get("/getToken", (req, res) => {
    try {
      const token = req.cookies.token;
      if (!token) return res.json(false);
  
      jwt.verify(token, process.env.JWT_SECRET);
  
      res.json({ token });
    } catch (err) {
      res.json(false);
    }
  });

  app.post("/itemSizes/new", (req, res) => {
    try {
        const itemsize = "MediumItems";
        const itemsizelookups = ["Metals","Roofing Sheets","Plywood","Iron Rod","Cylinders","Fufu Machines",
        "Microwaves","Rice Cookers","Ovens","Gas Burners",
        "Gas Stoves","Washing Machines","Laptops & Computers","Televisions","Carpentry Materials"]
        const deliveryfee = 30.55
    
         const newItemSize = new ItemSizeModel({
           itemsize,
           itemsizelookups,
           deliveryfee
         });

         ItemSizeModel.create(newItemSize, (err, data)=>{
              if(err){
                  res.status(500).send(err);
              }else{
                  res.status(201).send(data);
              }
         });

        
       } catch (err) {
         console.error(err);
         res.status(500).send();
       }
  })

  app.get("/getproductsizes", async (req, res) => {
    try {
      const itemsizes = await ItemSizeModel.find({});
      res.status(200).json(itemsizes);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  app.post("/updateproduct", (req, res) => {
        const productName = req.body.productName;
        const regularPrice = req.body.regularPrice;
        const salePrice = req.body.salePrice;
        const brandName = req.body.brandName;
        const category = req.body.Category;
        const subCategory = req.body.subCatgories;
        const discription = req.body.discription;
        const shipping = req.body.shipping;
        const fileName = req.body.fileName;


    try {
         const newItem = new NewProductModel({
          productName,
          regularPrice,
          salePrice,
          brandName,
          category,
          shipping,
          subCategory,
          discription,
          fileName,
         });

         NewProductModel.create(newItem, (err, data)=>{
              if(err){
                  res.status(500).send(err);
              }else{
                  res.status(201).send(data);
              }
         });

         

        
       } catch (err) {
         console.errorres.status(500).send();
        }
   });
 
 
   app.get("/verifypayment/:ref", async (req, response) => {
     try {
       const options = {
         hostname: 'api.paystack.co',
         port: 443,
         path: `/transaction/verify/${req.params.ref}`,
         method: 'GET',
         headers: {
           Authorization: 'Bearer sk_test_da294b7771bace620ec64176e31f2193d3e89b96'
         }
       }
 
       let data = ''
       var reqt = https.request(options, res => {
         
       
         res.on('data', (chunk) => {
           data += chunk
         });
       
         res.on('end', () => {
           response.status(200).json(JSON.parse(data));
           // console.log(JSON.parse(data))
         })
       }).on('error', error => {
         console.error(error)
       })
       
       reqt.end();
     } catch (err) {
       res.status(500).json(err);
     }
   });
 
 
   app.get('/search-suggestions', async (req, res) => {
     const term = req.query.term;
     // const suggestions = await NewProductModel.find({ name: new RegExp(term, 'i') }).limit(10);
     const suggestions = await NewProductModel.find({$or: [
       { productName: new RegExp(term, 'i')},
       { brandName: new RegExp(term, 'i')},
       { category: new RegExp(term, 'i')},
       { subCategory: new RegExp(term, 'i')}
     ]}).limit(10)
     res.json(suggestions);
   });
 
 
   app.post("/categorylookups/new", (req, res) => {
     try {
           const categr = Categories
           CategoryLookUpModel.insertMany(Categories, (err, data)=>{
                if(err){
                    res.status(500).send(err);
                }else{
                 res.status(201).send(data);
                }
           });
        } catch (err) {
          console.error(err);
          res.status(500).send();
        }
   });
 
   app.post("/itemsizelookups/new", (req, res) => {
     try {
           const categr = ItemSizeMockdata
           ItemSizeModel.insertMany(categr, (err, data)=>{
                if(err){
                    res.status(500).send(err);
                }else{
                 res.status(201).send(data);
                }
           });
        } catch (err) {
          console.error(err);
          res.status(500).send();
        }
   });
 
   app.post("/orders/new", async (req, res)=>{
     try {
      const details = req.body;
      const orders = details[0];
      const basket = details[1];
      const data = details[2];
      const totalPrice = details[3];
      const deliveryfee = details[4];
      
      const name = orders.name;
      const email = orders.email;
      const paymentchanel = orders.paymentchanel;
      const phone = orders.phone;
      const order = {
        id : orders.order.id, 
        order_items : orders.order.orderitems
      }
      //  console.log('\ndetails: ', order['order_items'])  
         // save a new product to the db
     
         const newOrder = new OrderDetails({
           name,
           email,
           phone,
           paymentchanel,
           order,
         });
 
         const transporter = nodemailer.createTransport({
           service: 'gmail',
           secure: true,
           auth: {
               user: 'nanayawamefia98@gmail.com',
               pass: 'fauyaispedkdowri'
           }
       })
       
       
    
       const message = {
           from: 'Caspianoutlets <noreply.nanayawamefia98@gmail.com>',
           subject: 'Order receipt',
           to: email,
           html: html(basket, data, totalPrice, deliveryfee)
       }
 
         OrderDetails.create(newOrder, (err, data)=>{
              if(err){
                  res.status(500).send(err);
              }else{
               transporter.sendMail(message, (err, info)=>{
                 if (err){
                     console.log(err);
                 }
                 console.log(info)
             })
                  res.status(201).send(data);
              }
         });
 
         
       } catch (err) {
         console.error(err);
         res.status(500).send();
       }
   });
 
  app.post('/feedbacks', async(req, res)=>{
    let { name, comment } = req.body;
    try {
      const feedbacks = new feedbackModel({name, comment})
       await feedbackModel.create(feedbacks)
      res.status(200).send({message:'Feedback received successfully! Thank you, '})
    }catch(err){
      res.status(500).send(err);
    }
  })

  app.get('/feedbacks', async(req, res)=>{
    try {
      const feedbacks = await feedbackModel.find({})
      res.status(200).send(feedbacks);
    }catch(err){
      res.status(500).send(err);
    }
  })


   app.listen(port, () => console.log(`Listening on lacalhost:${port}`));