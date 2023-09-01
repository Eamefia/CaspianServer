{/* <h4 style="margin-bottom:4px">Hi Emmanuel,</h4>

<p> Thank you for shopping on Jumia!</p>

<p>Your order 322691812 has been confirmed successfully.</p>



<p>It will be packed and shipped as soon as possible.You will receive a notification from us once the item (s) are available for collection from Jumia Pickup Station Odumase - SOMANYA - KPONG HIGHWAY .</p> */}


{/* <table style="width:100%; border:1px solid black">
  <thead>
    <tr>
      <td style="border:1px solid gray">
        <div>
          <h4 style="margin:0; padding:4px;background-color:#eee7e7; ">Estimated delivery dates(s)</h4>
          <p style="margin:0; padding: 8px 8px 8px 4px">Between 04 Sep 2023 and 05 Sep 2023</p>
        </div>
      </td>
      <td style="border:1px solid gray">
        <div>
          <h4 style="margin:0; padding:4px; background-color:#eee7e7;">Delivery method</h4>
          <p style="margin:0; padding:8px 8px 8px 4px">Door delivery</p>
        </div>
      </td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border:1px solid gray">
        <div>
          <h4 style="margin:0; padding:4px; background-color:#eee7e7;">Recipient details</h4>
          <p style="margin:0; padding:8px 8px 8px 4px">Emmanuel Amefia +233593152806</p>
        </div>
      </td>
      <td style="border:1px solid gray">
        <div>
          <h4 style="margin:0; padding:4px; background-color:#eee7e7;">Delivery address</h4>
          <p style="margin:0; padding:8px 8px 8px 4px">SOMANYA - KPONG HIGHWAY Odumasi</p>
        </div>
      </td>
    </tr>
  </tbody>
</table> */}

{/* <table style="width:100%; border:1px solid black">
  <thead>
    <tr>
      <td style="margin:0; padding:4px; background-color:#eee7e7; "></td>
      <td style="margin:0; padding:4px; background-color:#eee7e7; ">ITEM</td>
      <td style="margin:0; padding:4px; background-color:#eee7e7; ">QUANTITY</td>
      <td style="margin:0; padding:4px; background-color:#eee7e7; ">PRICE</td>
    </tr>
    <tr>
      <td style="padding: 4px"><img src='' alt="img" height="50" width="50"/></td>
      <td style="padding: 4px">Product Name</td>
      <td style="padding: 4px">2</td>
      <td style="padding: 4px">Ghc2000</td>
    </tr>
    </tbody>
</table> */}


{/* <div>
  <div style="display:flex; width:100%; padding:8px 8px 8px 4px">
    <p style="margin:0; font-weight:bold; width:90%">DELIVERY FEES</p>
    <p style="margin:0; color:gray">GHC100</p>
  </div>
  <div style="display:flex; width:100%; padding:8px 8px 8px 4px">
    <p style="margin:0; font-weight:bold; width:90%">DELIVERY FEES</p>
    <p style="margin:0; color:gray">GHC100</p>
  </div>
  <div style="display:flex; width:100%; padding:8px 8px 8px 4px">
    <p style="margin:0; font-weight:bold; width:90%">DELIVERY FEES</p>
    <p style="margin:0; color:gray">GHC100</p>
  </div>
  <div style="display:flex; width:100%; padding:8px 8px 8px 4px">
    <p style="margin:0; font-weight:bold; width:90%">DELIVERY FEES</p>
    <p style="margin:0; color:gray">GHC100</p>
  </div>
  <div style="display:flex; width:100%; padding:8px 8px 8px 4px">
    <p style="margin:0; font-weight:bold; width:90%">DELIVERY FEES</p>
    <p style="margin:0; color:gray">GHC100</p>
  </div>
</div> */}


const HTML=(basket, addressdata, totalPrice, deliveryfee)=>{
    return `
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
      <head>
        <!--[if gte mso 9]>
            <xml>
                <o:OfficeDocumentSettings>
                <o:AllowPNG/>
                <o:PixelsPerInch>96</o:PixelsPerInch>
                </o:OfficeDocumentSettings>
            </xml>
        <![endif]-->
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="x-apple-disable-message-reformatting">
        <!--[if !mso]><!-->
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <!--<![endif]-->
            
            <style type="text/css">
                html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }
    
            </style>
        
            <style type="text/css">
                *, *::before, *::after {
    box-sizing: inherit;
    }
    
            </style>
        
            <style type="text/css">
                strong, b {
    font-weight: 700;
    }
    
            </style>
        
            <style type="text/css">
                body {
    color: #263238;
    margin: 0;
    font-size: 0.875rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.43;
    letter-spacing: 0.01071em;
    background-color: #fff;
    }
    
            </style>
        
            <style type="text/css">
                @media print {
    body {
        background-color: #fff;
    }
    }
    
            </style>
        
            <style type="text/css">
                body::backdrop {
    background-color: #fff;
    }
    
            </style>
        
    
        <style type="text/css">
            .mainClass{
                width: 58.333333333333336%
            }
        </style>
        <style type="text/css">
            .braft-output-content p{min-height:1em}.braft-output-content .image-wrap img{max-width:100%;height:auto}.braft-output-content ul,.braft-output-content ol{margin:16px 0;padding:0}.braft-output-content blockquote{margin:0 0 10px 0;padding:15px 20px;background-color:#f1f2f3;border-left:solid 5px #ccc;color:#666;font-style:italic}.braft-output-content pre{max-width:100%;max-height:100%;margin:10px 0;padding:15px;overflow:auto;background-color:#f1f2f3;border-radius:3px;color:#666;font-family:monospace;font-size:14px;font-weight:normal;line-height:16px;}.braft-output-content pre pre{margin:0;padding:0}
            @media  (max-width: 768px) {
                /* For mobile phones: */
                .mainClass {
                    width: 100%;
                }
            }
            @media screen and (max-width: 600px) {
                table td#containerCol {
                    display: flex;
                    width: 100%;
                }
            }
        </style>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
       
      </head>
      <body style="
            background-color:#e0e0e0;
            background-image: url();
            background-repeat: no-repeat;
            background-size: cover;
            background-attachment: fixed;
        ">
        <table style="width:100%;table-layout:fixed;border-spacing:0" cellSpacing="0"><tbody align="center" style="width:100%"><tr><td style="padding:0"><div style="padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;margin-bottom:0;margin-top:0;margin-right:0;margin-left:0"><div id="Main" class="mainClass"><table style="width:100%;background-image:url();background-color:#ffffff;height:100%;border-radius:0;background-repeat:no-repeat;background-size:cover;table-layout:fixed;border-spacing:0" cellSpacing="0"><tbody align="left" style="width:100%"><tr><td style="padding:0"><div style="text-align:center;align:center;background-image:url();background-color:#00000000;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;margin-bottom:0;margin-top:0;margin-right:0;margin-left:0"><div style="width:100%"><a href="#" target="_self" style="pointer-events:none">
        <img src="https://caspianz.com/wp-content/uploads/2023/04/cropped-site-icon.png" width="11%" alt="Not found" style="width:11%;border-radius:0"/></a></div></div></td></tr><tr><td style="padding:0">
        <div style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:8px;margin-bottom:0;margin-top:0;margin-right:0;margin-left:0">
        <div style="width:100%">
        <div><h4 style="margin-bottom:4px">Hi ${addressdata.firstName}, </h4>
    
        
    <p> Thank you for shopping on Caspian Outlet!</p>
    
    <p>Your ${addressdata.orderId} order has been confirmed successfully.</p>
    
    
    
    <p>It will be packed and shipped as soon as possible.You will receive a notification from us once the item (s) reaches your destination.</p></div></div></div></td></tr><tr><td style="padding:0"><div style="padding-top:4px;padding-bottom:4px;padding-right:4px;padding-left:4px;margin-bottom:0;margin-top:0;margin-right:0;margin-left:0"><div style="width:100%"><div><table style="width:100%; border:1px solid black">
    <thead>
    <tr>
      <td style="border:1px solid gray">
        <div>
          <h4 style="margin:0; padding:4px;background-color:#eee7e7; ">Estimated delivery dates(s)</h4>
          <p style="margin:0; padding: 8px 8px 8px 4px">Between 04 Sep 2023 and 05 Sep 2023</p>
        </div>
      </td>
      <td style="border:1px solid gray">
        <div>
          <h4 style="margin:0; padding:4px; background-color:#eee7e7;">Delivery method</h4>
          <p style="margin:0; padding:8px 8px 8px 4px">Door delivery</p>
        </div>
      </td>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td style="border:1px solid gray">
        <div>
          <h4 style="margin:0; padding:4px; background-color:#eee7e7;">Recipient details</h4>
          <p style="margin:0; padding:8px 8px 8px 4px">${addressdata['firstName']} ${addressdata['lastName']} | ${addressdata['phone']}</p>
        </div>
      </td>
      <td style="border:1px solid gray">
        <div>
          <h4 style="margin:0; padding:4px; background-color:#eee7e7;">Delivery address</h4>
          <p style="margin:0; padding:8px 8px 8px 4px">${addressdata['address']}, ${addressdata['addresscity']} | ${addressdata['region']} - ${addressdata['city']}</p>
        </div>
      </td>
    </tr>
    </tbody>
    </table></div></div></div></td></tr><tr><td style="padding:0"><div style="padding-top:4px;padding-bottom:4px;padding-right:4px;padding-left:4px;margin-bottom:0;margin-top:0;margin-right:0;margin-left:0"><div style="width:100%"><div><table style="width:100%; border:1px solid black">
    <thead>
    <tr>
      <td style="margin:0; padding:4px; background-color:#eee7e7; "></td>
      <td style="margin:0; padding:4px; background-color:#eee7e7; ">ITEM</td>
      <td style="margin:0; padding:4px; background-color:#eee7e7; ">QUANTITY</td>
      <td style="margin:0; padding:4px; background-color:#eee7e7; ">PRICE</td>
    </tr>
    ${basket.map(product=>
    `
        <tr key=${product['_id']}>
        <td style="padding: 4px"><img src="https://caspianshops.netlify.app/${product['image']}" alt="img" height="50" width="50"/></td>
        <td style="padding: 4px">${product['title']}</td>
        <td style="padding: 4px">${product['quantity']}</td>
        <td style="padding: 4px">GHS${product['price']}</td>
    </tr>
    `    
    )}
    </tbody>
    </table></div></div></div></td></tr><tr><td style="padding:0"><div style="padding-top:4px;padding-bottom:4px;padding-right:4px;padding-left:4px;margin-bottom:0;margin-top:0;margin-right:0;margin-left:0"><div style="width:100%"><div><div style="border: 1px solid gray;">
    <div style="display:flex; width:100%; padding:8px 8px 8px 4px">
    <p style="margin:0; font-weight:bold; width:90%">DELIVERY FEES</p>
    <p style="margin:0; color:gray">GHS${deliveryfee}</p>
    </div>
    <div style="display:flex; width:100%; padding:8px 8px 8px 4px">
    <p style="margin:0; font-weight:bold; width:90%">DISCOUNT ON DELIVERY</p>
    <p style="margin:0; color:gray">GHC0</p>
    </div>
    <div style="display:flex; width:100%; padding:8px 8px 8px 4px">
    <p style="margin:0; font-weight:bold; width:90%">DISCOUNT</p>
    <p style="margin:0; color:gray">GHC0</p>
    </div>
    <div style="display:flex; width:100%; padding:8px 8px 8px 4px">
    <p style="margin:0; font-weight:bold; width:90%">TOTAL</p>
    <p style="margin:0; color:gray">GHS${totalPrice}</p>
    </div>
    <div style="display:flex; width:100%; padding:8px 8px 8px 4px">
    <p style="margin:0; font-weight:bold; width:90%">PAYMENT METHOD</p>
    <p style="margin:0; color:gray">Online Payment</p>
    </div>
    </div></div></div></div></td></tr><tr><td style="padding:0"><div style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:6px;margin-bottom:0;margin-top:0;margin-right:0;margin-left:0"><div style="width:100%"><div><p style="margin-top:4px">If you would like to know more, please visit our Help Center.</p>
    
    <p style="margin-top:4px">Please don’t forget to thank your Caspian delivery agent, who is keeping you safe at home! You can also encourage them through our Facebook page using the #caspian flag. Stay safe & stay healthy.</p>
    
    <p style="margin-top:4px">Happy Shopping!</p>
    
    <p style="margin-top:4px">Warm Regards,</p></div></div></div></td></tr></tbody></table></div></div></td></tr></tbody></table>
        
      </body>
        <script type="text/javascript">
          var w=window.innerWidth;
          if(w < 800) document.getElementById("Main").className=("MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12");
        </script>
    </html>
    `
}


export default HTML;