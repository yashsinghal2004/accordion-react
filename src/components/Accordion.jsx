
const Accordion=({items})=>{
    return(
        <div className="accordion">
            {
                items.map((item,index)=>{
                    return(
                        <div key={index}>
                            <p>{item.title}</p>
                            <p>{item.content}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
 export default Accordion;