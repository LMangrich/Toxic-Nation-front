import map from "../../assets/freepik__pixel-art-pixel-art-holographic-topographic-map-in__52275 1.webp"
import { CardMapWavingHandIcon, CardMapImagesIcon, CardMapProfileIcon, CardMapPaperIcon, CardMapChatIcon } from "../../components/Icons/Icons"
import { MapIconWrapper } from "../components/MapIconWrappet";

const legendItems = [
  { color: 'bg-toxic-green border-toxic-green', label: 'Unexplored', textColor: 'text-[#D6F264]' },
  { color: 'bg-toxic-green border-toxic-green', label: 'Visited', textColor: 'text-[#D6F264]' },
  { color: 'bg-toxic-pink border-toxic-pink', label: 'Secrets', textColor: 'text-toxic-pink' },
];

const barcodeVertical = Array(6).fill(null);
const barcodeHorizontal = Array(3).fill(null);

export const DiscoverMapSection = () => {
  return (
    <section className="px-2 sm:px-16 py-6 sm:py-9">
      <div className="mx-auto text-center">
          <div className="relative max-w-[1200px] max-h-[870px] mx-auto">
              <div className="absolute top-5 left-0 w-full overflow-hidden z-20 pointer-events-none">
                <div className="animate-scroll-left">
                  <h2 className="text-[20px] sm:text-[64px] font-nemesys text-white whitespace-nowrap inline-block" style={{ filter: 'drop-shadow(0px 0px 7.72px rgba(89, 193, 53, 0.4))' }}>
                    Discover the hidden secrets
                  </h2>
                </div>
              </div>
              <div className="absolute top-5 left-0 w-full overflow-hidden z-20 pointer-events-none">
                <div className="animate-scroll-left-delayed">
                  <h2 className="text-[20px] sm:text-[80px] text-white" style={{ filter: 'drop-shadow(0px 0px 7.72px rgba(89, 193, 53, 0.4))' }}>
                    Discover the hidden secrets
                  </h2>
                </div>
              </div>
              
              {/* Borda superior */}
              <div className="absolute inset-0 border-t-2 border-r-2 border-highlight-toxic-green/40 scale-[94.5%]
               before:content-[''] before:absolute before:top-[1px] before:left-0 before:w-[2px] before:h-[88.9%] before:bg-highlight-toxic-green/40
               after:content-[''] after:absolute after:bottom-0 after:right-0 after:h-[2px] after:w-[83.75%] after:bg-highlight-toxic-green/40" 
              />
              <div className="absolute inset-0 border-t-2 border-r-2 border-highlight-toxic-green/40 scale-x-[93.8%] scale-y-[93.5%]
               before:content-[''] before:absolute before:top-0 before:left-0 before:w-[2px] before:h-[89.4%] before:bg-highlight-toxic-green/40
               after:content-[''] after:absolute after:bottom-0 after:right-0 after:h-[2px] after:w-[84%] after:bg-highlight-toxic-green/40" 
              />

              
              <div className="absolute bottom-[2.7%] left-[17.9%] h-[6px] w-0 border-l-2 border-highlight-toxic-green/40 scale-x-[93.8%] scale-y-[93.5%]" />
              <div className="absolute bottom-[12.9%] left-[2.75%] h-2 w-[6px] border-b-2 border-highlight-toxic-green/40 scale-x-[93.8%] scale-y-[93.5%]" />

            <img src={map} 
                alt="Map Placeholder" 
                className="max-w-[1200px] max-h-[870px] w-full h-full object-cover"
            />
            
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute left-0 top-0 w-7 h-full bg-gradient-to-r from-black to-transparent" />
              <div className="absolute right-0 top-0 w-7 h-full bg-gradient-to-l from-black to-transparent" />
            </div>

            <MapIconWrapper label="Character Vault" className="absolute top-[18%] left-[15%]">
              <CardMapProfileIcon className="w-5 h-5 sm:w-auto sm:h-auto" />
            </MapIconWrapper>

            <MapIconWrapper label="Welcome Hall" className="absolute top-[22%] left-[43%]">
              <CardMapWavingHandIcon className="text-soft-toxic-green w-5 h-5 sm:w-auto sm:h-auto" />
            </MapIconWrapper>

            <MapIconWrapper label="Environment Gallery" variant="secondary" className="absolute top-[22%] left-[61.5%]">
              <CardMapWavingHandIcon className="w-5 h-5 sm:w-auto sm:h-auto" />
            </MapIconWrapper>

            <MapIconWrapper label="Lore Chamber" className="absolute top-[18.5%] left-[72%]">
              <CardMapPaperIcon className="w-5 h-5 sm:w-auto sm:h-auto" />
            </MapIconWrapper>

            <MapIconWrapper label="Fellowship Hall" className="absolute top-[25%] right-[10%]">
              <CardMapChatIcon className="w-5 h-5 sm:w-auto sm:h-auto" />
            </MapIconWrapper>

            <MapIconWrapper label="Environment Gallery" variant="secondary" className="absolute top-[37%] left-[30%]">
              <CardMapWavingHandIcon className="w-5 h-5 sm:w-auto sm:h-auto" />
            </MapIconWrapper>

            <MapIconWrapper label="Environment Gallery" className="absolute bottom-[35%] left-[32%]">
              <CardMapImagesIcon className="w-5 h-5 sm:w-auto sm:h-auto" />
            </MapIconWrapper>

            <MapIconWrapper label="Environment Gallery" variant="secondary" className="absolute bottom-[25%] right-[26%]">
              <CardMapWavingHandIcon className="w-5 h-5 sm:w-auto sm:h-auto" />
            </MapIconWrapper>

            {/* Legend Box */}
            <div className="absolute bottom-[10%] right-[8%] bg-[#24523B66]/40 border-2 border-toxic-green p-4 shadow-[4px_4px_4px_0px_#91FF2240,-2px_-2px_4px_0px_#91FF2240] scale-[0.4] origin-bottom-right sm:scale-[0.6] md:scale-100">              
            <div className="absolute right-0 top-0 -translate-y-2 translate-x-1.5 h-4 w-4 bg-toxic-green" />
              <div className="absolute left-0 top-0 -translate-y-2 -translate-x-1.5 h-4 w-4 bg-toxic-green" />
              <div className="absolute right-0 bottom-0 translate-y-2 translate-x-1.5 h-4 w-4 bg-toxic-green" />
              <div className="absolute left-0 bottom-0 translate-y-2 -translate-x-1.5 h-4 w-4 bg-toxic-green" />
            <div className="space-y-2 text-left">
                {legendItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className={`w-4 h-4 ${item.color} border`}></div>
                    <span className={`${item.textColor} text-16 font-cabin`}>{item.label}</span>
                  </div>
                ))}
                <div className="text-[#F597B9] text-12 md:text-16 font-cabin mt-2 md:mt-3">
                  Found 0/1
                </div>
                <div className="mt-3 pt-2 border-t border-toxic-green/30">
                  <div className="w-full h-2 bg-black border border-toxic-green">
                    <div className="h-full bg-toxic-green" style={{ width: '0%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Left Barcode */}
            <div className="absolute bottom-[2.8%] left-[2.8%] scale-[0.5] origin-bottom-left sm:scale-100">
              <div className="flex gap-1">
                <div className="flex flex-row gap-1.5">
                  {barcodeVertical.map((_, i) => (
                    <div key={i} className="w-2.5 h-20 bg-toxic-green"></div>
                  ))}
                </div>
                <div className="flex flex-col gap-1.5 self-end">
                  {barcodeHorizontal.map((_, i) => (
                    <div key={i} className="w-20 h-2.5 bg-toxic-green"></div>
                  ))}
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}

//arrynmar esse pr dps