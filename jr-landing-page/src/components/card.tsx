interface CardProps {
  title: string;
  subTitle: string;
  imageName: string;
}

export function Card(cardProps: CardProps) {
  const imagePath = `/src/assets/${cardProps.imageName}`;

  return (
    <div
      style={{
        backgroundImage: `url(${imagePath})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "auto",
        height: "408px",
      }}
      className=" flex flex-col text-white pl-6 pb-4 rounded-xl justify-end 
      
      "
    >
      <span className="text-xl">{cardProps.title}</span>
      <span className="text-base">{cardProps.subTitle}</span>
    </div>
  );
}
