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
    <section className="relative rounded-2xl no-elevate flex flex-col bg-surface h-96 w-full">
      <div className="bg-[url('./src/components/assets/bg-gradient-3.png')] bg-cover bg-left w-full h-1/2 rounded-2xl"></div>
      <img
        className="rounded-full object-cover h-32 w-32 md:h-44 md:w-44 absolute top-1/2 left-10 transform -translate-y-1/2 border-4 border-surface"
        src={img}
        alt="img"
      />
      <div className="pl-10 md:pl-[14.5rem] pt-20 md:pt-4 flex flex-col flex-shrink w-fit">
        <Typography className="flex text-2xl md:text-4xl font-semibold text-on-primary-container">
          {name}
        </Typography>
        <Typography className="text-base md:text-lg text-on-surface-variant flex flex-col md:flex-row">
          <span className="mr-5 flex">{position}</span>
          <span className="flex flex-wrap-reverse gap-2">
            {contact?.city}
            {contact?.country && (
              <Flag
                code={getCountryCode(contact.country)}
                className="w-5 mt-1.5"
              />
            )}
          </span>
        </Typography>
      </div>
    </section>
  )
}
