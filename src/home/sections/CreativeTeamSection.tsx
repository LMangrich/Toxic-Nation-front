import placeHolderAvatar from '../../assets/pixel_art_avatar.webp';
import { Palette, BookOpen, Monitor, Music } from 'lucide-react';

const teamMembers = [
  {
    role: 'ART DIRECTOR',
    icon: Palette,
    name: 'Mateus Heinz',
    description: 'Leading the visual development with 10+ years in game art direction and concept design.',
    image: placeHolderAvatar,
  },
  {
    role: 'NARRATIVE',
    icon: BookOpen,
    name: 'Livia Silva',
    description: 'Crafting the dystopian lore and interconnected story threads of the Toxic Nation universe.',
    image: placeHolderAvatar
  },
  {
    role: 'TECH ART',
    icon: Monitor,
    name: 'Helena Licheski',
    description: 'Bridging art and technology to create this unique interactive artbook experience.',
    image: placeHolderAvatar,
  },
  {
    role: 'SOUND DESIGN',
    icon: Music,
    name: 'Lucca Kyuzans',
    description: 'Designing atmospheric soundscapes that bring the toxic world to life.',
    image: placeHolderAvatar,
  },
];

export const CreativeTeamSection = () => {
  return (
    <section className="px-4 sm:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-[36px] md:text-[64px] font-nemesys text-white mb-6">
            CREATIVE TEAM
          </h2>
          <p className="text-18 font-semibold font-cabin text-white">
            Meet the talented individuals behind Toxic Nation
          </p>
        </div>

        <div className="mx-auto max-w-xs md:max-w-lg lg:max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[28px] mb-[46px] md:mb-[92px]">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative min-w-[240px] group transition-transform duration-300 hover:scale-110 z-10 hover:z-20"
            >
              {/* Main Container: Swaps Shadow and Border on Hover */}
              <div className="h-[313px] relative bg-dark-toxic-green/40 border-2 border-toxic-green py-[19px] px-4 shadow-[4px_4px_4px_0px_#91FF2240,-2px_-2px_4px_0px_#91FF2240] transition-all duration-300 group-hover:bg-[#40335366] group-hover:border-[#BC4A9B] group-hover:shadow-[4px_4px_4px_0px_#9747FF80,-2px_-2px_4px_0px_#9747FF80]">
                {/* Corner Squares */}
                <div className="absolute left-0 top-0 -translate-y-2 -translate-x-1.5 h-4 w-4 bg-toxic-green transition-colors duration-300 group-hover:bg-[#BC4A9B]" />
                <div className="absolute right-0 bottom-0 translate-y-2 translate-x-1.5 h-4 w-4 bg-toxic-green transition-colors duration-300 group-hover:bg-[#BC4A9B]" />
                
                {/* Role Badge */}
                <div className="bg-light-toxic-green/40 border border-toxic-green max-w-[126px] px-2 py-1.5 flex items-center gap-2 w-full transition-all duration-300 group-hover:bg-[#40335366] group-hover:border-[#BC4A9B]">
                  <member.icon className="w-[13px] h-[13px] text-soft-toxic-green transition-colors duration-300 group-hover:text-[#BC4A9B]" strokeWidth={3}/>
                  <span className="text-12 font-cabin text-soft-toxic-green uppercase font-semibold transition-colors duration-300 group-hover:text-[#BC4A9B]">
                    {member.role}
                  </span>
                </div>

                  <div className="relative my-[7px]">
                      {/* Inner Frame Shapes */}
                      <div className="w-full bg-light-toxic-green/40 h-[131px] border-l border-r border-toxic-green z-0 relative transition-all duration-300 group-hover:bg-[#40335366] group-hover:border-[#BC4A9B] before:content-[''] before:absolute before:h-[1px] before:w-[132px] before:bg-toxic-green group-hover:before:bg-[#BC4A9B] after:absolute after:bottom-0 after:h-[1px] after:w-[124px] after:bg-toxic-green group-hover:after:bg-[#BC4A9B]">
                        <div className='bg-light-toxic-green/40 h-[40px] w-[99px] right-0 -top-[40px] border-t border-l border-r border-toxic-green z-99 ml-auto -translate-y-[40px] translate-x-[1px] transition-all duration-300 group-hover:bg-[#40335366] group-hover:border-[#BC4A9B]'/>
                        <div className='bg-light-toxic-green/40 h-[30px] w-[107px] border-b border-l border-r border-toxic-green right-0 -bottom-[30px] z-99 ml-auto translate-y-[91px] translate-x-[1px] transition-all duration-300 group-hover:bg-[#40335366] group-hover:border-[#BC4A9B]'/>
                      </div>

                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="absolute max-w-[158px] grayscale scale-x-[-1] -bottom-[29px] right-[2px] z-10 transition-all duration-300"
                      style={{
                        clipPath: 'polygon(0 0, 100% 0, 100% 84%, 65% 84%, 65% 100%, 0 100%)'
                      }}
                    /> 
                  </div>

                  <h3 className="relative z-20 px-2 text-14 w-full max-w-[117px] border border-toxic-green font-cabin font-semibold text-toxic-green bg-dark-toxic-green/40 transition-all duration-300 group-hover:text-[#BC4A9B] group-hover:border-[#BC4A9B] group-hover:bg-[#40335366]">
                    {member.name}
                  </h3>

                <p className="relative z-20 text-14 font-cabin text-soft-toxic-green mt-3 h-[76px] transition-colors duration-300 group-hover:text-[#BC4A9B]">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className='border-b border-toxic-green scale-x-[85%]'/>
        <div className='flex flex-row justify-between -translate-y-2'>
          <div className='flex flex-row gap-1 items-start'>
              <div className="h-4 w-4 bg-toxic-green" />
              <div className="h-4 w-4 bg-toxic-green" />
              <div className="h-4 w-4 bg-toxic-green" />
          </div>
          <div className='flex flex-row gap-1 self-end'>
              <div className="h-4 w-4 bg-toxic-green" />
              <div className="h-4 w-4 bg-toxic-green" />
              <div className="h-4 w-4 bg-toxic-green" />
          </div>
        </div>
      </div>
    </section>
  );
};
