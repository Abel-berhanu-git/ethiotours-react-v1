import { services } from '../data';

const Service = (props) => {
  const { icon, serviceTitle, info } = props;
  return (
    <article className='service'>
      <span className='service-icon'>
        <i className={icon}></i>
      </span>
      <div className='service-info'>
        <h4>{serviceTitle}</h4>
        <p>{info}</p>
      </div>
    </article>
  );
};
export default Service;
