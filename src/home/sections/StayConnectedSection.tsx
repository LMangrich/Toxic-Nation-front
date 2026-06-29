import pixel_art from '../../assets/pixel_art.png';
import toxicNationLogo from '../../assets/toxic_nation_lettering.png';
import { MicrosoftIcon, SteamIcon } from '../../components/Icons/Icons';

export const StayConnectedSection = () => {
  return (
    <section className="py-9 max-w-7xl mx-auto px-4 sm:px-8">
        <div className='flex flex-col items-center mx-auto mb-12'>
          <h2 className="text-[36px] md:text-[64px] text-center font-nemesys text-white mb-5">
            STAY CONNECTED
          </h2>

          <p className="text-18 md:text-18 font-cabin text-white">
            wishlist our game, contribute to the evolution of Toxic Nation
          </p>
        </div>

        <div className='relative max-w-6xl mx-auto min-h-[407px]'>
          <img 
            src={pixel_art} 
            alt="Background" 
            className="absolute inset-0 w-full h-full object-cover z-0 
              opacity-35
              hue-rotate-[305deg]" 
            />
          
          <div className="absolute inset-0 pointer-events-none z-[1]">
            <div className="absolute left-0 top-0 w-2.5 h-full rounded-full bg-gradient-to-r from-black to-transparent" />
            <div className="absolute right-0 top-0 w-2.5 rounded-full h-full bg-gradient-to-l from-black to-transparent" />
            <div className="absolute top-0 left-0 right-0 h-2.5 bg-gradient-to-b from-black to-transparent" />
          </div>
          <div className='max-w-3xl mx-auto relative flex flex-col items-end z-10'>
            <div className='bg-[#333941] p-4 shadow-[4px_4px_4px_0_rgba(0,0,0,0.7),-4px_-4px_4px_0_rgba(0,0,0,0.7)]'>
              <div className="flex flex-row justify-between">
                <div className='flex flex-row items-center gap-3'>
                  <h3 className="text-24 font-bold font-cabin text-white">
                    Toxic Nation
                  </h3>
                  <span className="text-24 font-cabin text-[#B3B9D1]">
                    On Steam
                  </span>
                </div>
                <SteamIcon className='h-8 w-8 opacity-30'/>
              </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className='flex flex-col gap-8'>
              <div className="relative flex items-end w-full sm:w-[193px] h-[69px] bg-black overflow-hidden">
                <img 
                  src={pixel_art} 
                  alt="Game screenshot"
                  className="absolute h-[41px]  w-full bottom-0 opacity-80 hue-rotate-[305deg]" />

                  <img
                    src={toxicNationLogo}
                    alt="Toxic Nation Logo"
                    className="relative z-10 left-1/2 -translate-x-1/2 bottom-0.5 w-[92px] h-auto"
                  />
              </div>
                <div className='flex flex-row gap-2'>
                  <MicrosoftIcon className='h-4 w-4'/>
                  <SteamIcon className='h-4 w-5'/>
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <p className="text-14 font-cabin text-[#DAE0EA] mb-4">
                  Toxic Nation is a 2D pixel-art platformer that blends Metroidvania exploration with base expansion and resource management. Set in the year 2085, after biological and nuclear conflicts rendered the Earth's surface uninhabitable, humanity was forced to survive in vast underground cities built from scrap and forgotten technology.
                </p>
              </div>
            </div>      
          </div>

          <div className="flex items-center justify-end sm:-translate-y-8 sm:-translate-x-3.5 mt-3 sm:mt-0 relative z-50">
            <div className="flex items-center gap-3 text-16 sm:text-22 font-cabin text-white bg-[#1A7A3E] px-2.5 py-1.5 w-full sm:w-auto justify-between sm:justify-start">
              <span>Coming soon</span>
              <button className="bg-toxic-green text-white text-12 px-6 py-2.5 shadow-[0_4px_4px_0_rgba(0,0,0,0)]">
                + Wishlist on Steam
              </button>
            </div>
          </div>
          </div>
        </div>
    </section>
  );
};
