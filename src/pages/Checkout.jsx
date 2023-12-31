/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Checkout = ({ setIsAppOnHomePage, cartItems, paymentSummary }) => {
  const checkoutItems = cartItems;
  const [showPaymentSummary, setShowPaymentSummary] = useState(false);

  const handleShowPaymentSummary = () => {
    setShowPaymentSummary((show) => !show);
  };

  return (
    <>
      <header className="headerNav false headerNavPlix">
        <nav className="plixlife-main-menu" id="header">
          <div className="plixlife-main-menu__lower checkoutpage-main-menu">
            <div className="plixlife-main-menu__lower__desktop-left">
              <NavLink to="/" onClick={() => setIsAppOnHomePage(true)}>
                <svg
                  width="86"
                  height="28"
                  viewBox="0 0 86 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M78.3211 14.9518C77.0257 15.5674 74.8373 16.3091 73.291 16.5519C73.0523 16.5895 72.9507 16.2603 73.1691 16.1557C74.9735 15.2931 78.2286 14.331 82.2752 7.58704L85.5842 1.86209L85.8433 1.39982C86.0241 1.04221 85.7986 0.655124 85.3901 0.654108L75.322 0.634805C75.131 0.634805 74.9542 0.734369 74.8546 0.897939L72.4336 5.50127C72.3066 5.71157 72.0008 5.71157 71.8738 5.50127L69.3359 0.843077C69.2577 0.713034 69.1165 0.633789 68.9641 0.633789L58.7242 0.653092C58.3909 0.653092 58.1837 1.01478 58.3503 1.30331L65.6469 13.4725C65.8024 13.7407 65.7983 14.0729 65.6388 14.3381L58.4732 26.553C58.2548 26.9147 58.5139 27.377 58.9365 27.379L68.895 27.442C69.09 27.443 69.2719 27.3394 69.3694 27.1697L71.8088 22.5583C71.9805 22.1631 72.3625 22.3144 72.458 22.5583L74.8759 27.2266C74.9542 27.3607 75.0974 27.444 75.2529 27.443L85.569 27.378C85.9052 27.376 86.1115 27.0082 85.9367 26.7207L78.9276 15.1316C78.8016 14.9233 78.5395 14.8461 78.3201 14.9497"
                    fill="#FEFFED"
                  ></path>
                  <path
                    d="M42.1587 16.4677C42.0571 16.3844 41.9291 16.3397 41.798 16.3447C36.6999 16.55 32.3313 19.7929 31.0034 21.7497C30.9079 21.8899 30.6895 21.7903 30.7362 21.6278C30.9719 20.8099 31.6953 19.4648 33.0597 18.018C33.5403 17.508 34.1214 17.0488 34.5938 16.6038C34.8041 16.4047 34.925 16.1294 34.925 15.8398V3.7915H34.9098C34.9118 2.98788 34.9139 2.26654 34.9169 1.42025C34.9189 0.94884 34.7096 0.618652 34.2901 0.618652C30.2628 0.618652 28.176 0.629828 24.1487 0.630844C23.7342 0.630844 23.3979 0.967128 23.3969 1.38266C23.3969 9.79483 23.3969 18.2619 23.3969 26.674C23.3969 26.7899 23.404 26.9047 23.3989 27.0205C23.3878 27.2481 23.5686 27.438 23.7962 27.434C24.0319 27.4299 24.2686 27.434 24.5043 27.434C30.6214 27.434 35.6271 27.4309 41.7452 27.4431C42.2115 27.4431 42.3974 27.3415 42.3954 26.8254C42.3792 23.5327 42.3771 20.2399 42.3863 16.9472C42.3863 16.7613 42.304 16.5845 42.1597 16.4667"
                    fill="#FEFFED"
                  ></path>
                  <path
                    d="M11.4753 22.212V20.8495C11.4753 20.7114 11.39 20.5884 11.262 20.5387C9.91681 20.0195 8.74439 19.4668 7.61667 17.7854C7.61363 17.7813 7.61058 17.7763 7.60855 17.7702C7.54353 17.6188 7.63801 17.4887 7.79345 17.5456C7.81784 17.5548 7.84527 17.5649 7.8727 17.5781C8.34004 17.7925 9.00753 18.1511 10.1312 18.5311C11.9183 19.1356 13.8506 19.1986 15.6682 18.6927C15.8998 18.6287 16.61 18.3889 16.7959 18.3127C21.7182 16.3153 23.0288 8.59805 19.9088 4.29748C18.1685 1.89981 15.8399 0.628835 12.9932 0.652202V0.641027L5.25253 0.636963C5.22611 0.636963 5.20071 0.637979 5.17532 0.641027H0.346443C0.155442 0.643059 0 0.798501 0 0.989502V27.1363C0 27.2948 0.128011 27.4228 0.286502 27.4228H4.77401C4.82684 27.4371 4.88983 27.4431 4.96603 27.4431C7.50594 27.434 8.49243 27.435 11.0323 27.4431C11.3595 27.4442 11.4712 27.3355 11.4702 26.9992C11.4631 25.5108 11.4601 23.5998 11.4611 22.212H11.4773H11.4753Z"
                    fill="#FEFFED"
                  ></path>
                  <path
                    d="M57.3542 7.41641C57.3542 11.1389 54.3367 14.1563 50.6143 14.1563C46.8918 14.1563 43.8744 11.1389 43.8744 7.41641C43.8744 3.69392 46.8918 0.676514 50.6143 0.676514C54.3367 0.676514 57.3542 3.69392 57.3542 7.41641Z"
                    fill="#FEFFED"
                  ></path>
                  <path
                    d="M56.9187 15.4466V13.7438C56.9187 13.5102 56.6343 13.4055 56.4859 13.5843C55.0697 15.2891 52.9565 16.0856 50.5964 16.0856C48.2363 16.0856 46.1546 15.3054 44.7384 13.6219C44.59 13.4452 44.3066 13.5498 44.3066 13.7835C44.3066 20.6514 44.3066 19.0919 44.3066 26.7136C44.3066 27.4299 44.3066 27.4329 45.0086 27.4329C48.7809 27.4339 52.5531 27.4248 56.3254 27.4451C56.805 27.4472 56.9137 27.2765 56.9127 26.8254C56.9015 23.1496 56.9005 19.1224 56.9096 15.4476H56.9177L56.9187 15.4466Z"
                    fill="#FEFFED"
                  ></path>
                </svg>
              </NavLink>
            </div>
          </div>
        </nav>
      </header>

      <div>
        <div>
          <div className="CheckoutV3_badgeSectionWrapper__N56HP">
            <div className="CheckoutV3_testimonyStrip__9BObC">
              <div>
                <span>“Tastiest nutrition company in the world.”</span>
                <span className="CheckoutV3_testimonyName__bJUAX">
                  - Akhil Kumar, 23
                </span>
                <span className="CheckoutV3_testimonyRating__qO9YO">
                  <span>5</span>
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.24612 10.9822L4.19189 12.8221C4.05696 12.908 3.9159 12.9447 3.76871 12.9325C3.62152 12.9202 3.49273 12.8712 3.38233 12.7853C3.27194 12.6994 3.18608 12.5922 3.12475 12.4637C3.06342 12.3346 3.05115 12.1904 3.08795 12.0309L3.89751 8.55352L1.19285 6.21685C1.07019 6.10645 0.993653 5.9806 0.963233 5.8393C0.932323 5.69849 0.941399 5.56062 0.990463 5.42569C1.03953 5.29076 1.11312 5.18037 1.21125 5.09451C1.30938 5.00865 1.44431 4.95345 1.61603 4.92892L5.18544 4.61613L6.56536 1.34111C6.62669 1.19392 6.72188 1.08353 6.85091 1.00993C6.97946 0.936334 7.1112 0.899536 7.24612 0.899536C7.38105 0.899536 7.51303 0.936334 7.64207 1.00993C7.77062 1.08353 7.86556 1.19392 7.92689 1.34111L9.30681 4.61613L12.8762 4.92892C13.0479 4.95345 13.1829 5.00865 13.281 5.09451C13.3791 5.18037 13.4527 5.29076 13.5018 5.42569C13.5508 5.56062 13.5602 5.69849 13.5298 5.8393C13.4988 5.9806 13.4221 6.10645 13.2994 6.21685L10.5947 8.55352L11.4043 12.0309C11.4411 12.1904 11.4288 12.3346 11.3675 12.4637C11.3062 12.5922 11.2203 12.6994 11.1099 12.7853C10.9995 12.8712 10.8707 12.9202 10.7235 12.9325C10.5763 12.9447 10.4353 12.908 10.3004 12.8221L7.24612 10.9822Z"
                      fill="#EED600"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
            <div className="CheckoutV3_badgeList__vQioE">
              <div className="CheckoutV3_badge__U7QkI">
                <img
                  sizes="(min-width: 992px) 30vw,(min-width: 720px) 80vw, (min-width: 540px) 50vw, 50vw"
                  src="https://images.plixlife.com/hosted/strhsrgs-01-9c5f033e1af8.svg?auto=format&amp;sharp=20&amp;ixlib=react-9.3.0"
                />
                <span>10 Lakh+ Happy Plix Customers</span>
              </div>
              <div className="CheckoutV3_badge__U7QkI">
                <img
                  sizes="(min-width: 992px) 30vw,(min-width: 720px) 80vw, (min-width: 540px) 50vw, 50vw"
                  src="https://images.plixlife.com/hosted/30_Day_Return_Policy-13bf523ffd34.svg?auto=format&amp;sharp=20&amp;ixlib=react-9.3.0"
                />
                <span>30 Day Return Policy</span>
              </div>
              <div className="CheckoutV3_badge__U7QkI">
                <img
                  sizes="(min-width: 992px) 30vw,(min-width: 720px) 80vw, (min-width: 540px) 50vw, 50vw"
                  src="https://images.plixlife.com/hosted/3_Day_Delivery-c48089f7ab5f.svg?auto=format&amp;sharp=20&amp;ixlib=react-9.3.0"
                />
                <span>3 Day Delivery</span>
              </div>
            </div>
          </div>
          <div className="CheckoutV3_container__beJqL">
            <div className="CheckoutV3_mainWrapper__Cgm1_">
              <div className="CheckoutV3_checkoutLoginContainer__AO3MB">
                <div className="CheckoutV3_checkoutLoginContainerText__LcIvY">
                  <div className="CheckoutV3_userIconDiv__XU9JI">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 26 24"
                      fill="none"
                    >
                      <path
                        d="M13.432 23.797l1.085-1.03c.27-.272.27-.706 0-.923l-8.407-8.46h18.549a.66.66 0 00.65-.652v-1.518c0-.326-.325-.651-.65-.651H6.109l8.408-8.407c.27-.217.27-.65 0-.922L13.431.204c-.217-.272-.651-.272-.922 0L1.174 11.538a.624.624 0 000 .922L12.51 23.797c.27.27.705.27.922 0z"
                        fill="#BEBEBE"
                      ></path>
                    </svg>
                  </div>
                  <div className="CheckoutV3_contact_info__7FcS6">
                    Contact Information
                  </div>
                </div>
                <div className="CheckoutV3_checkoutLoginContainerRightSection__hyQ5I">
                  <div className="CheckoutV3_member__bt1hm">
                    Already a member?
                  </div>
                  <div className="Input_inputContainer2__HvuL0 CheckoutV3_loginButton__1IrSC">
                    <input
                      type="button"
                      className="CheckoutV3_loginButton__input__6eHlM"
                      value="Login Now"
                      style={{ borderStyle: "none" }}
                    />
                  </div>
                </div>
              </div>
              <div className="sc-dtAKIF irbPPu">
                <form
                  id="checkoutAddressForm"
                  className="CheckoutV3_form__xfEIz"
                >
                  <div className="CheckoutV3_formFieldsContainer__oslV0">
                    <div>
                      <div className="CheckoutV3_row__B8iYl">
                        <div className="CheckoutV3_countryCodePrefix__6ToNO">
                          <div className="Input_inputContainer1___hB1t CheckoutV3_inputContainer__0O6BR">
                            <input
                              type="text"
                              name="Country code"
                              disabled=""
                              placeholder="+91"
                              className="Input_inputContainer1__input__nFgYI CheckoutV3_inputContainer__input__z4kqU"
                            />
                          </div>
                        </div>
                        <div className="CheckoutV3_inputErroDiv__Mnt0N">
                          <div className="Input_inputContainer1___hB1t CheckoutV3_inputContainer__0O6BR">
                            <input
                              type="tel"
                              name="phone"
                              placeholder="Phone (Active On Whatsapp)*"
                              autoComplete="tel"
                              inputMode="numeric"
                              className="Input_inputContainer1__input__nFgYI CheckoutV3_inputContainer__input__z4kqU"
                              value=""
                            />
                            <span className="undefined undefined">
                              <svg
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.03513 16.2861L2.45902 15.7283C2.22482 15.6818 2.03747 15.5616 1.89696 15.3676C1.75644 15.1743 1.7018 14.9614 1.73302 14.729L1.99063 12.1029L0.234192 10.1042C0.078064 9.93381 0 9.7324 0 9.5C0 9.2676 0.078064 9.06619 0.234192 8.89576L1.99063 6.89712L1.73302 4.271C1.7018 4.0386 1.75644 3.82572 1.89696 3.63236C2.03747 3.43839 2.22482 3.31816 2.45902 3.27168L5.03513 2.71392L6.39344 0.436396C6.51835 0.234982 6.69009 0.103289 6.90867 0.0413156C7.12724 -0.0206578 7.34582 -0.0129111 7.5644 0.0645556L10 1.08712L12.4356 0.0645556C12.6542 -0.0129111 12.8728 -0.0206578 13.0913 0.0413156C13.3099 0.103289 13.4817 0.234982 13.6066 0.436396L14.9649 2.71392L17.541 3.27168C17.7752 3.31816 17.9625 3.43839 18.103 3.63236C18.2436 3.82572 18.2982 4.0386 18.267 4.271L18.0094 6.89712L19.7658 8.89576C19.9219 9.06619 20 9.2676 20 9.5C20 9.7324 19.9219 9.93381 19.7658 10.1042L18.0094 12.1029L18.267 14.729C18.2982 14.9614 18.2436 15.1743 18.103 15.3676C17.9625 15.5616 17.7752 15.6818 17.541 15.7283L14.9649 16.2861L13.6066 18.5636C13.4817 18.765 13.3099 18.8967 13.0913 18.9587C12.8728 19.0207 12.6542 19.0129 12.4356 18.9354L10 17.9129L7.5644 18.9354C7.34582 19.0129 7.12724 19.0207 6.90867 18.9587C6.69009 18.8967 6.51835 18.765 6.39344 18.5636L5.03513 16.2861ZM8.36066 12.1494C8.5324 12.3198 8.75098 12.405 9.01639 12.405C9.28181 12.405 9.50039 12.3198 9.67213 12.1494L13.6534 8.19856C13.8408 8.01264 13.9344 7.7917 13.9344 7.53575C13.9344 7.28042 13.8408 7.0598 13.6534 6.87388C13.466 6.68796 13.2437 6.595 12.9864 6.595C12.7285 6.595 12.5059 6.68796 12.3185 6.87388L9.01639 10.1507L7.65808 8.82604C7.47073 8.65561 7.2484 8.57412 6.9911 8.58156C6.73318 8.58961 6.51835 8.67885 6.34661 8.84928C6.17486 9.01971 6.08899 9.23661 6.08899 9.5C6.08899 9.76339 6.17486 9.98029 6.34661 10.1507L8.36066 12.1494Z"
                                  fill="#A5A5A5"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="CheckoutV3_inputSubtext__zuvuN">
                        Note: Phone number is needed to contact you for
                        shipping- related questions.
                      </div>
                    </div>
                    <div className="CheckoutV3_showHrdesktop__hs_Vr">
                      <hr className="CheckoutV3_hr__lAMl4 " />
                    </div>
                    <div className="CheckoutV3_showHrmobile__nPqgV">
                      <hr className="CheckoutV3_hr__lAMl4 CheckoutV3_customclassName__3OjIs" />
                    </div>
                    <div className="CheckoutV3_bigBoldText__IgUOJ">
                      {" "}
                      Shipping Address{" "}
                    </div>
                    <div className="CheckoutV3_rowWrapper__0IOBe">
                      <div className="CheckoutV3_row__B8iYl">
                        <div className="CheckoutV3_inputErroDiv__Mnt0N">
                          <div className="Input_inputContainer1___hB1t CheckoutV3_inputContainer__0O6BR">
                            <input
                              type="text"
                              name="firstName"
                              placeholder="First Name *"
                              autoComplete="first-name"
                              inputMode="text"
                              className="Input_inputContainer1__input__nFgYI CheckoutV3_inputContainer__input__z4kqU"
                              value=""
                            />
                          </div>
                        </div>
                        <div className="CheckoutV3_inputErroDiv__Mnt0N">
                          <div className="Input_inputContainer1___hB1t CheckoutV3_inputContainer__0O6BR">
                            <input
                              type="text"
                              name="lastName"
                              placeholder="Last Name *"
                              autoComplete="family-name"
                              inputMode="text"
                              className="Input_inputContainer1__input__nFgYI CheckoutV3_inputContainer__input__z4kqU"
                              value=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="CheckoutV3_rowWrapper__0IOBe">
                      <div className="CheckoutV3_row__B8iYl">
                        <div className="CheckoutV3_inputErroDiv__Mnt0N">
                          <div className="Input_inputContainer1___hB1t CheckoutV3_inputContainer__0O6BR">
                            <input
                              type="email"
                              name="email"
                              placeholder="Email *"
                              autoComplete="email"
                              inputMode="text"
                              className="Input_inputContainer1__input__nFgYI CheckoutV3_inputContainer__input__z4kqU"
                              value=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="CheckoutV3_rowWrapper__0IOBe">
                      <div className="CheckoutV3_row__B8iYl">
                        <div className="CheckoutV3_inputErroDiv__Mnt0N">
                          <div className="Input_inputContainer1___hB1t CheckoutV3_inputContainer__0O6BR">
                            <input
                              type="tel"
                              name="postalCode"
                              placeholder="Pin Code *"
                              autoComplete="postal-code"
                              inputMode="tel"
                              className="Input_inputContainer1__input__nFgYI CheckoutV3_inputContainer__input__z4kqU"
                              value=""
                            />
                          </div>
                        </div>
                        <div className="CheckoutV3_inputErroDiv__Mnt0N">
                          <div className="Input_inputContainer1___hB1t CheckoutV3_inputContainer__0O6BR">
                            <input
                              type="text"
                              name="city"
                              placeholder="City *"
                              autoComplete="address-line2"
                              inputMode="text"
                              className="Input_inputContainer1__input__nFgYI CheckoutV3_inputContainer__input__z4kqU"
                              value=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="CheckoutV3_rowWrapper__0IOBe">
                      <div className="CheckoutV3_row__B8iYl">
                        <div className="CheckoutV3_inputErroDiv__Mnt0N">
                          <div className="Select_selectContainer1__O520Q CheckoutV3_selectContainer__evrei">
                            <select
                              name="countryArea"
                              placeholder="State *"
                              autoComplete="state"
                              inputMode="text"
                              className="Select_selectContainer1__select__MYDmO CheckoutV3_selectContainer__select__JgLNq"
                            >
                              <option value="" className="undefined undefined">
                                State
                              </option>
                              <option
                                value="Andhra Pradesh"
                                className="undefined undefined"
                              >
                                Andhra Pradesh
                              </option>
                              <option
                                value="Arunachal Pradesh"
                                className="undefined undefined"
                              >
                                Arunachal Pradesh
                              </option>
                              <option
                                value="Assam"
                                className="undefined undefined"
                              >
                                Assam
                              </option>
                              <option
                                value="Bihar"
                                className="undefined undefined"
                              >
                                Bihar
                              </option>
                              <option
                                value="Chhattisgarh"
                                className="undefined undefined"
                              >
                                Chhattisgarh
                              </option>
                              <option
                                value="Goa"
                                className="undefined undefined"
                              >
                                Goa
                              </option>
                              <option
                                value="Gujarat"
                                className="undefined undefined"
                              >
                                Gujarat
                              </option>
                              <option
                                value="Haryana"
                                className="undefined undefined"
                              >
                                Haryana
                              </option>
                              <option
                                value="Himachal Pradesh"
                                className="undefined undefined"
                              >
                                Himachal Pradesh
                              </option>
                              <option
                                value="Jharkhand"
                                className="undefined undefined"
                              >
                                Jharkhand
                              </option>
                              <option
                                value="Karnataka"
                                className="undefined undefined"
                              >
                                Karnataka
                              </option>
                              <option
                                value="Kerala"
                                className="undefined undefined"
                              >
                                Kerala
                              </option>
                              <option
                                value="Madhya Pradesh"
                                className="undefined undefined"
                              >
                                Madhya Pradesh
                              </option>
                              <option
                                value="Maharashtra"
                                className="undefined undefined"
                              >
                                Maharashtra
                              </option>
                              <option
                                value="Manipur"
                                className="undefined undefined"
                              >
                                Manipur
                              </option>
                              <option
                                value="Meghalaya"
                                className="undefined undefined"
                              >
                                Meghalaya
                              </option>
                              <option
                                value="Mizoram"
                                className="undefined undefined"
                              >
                                Mizoram
                              </option>
                              <option
                                value="Nagaland"
                                className="undefined undefined"
                              >
                                Nagaland
                              </option>
                              <option
                                value="Odisha"
                                className="undefined undefined"
                              >
                                Odisha
                              </option>
                              <option
                                value="Punjab"
                                className="undefined undefined"
                              >
                                Punjab
                              </option>
                              <option
                                value="Rajasthan"
                                className="undefined undefined"
                              >
                                Rajasthan
                              </option>
                              <option
                                value="Sikkim"
                                className="undefined undefined"
                              >
                                Sikkim
                              </option>
                              <option
                                value="Tamil Nadu"
                                className="undefined undefined"
                              >
                                Tamil Nadu
                              </option>
                              <option
                                value="Telangana"
                                className="undefined undefined"
                              >
                                Telangana
                              </option>
                              <option
                                value="Tripura"
                                className="undefined undefined"
                              >
                                Tripura
                              </option>
                              <option
                                value="Uttar Pradesh"
                                className="undefined undefined"
                              >
                                Uttar Pradesh
                              </option>
                              <option
                                value="Uttarakhand"
                                className="undefined undefined"
                              >
                                Uttarakhand
                              </option>
                              <option
                                value="West Bengal"
                                className="undefined undefined"
                              >
                                West Bengal
                              </option>
                              <option
                                value="Andaman Nicobar"
                                className="undefined undefined"
                              >
                                Andaman Nicobar
                              </option>
                              <option
                                value="Daman Diu"
                                className="undefined undefined"
                              >
                                Daman Diu
                              </option>
                              <option
                                value="Delhi"
                                className="undefined undefined"
                              >
                                Delhi
                              </option>
                              <option
                                value="Jammu &amp; Kashmir"
                                className="undefined undefined"
                              >
                                Jammu &amp; Kashmir
                              </option>
                              <option
                                value="Ladakh"
                                className="undefined undefined"
                              >
                                Ladakh
                              </option>
                              <option
                                value="Lakshadweep"
                                className="undefined undefined"
                              >
                                Lakshadweep
                              </option>
                              <option
                                value="Puducherry"
                                className="undefined undefined"
                              >
                                Puducherry
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="CheckoutV3_rowWrapper__0IOBe">
                      <div className="CheckoutV3_row__B8iYl">
                        <div className="CheckoutV3_inputErroDiv__Mnt0N">
                          <div className="Input_inputContainer1___hB1t CheckoutV3_inputContainer__0O6BR">
                            <input
                              type="text"
                              name="streetAddress1"
                              maxLength="50"
                              placeholder="Eg: 401, Roman Plaza Building, Sector 5, Jambli Gali"
                              autoComplete="address-line1"
                              inputMode="text"
                              className="Input_inputContainer1__input__nFgYI CheckoutV3_inputContainer__input__z4kqU"
                              value=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="CheckoutV3_rowWrapper__0IOBe">
                      <div className="CheckoutV3_row__B8iYl">
                        <div className="CheckoutV3_inputErroDiv__Mnt0N">
                          <div className="Input_inputContainer1___hB1t CheckoutV3_inputContainer__0O6BR">
                            <input
                              type="text"
                              name="streetAddress2"
                              placeholder="Near Ganesh Talkies, Santacruz east"
                              autoComplete="address-line2"
                              inputMode="text"
                              className="Input_inputContainer1__input__nFgYI CheckoutV3_inputContainer__input__z4kqU"
                              value=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="CheckoutV3_form__xfEIz">
                  <div className="CheckoutV3_radioContainer__T53jZ sc-eUNjYF kSGclF">
                    <div className="CheckoutV3_bigBoldText__IgUOJ">
                      {" "}
                      Payment Method
                    </div>
                    <div className="CheckoutV3_rowRadioButton__EKoZk">
                      <div className="CheckoutV3_inputErroDiv__Mnt0N">
                        <div className="Input_inputContainer1___hB1t CheckoutV3_radioInputContainer__vHfPX">
                          <label
                            htmlFor="online"
                            className="Input_inputContainer1__label__hW59A CheckoutV3_radioInputContainer__label__A2NBQ"
                          >
                            <div className="CheckoutV3_radioLabelContainer__jEJdl">
                              <div>
                                <p>
                                  Razorpay (Cards, UPI, NetBanking, Wallets){" "}
                                </p>
                                <img src="https://plixlifefc-media.farziengineer.co/hosted/Group_34324-24a8b1c90798.png" />
                              </div>
                              <div className="CheckoutV3_radioLabelContainerSecondary__T73Aw">
                                <div className="CheckoutV3_boldBlackText__CuTMh">
                                  Applied: Extra 5% cashback with your order
                                </div>
                              </div>
                            </div>
                          </label>
                          <input
                            type="radio"
                            name="paymentMethod"
                            className="Input_inputContainer1__input__nFgYI CheckoutV3_radioInputContainer__input__jgxCA"
                            value="mirumee.payments.razorpay"
                            checked=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="CheckoutV3_rowRadioButton__EKoZk">
                      <div className="CheckoutV3_inputErroDiv__Mnt0N">
                        <div className="Input_inputContainer1___hB1t CheckoutV3_radioInputContainer__vHfPX">
                          <label
                            htmlFor="cod"
                            className="Input_inputContainer1__label__hW59A CheckoutV3_radioInputContainer__label__A2NBQ"
                          >
                            <div className="CheckoutV3_radioLabelContainer__jEJdl">
                              <div>
                                <p>Cash On Delivery </p>
                              </div>
                            </div>
                          </label>
                          <input
                            type="radio"
                            name="paymentMethod"
                            className="Input_inputContainer1__input__nFgYI CheckoutV3_radioInputContainer__input__jgxCA"
                            value="mirumee.payments.dummy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="CheckoutV3_stickyButtonContainer__qzbUg">
                    <div className="Input_inputContainer2__HvuL0 CheckoutV3_placeOrderButton__v8s29">
                      <input
                        type="submit"
                        form="checkoutAddressForm"
                        className="Input_inputContainer2__input__bAkR6 CheckoutV3_placeOrderButton__input__F_KTt"
                        value="Place Order"
                      />
                    </div>
                  </div>
                  <div className="CheckoutV3_userNotificationCheckboxContainer__Fw_uu">
                    <div className="CheckoutV3_row__B8iYl">
                      <div className="CheckoutV3_inputErroDiv__Mnt0N">
                        <div className="Input_inputContainer1___hB1t CheckoutV3_userNotificationInputContainer-checked__RauZh">
                          <label
                            htmlFor="userNotification"
                            className="Input_inputContainer1__label__hW59A undefined"
                          >
                            <div className="CheckoutV3_userNotificationCheckboxLabel__x_is7">
                              <div>
                                {" "}
                                Notify me for orders, updates and offers.{" "}
                              </div>
                            </div>
                          </label>
                          <input
                            type="checkbox"
                            name="useCashback"
                            placeholder=""
                            autoComplete=""
                            inputMode="none"
                            className="Input_inputContainer1__input__nFgYI undefined"
                            value="userNotification"
                            checked=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="CheckoutV3_desktopSummaryWrapper__IcNdl">
              <div className="CheckoutV3_desktopOrderSummary__HSty2 sc-glYwue jZFKxG">
                <div className="CheckoutV3_orderSummaryContainer__zDX9T">
                  <div className="CheckoutV3_orderSummaryHeader__sF_Zm">
                    <div className="CheckoutV3_orderSummary__2IAQr">
                      Order Summary
                    </div>
                  </div>
                  <div className="CheckoutV3_showHrdesktop__hs_Vr">
                    <hr className="CheckoutV3_hr__lAMl4 " />
                  </div>
                  <div className="CheckoutV3_showHrmobile__nPqgV"></div>
                  {checkoutItems.map((item) => (
                    <div key={item.id}>
                      <div className="CheckoutV3_ordersummerydesktop__vNT67">
                        <div className="CheckoutV3_orderSummaryProductList__jpYpI">
                          <div className="CheckoutV3_orderSummaryProduct__LtteP">
                            <div className="CheckoutV3_orderSummaryProductImage__aUr53">
                              <span>
                                <img
                                  alt="Product Image"
                                  src={item.image}
                                  decoding="async"
                                  data-nimg="intrinsic"
                                />
                              </span>
                            </div>
                            <div className="CheckoutV3_orderSummaryProductContent__O4ZTv">
                              <div className="CheckoutV3_orderSummaryProductContentName__gS9yY">
                                {item.name}
                              </div>
                              <div className="CheckoutV3_orderSummaryProductContentPriceContainer__03Dtf">
                                <div className="CheckoutV3_undiscounted__2FNIK">
                                  <span>₹{item.originalPrice}</span>
                                </div>
                                <div className="CheckoutV3_discounted__HoflW">
                                  <span>₹{item.specialPrice}</span>
                                </div>
                                <div className="CheckoutV3_discount__iiyld">
                                  ₹{item.itemDiscount}
                                </div>
                              </div>
                              <div className="CheckoutV3_quantity__KoSHV">
                                {" "}
                                Quantity: {item.orderedQuantity}
                              </div>
                            </div>
                            <div className="CheckoutV3_discounted__HoflW">
                              <span>₹{item.specialPrice}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="CheckoutV3_paymentSummaryContainerWrapper__vv7SQ">
                  <div className="CheckoutV3_paymentSummaryContainer__F7y09">
                    <div className="CheckoutV3_paymentSummaryHeader__oXXKi">
                      <div className="CheckoutV3_paymentSummaryHeaderText__VWFFn">
                        Payment Summary{" "}
                      </div>
                      <div onClick={handleShowPaymentSummary}>
                        <div className="CheckoutV3_showMoreContainer__TWOur">
                          <span className="CheckoutV3_showMoreContainerText__sZXDq">
                            Show More
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="none"
                            viewBox="0 0 12 12"
                          >
                            <path
                              fill="#5DD37C"
                              d="M11.813 5.75c0 .492-.41.902-.876.902H7v3.938c0 .465-.41.848-.875.848a.858.858 0 01-.875-.848V6.652H1.312c-.492 0-.875-.41-.875-.902 0-.465.383-.848.875-.848H5.25V.965c0-.492.383-.902.875-.902.465 0 .875.41.875.902v3.937h3.938c.464-.027.874.383.874.848z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>

                    {showPaymentSummary && (
                      <>
                        <div className="CheckoutV3_paymentSummaryContainer__F7y09">
                          <div className="CheckoutV3_row__B8iYl">
                            <div className="CheckoutV3_paymentSummaryRow__Nx2hL">
                              MRP
                              <span>
                                <span> ₹ {paymentSummary.mrp}</span>
                              </span>
                            </div>
                          </div>
                          <div className="CheckoutV3_row__B8iYl">
                            <div className="CheckoutV3_paymentSummaryRow__Nx2hL">
                              Item Discount
                              <span>
                                {" "}
                                - <span> ₹ {paymentSummary.discount}</span>
                              </span>
                            </div>
                          </div>
                          <div className="CheckoutV3_row__B8iYl">
                            <div className="CheckoutV3_paymentSummaryRow__Nx2hL">
                              Net Price
                              <span>
                                <span> ₹ {paymentSummary.sPrice}</span>
                              </span>
                            </div>
                          </div>
                          <div className="CheckoutV3_row__B8iYl">
                            <div className="CheckoutV3_paymentSummaryRow__Nx2hL">
                              Sub Total
                              <span>
                                <span> ₹ {paymentSummary.sPrice}</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    <div>
                      <div className="CheckoutV3_paymentSummaryRowBold__uferc">
                        Grand Total <span>₹{paymentSummary.sPrice}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="CheckoutV3_cashbackWrapper__FJTyn">
                <div className="CheckoutV3_cashBackStripContainer__a7wGB ">
                  <div className="CheckoutV3_cashBackStrip__EXwpo">
                    You will get ₹ 84 Cashback with this order.
                  </div>
                </div>
              </div>
              <div className="CheckoutV3_checkoutReviewCardWrapper__UPJmi">
                <div className="sc-bFNFop kHgARu">
                  <div className="review-card-footer">
                    <img
                      sizes="(min-width: 992px) 30vw,(min-width: 720px) 80vw, (min-width: 540px) 50vw, 50vw"
                      src="https://images.plixlife.com/hosted/WhatsApp_Image_2022-09-02_at_6.43_1-45ac6f38febc.png?auto=format&amp;sharp=20&amp;ixlib=react-9.3.0"
                    />
                    <div className="customer_review">
                      <span
                        className="MuiRating-root MuiRating-sizeSmall MuiRating-readOnly"
                        role="img"
                        aria-label="5 Stars"
                      >
                        <span className="MuiRating-decimal">
                          <span>
                            <span className="MuiRating-icon MuiRating-iconFilled jss21">
                              <svg
                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit"
                                focusable="false"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                              </svg>
                            </span>
                          </span>
                        </span>
                        <span className="MuiRating-decimal">
                          <span>
                            <span className="MuiRating-icon MuiRating-iconFilled jss21">
                              <svg
                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit"
                                focusable="false"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                              </svg>
                            </span>
                          </span>
                        </span>
                        <span className="MuiRating-decimal">
                          <span>
                            <span className="MuiRating-icon MuiRating-iconFilled jss21">
                              <svg
                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit"
                                focusable="false"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                              </svg>
                            </span>
                          </span>
                        </span>
                        <span className="MuiRating-decimal">
                          <span>
                            <span className="MuiRating-icon MuiRating-iconFilled jss21">
                              <svg
                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit"
                                focusable="false"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                              </svg>
                            </span>
                          </span>
                        </span>
                        <span className="MuiRating-decimal">
                          <span>
                            <span className="MuiRating-icon MuiRating-iconFilled jss21">
                              <svg
                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit"
                                focusable="false"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                              </svg>
                            </span>
                          </span>
                        </span>
                      </span>
                      <p>Most Truthworthy Nutrition Company</p>
                      <div className="review-verify-tag-checkout">
                        <h4>Saloni Jain</h4>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 9.99794L17.7359 7.48421L18.0904 4.11897L14.7797 3.41807L13.0909 0.484375L10 1.86575L6.9091 0.484375L5.22032 3.41807L1.90964 4.11897L2.26409 7.48421L0 9.99794L2.26405 12.5117L1.9096 15.8769L5.22028 16.5778L6.90906 19.5115L9.99998 18.1301L13.0909 19.5115L14.7797 16.5778L18.0904 15.8769L17.7359 12.5117L20 9.99794ZM14.1922 7.80835L9.17264 13.4321L5.68456 9.94401L6.5142 9.11436L9.12419 11.7243L13.3169 7.02705L14.1922 7.80835Z"
                            fill="#5DD37C"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="review_content">
                    I love how Plix makes nutrition fun and tasty! I have been
                    using a range of products for weight and beauty from Plix
                    and the results are amazing! There are 0 side effects and I
                    love how the ingredients are all plant-based!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
