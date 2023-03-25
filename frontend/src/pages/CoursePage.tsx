import React from 'react';
import 'beercss';
import InfoItem from '../components/AboutCourse/InfoItem';
import AboutCourse from '../components/AboutCourse/AboutCourse';
import CourseDescription from '../components/AboutCourse/CourseDescription';
import ProviderDescription from '../components/AboutCourse/ProviderDescription';
import CourseHeader from '../components/AboutCourse/CourseHeader';

const courseTitle = 'AZ-204: Getting started';
const courseImage = 'src/components/Assets/course-illustration.jpg';
const courseDescription = 'Learn how to implement Azure compute solutions, create Azure Functions, implement and manage web apps, develop solutions utilizing Azure storage, implement authentication and authorization, and secure their solutions by using KeyVault and Managed Identities.';
const courseDescriptionLong = 'Learn how to implement Azure compute solutions, create Azure Functions, implement and manage web apps, develop solutions utilizing Azure storage, implement authentication and authorization, and secure their solutions by using KeyVault and Managed Identities. Students will also learn how to connect to and consume Azure services and third-party services, and include event- and message-based models in their solutions. The course also covers monitoring, troubleshooting, and optimizing Azure solutions. Audience Profile Students in this course are interested in Azure development or in passing the Microsoft Azure Developer Associate certification exam.';
const providerDescription = "Glasspaper consists of a number of companies that collectively add value to our customers through the combination of services and coordinated deliveries. We are organised in a traditional group structure with Glasspaper Group as the parent company. Glasspaper Group is an active owner in our companies. Everything we do should reflect our values of innovation, honesty, quality and commitment. Glasspaper Group owns the following companies: Glasspaper Learning is Norway's leading training and competence provider. The company has received countless awards both nationally and internationally, among other things, Microsoft has named us the best training center for Norway 8 years in a row. We offer the market's widest range of courses with courses all over the Norway. We have over 10,000 course participants per year and certify over 4000, IT professionals each year. Most demanding environments in Norway have chosen Glasspaper Learning as their primary supplier. Glasspaper People - Staffing provides high-quality staffing services through specialized staffing advisors. The disciplines we focus on are IT, engineering, finance, administration, HR, sales and marketing. Glasspaper People - Consulting subleases consultants in IT and engineering. We are a 'one-stop shop' for hiring consultants due to our extensive and varied consulting network, personal service and quality of deliveries.";

export const CoursePage: React.FC = () => {
  return (
    <>
    <main className="ml-[5rem] p-5 grid grid-cols-7 gap-5 auto-rows-max h-[100vh] w-100 relative">
        <header className='flex gap-5 col-span-7 bg-transparent p-0'>
            <CourseHeader title={courseTitle} description={courseDescription} image={courseImage}></CourseHeader>
        </header>

        <aside className='col-span-2'>
            <AboutCourse>
                <InfoItem type="Type" value="Digital" icon="devices"/>
                <InfoItem type="Duration" value="2 weeks" icon="schedule"/>
                <InfoItem type="Language" value="English" icon="language"/>
                <InfoItem type="Level" value="Beginner" icon="school"/>
                <InfoItem type="Price" value="$150" icon="attach_money"/>
                <InfoItem type="Provider" value="Glasspaper AS" icon="storefront"/>
            </AboutCourse>
        </aside>

        <section className='col-start-3 col-end-8 flex flex-col gap-5'>
            <CourseDescription description={courseDescriptionLong}/>
            <ProviderDescription description={providerDescription}></ProviderDescription>
        </section>   
        <button className="square round extend medium-elevate fixed right-10 bottom-10 bg-primary text-on-primary">
            <i>add</i>
            <span>Add to my courses</span>
        </button>
    </main>
    </>
  );
};

export default CoursePage;  