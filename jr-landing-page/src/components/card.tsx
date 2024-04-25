interface CardProps {
  title: string;
  subTitle: string;
  srcName: string;
}

export function Card(cardProps: CardProps) {
  return (
    <div
      style={{
        backgroundImage: `url(${cardProps.srcName})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        maxWidth: "329px",
        height: "440px",
      }}
      className=" flex flex-col text-white pl-6 pb-4 rounded-xl justify-end 
      "
    >
      <span className="text-xl">{cardProps.title}</span>
      <span className="text-base">{cardProps.subTitle}</span>
    </div>
  );
}
