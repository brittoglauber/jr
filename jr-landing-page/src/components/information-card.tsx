interface InformationCardProps {
  title: string;
  description: string;
  imagePath: string;
  alt: string;
}

export function InformationCard(props: InformationCardProps) {
  return (
    <div className="min-w-[280px] ">
      <img src={props.imagePath} alt={props.alt} />
      <div className="text-2xl mt-3">{props.title}</div>
      <div
        className="text-base text-[#666C89] mt-3"
        style={{
          fontFamily: "Krub, sans-serif",
        }}
      >
        {props.description}
      </div>
    </div>
  );
}
