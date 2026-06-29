import Button from '../../components/Button/Button';
import background_image from '../../assets/background_image.webp'
import video from "../../assets/video_toxic_nation.webp"
import { PlayIcon } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative px-4 sm:px-16 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: `url(${background_image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        <div className='relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-8 md:gap-12 w-full items-start'>
            <div className='w-full'>
                <h2 className="max-w-md text-24 md:text-48 font-cabin font-semibold leading-tight mb-4">
                    Where light cannot reach, hope must carve its own path.
                </h2>
                
                <p className="text-12 md:text-16 mb-8 max-w-sm">
                    An interactive artbook experience - Explore a dystopian narrative through concept art, stories, and secrets about the game.
                </p>

                <div className="w-full flex flex-row flex-wrap gap-4 items-start">
                    <Button variant="primary">
                    Non-Linear Exploration
                    </Button>
                    <Button variant="primary">
                    Exclusive Content
                    </Button>
                    <Button variant="secondary" className='w-[131px] hover:w-[155px] h-[34px] hover:h-[36px] hover:-mb-[5px] hover:-translate-y-0.5 transition-all duration-300'>
                    Hidden Secrets
                    </Button>
                </div>
            </div>

            <div className="w-full">
              <div className="relative w-full max-w-[381px] h-[220px] sm:h-[284px] overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer">
                <img 
                  src={video} 
                  alt="Toxic Nation Video Thumbnail" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute right-5 bottom-5 flex items-center justify-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full border-[6px] border-white cursor-pointer hover:scale-110 transition-transform">
                        <PlayIcon className="fill-white w-6 h-6 translate-x-0.5" />
                    </div>
                </div>
              </div>
            </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto border-b border-toxic-green">
            <h1 className="mt-8 md:mt-20 text-[52px] sm:text-[96px] md:text-[144px] text-left text-toxic-green font-hitobito font-semibold mb-4">
                Toxic Nation
            </h1>

            <div className='max-w-5xl flex flex-row justify-between mb-[30px]'>
                <span className='font-hitobito text-20 text-toxic-green/40'>
                    Team TN
                </span>

                <span className='font-hitobito text-20 text-toxic-green/40'>
                    All rights reserved
                </span>
            </div>
        </div>
    </section>
  );
};

export default HeroSection;
