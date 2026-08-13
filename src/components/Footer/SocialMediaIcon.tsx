// icons
import { FaInstagram, FaFacebook, FaThreads } from 'react-icons/fa6';

const SocialMediaIcon = ({ id }: { id: string }) => {
  switch (id.toLowerCase()) {
    case 'instagram':
      return <FaInstagram />;
    case 'facebook':
      return <FaFacebook />;
    case 'threads':
      return <FaThreads />;
    default:
      return <></>;
  }
};

export default SocialMediaIcon;
