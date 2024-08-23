const TimelineItem = ({item, upperLine, lowerLine}:{
        item?: string;
        upperLine?: boolean;
        lowerLine?: boolean;
    }) => (
        <li>
            {/* <hr className={upperLine? "" : "invisible"}/>  */}
            <div className="timeline-middle">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-8 w-8 text-[#ceff1a] ">
                <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
            </div>
            <div className="timeline-end timeline-box bg-purple-300 text-lg">{item}</div>
            {/* <hr className={lowerLine? "" : "invisible"}/>  */}
        </li>
);


function Timeline() {
  return (
    <ul className="timeline timeline-vertical ">
    {
        items.map((curr)=>(
            <TimelineItem 
            item={curr.item}
            upperLine = {curr.upperLine}
            lowerLine = {curr.lowerLine}
            />
        ))
    }
    </ul>
  )
}

const items = [
    {
        item: "Building Design Consultancy",
        upperLine: false,
        lowerLine: true
    },
    {
        item: "Construction Consultancy",
        upperLine: true,
        lowerLine: true
    },
    {
        item: "Interior Design",
        upperLine: true,
        lowerLine: true
    },
    {
        item: "Critical Repair",
        upperLine: true,
        lowerLine: true
    },
    {
        item: "Geotech Engineering",
        upperLine: true,
        lowerLine: true
    },
    {
        item: "Urgent Consultancy",
        upperLine: true,
        lowerLine: true
    },
    {
        item: "Quantity Survey",
        upperLine: true,
        lowerLine: false
    },
]

export default Timeline