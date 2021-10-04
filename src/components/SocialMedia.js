import { SocialIcon } from "react-social-icons";

const SocialMedia = () => {
  return (
    <div className="social-media">
      <SocialIcon url="https://github.com/ZakkFast" target='_blank' />
      <SocialIcon url="https://www.linkedin.com/in/zachary-fast/" target='_blank' />
      <SocialIcon url="mailto:webdev@zakkfast.com" target='_blank' />
    </div>
  );
};

export default SocialMedia;
