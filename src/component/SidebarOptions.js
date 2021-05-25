import react from 'react'
import '../css/SidebarOptions.css'
import Add from '@material-ui/icons/Add'
import '../css/SidebarOptions.css'

function SidebarOptions(){
    return (
        <div className='sidebarOptions' >

            <div className="sidebarOption ">
           <img src="https://qphs.fs.quoracdn.net/main-thumb-t-930-100-cbbsbwijdhpyzlpipejvqpiijhhoaday.jpeg" alt="History"/>
           <p>History</p>
           </div>

           <div className="sidebarOption ">
           <img src="https://qphs.fs.quoracdn.net/main-thumb-t-858-100-VnZbEVtOIGkEHXlnYId9slumV59IPgkA.jpeg" alt="History"/>
           <p>Business</p>
           </div>

           <div className="sidebarOption ">
           <img src="https://qphs.fs.quoracdn.net/main-thumb-t-1913-100-B8JrwaVauFzsaTSqXDqoWLCXzQb2mTE9.jpeg" alt="History"/>
           <p>Pyschology</p>
           </div>

           <div className="sidebarOption ">
           <img src="https://qphs.fs.quoracdn.net/main-thumb-t-877-100-e7jKHEQr0HExAIA9rlsyHlV6HJyRruEo.jpeg" alt="History"/>
           <p>Music</p>
           </div>

           <div className="sidebarOption ">
           <img src="https://qphs.fs.quoracdn.net/main-thumb-t-801-100-Sf8h894FXbQZQit0TeqDrrqS6xw6dwCQ.jpeg" alt="History"/>
           <p>Science</p>
           </div>

           <div className="sidebarOption ">
           <img src="https://qphs.fs.quoracdn.net/main-thumb-t-931-100-c8WCPwZ9qPsh5zLGQ5wHh1ddxtc9Cch7.jpeg" alt="History"/>
           <p>Movies</p>
           </div>

           <div className="sidebarOption ">
           <img src="https://qphs.fs.quoracdn.net/main-thumb-t-1140-100-24q3tiv4WhPssc5TGwf0mvCM5aiqGVXW.jpeg" alt="History"/>
           <p>Technology</p>
           </div>


           <div className="sidebarOption ">
            <Add/>
           <p>Discover Spaces</p>
           </div>

        </div>
    )
}

export default SidebarOptions;