interface IconOutletProps {
    title: string;
    subTitle: string;
    srcName: string;
    altName: string;
}

export function IconOutlet(props: IconOutletProps) {
    return (
        <div className="flex items-center">
            <img src={props.srcName} width={72} height={72} alt={props.altName} />
            <div className='flex flex-col ml-2'>
                <div>{props.title}</div>
                <div>{props.subTitle}</div>
            </div>
        </div>
    )
}