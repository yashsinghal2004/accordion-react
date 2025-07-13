import { useState } from "react";

import {FaChevronDown, FaChevronUp} from "react-icons/fa";

const Accordion=({items})=>{
    const [openItem,setOpenItem]= useState(null);

    const handlecuritem=(index)=>{
        setOpenItem(openItem==index ?null : index);
    }
    return(
        <div className="accordion">
            {
                items.map((item,index)=>{
                    return(
                        <div key={index} className="accordion-item">
                            <button className="accordion-title" onClick={()=>handlecuritem(index)}>
                                {item.title}
                                <div className={"icon"}>{openItem==index ? <FaChevronUp/> : <FaChevronDown/>}</div>
                                
                                </button>
                            {openItem==index && <p className="accordion-content">{item.content}</p>}
                        </div>
                    )
                })
            }
        </div>
    )
}
 export default Accordion;