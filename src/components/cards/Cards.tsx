import Card from "../card/Card";
interface ICardProps {
  data: Array<{
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
  }>;
}

const Cards = ({ data }: ICardProps) => {
  return (
    <div className=" container mx-auto  px-5 mt-4 flex flex-1 flex-wrap justify-center gap-8">
      {data &&
        data.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            image={item.image}
            gender={item.gender}
            title={item.name}
            specie={item.species}
            status={item.status}
          />
        ))}
    </div>
  );
};

export default Cards;
