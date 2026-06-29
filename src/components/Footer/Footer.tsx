import { TwitterIcon, InstagramIcon, EmailIcon } from '../Icons/Icons';

export const Footer = () => {
  return (
    <footer className="py-[49px]">
      <div className="max-w-6xl mx-auto px-4 sm:px-16">
        <div className="max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-14 mb-12">
          <div>
            <h2 className="text-32 font-nemesys mb-4">
              <span className="text-white">TOXIC </span>
              <span className="text-toxic-green">NATION</span>
            </h2>
            <p className="pr-3 max-w-sm text-16 font-cabin text-toxic-green mb-8">
              An interactive artbook experience - Explore a dystopian narrative through concept art, stories, and secrets about the game.
            </p>

            <div className="flex gap-4">
              {[
                { Icon: TwitterIcon, href: '#' },
                { Icon: InstagramIcon, href: '#' },
                { Icon: EmailIcon, href: '#' }
              ].map(({ Icon, href }, index) => (
                <a 
                  key={index}
                  href={href} 
                  className="w-10 h-10 bg-toxic-green/40 border border-toxic-green/40 flex items-center justify-center hover:bg-toxic-green/30 transition-colors"
                >
                  <Icon className="w-4 h-4 text-toxic-green" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-16  font-semibold font-cabin text-white mb-6">
              NAVIGATION
            </h3>
            
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1.5 h-1.5 bg-toxic-green"></div>
              <div className="w-1.5 h-1.5 bg-toxic-green/40"></div>
              <div className="w-1.5 h-1.5 bg-toxic-green/40"></div>

              <div className="flex-1 h-0.5 bg-toxic-green/30"></div>
              <div className="w-1.5 h-1.5 bg-toxic-green/40"></div>
              <div className="w-1.5 h-1.5 bg-toxic-green/40"></div>
              <div className="w-1.5 h-1.5 bg-toxic-green"></div>
            </div>

            <nav>
              <ul className="space-y-4">
                {['Home', 'Explore', 'Team', 'Steam'].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="flex items-center gap-2 text-16 font-cabin text-toxic-green hover:text-highlight-toxic-green transition-colors"
                    >
                      <span className="w-1 h-1 bg-toxic-green/40"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="pt-5 border-t border-toxic-green/40">
          <p className="text-12 font-cabin text-toxic-green/40">
            © 2025 Toxic Nation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
