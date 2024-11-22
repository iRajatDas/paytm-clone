import { StaticImageData } from "next/image";

// Recharge
import MobileRecharge from "@/public/catalog/recharge/mobile.png";
import EBill from "@/public/catalog/recharge/electricity.png";
import DTH from "@/public/catalog/recharge/dth.png";
import Gas from "@/public/catalog/recharge/gas.png";
import Broadband from "@/public/catalog/recharge/wifi.png";
import EducationFee from "@/public/catalog/recharge/education-fee.png";
import AllServices from "@/public/catalog/recharge/all-services-stack.png";

// Booking
import Movie from "@/public/catalog/tickets/movie.png";
import Flight from "@/public/catalog/tickets/flight.png";
import Bus from "@/public/catalog/tickets/bus.png";
import Train from "@/public/catalog/tickets/train.png";
import BuyInsurance from "@/public/catalog/tickets/insurance.png";
import IntlFlights from "@/public/catalog/tickets/intl-flight.png";
import InvestInStocks from "@/public/catalog/tickets/stocks.webp";

type ServiceTypes = "recharge" | "booking";

type ServiceMap = {
  [key in ServiceTypes]: ServiceType;
};

type ServiceType = {
  title: string;
  services: Service[];
};

type Service = {
  icon: string | StaticImageData;
  title: string;
  category: string;
};

export const SERVICES: ServiceMap = {
  recharge: {
    title: "Recharge & Pay Bills on Paytm.com",
    services: [
      {
        icon: MobileRecharge,
        title: "Recharge",
        category: "Prepaid Mobile",
      },
      {
        icon: EBill,
        title: "Pay",
        category: "Electricity Bill",
      },
      {
        icon: DTH,
        title: "Recharge",
        category: "DTH Connection",
      },
      {
        icon: Gas,
        title: "Book",
        category: "Gas Cylinder",
      },
      {
        icon: Broadband,
        title: "Pay",
        category: "Broadband_& Landline_Bill",
      },
      {
        icon: EducationFee,
        title: "Pay",
        category: "Education Fee",
      },
      {
        icon: AllServices,
        title: "All",
        category: "Payment Services",
      },
    ],
  },

  booking: {
    title: "Book & Buy on Paytm.",
    services: [
      {
        title: "Movie",
        category: "Tickets",
        icon: Movie,
      },
      {
        title: "Flight",
        category: "Tickets",
        icon: Flight,
      },
      {
        title: "Bus",
        category: "Tickets",
        icon: Bus,
      },
      {
        title: "Train",
        category: "Tickets",
        icon: Train,
      },
      {
        title: "Buy",
        category: "Insurance",
        icon: BuyInsurance,
      },
      {
        title: "International",
        category: "Flights",
        icon: IntlFlights,
      },
      {
        title: "Invest",
        category: "in_Stocks",
        icon: InvestInStocks,
      },
    ],
  },
};
