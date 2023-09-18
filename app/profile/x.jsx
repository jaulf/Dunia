import React from "react";

function x() {
  return (
    <div className="px-10 flex flex-col undersummary">

      <div id="payment-methods" className="">
        <div id="pm-one" className="flex flex-col gap-2">
          <h2>Payment method</h2>
          <p className="text-[#808080] max-w-[520px] text-xl leading-8 tracking-[-0.4px]">
            Complete your purchase by providing your payment details in order
          </p>
        </div>

        <div id="pm-two" className="flex flex-col gap-[30px] pt-[34px]">
          <div>
            <h2>Full name</h2>
            <div>
              <div>
                <Image
                  className="w-6 h-6"
                  width={24}
                  height={24}
                  src={email}
                  alt="mail"
                />
              </div>
              <input type="text" placeholder="Full name" />
            </div>
          </div>
          <div>
            <h2>Email address</h2>
            <div>
              <div>
                <Image
                  className="w-6 h-6"
                  width={24}
                  height={24}
                  src={email}
                  alt="mail"
                />
              </div>
              <input type="email" placeholder="name@address.com" />
            </div>
          </div>
          <div>
            <h2>Billing address</h2>
            <div className="address">
              <div>
                <input
                  type="text"
                  placeholder="Please select a state, region or province"
                />
              </div>
              <div className="address-sub">
                <div>
                  <input type="text" placeholder="Please select a city" />
                </div>
                <div>
                  <input type="text" placeholder="Enter address" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2>Card number</h2>
            <aside className="pr-[40px] border-[2px] rounded-full inline-flex items-center pl-[13px] max-w-[610px]">
              <div className="gap-[10px] inline-flex items-center">
                <span class="em-bg shrink-0">
                  <Image
                    className="w-6 h-6"
                    width={24}
                    height={24}
                    src={card}
                    alt="Credit Card"
                  />
                </span>
                <input type="text" placeholder="Full name" />
              </div>
              <div className="gap-[30px] inline-flex items-center">
                <div className="w-auto inline flex-col py-[21px] px-[30px] border-l-[2px] border-r-[2px] border-[#F2F2F2]">
                  <input
                    class="w-auto inline max-w-[70px]"
                    type="text"
                    placeholder="MM/YY"
                  />
                </div>
                <div className="pl-[30px] w-auto inline max-w-[48px]">
                  <input
                    className="w-auto inline max-w-[48px]"
                    type="text"
                    placeholder="CVV"
                  />
                </div>
              </div>
            </aside>
          </div>
        </div>

        <div id="pm-total" className="flex flex-col gap-10 pt-10 pb-[60px]">
          <div className="flex flex-col gap-5 zuti-t">
            <div>
              <p>Subtotal</p>
              <p>$----</p>
            </div>
            <div>
              <p>VAT(10%)</p>
              <p>$----</p>
            </div>
            <div class="zuti-final-t">
              <p>Total</p>
              <p>$----</p>
            </div>
          </div>
          <button class="total-cta">Buy now</button>
        </div>
      </div>
    </div>
  );
}

export default x;
