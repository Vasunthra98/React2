import React from 'react';
import EmailIcon from '@mui/icons-material/Email'
import CallIcon from '@mui/icons-material/Call'
function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>&emsp;&emsp;
      {/* <i style="font-size:24px" class="fa fa-envelope"><a href="mailto:psv1234@gmail.com">Send email</a></i> */}
      <p>Address:<address>14C/238,2nd Cross Street,Near Indian Bank Oposite,Anna Nagar,Chennai-600001 </address></p>
       <EmailIcon/><a href="mailto:psv1234@gmail.com" > &emsp;Send email</a><br></br><br/>
       <p><CallIcon/>&emsp;+91 9786543210</p>
       
    </div>
  );
}

export default Contact;