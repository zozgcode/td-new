import { IoWalletOutline } from "react-icons/io5";
import { MdCurrencyExchange } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";


export const fMenuLink = [
    {
      label: "Accounts",
      icon: <IoWalletOutline />,
      slug: "/accounts",
    },
    {
      label: "Pay & Transfer",
      icon: <MdCurrencyExchange />,
      slug: "/accounts/pay-transfer",
    },
    {
      label: "Menu",
      icon: <IoMdMenu />,
      slug: "/accounts/menu",
    },
  ];