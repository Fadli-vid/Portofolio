import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Address from "./Address";
import Form from "./Form";
import SocialMedia from "../common/socialMedia/SocialMedia";

const addressData = [
  {
    icon: faLocationDot,
    title: "Address",
    description: "New Mexico, 31134",
  },
  {
    icon: faEnvelope,
    title: "My Email",
    description: "mymail@mail.com",
  },
  {
    icon: faPhone,
    title: "Call Me Now",
    description: "00-123 00000",
  },
];

const Contact = () => {
  return (
    <div className="relative -bottom-15 -mt-15 z-10 px-2 text-base-content">
      <div
        className="content p-4 md:p-10 lg:p-22 bg-base-100 rounded-2xl shadow-xl shadow-black/10 dark:shadow-white/5 transition-colors duration-300"
        id="contact"
      >
        <div className="flex flex-col-reverse lg:gap-5 xl:gap-25.75 lg:flex-row justify-between">
          <div>
            <div>
              <p className="text-[35px] max-lg:hidden font-semibold text-nowrap">
                Let’s discuss your Project
              </p>
              <p className="text-[12px] xs:text-[14px] sm:text-lg md:text-lg max-lg:text-center pt-4 font-normal opacity-70">
                I'm available for freelance work. Drop me a line if you have a
                project you think I'd be a good fit for.
              </p>
            </div>
            <div className="my-8.75 sm:max-lg:flex justify-between items-center gap-4">
              {addressData.map((item, index) => (
                <Address item={item} key={index} />
              ))}
            </div>
            <div className="w-full max-lg:text-center max-md:mb-4">
              <SocialMedia />
            </div>
          </div>
          <div className="w-full overflow-y-scroll py-6.5 lg:overflow-hidden">
            <p className="text-xl mb-2 xs:text-2xl sm:text-2xl md:text-[38px] font-semibold lg:hidden text-center">
              Let’s discuss your Project
            </p>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
