import Title from './Title';
import { services } from '../data';
import Service from './Service';

const Services = () => {
  return (
    <section className='section services' id='services'>
      {/* section-title */}
      <Title title='our' subTitle='services' />
      {/* end of section-title */}

      <div className='section-center services-center'>

        {/* single service */}
        {services.map((service) => {
          const { id, icon, serviceTitle, info } = service;
          return <Service key={id} icon={icon} serviceTitle={serviceTitle} info={info}/>;
        })}
        {/* end of single service */}
      </div>
    </section>
  );
};
export default Services;
