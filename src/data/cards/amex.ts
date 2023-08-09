import { z } from "zod";

import { REFERRALS } from "@/data/referral-links";

import { schemas } from "../../generated/api.client";
import { WEIGHTS } from "../weights";

export const AMERICAN_EXPRESS_CARDS: z.input<typeof schemas.CreditCard>[] = [
  {
    name: "Blue Business Cash",
    issuer: schemas.IssuersEnum.enum.AMERICAN_EXPRESS,
    network: schemas.NetworksEnum.enum.AMERICAN_EXPRESS,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: true,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 2,
    credits: [],
    url: "https://www.americanexpress.com/en-us/business/credit-cards/blue-business-cash/",
    imageUrl: "/images/amex/blue-business-cash.webp",
    offers: [
      {
        amount: [{ amount: 750 }],
        spend: 15000,
        days: 365,
        credits: [],
        url: "https://www.doctorofcredit.com/ymmv-american-express-blue-business-cash-750-signup-bonus-no-lifetime-language/",
      },
      {
        amount: [{ amount: 250 }],
        spend: 5000,
        days: 90,
        credits: [],
        url: "https://www.americanexpress.com/en-us/business/credit-cards/blue-business-cash/",
      },
      {
        amount: [{ amount: 500 }],
        spend: 15_000,
        days: 365,
        credits: [],

        url: "https://www.uscreditcardguide.com/amex-blue-business-cash-credit-card/",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 250 }],
        spend: 3000,
        days: 90,
        credits: [],
        expiration: "2022-11-01",
      },
      {
        amount: [{ amount: 250 }],
        spend: 5000,
        days: 90,
        credits: [],
      },
      {
        amount: [{ amount: 500 }],
        spend: 15_000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    name: "Blue Business Plus",
    issuer: schemas.IssuersEnum.enum.AMERICAN_EXPRESS,
    network: schemas.NetworksEnum.enum.AMERICAN_EXPRESS,
    currency: schemas.CurrenciesEnum.enum.AMERICAN_EXPRESS,
    isBusiness: true,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 2,
    url: "https://www.americanexpress.com/us/credit-cards/business/business-credit-cards/american-express-blue-business-plus-credit-card-amex/",
    imageUrl: "/images/amex/blue-business-plus.webp",
    credits: [],
    offers: [],
    historicalOffers: [
      {
        amount: [{ amount: 15_000 }],
        spend: 3000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    name: "Blue Cash Everyday",
    issuer: schemas.IssuersEnum.enum.AMERICAN_EXPRESS,
    network: schemas.NetworksEnum.enum.AMERICAN_EXPRESS,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: false,

    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 2,
    url: "https://www.americanexpress.com/us/credit-cards/card/blue-cash-everyday/",
    imageUrl: "/images/amex/blue-cash-everyday.webp",
    credits: [],
    offers: [
      {
        amount: [{ amount: 200 }],
        spend: 2000,
        days: 180,
        credits: [],
        details: "Requires incognito or a VPN.",
      },
      {
        amount: [{ amount: 100 }],
        spend: 2000,
        days: 180,
        credits: [
          {
            value: 150,
            description: "20% back up to $150 w/ Paypal",
            weight: 0.8,
          },
        ],
      },
      {
        amount: [{ amount: 200 }],
        spend: 2000,
        days: 180,
        credits: [
          {
            value: 150,
            description: "Dining Credit",
            weight: 0.75,
          },
        ],
        url: "https://resy.com/amex-offers?date=2022-10-01&seats=2",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 350 }],
        spend: 3000,
        days: 180,
        credits: [],
        expiration: "2021-10-01",
      },
      {
        amount: [{ amount: 250 }],
        spend: 2000,
        days: 180,
        credits: [],
        url: "https://www.americanexpress.com/us/credit-cards/card/blue-cash-everyday/",
        details: "Requires incognito or a VPN.",
      },
    ],
  },
  {
    name: "Blue Cash Preferred",
    issuer: schemas.IssuersEnum.enum.AMERICAN_EXPRESS,
    network: schemas.NetworksEnum.enum.AMERICAN_EXPRESS,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: false,
    annualFee: 95,
    isAnnualFeeWaived: true,
    universalCashbackPercent: 2,
    url: "https://www.americanexpress.com/us/credit-cards/card/blue-cash-preferred/",
    imageUrl: "/images/amex/blue-cash-preferred.webp",
    credits: [
      {
        value: 7 * 12,
        description: "$7/mo Disney Bundle Credit",
        weight: 0.25,
      },
    ],
    offers: [
      {
        amount: [{ amount: 300 }],
        spend: 3000,
        days: 180,
        credits: [],
        url: "https://www.americanexpress.com/us/credit-cards/card/blue-cash-preferred/",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 400 }],
        spend: 3000,
        days: 180,
        credits: [],
        expiration: "2022-06-01",
      },
    ],
  },
  {
    name: "Blue Cash Preferred (Morgan Stanley)",
    issuer: schemas.IssuersEnum.enum.AMERICAN_EXPRESS,
    network: schemas.NetworksEnum.enum.AMERICAN_EXPRESS,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: false,
    annualFee: 95,
    isAnnualFeeWaived: true,
    universalCashbackPercent: 2,
    url: "https://apply.americanexpress.com/amex-morgan-stanley-credit-cards/?page_url=1",
    imageUrl: "/images/amex/blue-cash-preferred-morgan-stanley.png",
    credits: [
      {
        value: 84,
        description: "$7/mo Disney Bundle Credit",
        weight: 0.25,
      },
    ],
    offers: [
      {
        amount: [{ amount: 250 }],
        spend: 3000,
        days: 180,
        credits: [],
        url: "https://apply.americanexpress.com/amex-morgan-stanley-credit-cards/?page_url=1",
        details: "Requires a relationship with Morgan Stanley.",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 400 }],
        spend: 3000,
        days: 180,
        credits: [],
        url: "https://apply.americanexpress.com/amex-morgan-stanley-credit-cards/?page_url=1",
        expiration: "2023-01-11",
      },
    ],
  },
  {
    name: "Business Gold",
    issuer: schemas.IssuersEnum.enum.AMERICAN_EXPRESS,
    network: schemas.NetworksEnum.enum.AMERICAN_EXPRESS,
    currency: schemas.CurrenciesEnum.enum.AMERICAN_EXPRESS,
    isBusiness: true,
    annualFee: 295,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.americanexpress.com/us/credit-cards/business/business-credit-cards/american-express-business-gold-card-amex/",
    imageUrl: "/images/amex/business-gold.webp",
    credits: [],
    offers: [
      {
        amount: [{ amount: 110_000 }],
        spend: 10_000,
        days: 90,
        credits: [],
        details: "May require incognito.",
        url: "https://www.americanexpress.com/us/credit-cards/business/business-credit-cards/american-express-business-gold-card-amex/",
        expiration: "2023-06-01",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 130_000 }],
        spend: 10_000,
        days: 90,
        credits: [],
        expiration: "2022-09-01",
      },
    ],
  },
  {
    name: "Business Green",
    issuer: schemas.IssuersEnum.enum.AMERICAN_EXPRESS,
    network: schemas.NetworksEnum.enum.AMERICAN_EXPRESS,
    currency: schemas.CurrenciesEnum.enum.AMERICAN_EXPRESS,
    isBusiness: true,
    annualFee: 95,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.americanexpress.com/us/credit-cards/business/business-credit-cards/american-express-business-green-card-amex/",
    imageUrl: "/images/amex/business-green.webp",
    credits: [],
    offers: [
      {
        amount: [{ amount: 25_000 }],
        spend: 3000,
        days: 90,
        credits: [],
        url: "https://www.americanexpress.com/us/credit-cards/business/business-credit-cards/american-express-business-green-card-amex/",
        details: "Requires incognito or a VPN.",
      },
      {
        amount: [{ amount: 15_000 }],
        spend: 3000,
        days: 90,
        credits: [],
        referralUrl: REFERRALS.AMERICAN_EXPRESS.BUSINESS_GREEN,
        url: "https://www.americanexpress.com/us/credit-cards/business/business-credit-cards/american-express-business-green-card-amex/",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 25_000 }],
        spend: 3000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    name: "Business Platinum",
    issuer: schemas.IssuersEnum.enum.AMERICAN_EXPRESS,
    network: schemas.NetworksEnum.enum.AMERICAN_EXPRESS,
    currency: schemas.CurrenciesEnum.enum.AMERICAN_EXPRESS,
    isBusiness: true,
    annualFee: 695,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.americanexpress.com/us/credit-cards/business/business-credit-cards/american-express-business-platinum-credit-card-amex/",
    imageUrl: "/images/amex/business-platinum.webp",
    credits: [
      {
        value: 400,
        description: "Dell credit",
        weight: 0.2,
      },
      {
        value: 120,
        description: "Wireless credit",
        weight: 0.5,
      },
      {
        value: 200,
        description: "Airline fee credit",
        weight: 0.7,
      },
      {
        value: 189,
        description: "CLEAR credit",
        weight: 0.4,
      },
      {
        value: 650,
        description: "Lounge access",
        weight: WEIGHTS.LOUNGES,
      },
    ],
    offers: [
      {
        amount: [{ amount: 120_000 }],
        spend: 15_000,
        days: 90,
        credits: [],
        url: "https://www.doctorofcredit.com/american-express-business-platinum-120000-points-10x-at-office-supply-wireless-more-7500-limit/",
        details: "10x on Office Supply, Wireless, more ($7.5k cap).",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 260_000 }],
        spend: 30_000,
        days: 90,
        credits: [],
        expiration: "2022-10-01",
      },
      {
        amount: [{ amount: 180_000 }],
        spend: 15_000,
        days: 90,
        credits: [],
        expiration: "2022-12-01",
      },
    ],
  },
  {
    name: "Cash Magnet",
    issuer: schemas.IssuersEnum.enum.AMERICAN_EXPRESS,
    network: schemas.NetworksEnum.enum.AMERICAN_EXPRESS,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: false,

    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1.5,
    url: "https://www.americanexpress.com/us/credit-cards/card/cash-magnet/",
    imageUrl: "/images/amex/cash-magnet.webp",
    credits: [],
    offers: [
      {
        amount: [{ amount: 200 }],
        spend: 2000,
        days: 180,
        credits: [],
        url: "https://www.americanexpress.com/us/credit-cards/card/cash-magnet/",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 300 }],
        spend: 2500,
        days: 180,
        credits: [],
      },
      {
        amount: [{ amount: 200 }],
        spend: 1000,
        days: 180,
        credits: [],
      },
    ],
  },
  {
    name: "Delta SkyMiles Blue",
    issuer: schemas.IssuersEnum.enum.AMERICAN_EXPRESS,
    network: schemas.NetworksEnum.enum.AMERICAN_EXPRESS,
    currency: schemas.CurrenciesEnum.enum.DELTA,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-blue-american-express-card/",
    imageUrl: "/images/amex/delta-skymiles-blue.jpg",
    credits: [],
    offers: [
      {
        amount: [{ amount: 10_000 }],
        spend: 1000,
        days: 90,
        credits: [],
        url: "https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-blue-american-express-card/",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 10_000 }],
        spend: 500,
        days: 90,
        credits: [],
        url: "https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-blue-american-express-card/",
      },
      {
        amount: [{ amount: 15_000 }],
        spend: 1000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    name: "Delta SkyMiles Gold",
    issuer: schemas.IssuersEnum.enum.AMERICAN_EXPRESS,
    network: schemas.NetworksEnum.enum.AMERICAN_EXPRESS,
    currency: schemas.CurrenciesEnum.enum.DELTA,
    isBusiness: false,
    annualFee: 99,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-gold-american-express-card/",
    imageUrl: "/images/amex/delta-skymiles-gold.jpg",
    credits: [
      {
        value: 50,
        description: "First checked bag free",
        weight: 0.5,
      },
    ],
    offers: [
      {
        amount: [{ amount: 40_000 }],
        spend: 2000,
        days: 180,
        credits: [],
        url: "https://www.delta.com/us/en/skymiles/airline-credit-cards/american-express-personal-cards",
      }
    ],
    historicalOffers: [
      {
        amount: [{ amount: 90_000 }],
        spend: 2000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    name: "Delta SkyMiles Gold Business",
    issuer: schemas.IssuersEnum.enum.AMERICAN_EXPRESS,
    network: schemas.NetworksEnum.enum.AMERICAN_EXPRESS,
    currency: schemas.CurrenciesEnum.enum.DELTA,
    isBusiness: true,
    annualFee: 99,
    isAnnualFeeWaived: true,
    universalCashbackPercent: 1,
    url: "https://www.americanexpress.com/en-us/business/credit-cards/delta-skymiles-gold/",
    imageUrl: "/images/amex/delta-skymiles-gold-business.webp",
    credits: [],
    offers: [
      {
        amount: [{ amount: 50_000 }],
        spend: 2000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 50_000 }],
        spend: 2000,
        days: 90,
        credits: [],
      },
      {
        amount: [{ amount: 75_000 }],
        spend: 3000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    name: "Delta SkyMiles Platinum",
    issuer: schemas.IssuersEnum.enum.AMERICAN_EXPRESS,
    network: schemas.NetworksEnum.enum.AMERICAN_EXPRESS,
    currency: schemas.CurrenciesEnum.enum.DELTA,
    isBusiness: false,
    annualFee: 250,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-platinum-american-express-card/",
    imageUrl: "/images/amex/delta-skymiles-platinum.webp",
    credits: [
      {
        value: 500,
        description: "Companion Pass",
        weight: 0.7,
      },
    ],
    offers: [
      {
        amount: [{ amount: 50_000 }],
        spend: 3000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 50_000 }],
        spend: 2000,
        days: 90,
        credits: [],
      },
      {
        amount: [{ amount: 90_000 }],
        credits: [],
        spend: 4000,
        days: 90,
      },
    ],
  },
  {
    name: "Delta SkyMiles Platinum Business",
    issuer: schemas.IssuersEnum.enum.AMERICAN_EXPRESS,
    network: schemas.NetworksEnum.enum.AMERICAN_EXPRESS,
    currency: schemas.CurrenciesEnum.enum.DELTA,
    isBusiness: true,
    annualFee: 250,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.americanexpress.com/en-us/business/credit-cards/delta-skymiles-platinum/",
    imageUrl: "/images/amex/delta-skymiles-platinum-business.webp",
    credits: [
      {
        value: 100,
        description: "$100 Global Entry / $85 TSA PreCheck Credit",
        weight: WEIGHTS.PRECHECK,
      },
      {
        value: 500,
        description: "Companion Pass",
        weight: 0.7,
      },
      {
        value: 50,
        description: "First checked bag free",
        weight: 0.5,
      },
    ],
    offers: [
      {
        amount: [{ amount: 60_000 }],
        spend: 3000,
        days: 90,
        credits: [],
        referralUrl: REFERRALS.AMERICAN_EXPRESS.DELTA_BUSINESS_PLATINUM,
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 100_000 }],
        spend: 3000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    name: "Delta SkyMiles Reserve",
    issuer: schemas.IssuersEnum.enum.AMERICAN_EXPRESS,
    network: schemas.NetworksEnum.enum.AMERICAN_EXPRESS,
    currency: schemas.CurrenciesEnum.enum.DELTA,
    isBusiness: false,
    annualFee: 550,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-reserve-american-express-card/",
    imageUrl: "/images/amex/delta-skymiles-reserve.webp",
    credits: [],
    offers: [
      {
        amount: [{ amount: 60_000 }],
        spend: 5000,
        days: 90,
        credits: [],
        url: "https://www.delta.com/us/en/skymiles/airline-credit-cards/american-express-personal-cards",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 125_000 }],
        spend: 5000,
        days: 90,
        credits: [], //
      },
      {
        amount: [{ amount: 50_000 }],
        spend: 3000,
        days: 90,
        credits: [],
        url: "https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-reserve-american-express-card/",
      },
    ],
  },
  {
    name: "Delta SkyMiles Reserve Business",
    issuer: schemas.IssuersEnum.enum.AMERICAN_EXPRESS,
    network: schemas.NetworksEnum.enum.AMERICAN_EXPRESS,
    currency: schemas.CurrenciesEnum.enum.DELTA,
    isBusiness: true,
    annualFee: 550,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.americanexpress.com/en-us/business/credit-cards/delta-skymiles-reserve/",
    imageUrl: "/images/amex/delta-skymiles-reserve-business.webp",
    credits: [],
    offers: [
      {
        amount: [{ amount: 70_000 }],
        spend: 6000,
        days: 90,
        credits: [],
        url: "https://www.delta.com/us/en/skymiles/airline-credit-cards/american-express-business-cards",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 110_000 }],
        spend: 6000,
        days: 90,
        credits: [],
      },
      {
        amount: [{ amount: 60_000 }],
        spend: 4000,
        days: 90,
        credits: [],
        url: "https://www.americanexpress.com/en-us/business/credit-cards/delta-skymiles-reserve/",
      },
    ],
  },
  {
    name: "Everyday",
    issuer: schemas.IssuersEnum.enum.AMERICAN_EXPRESS,
    network: schemas.NetworksEnum.enum.AMERICAN_EXPRESS,
    currency: schemas.CurrenciesEnum.enum.AMERICAN_EXPRESS,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.americanexpress.com/us/credit-cards/card/amex-everyday/",
    imageUrl: "/images/amex/everyday.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 10_000 }],
        spend: 2000,
        days: 180,
        credits: [],
        url: "https://www.americanexpress.com/us/credit-cards/card/amex-everyday/",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 25_000 }],
        spend: 2000,
        days: 180,
        expiration: "2021-01-01",
        credits: [],
      },
    ],
  },
  {
    name: "Everyday Preferred",
    issuer: schemas.IssuersEnum.enum.AMERICAN_EXPRESS,
    network: schemas.NetworksEnum.enum.AMERICAN_EXPRESS,
    currency: schemas.CurrenciesEnum.enum.AMERICAN_EXPRESS,
    isBusiness: false,
    annualFee: 95,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.americanexpress.com/us/credit-cards/card/amex-everyday-preferred/",
    imageUrl: "/images/amex/everyday-preferred.jpg",
    credits: [],
    offers: [
      {
        amount: [{ amount: 15_000 }],
        spend: 2000,
        days: 180,
        credits: [],
        url: "https://www.americanexpress.com/us/credit-cards/card/amex-everyday-preferred/",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 30_000 }],
        spend: 2000,
        days: 180,
        credits: [],
      },
    ],
  },
  {
    name: "Gold",
    issuer: schemas.IssuersEnum.enum.AMERICAN_EXPRESS,
    network: schemas.NetworksEnum.enum.AMERICAN_EXPRESS,
    currency: schemas.CurrenciesEnum.enum.AMERICAN_EXPRESS,
    isBusiness: false,
    annualFee: 250,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.americanexpress.com/us/credit-cards/card/gold-card/",
    imageUrl: "/images/amex/gold.webp",
    credits: [
      {
        description: "$10/mo credit for Uber",
        value: 120,
        weight: 0.4,
      },
      {
        description:
          "$10/mo credit for Grubhub, Cheesecake Factory, Gold Belly, Wine.com, Milk, Shake Shack",
        value: 120,
        weight: 0.5,
      },
    ],
    offers: [
      {
        amount: [
          { amount: 75_000 },
          { amount: 250, currency: schemas.CurrenciesEnum.enum.USD },
        ],
        spend: 4000,
        days: 180,
        credits: [],
        url: "https://resy.com/amex-offers?date=2022-09-18&seats=2",
      },
      {
        amount: [{ amount: 75_000 }],
        spend: 4000,
        days: 180,
        credits: [],
        details: "May require incognito.",
        referralUrl:
          "https://americanexpress.com/en-us/referral/ANDENaiMNZ?XLINK=MYCP",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 100_000 }],
        spend: 4000,
        days: 180,
        credits: [],
      },
    ],
  },
  {
    name: "Green",
    issuer: schemas.IssuersEnum.enum.AMERICAN_EXPRESS,
    network: schemas.NetworksEnum.enum.AMERICAN_EXPRESS,
    currency: schemas.CurrenciesEnum.enum.AMERICAN_EXPRESS,
    isBusiness: false,
    annualFee: 150,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.americanexpress.com/us/credit-cards/card/green/",
    imageUrl: "/images/amex/green.webp",
    credits: [
      {
        value: 100,
        description: "CLEAR Credit",
        weight: 0.4,
      },
      {
        value: 100,
        description: "Lounge Access Credit",
        weight: WEIGHTS.LOUNGES,
      },
    ],
    offers: [
      {
        amount: [{ amount: 60_000 }],
        spend: 3000,
        days: 180,
        credits: [
          {
            description: "Statement Credit (Travel)",
            value: 200,
            weight: 0.6,
            currency: schemas.CurrenciesEnum.enum.USD,
          },
        ],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 60_000 }],
        spend: 2000,
        days: 180,
        credits: [
          {
            description: "Statement Credit (Travel)",
            value: 200,
            weight: 0.6,
            currency: schemas.CurrenciesEnum.enum.USD,
          },
        ],
        url: "https://www.americanexpress.com/us/credit-cards/card/green/",
      },
    ],
  },
  {
    name: "Hilton Honors",
    issuer: schemas.IssuersEnum.enum.AMERICAN_EXPRESS,
    network: schemas.NetworksEnum.enum.AMERICAN_EXPRESS,
    currency: schemas.CurrenciesEnum.enum.HILTON,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.americanexpress.com/us/credit-cards/card/hilton-honors/",
    imageUrl: "/images/amex/hilton-honors.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 80_000 }],
        spend: 1000,
        days: 90,
        credits: []
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 150_000 }],
        spend: 5000,
        days: 180,
        credits: [],
      },
      {
        amount: [{ amount: 100_000 }],
        spend: 2000,
        days: 180,
        credits: [],
      },
      {
        amount: [{ amount: 100_000 }],
        spend: 1000,
        days: 180,
        credits: [
          {
            value: 100,
            description: "Hilton Credit",
            weight: 1,
          },
        ],
      },
    ],
  },
  {
    name: "Hilton Honors Aspire",
    issuer: schemas.IssuersEnum.enum.AMERICAN_EXPRESS,
    network: schemas.NetworksEnum.enum.AMERICAN_EXPRESS,
    currency: schemas.CurrenciesEnum.enum.HILTON,
    isBusiness: false,
    annualFee: 450,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.hilton.com/en/hilton-honors/credit-cards/",
    imageUrl: "/images/amex/hilton-honors-aspire.png",
    credits: [
      {
        value: 250,
        description: "Hilton Resort Credit",
        weight: 0.8,
      },
    ],
    offers: [
      {
        amount: [{ amount: 150_000 }],
        spend: 4000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 150_000 }],
        spend: 4000,
        days: 180,
        credits: [],
      },
      {
        amount: [{ amount: 150_000 }],
        spend: 6000,
        days: 180,
        credits: [],
        url: "https://www.hilton.com/en/hilton-honors/credit-cards/",
      },
    ],
  },
  {
    name: "Hilton Honors Business",
    issuer: schemas.IssuersEnum.enum.AMERICAN_EXPRESS,
    network: schemas.NetworksEnum.enum.AMERICAN_EXPRESS,
    currency: schemas.CurrenciesEnum.enum.HILTON,
    isBusiness: true,
    annualFee: 95,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.americanexpress.com/us/credit-cards/business/business-credit-cards/hilton-honors/",
    imageUrl: "/images/amex/hilton-honors-business.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 150_000 }],
        spend: 4000,
        days: 90,
        credits: [
          {
            value: 500,
            weight: 0.7,
            description: "Free Night Credit",
          },
        ],
        details: "Includes 1x FNC.",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 130_000 }],
        spend: 3000,
        days: 90,
        credits: [
          {
            value: 130,
            description: "Hilton Credit",
            weight: 1,
          },
        ],
      },
      {
        amount: [{ amount: 180_000 }],
        spend: 4000,
        days: 180,
        credits: [],
      },
      {
        amount: [{ amount: 165_000 }],
        spend: 5000,
        days: 90,
        credits: [
          {
            value: 130,
            description: "Hilton Credit",
            weight: 1,
          },
        ],
        expiration: "2023-04-05",
        url: "https://www.americanexpress.com/us/credit-cards/business/business-credit-cards/hilton-honors/",
      },
    ],
  },
  {
    name: "Hilton Honors Surpass",
    issuer: schemas.IssuersEnum.enum.AMERICAN_EXPRESS,
    network: schemas.NetworksEnum.enum.AMERICAN_EXPRESS,
    currency: schemas.CurrenciesEnum.enum.HILTON,
    isBusiness: false,
    annualFee: 95,
    isAnnualFeeWaived: true,
    universalCashbackPercent: 1,
    url: "https://www.americanexpress.com/us/credit-cards/card/hilton-honors-surpass/",
    imageUrl: "/images/amex/hilton-honors-surpass.jpg",
    credits: [],
    offers: [
      {
        amount: [{ amount: 130_000 }],
        spend: 2000,
        days: 90,
        credits: [
          {
            value: 500,
            weight: 0.7,
            description: "Free Night Credit",
          },
        ],
        details: "Includes 1x FNC.",
        url: "https://www.hilton.com/en/hilton-honors/credit-cards/",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 150_000 }],
        spend: 2000,
        days: 180,
        details: "AF is NOT waived.",
        credits: [],
      },
      {
        amount: [{ amount: 150_000 }],
        spend: 3000,
        days: 180,
        credits: [],
        url: "https://www.hilton.com/en/hilton-honors/credit-cards/",
      },
    ],
  },
  {
    name: "Marriott Bonvoy Brilliant",
    issuer: schemas.IssuersEnum.enum.AMERICAN_EXPRESS,
    network: schemas.NetworksEnum.enum.AMERICAN_EXPRESS,
    currency: schemas.CurrenciesEnum.enum.MARRIOTT,
    isBusiness: false,
    annualFee: 650,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.americanexpress.com/us/credit-cards/card/marriott-bonvoy-brilliant/",
    imageUrl: "/images/amex/marriott-bonvoy-brilliant.webp",
    credits: [
      {
        value: 300,
        description: "$25/mo Dining Credit",
        weight: 0.75,
      },
      {
        value: 85_000,
        description: "Free Night Credit up to 85k.",
        weight: 0.75,
        currency: schemas.CurrenciesEnum.enum.MARRIOTT,
      },
    ],
    offers: [
      {
        amount: [{ amount: 150_000 }],
        spend: 6000,
        days: 180,
        credits: [],
        url: "https://www.americanexpress.com/us/credit-cards/card/marriott-bonvoy-brilliant/",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 150_000 }],
        spend: 5000,
        days: 90,
        credits: [],
        expiration: "2023-01-11",
      },
    ],
  },
  {
    name: "Marriott Bonvoy Business",
    issuer: schemas.IssuersEnum.enum.AMERICAN_EXPRESS,
    network: schemas.NetworksEnum.enum.AMERICAN_EXPRESS,
    currency: schemas.CurrenciesEnum.enum.MARRIOTT,
    isBusiness: true,
    annualFee: 125,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.americanexpress.com/us/credit-cards/business/business-credit-cards/amex-marriott-bonvoy-business-credit-card/",
    imageUrl: "/images/amex/marriott-bonvoy-business.webp",
    credits: [],
    offers: [
      {
        amount: [{ amount: 0 }],
        spend: 3000,
        days: 90,
        credits: [
          {
            description: "3x FNC up to 50k per",
            weight: 0.75,
            value: 150_000,
            currency: schemas.CurrenciesEnum.enum.MARRIOTT
          }
        ],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 0 }],
        spend: 3000,
        days: 90,
        credits: [
          {
            description: "3x FNC up to 50k per",
            weight: 0.75,
            value: 150_000,
          }
        ],
      },
      {
        amount: [{ amount: 125_000 }],
        credits: [],
        spend: 5000,
        days: 90,
      },
      {
        amount: [{ amount: 75_000 }],
        spend: 3000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    name: "Platinum",
    issuer: schemas.IssuersEnum.enum.AMERICAN_EXPRESS,
    network: schemas.NetworksEnum.enum.AMERICAN_EXPRESS,
    currency: schemas.CurrenciesEnum.enum.AMERICAN_EXPRESS,
    isBusiness: false,
    annualFee: 695,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.americanexpress.com/us/credit-cards/card/platinum/",
    imageUrl: "/images/amex/platinum.webp",
    credits: [
      {
        value: 200,
        description: "Hotel Credit",
        weight: 0.7,
      },
      {
        value: 100,
        description: "Bi-yearly $50 Saks Credit",
        weight: 0.6,
      },
      {
        value: 200,
        description: "$20/mo Digital Entertainment Credit",
        weight: 0.6,
      },
      {
        value: 200,
        description: "$15/mo Uber Cash",
        weight: 0.7,
      },
      {
        value: 200,
        description: "Airline Fee Credit",
        weight: 0.4,
      },
      {
        value: 155,
        description: "Walmart+ Credit",
        weight: 0.2,
      },
      {
        value: 189,
        description: "CLEAR Credit",
        weight: 0.2,
      },
    ],
    offers: [
      {
        amount: [{ amount: 100_000 }],
        spend: 6000,
        days: 180,
        credits: [],
        url: "https://resy.com/amex-offers?date=2022-11-04&seats=2",
        details: "10x on $25k dining spend not factored in.",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 150_000 }],
        spend: 6000,
        days: 180,
        credits: [],
        expiration: "2022-11-01",
      },
    ],
  },
  {
    name: "Platinum (Schwab)",
    issuer: schemas.IssuersEnum.enum.AMERICAN_EXPRESS,
    network: schemas.NetworksEnum.enum.AMERICAN_EXPRESS,
    currency: schemas.CurrenciesEnum.enum.AMERICAN_EXPRESS,
    isBusiness: false,
    annualFee: 695,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.schwab.com/credit-cards#panel--50-media-right-117911",
    imageUrl: "/images/amex/platinum-schwab.webp",
    credits: [
      {
        value: 200,
        description: "Hotel Credit",
        weight: 0.8,
      },
      {
        value: 200,
        description: "$20/mo Digital Entertainment Credit",
        weight: 0.6,
      },
      {
        value: 200,
        description: "$15/mo Uber Cash",
        weight: 0.7,
      },
      {
        value: 200,
        description: "Airline Fee Credit",
        weight: 0.4,
      },
      {
        value: 155,
        description: "Walmart+ Credit",
        weight: 0.2,
      },
      {
        value: 189,
        description: "CLEAR Credit",
        weight: 0.2,
      },
    ],
    offers: [
      {
        amount: [{ amount: 80_000 }],
        spend: 6000,
        days: 180,
        credits: [],
        url: "https://www.schwab.com/credit-cards#panel--50-media-right-117911",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 100_000 }],
        credits: [],
        spend: 6000,
        days: 180,
      },
    ],
  },
  {
    name: "Platinum (Morgan Stanley)",
    issuer: schemas.IssuersEnum.enum.AMERICAN_EXPRESS,
    network: schemas.NetworksEnum.enum.AMERICAN_EXPRESS,
    currency: schemas.CurrenciesEnum.enum.AMERICAN_EXPRESS,
    isBusiness: false,
    annualFee: 695,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://apply.americanexpress.com/amex-morgan-stanley-credit-cards/?page_url=1",
    imageUrl: "/images/amex/platinum-morgan-stanley.webp",
    credits: [
      {
        value: 200,
        description: "Hotel Credit",
        weight: 0.8,
      },
      {
        value: 200,
        description: "$20/mo Digital Entertainment Credit",
        weight: 0.6,
      },
      {
        value: 200,
        description: "$15/mo Uber Cash",
        weight: 0.7,
      },
      {
        value: 200,
        description: "Airline Fee Credit",
        weight: 0.4,
      },
      {
        value: 155,
        description: "Walmart+ Credit",
        weight: 0.2,
      },
      {
        value: 189,
        description: "CLEAR Credit",
        weight: 0.2,
      },
    ],
    offers: [
      {
        amount: [{ amount: 100_000 }],
        spend: 6000,
        days: 180,
        credits: [],
        details: "Requires a relationship with Morgan Stanley.",
        url: "https://apply.americanexpress.com/amex-morgan-stanley-credit-cards/?page_url=1",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 125_000 }],
        credits: [],
        spend: 6000,
        days: 180,
        expiration: "2023-01-11",
      },
    ],
  },
  {
    name: "Marriott Bonvoy Bevy",
    issuer: schemas.IssuersEnum.enum.AMERICAN_EXPRESS,
    network: schemas.NetworksEnum.enum.AMERICAN_EXPRESS,
    currency: schemas.CurrenciesEnum.enum.MARRIOTT,
    isBusiness: false,
    annualFee: 250,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.americanexpress.com/us/credit-cards/card/marriott-bonvoy-bevy/",
    imageUrl: "/images/amex/marriott-bonvoy-bevy.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 125_000 }],
        spend: 5000,
        days: 180,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 125_000 }],
        credits: [],
        spend: 4000,
        days: 90,
      },
    ],
  },
  {
    name: "Lowes",
    issuer: schemas.IssuersEnum.enum.AMERICAN_EXPRESS,
    network: schemas.NetworksEnum.enum.AMERICAN_EXPRESS,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: true,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.americanexpress.com/us/credit-cards/card-application/apply/lowes-business-rewards-card/42472-9-0#/",
    imageUrl: "/images/amex/lowes-business.webp",
    credits: [],
    offers: [
      {
        amount: [{ amount: 0 }],
        spend: 0,
        days: 90,
        credits: [
          {
            value: 100,
            description: "Automatic statement credit",
            weight: 1,
          },
        ],
        url: "https://www.americanexpress.com/us/credit-cards/card-application/apply/lowes-business-rewards-card/42472-9-0#/",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 0 }],
        spend: 0,
        days: 90,
        credits: [
          {
            value: 100,
            description: "Automatic statement credit",
            weight: 1,
          },
        ],
      },
    ],
  },
  {
    name: "Schwab Investor",
    issuer: schemas.IssuersEnum.enum.AMERICAN_EXPRESS,
    network: schemas.NetworksEnum.enum.AMERICAN_EXPRESS,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.schwab.com/public/schwab/investing/accounts_products/credit_cards?ENTRY_POINT=IIAH",
    imageUrl: "/images/amex/schwab-investor.webp",
    credits: [],
    offers: [
      {
        amount: [{ amount: 200 }],
        spend: 1000,
        days: 90,
        credits: [],
        url: "https://www.schwab.com/public/schwab/investing/accounts_products/credit_cards?ENTRY_POINT=IIAH",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 200 }],
        spend: 1000,
        days: 90,
        credits: [],
      },
    ],
  },
];
