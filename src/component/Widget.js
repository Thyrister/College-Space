import { WifiTetheringTwoTone } from '@material-ui/icons';
import react from 'react';
import WidgetOptions from './WidgetOptions';
import '../css/Widget.css'

function Widget(){
    return(
        <div className="widget">
            <div className="widget__header">
               <h5>Spaces to Follow</h5>
            </div>
             <WidgetOptions/>
        </div>
    )
}

export default Widget;