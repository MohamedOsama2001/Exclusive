import React from "react";

function About() {
  return (
    <>
      {/* our story section */}
      <section>
        <div className="container my-5">
            <div className="head">
                <h5>Home / About</h5>
            </div>
          <div className="row">
            <div className="col-6">
              <h2 className="mt-5">Our Story</h2>
              <p className="pe-5 mt-5">
                Launced in 2015, Exclusive is South Asia’s premier online
                shopping makterplace with an active presense in Bangladesh.
                Supported by wide range of tailored marketing, data and service
                solutions, Exclusive has 10,500 sallers and 300 brands and
                serves 3 millioons customers across the region.{" "}
              </p>
              <p className="pe-5">
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assotment in categories
                ranging from consumer.
              </p>
            </div>
            <div className="col-6">
              <img src={"/images/about.png"} className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      {/*subscribe */}
      <section>
        <div className="container py-5">
          <div className="row" style={{ cursor: "pointer" }}>
            <div className="col-lg-3 col-md-6 col-sm-12 text-center">
              <div className="border border-black py-4">
                <div className="icon-div bg-black text-light">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 41 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M34.6416 5H27.9883L28.8216 13.3333C28.8216 13.3333 30.4883 15 32.9883 15C34.3006 15.0017 35.5684 14.524 36.5533 13.6567C36.6574 13.5594 36.735 13.4372 36.7787 13.3016C36.8224 13.166 36.8309 13.0214 36.8033 12.8817L35.6266 5.83333C35.5873 5.60049 35.4668 5.38909 35.2865 5.23656C35.1062 5.08404 34.8778 5.00024 34.6416 5V5Z"
                      stroke="white"
                      stroke-width="2"
                    />
                    <path
                      d="M27.9883 5L28.8216 13.3333C28.8216 13.3333 27.1549 15 24.6549 15C22.1549 15 20.4883 13.3333 20.4883 13.3333V5H27.9883Z"
                      stroke="#FAFAFA"
                      stroke-width="2"
                    />
                    <path
                      d="M20.4886 5V13.3333C20.4886 13.3333 18.8219 15 16.3219 15C13.8219 15 12.1553 13.3333 12.1553 13.3333L12.9886 5H20.4886Z"
                      stroke="#FAFAFA"
                      stroke-width="2"
                    />
                    <path
                      d="M12.9883 5H6.3366C6.09993 4.99991 5.87089 5.08377 5.69023 5.23666C5.50957 5.38955 5.38899 5.60157 5.34994 5.835L4.17494 12.8833C4.14747 13.0231 4.15601 13.1676 4.19974 13.3032C4.24348 13.4387 4.32097 13.5609 4.42494 13.6583C4.9716 14.1417 6.19327 15.0017 7.98827 15.0017C10.4883 15.0017 12.1549 13.335 12.1549 13.335L12.9883 5.00167V5Z"
                      stroke="#FAFAFA"
                      stroke-width="2"
                    />
                    <path
                      d="M5.5 15V31.6667C5.5 32.5507 5.85119 33.3986 6.47631 34.0237C7.10143 34.6488 7.94928 35 8.83333 35H32.1667C33.0507 35 33.8986 34.6488 34.5237 34.0237C35.1488 33.3986 35.5 32.5507 35.5 31.6667V15"
                      stroke="#FAFAFA"
                      stroke-width="2"
                    />
                    <path
                      d="M25.2217 35V25C25.2217 24.1159 24.8705 23.2681 24.2454 22.6429C23.6202 22.0178 22.7724 21.6666 21.8883 21.6666H18.555C17.671 21.6666 16.8231 22.0178 16.198 22.6429C15.5729 23.2681 15.2217 24.1159 15.2217 25V35"
                      stroke="#FAFAFA"
                      stroke-width="2"
                      stroke-miterlimit="16"
                    />
                  </svg>
                </div>
                <h4 className="my-3">10.5k </h4>
                <p>Sallers active our site</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 text-center">
              <div className="border border-black py-4 bg-danger text-light">
                <div className="icon-div bg-light text-light">
                <svg width="25" height="25" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.0003 37.2728C29.5397 37.2728 37.273 29.5395 37.273 20C37.273 10.4606 29.5397 2.72729 20.0003 2.72729C10.4608 2.72729 2.72754 10.4606 2.72754 20C2.72754 29.5395 10.4608 37.2728 20.0003 37.2728Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.0914 14.547C24.762 13.9758 24.2834 13.505 23.707 13.1848C23.1305 12.8646 22.4777 12.7072 21.8186 12.7294H18.1823C17.2178 12.7294 16.2929 13.1124 15.611 13.7941C14.929 14.4759 14.5459 15.4005 14.5459 16.3647C14.5459 17.3288 14.929 18.2535 15.611 18.9353C16.2929 19.617 17.2178 20 18.1823 20H21.8186C22.783 20 23.708 20.383 24.3899 21.0648C25.0719 21.7465 25.455 22.6712 25.455 23.6354C25.455 24.5995 25.0719 25.5242 24.3899 26.2059C23.708 26.8877 22.783 27.2707 21.8186 27.2707H18.1823C17.5232 27.2929 16.8704 27.1354 16.2939 26.8153C15.7174 26.4951 15.2389 26.0242 14.9095 25.453" stroke="black" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 8.18176V12.1212M20 27.8787V31.8181" stroke="black" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                </div>
                <h4 className="my-3">33k</h4>
                <p>Mopnthly Produduct Sale</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 text-center">
              <div className="border border-black py-4">
                <div className="icon-div bg-black text-light">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 28 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.66699 8.66672V5.33339C5.66701 4.36818 5.9464 3.42362 6.47143 2.6137C6.99646 1.80379 7.74469 1.16315 8.6258 0.769121C9.50691 0.375089 10.4832 0.244506 11.4369 0.393135C12.3906 0.541764 13.2809 0.963251 14.0003 1.60672C14.7197 0.963251 15.61 0.541764 16.5637 0.393135C17.5174 0.244506 18.4937 0.375089 19.3748 0.769121C20.256 1.16315 21.0042 1.80379 21.5292 2.6137C22.0543 3.42362 22.3336 4.36818 22.3337 5.33339V8.66672H24.8337C25.4967 8.66672 26.1326 8.93011 26.6014 9.39895C27.0703 9.86779 27.3337 10.5037 27.3337 11.1667V27.8417C27.3337 29.3866 26.72 30.8682 25.6276 31.9606C24.5352 33.053 23.0535 33.6667 21.5087 33.6667H7.33366C5.56555 33.6667 3.86986 32.9643 2.61961 31.7141C1.36937 30.4639 0.666992 28.7682 0.666992 27.0001V11.1667C0.666992 10.5037 0.930384 9.86779 1.39922 9.39895C1.86807 8.93011 2.50395 8.66672 3.16699 8.66672H5.66699ZM16.7253 31.1667C16.0454 30.1914 15.6818 29.0306 15.6837 27.8417V11.1667H3.16699V27.0001C3.16699 27.5472 3.27477 28.089 3.48416 28.5946C3.69356 29.1001 4.00047 29.5594 4.38738 29.9463C4.77429 30.3332 5.23362 30.6402 5.73915 30.8496C6.24467 31.0589 6.78648 31.1667 7.33366 31.1667H16.7253ZM13.167 8.66672V5.33339C13.167 4.67035 12.9036 4.03446 12.4348 3.56562C11.9659 3.09678 11.33 2.83339 10.667 2.83339C10.004 2.83339 9.36807 3.09678 8.89923 3.56562C8.43038 4.03446 8.16699 4.67035 8.16699 5.33339V8.66672H13.167ZM15.667 8.66672H19.8337V5.33339C19.8337 4.81878 19.6749 4.31669 19.379 3.89566C19.0832 3.47463 18.6645 3.15517 18.1803 2.98089C17.6961 2.8066 17.1699 2.78599 16.6736 2.92186C16.1772 3.05773 15.7349 3.34346 15.407 3.74005C15.5753 4.24005 15.667 4.77672 15.667 5.33339V8.66672ZM18.1837 27.8417C18.1837 28.7236 18.534 29.5693 19.1575 30.1929C19.7811 30.8164 20.6268 31.1667 21.5087 31.1667C22.3905 31.1667 23.2362 30.8164 23.8598 30.1929C24.4833 29.5693 24.8337 28.7236 24.8337 27.8417V11.1667H18.1837V27.8417Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h4 className="my-3">45.5k</h4>
                <p>Customer active in our site</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 text-center">
              <div className="border border-black py-4">
                <div className="icon-div bg-black text-light">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 31 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.20572 9.57769L8.5219 9.69983C12.8707 11.3798 18.1083 11.3797 22.457 9.69804L22.7695 9.5772L23.0001 9.82027C24.8981 11.8211 26.4858 14.0948 27.7105 16.5658L27.7115 16.5677C28.9873 19.1703 29.7037 21.8133 29.5867 24.1301L29.5867 24.1301C29.4723 26.3912 28.5716 28.3572 26.5218 29.806L26.5218 29.806C24.4129 31.296 20.9467 32.3336 15.5354 32.3336C10.1198 32.3336 6.63966 31.3141 4.51316 29.8421L4.51293 29.842C2.44943 28.412 1.53763 26.472 1.41014 24.2374L8.20572 9.57769ZM8.20572 9.57769L7.97519 9.82617M8.20572 9.57769L7.97519 9.82617M7.97519 9.82617C6.15729 11.7856 4.46566 14.1897 3.25095 16.6929L3.25091 16.6929M7.97519 9.82617L3.25091 16.6929M3.25091 16.6929C1.98037 19.3123 1.2784 21.9432 1.41013 24.2372L3.25091 16.6929ZM25.3428 3.18136C25.7832 3.39921 26.1642 3.60759 26.4775 3.79428L23.3457 8.3725L23.1141 8.71114L23.401 9.00444C25.3394 10.9861 27.1697 13.5163 28.4805 16.1919C29.7935 18.8721 30.5679 21.6624 30.441 24.1735C30.3151 26.6637 29.3054 28.8863 27.0163 30.5035C24.7051 32.1363 21.0382 33.1881 15.5364 33.1881C10.0332 33.1881 6.35436 32.1551 4.02802 30.5441C1.72448 28.9489 0.699103 26.7543 0.558033 24.2856C0.415712 21.7951 1.17576 19.0153 2.48354 16.3201C3.7889 13.6299 5.62285 11.0598 7.58124 8.99926L7.85891 8.70711L7.63235 8.37375L4.52247 3.79791C4.67984 3.70521 4.8536 3.60746 5.04301 3.50656L5.04302 3.50656L5.04474 3.50564C5.23531 3.40316 5.44085 3.29767 5.66136 3.19013L5.85727 3.09458C8.10344 2.02401 11.6645 0.809448 15.5364 0.809448C19.4384 0.809448 22.9975 2.04283 25.2165 3.12005C25.2165 3.12005 25.2165 3.12005 25.2165 3.12006L25.3412 3.18057C25.3417 3.18083 25.3422 3.1811 25.3428 3.18136ZM21.7245 9.05917L21.8779 9.00466L21.9698 8.87033L24.7117 4.86178L25.2968 4.00635L24.2631 4.08078C21.6696 4.26751 18.6003 4.87479 15.6554 5.7274C13.6714 6.30056 11.4387 6.21929 9.33386 5.83106C8.80462 5.73294 8.27901 5.61613 7.75803 5.48086L6.47261 5.14712L7.21875 6.24574L8.99909 8.86711L9.09097 9.00238L9.24502 9.05723C13.1692 10.4543 17.7996 10.4542 21.7245 9.05917ZM7.08002 3.48035L5.80043 4.02347L7.1328 4.41985C7.88966 4.64501 8.68211 4.84132 9.48767 4.99046L9.48813 4.99055C11.523 5.36535 13.6079 5.42979 15.4168 4.90582L15.4175 4.90561C17.3859 4.33216 19.388 3.88116 21.4122 3.5552L21.4768 2.58279C19.7353 2.05845 17.6905 1.66397 15.5354 1.66397C12.2536 1.66397 9.20629 2.57787 7.08002 3.48035Z"
                      fill="#FAFAFA"
                      stroke="#FAFAFA"
                    />
                  </svg>
                </div>
                <h4 className="my-3">25k</h4>
                <p>Anual gross sale in our site</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*our team */}
      <section>
        <div className="container my-5">
            <div className="row" style={{cursor:"pointer"}}>
                <div className="col-4">
                    <div className="card">
                        <div className="card-image">
                            <img src="/images/tom.png" style={{width:"60%",height:"391px",margin:"auto",display:"block"}}/>
                        </div>
                        <div className="card-body">
                            <h4>Tom Cruise</h4>
                            <p>Founder & Chairman</p>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-instagram mx-3"></i>
                            <i className="fab fa-linkedin-in"></i>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="card-image">
                            <img src="/images/emma.png" style={{width:"90%",height:"391px",margin:"auto",display:"block"}}/>
                        </div>
                        <div className="card-body">
                            <h4>Emma Watson</h4>
                            <p>Managing Director</p>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-instagram mx-3"></i>
                            <i className="fab fa-linkedin-in"></i>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="card-image">
                            <img src="/images/will.png" style={{width:"90%",height:"391px",margin:"auto",display:"block"}}/>
                        </div>
                        <div className="card-body">
                            <h4>Will Smith</h4>
                            <p>Product Designer</p>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-instagram mx-3"></i>
                            <i className="fab fa-linkedin-in"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
      {/* our services */}
      <section>
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 text-center">
              <div className="icon-div bg-black text-light">
                <i className="fas fa-truck"></i>
              </div>
              <h4 className="my-3">FREE AND FAST DELIVERY</h4>
              <p>Free delivery for all orders over $140</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 text-center">
              <div className="icon-div bg-black text-light">
                <i className="fas fa-headphones"></i>
              </div>
              <h4 className="my-3">24/7 CUSTOMER SERVICE</h4>
              <p>Friendly 24/7 customer support</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 text-center">
              <div className="icon-div bg-black text-light">
                <i className="far fa-check-circle"></i>
              </div>
              <h4 className="my-3">MONEY BACK GUARANTEE</h4>
              <p>We reurn money within 30 days</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
