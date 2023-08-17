import React from "react";

const ContactInfo = () => {
  return (
    <div className="contactInfo container">
      <div className="row">
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h5> <a href="" >Hỗ trợ sản phẩm</a> </h5> 
            <p><a href="https://support.apple.com/iphone" >iPhone </a>     </p>
            <p><a href="https://support.apple.com/mac" >Mac  </a>   </p>
            <p><a href="https://support.apple.com/ipad" >iPad</a> </p>
            <p><a href="https://support.apple.com/watch" >Watch </a> </p>
            <p><a href="https://support.apple.com/airpods" >AirPods</a> </p>
            <p><a href="https://support.apple.com/music" >Music </a> </p>
            <p><a href="https://support.apple.com/tv" >TV</a> </p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h5><a href="" >Dịch vụ và sửa chửa </a> </h5>
            <p><a href="https://support.apple.com/repair" >Apple Repair Options </a> </p>
            <p><a href="https://support.apple.com/repair-products" >Service and Repair Information </a> </p>
            <p><a href="https://www.apple.com/support/products/" >AppleCare Products </a> </p>
            <p><a href="https://www.apple.com/legal/warranty/" >Hardware Warranties </a> </p>
            <p><a href="https://www.apple.com/legal/sla/" >Software License Agreements </a> </p>
            <p><a href="https://support.apple.com/complimentary" >Complimentary Support </a> </p>
            <p><a href="https://support.apple.com/sitemap" >Support Site Map </a> </p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-fax"></i>
            </div>
            <h5>Kết nối</h5>
            <p><a href="https://support.apple.com/contact" >Phone Numbers</a> </p>
            <p><a href="https://support.apple.com/en-us/HT201232" >Support app </a> </p>
            <p><a href="https://apps.apple.com/us/app/apple-support/id1130498044?l=en" >Apple Communities </a> </p>
            <p><a href="https://www.youtube.com/applesupport" >Apple Support Videos</a> </p>
            <p><a href="https://twitter.com/AppleSupport" >@AppleSupport </a> </p>
            <p><a href="" >+84 889 359 022</a> </p>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default ContactInfo;