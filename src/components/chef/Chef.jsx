import './Chef.css'


export const Chef = ()=>{

    const list = [
        {   
            image: "../../../public/mr-fresh-logo.jpeg",
            name: "Samson Guy",
            dish:"African Dish",
        }
    ]

    return(
        <>
             <div className="chef-sec">
                <h2>Meet Our Chef</h2>

                <div className="chef-list">
                    {list.map((info, index) =>

                    <div key={index} className='chef-card'>
                        <img className='chef-img' src={info.image} alt="" />
                        <h3>{info.name}</h3>
                        <p>{info.dish}</p>
                        <p>Coming soon</p>
                    </div>

                )}
                </div>
            </div>
        </>
    )
}