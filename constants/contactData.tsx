import { Email } from "@/app/assets/svg/contacts/Email";
import { Location } from "@/app/assets/svg/contacts/Location";
import { Phone } from "@/app/assets/svg/contacts/Phone";

export const contactData = [
  {
    src: <Location className="h-full w-full" />,
    title: "Our Restaurant Address",
    value:
      "Suite 02, Level 12, Sahera Tropical Center 218 New Elephant Road, Dhaka",
  },
  {
    src: <Phone className="h-full w-full" />,
    title: "Our Phone Number",
    value: ["+8801678170593,02-9611936", "01919-264687"],
  },
  {
    src: <Email className="h-full w-full" />,
    title: "Our Website Address",
    value: ["info@gmail.com", "http://info.com"],
  },
];
