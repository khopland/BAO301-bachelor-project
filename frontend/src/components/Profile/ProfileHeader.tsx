export const ProfileHeader = ({ name,img }:{name:string,img?:string}) => {

    return (
      <>
        <section className="rounded-2xl no-elevate bg-gradient-to-r from-purple-500 to-pink-500 text-on-primary  max-sm:flex-col flex gap-5 basis-4/6 px-10 py-4 sm:py-10 col-span-4 items-center justify-right">
            <>
            {img ?<img className="circle max-h-24 max-w-xs" src={img} alt="img" />: <></>}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold">{name}</h1>
          </>
        </section>
      </>
    );
  };