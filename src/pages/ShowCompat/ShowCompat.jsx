import './ShowCompat.css'
import CompatView from '../../components/CompatView/CompatView';
import { CompatData } from '../../components/CompatView/CompatData';

const ShowCompat = () => { 
  return (
    <div className='showCompat'>
      <CompatView CompatData = {CompatData} />
    </div>
  )
}

export default ShowCompat;