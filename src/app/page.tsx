import React from "react";
import Image from "next/image";
import { SERVICES } from "@/lib/constant";
import paytmWallet from "@/public/brand/wallet.png";
import paytmUPI from "@/public/brand/upi-transfer.png";
import brandSqLogo from "@/public/brand/sq-logo.png";
import appPreview from "@/public/assets/app-preview.png";
import paymentIntrument from "@/public/assets/features/payment-instrument.webp";
import upiTransferPaid from "@/public/assets/features/upi-transfer-hero-paid.png";

export default async function Home() {
  return (
    <>
      {/* HERO */}
      <section className=" bg-white">
        <div className="mx-auto max-w-screen-xl pb-[120px] pt-32">
          <div className="w-full max-w-[650px] space-y-12">
            <div className="size-20">
              <Image
                height={200}
                width={200}
                src={brandSqLogo}
                alt=""
                className="shadow-xl shadow-slate-300/50"
              />
            </div>
            <div className="space-y-3">
              <h1 className="text-[54px] font-bold leading-[65px]">
                India&apos;s Most-loved Payments App
              </h1>
              <p className="max-w-[475px] text-xl font-medium">
                Recharge &amp; pay bills, book flights &amp; movie tickets, open
                a savings account, invest in stocks &amp; mutual funds, and do a
                lot more.
              </p>
            </div>
          </div>
          <Image
            src={appPreview}
            alt="BannerImage"
            className="absolute right-0 top-[250px] w-full max-w-[528px]"
            height={900}
            width={680}
          />
          <button className="group mt-10 flex h-11 w-max items-center gap-x-[10px] rounded-full border border-black bg-black px-6 text-[15px] font-semibold leading-none text-white transition-all duration-200 hover:border-2 hover:bg-white hover:text-black">
            Download Paytm App
            <a
              href="https://itunes.apple.com/in/app/mobile-recharge-bill-payments/id473941634?mt=8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block size-4"
            >
              <svg
                width={14}
                height={16}
                viewBox="0 0 14 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="fill-white group-hover:fill-black"
              >
                <path d="M11.6593 15.3557C10.7589 16.1979 9.76546 16.0666 8.81854 15.6695C7.81182 15.2644 6.89149 15.2388 5.82828 15.6695C4.50426 16.2203 3.80155 16.0602 3.00415 15.3557C-1.49786 10.8883 -0.833353 4.08311 4.28331 3.82691C5.52427 3.89096 6.39311 4.48821 7.12406 4.53785C8.21052 4.32489 9.25047 3.71483 10.4133 3.79489C11.8105 3.90377 12.8554 4.43538 13.5531 5.3913C10.6791 7.05657 11.3603 10.7073 14 11.7321C13.4717 13.0691 12.7939 14.3902 11.6576 15.3669L11.6593 15.3557ZM7.02439 3.77888C6.88982 1.79336 8.55939 0.160122 10.4798 0C10.7439 2.28974 8.32017 4.00305 7.02439 3.77888Z" />
              </svg>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=net.one97.paytm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block size-4"
            >
              <svg
                width={14}
                height={16}
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-white group-hover:fill-black"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.088012 0.571735C0.0310801 0.726729 0 0.910797 0 1.121V14.8786C0 15.0894 0.0311427 15.2736 0.0881839 15.4286L7.32808 7.9997L0.088012 0.571735ZM0.590122 15.9564C0.85223 16.0466 1.18264 15.9995 1.54068 15.7912L10.0736 10.8165L7.83627 8.52109L0.590122 15.9564ZM10.7221 10.4391L13.3647 8.8987C14.2118 8.40415 14.2118 7.59609 13.3647 7.10217L10.7211 5.561L8.34443 7.99966L10.7221 10.4391ZM10.073 5.18317L1.54068 0.209061C1.18252 0.000250885 0.852017 -0.0466058 0.589868 0.0438429L7.83624 7.47828L10.073 5.18317Z"
                />
              </svg>
            </a>
          </button>
        </div>
      </section>
      {/* Recharge Services */}
      <section className="bg-brand-primary text-white">
        <div className="mx-auto max-w-screen-xl space-y-6 py-[65px]">
          <h1 className="text-4xl font-bold">
            Recharge &amp; Pay Bills on Paytm.
          </h1>
          <div className="flex items-stretch justify-between gap-8">
            {SERVICES.recharge.services.map(
              ({ category, title, icon }, index) => (
                <div
                  key={index}
                  className="flex w-36 cursor-pointer flex-col gap-y-4 rounded-lg py-3 pl-3 pr-[11px] text-[17px] transition-all duration-300 ease-in-out hover:bg-brand-primary-dark-dark/10"
                >
                  <Image
                    src={icon}
                    height={200}
                    width={200}
                    alt=""
                    className="size-16"
                  />

                  <div>
                    <span className="font-medium">{title}</span>
                    <div className="mr-[11px] text-[15px] font-semibold">
                      {category?.split(" ").map((word, index, wordsArray) => {
                        if (word === "&") {
                          return null;
                        }

                        // if it's the first word
                        if (index === 0)
                          return (
                            <React.Fragment key={word}>
                              {word.replaceAll("_", " ")}
                            </React.Fragment>
                          );

                        // if it's the last word
                        if (index === wordsArray.length - 1)
                          return (
                            <div key={index}>
                              {word.replaceAll("_", " ")}
                              <div className="chevron-right"></div>
                            </div>
                          );

                        // for all other words
                        return <div key={index}>{word}</div>;
                      })}
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>
      {/* Booking Services */}
      <section className="bg-brand-primary-dark-light text-white">
        <div className="mx-auto max-w-screen-xl space-y-6 py-[65px]">
          <h1 className="text-4xl font-bold">
            Recharge &amp; Pay Bills on Paytm.
          </h1>
          <div className="flex items-stretch justify-between gap-8">
            {SERVICES.booking.services.map(
              ({ category, title, icon }, index) => (
                <div
                  key={index}
                  className="flex w-36 cursor-pointer flex-col gap-y-4 rounded-lg py-3 pl-3 pr-[11px] text-[17px] transition-all duration-300 ease-in-out hover:bg-brand-primary-dark-dark/50"
                >
                  <Image
                    src={icon}
                    height={200}
                    width={200}
                    alt=""
                    className="size-16"
                  />

                  <div>
                    <span className="font-medium">{title}</span>
                    <div className="mr-[11px] text-[15px] font-semibold">
                      {category?.split(" ").map((word, index, wordsArray) => {
                        return (
                          <div key={index}>
                            {word.replaceAll("_", " ")}
                            <div className="chevron-right"></div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>
      {/* Paytm Intruments/Information */}
      <section className="relative space-y-9 bg-slate-100 pb-12 pt-[120px]">
        <h1 className="mx-auto max-w-[1170px] text-5xl/[50px] font-bold">
          Paytm Payment Instruments
        </h1>
        <div className="relative mx-auto max-w-[1170px] rounded-xl bg-white">
          <div className="flex items-center justify-between py-20 pl-[115px] pr-[50px]">
            <div className="w-[45%] space-y-12 text-base font-bold">
              <div className="flex w-[175px] items-center">
                <Image
                  height={200}
                  width={200}
                  className="h-[77px] w-auto pr-3"
                  src={paytmWallet}
                  alt=""
                />
                Paytm Wallet
              </div>
              <div>
                <div className="w-[390px] text-4xl/[46px] font-bold">
                  The Fastest Way to Pay In-store &amp; Online.
                </div>
                <span className="block pb-8 pt-6 text-[17px]/[26px] font-medium">
                  Load up your Paytm Wallet for free and make payments in a
                  jiffy at over 21 million stores, websites and apps.
                </span>
                <button className="mt-10-- group flex h-11 w-max items-center gap-x-[10px] rounded-full border border-black bg-black px-6 text-[15px] font-semibold leading-none text-white transition-all duration-200 hover:border-2 hover:bg-white hover:text-black">
                  Download the App
                  <a
                    href="https://itunes.apple.com/in/app/mobile-recharge-bill-payments/id473941634?mt=8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block size-4"
                  >
                    <svg
                      width={14}
                      height={16}
                      viewBox="0 0 14 16"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className="fill-white group-hover:fill-black"
                    >
                      <path d="M11.6593 15.3557C10.7589 16.1979 9.76546 16.0666 8.81854 15.6695C7.81182 15.2644 6.89149 15.2388 5.82828 15.6695C4.50426 16.2203 3.80155 16.0602 3.00415 15.3557C-1.49786 10.8883 -0.833353 4.08311 4.28331 3.82691C5.52427 3.89096 6.39311 4.48821 7.12406 4.53785C8.21052 4.32489 9.25047 3.71483 10.4133 3.79489C11.8105 3.90377 12.8554 4.43538 13.5531 5.3913C10.6791 7.05657 11.3603 10.7073 14 11.7321C13.4717 13.0691 12.7939 14.3902 11.6576 15.3669L11.6593 15.3557ZM7.02439 3.77888C6.88982 1.79336 8.55939 0.160122 10.4798 0C10.7439 2.28974 8.32017 4.00305 7.02439 3.77888Z" />
                    </svg>
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=net.one97.paytm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block size-4"
                  >
                    <svg
                      width={14}
                      height={16}
                      viewBox="0 0 14 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-white group-hover:fill-black"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.088012 0.571735C0.0310801 0.726729 0 0.910797 0 1.121V14.8786C0 15.0894 0.0311427 15.2736 0.0881839 15.4286L7.32808 7.9997L0.088012 0.571735ZM0.590122 15.9564C0.85223 16.0466 1.18264 15.9995 1.54068 15.7912L10.0736 10.8165L7.83627 8.52109L0.590122 15.9564ZM10.7221 10.4391L13.3647 8.8987C14.2118 8.40415 14.2118 7.59609 13.3647 7.10217L10.7211 5.561L8.34443 7.99966L10.7221 10.4391ZM10.073 5.18317L1.54068 0.209061C1.18252 0.000250885 0.852017 -0.0466058 0.589868 0.0438429L7.83624 7.47828L10.073 5.18317Z"
                      />
                    </svg>
                  </a>
                </button>
              </div>
            </div>
            <Image
              src={paymentIntrument}
              alt=""
              height={700}
              width={550}
              className="w-[539px]"
            />
          </div>
        </div>
      </section>

      <section className="relative bg-slate-100 pb-12">
        <div className="relative mx-auto max-w-[1170px] rounded-xl bg-white">
          <div className="flex items-center justify-between py-20 pl-[115px] pr-[50px]">
            <div className="w-[45%] space-y-12 text-base font-bold">
              <div className="flex w-[175px] items-center">
                <Image
                  height={200}
                  width={200}
                  className="h-[77px] w-auto pr-3"
                  src={paytmUPI}
                  alt=""
                />
                UPI Money Transfer
              </div>
              <div>
                <div className="w-[390px] text-4xl/[46px] font-bold">
                  Pay anyone directly from your bank account.
                </div>
                <span className="block pb-8 pt-6 text-[17px]/[26px] font-medium">
                  Pay anyone, everywhere. Make contactless & secure payments
                  in-stores or online using Paytm Wallet or Directly from your
                  Bank Account. Plus, send & receive money from anyone.
                </span>
                <button className="mt-10-- group flex h-11 w-max items-center gap-x-[10px] rounded-full border border-black bg-black px-6 text-[15px] font-semibold leading-none text-white transition-all duration-200 hover:border-2 hover:bg-white hover:text-black">
                  Download the App
                  <a
                    href="https://itunes.apple.com/in/app/mobile-recharge-bill-payments/id473941634?mt=8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block size-4"
                  >
                    <svg
                      width={14}
                      height={16}
                      viewBox="0 0 14 16"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className="fill-white group-hover:fill-black"
                    >
                      <path d="M11.6593 15.3557C10.7589 16.1979 9.76546 16.0666 8.81854 15.6695C7.81182 15.2644 6.89149 15.2388 5.82828 15.6695C4.50426 16.2203 3.80155 16.0602 3.00415 15.3557C-1.49786 10.8883 -0.833353 4.08311 4.28331 3.82691C5.52427 3.89096 6.39311 4.48821 7.12406 4.53785C8.21052 4.32489 9.25047 3.71483 10.4133 3.79489C11.8105 3.90377 12.8554 4.43538 13.5531 5.3913C10.6791 7.05657 11.3603 10.7073 14 11.7321C13.4717 13.0691 12.7939 14.3902 11.6576 15.3669L11.6593 15.3557ZM7.02439 3.77888C6.88982 1.79336 8.55939 0.160122 10.4798 0C10.7439 2.28974 8.32017 4.00305 7.02439 3.77888Z" />
                    </svg>
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=net.one97.paytm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block size-4"
                  >
                    <svg
                      width={14}
                      height={16}
                      viewBox="0 0 14 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-white group-hover:fill-black"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.088012 0.571735C0.0310801 0.726729 0 0.910797 0 1.121V14.8786C0 15.0894 0.0311427 15.2736 0.0881839 15.4286L7.32808 7.9997L0.088012 0.571735ZM0.590122 15.9564C0.85223 16.0466 1.18264 15.9995 1.54068 15.7912L10.0736 10.8165L7.83627 8.52109L0.590122 15.9564ZM10.7221 10.4391L13.3647 8.8987C14.2118 8.40415 14.2118 7.59609 13.3647 7.10217L10.7211 5.561L8.34443 7.99966L10.7221 10.4391ZM10.073 5.18317L1.54068 0.209061C1.18252 0.000250885 0.852017 -0.0466058 0.589868 0.0438429L7.83624 7.47828L10.073 5.18317Z"
                      />
                    </svg>
                  </a>
                </button>
              </div>
            </div>
            <Image
              src={upiTransferPaid}
              alt=""
              height={700}
              width={550}
              className="w-[539px]"
            />
          </div>
        </div>
      </section>

      <section className="relative bg-slate-100">
        <div className="relative mx-auto flex max-w-[1170px] justify-between rounded-xl pb-32">
          <div className="relative h-[630px] w-[561px] cursor-pointer rounded-2xl bg-white px-16 pt-[70px] ">
            <div className="flex h-[75px] items-end">
              <img
                src="https://assetscdn1.paytm.com/images/catalog/view_item/853975/1640242865113.png"
                alt="Unlimited Cashback<span>Every time</span>"
                className="h-[77px] w-auto"
              />
            </div>
            <div className="">
              <h1 className="pt-7 text-[40px] font-bold leading-[48px]">
                Unlimited Cashback<span>Every time</span>
              </h1>
              <p className="mx-0 mb-1.5 mt-5 text-xl font-medium leading-[30px]">
                Paytm HDFC Bank Select Credit Card. A card with assured Cashback
                and incredible offers.
              </p>
              <div className="w-[353px]">
                <span className="mb-5 text-xs font-medium leading-[18px] text-[#75767f]">
                  *Paytm Payments Bank does not provide any loan or credit card
                  on the Paytm App.
                </span>
                <a href="/loans-credit-cards-disclaimer">Know more</a>
              </div>
            </div>
            <img
              className="absolute bottom-1.5 left-2/4 h-[296px] -translate-x-2/4 translate-y-[2%]"
              src="https://assetscdn1.paytm.com/images/catalog/view_item/853975/1640241561388.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}
