import React from 'react';
import { FaFacebook, FaTwitter, FaDiscord, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-backblue/[0.9] text-lightblue py-8 md:px-[8%]">
      <div className="mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

           {/* Links */}
          <div>
            <h3 className="text-lg md:text-2xl mb-2 md:mb-4">Quick Links</h3>
            <ul className="text-sm secondary-text flex flex-row justify-center space-x-5">
              <li><a href="/about" className="hover:text-lightblue">About Rivalium</a></li>
              <li><a href="/feedback" className="hover:text-lightblue">Help Us Improve</a></li>
              <li><a href="/patch-notes" className="hover:text-lightblue">Server Status</a></li>
              <li><a href="/support" className="hover:text-lightblue">Support</a></li>
            </ul>
            </div>

          {/* About Rivalium */}
          <div>
            <h3 className="text-lg md:text-2xl mb-2 md:mb-4">About Rivalium</h3>
            <p className="text-sm secondary-text">
              Rivalium is a 2.5D competitive, high-octane multiplayer platformer. Master your Rivals, conquer
              unique maps, and climb the ranks to prove your skills in an epic battle of strategy and precision.
            </p>
          </div>

          
          

          {/* Social Media */}
          <div>
            <h3 className="text-lg md:text-2xl mb-2 md:mb-4">Follow Us</h3>
            <div className="flex flex-row justify-center space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl hover:text-lightblue" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl hover:text-lightblue" />
              </a>
              <a href="https://discord.rivalium.online" target="_blank" rel="noopener noreferrer">
                <FaDiscord className="text-2xl hover:text-lightblue" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl hover:text-lightblue" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-2xl hover:text-lightblue" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-lightblue/[0.1] my-6" />

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          {/* Legal */}
          <div>
            <ul className="secondary-text space-x-3 flex flex-row justify-center text-xs">
              <li><a href="/terms" className="hover:text-lightblue">Terms of Service</a></li>
              <li><a href="/privacy" className="hover:text-lightblue">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Game Info */}
          <div>
            <p className="secondary-text text-xs">
              © {new Date().getFullYear()} Rivalium. All Rights Reserved. Rivalium and its logo are trademarks of
              Rivalium. All other trademarks belong to their respective owners.
            </p>
          </div>

          {/* Contact */}
          <div>
            <ul className="space-y-2 secondary-text flex flex-col items-center">
              <li>
                <a href="mailto:support@rivalium.online" className="flex items-center gap-2 hover:text-lightblue">
                  <FaEnvelope className="text-xl" /> support@rivalium.online
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
