import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/cascadeUiIconblack.svg'
interface FooterLink {
  name: string;
  href: string;
}

interface SocialLink {
  name: string;
  href: string;
  icon: React.ElementType;
}

const navigation: { [key: string]: FooterLink[] } = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
};

const social: SocialLink[] = [
  { name: 'Facebook', href: '#', icon: FaFacebook },
  { name: 'Twitter', href: '#', icon: FaTwitter },
  { name: 'Instagram', href: '#', icon: FaInstagram },
  { name: 'LinkedIn', href: '#', icon: FaLinkedin },
];

const Footer: React.FC = () => {
  return (
    <footer className=" mt-28 border-t border-gray-700 ">
      <div className=" mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <div className='flex flex-row gap-2'>
                <img src={logo} height={30} width={30}></img><h3 className="text-xl font-semibold uppercase tracking-wider">Cascade UI</h3>
                </div>
                <ul className="mt-4 space-y-4">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
                  
            </div>
          </div>
          <div className="mt-8 xl:mt-0">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Send your feedback or just say hi</h3>
         
           <div className='text-blue-600'>@ir0nic</div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {social.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; {new Date().getFullYear()} Cascade UI. No rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;