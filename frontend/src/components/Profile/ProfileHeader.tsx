import { Typography } from '@material-tailwind/react'
import { Contact } from '../../sharedTypes'
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
}) => {
  const getCountryCode = (countryName: string): string => {
    const countryCodes = countries.getNames('en')
    const foundCountryCode = Object.keys(countryCodes).find(
      (code) => countryCodes[code].toLowerCase() === countryName.toLowerCase()
    )
    return foundCountryCode || ''
  }

  return (
    <section className="relative rounded-2xl no-elevate flex flex-col bg-surface h-[20rem] w-full ">
      <div className="bg-[url('./src/components/assets/bg-gradient-3.png')] bg-cover bg-left w-full h-1/3 rounded-2xl"></div>
      <img
        className="rounded-full object-cover h-32 w-32 md:h-44 md:w-44 absolute top-1/3 left-5 md:left-10 transform -translate-y-1/2 border-4 border-surface"
        src={img}
        alt="img"
      />
      <div className="pl-[7.5rem] md:pl-[12rem] flex flex-col flex-shrink w-fit absolute top-1/3 left-10 transform -translate-y-1/3">
        <Typography className="flex text-2xl md:text-4xl font-semibold text-background mb-2.5">
          {name}
        </Typography>
        <Typography className="text-base md:text-lg text-on-surface-variant">
          {position}
        </Typography>
        <Typography className="text-base md:text-lg text-on-surface-variant flex flex-row gap-1">
          {contact?.city && (
            <Flag code={getCountryCode(contact.country)} className="w-5 mt-1" />
          )}
          {contact?.city}, {contact?.country}
        </Typography>
        <Typography className="text-base md:text-lg text-on-surface-variant">
          {contact?.email}
        </Typography>
      </div>
    </section>
  )
}
