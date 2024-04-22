export function Button(props: { text: string; link?: string }) {
  return (
    <a href={props.link} target="_blank">
      <button
        className="
                flex items-center justify-center w-[214px]
                h-[60px] text-white rounded-md font-bold
               
                transition ease-in-out delay-150  hover:scale-105 duration-300
            "
        style={{
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          fontFamily: "Krub, sans-serif",
          background:
            "linear-gradient(94deg, #22325D -1.21%, #22325D 58.66%, #E6293F 116.84%)",
        }}
      >
        {props.text}
      </button>
    </a>
  );
}
