import {galleries} from '../data'
import Gallery from './Gallery';

const Galleries = () => {
  return (
    <section id='gallery'>
      <div className='gallery-center'>

        {/* <!-- single gallery --> */}
        {galleries.map(gallery=>{
          return <Gallery key={gallery.id} {...gallery} />
        })}
        {/* <!-- end of single gallery --> */}
    
      </div>
    </section>
  );
};
export default Galleries;
