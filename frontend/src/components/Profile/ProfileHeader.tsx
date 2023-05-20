import { Typography } from '@material-tailwind/react'
import { Contact, Skill } from '../../sharedTypes'
import Flag from 'react-world-flags'
import countries from 'i18n-iso-countries'
import english from 'i18n-iso-countries/langs/en.json'

countries.registerLocale(english)

export const ProfileHeader = ({
  name,
  img,
  position,
  contact,
}: {
  name: string
  img: string
  position?: string
  contact?: Contact
  skills?: Skill[]
}) => {
  const getCountryCode = (countryName: string): string => {
    const countryCodes = countries.getNames('en')
    const foundCountryCode = Object.keys(countryCodes).find(
      (code) => countryCodes[code].toLowerCase() === countryName.toLowerCase()
    )
    return foundCountryCode || ''
  }

  return (
    <section className="relative rounded-2xl no-elevate flex flex-col bg-surface h-[12rem] md:h-[18rem] w-full md:mt-4">
      <img
        className="rounded-full object-cover w-24 h-24 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-44 lg:w-44 absolute top-1/2 left-4 md:left-10 transform -translate-y-1/2 border-4 border-surface"
        src={img}
        alt="img"
      />
      <div className="bg-[url('./src/components/assets/bg-gradient-3.png')] bg-cover bg-left w-full h-1/2 rounded-2xl grid grid-cols-[1fr_3fr] place-content-center content-end">
        <Typography className="flex text-2xl md:text-4xl lg:text-5xl font-semibold text-background mb-2 col-start-2 col-span-2 ml-7 sm:ml-7 md:ml-7 xl:ml-[-3rem]">
          {name ?? 'Name'}
        </Typography>
      </div>

      <div className="grid grid-cols-[1fr_3fr] content-start w-full h-1/2">
        <section className="mb-2 col-start-2 col-span-2 ml-7 sm:ml-7 xl:ml-[-2.5rem] pt-3">
          <div>
            <Typography className="text-sm md:text-lg text-on-surface-variant">
              {position ?? 'Position'}
            </Typography>
            <div className="flex flex-row gap-1">
              {contact?.city && (
                <Flag
                  code={getCountryCode(contact.country)}
                  className="w-5 mt-1"
                />
              )}
              <Typography className="text-sm md:text-lg text-on-surface-variant ">
                {contact?.city}, {contact?.country}
              </Typography>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
