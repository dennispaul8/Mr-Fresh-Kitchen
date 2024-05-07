import './MenuList.css'

export const MenuList = () => {
    const top_list = [
        {
            image: "../../../public/mr-fresh-logo.jpeg",
            heading: "French Fries",
            paragraph: "Say goodbye to the hassle of coordinating Say goodbye to the hassle of coordinati",
            price: "01",
        },
        {
            image: "../../../public/mr-fresh-logo.jpeg",
            heading: "French Fries",
            paragraph: "Say goodbye to the hassle of coordinating Say goodbye to the hassle of coordinati",
            price: "01",
        },
    ]
    return (
        <>
            <div className="menulist-cont">
                <div className="menulist-top">
                    {/* <h2>breakfast</h2>
               */}
                    <div className="">
                        {top_list.map((info, index) =>

                            <div key={index} className=''>

                                <h3>{info.heading}</h3>
                                <ul>
                                    <li>reakfast</li>
                                    <li>reakfast</li>
                                    <li>reakfast</li>
                                    <li>reakfast</li>
                                    <li>reakfast</li>
                                </ul>
                            </div>

                        )}
                    </div>
                </div>

                <div className="menulist-bottom">

                </div>
            </div>
        </>
    )
}