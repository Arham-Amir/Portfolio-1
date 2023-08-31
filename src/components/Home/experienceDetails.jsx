import { AiFillCaretRight } from 'react-icons/ai'

const ExperienceDetails = () => {
  return (
    <section className='flex flex-col gap-3 mt-5'>
      <section className='flex flex-row items-start gap-3 w-4/5'>
        <AiFillCaretRight className='mt-1' size={12} fill="#64ffda" />
        <p className='text-sm w-fit'>Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more</p>
      </section>
      <section className='flex flex-row items-start gap-3 w-4/5'>
        <AiFillCaretRight className='mt-1' size={12} fill="#64ffda" />
        <p className='text-sm w-fit'>Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements</p>
      </section>
      <section className='flex flex-row items-start gap-3 w-4/5'>
        <AiFillCaretRight className='mt-1' size={12} fill="#64ffda" />
        <p className='text-sm w-fit'>Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders</p>
      </section>
      <section className='flex flex-row items-start gap-3 w-4/5'>
        <AiFillCaretRight className='mt-1' size={12} fill="#64ffda" />
        <p className='text-sm w-fit'>Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship</p>
      </section>
    </section>
  );
}

export default ExperienceDetails;
