import { Box, Flex, Text } from "@chakra-ui/react";
import card1 from "@/assets/img/card1.png";
import card2 from "@/assets/img/card2.jpeg";
import card3 from "@/assets/img/card3.jpeg";
import card4 from "@/assets/img/card4.jpeg";
import Image from "next/image";

const Card = () => {
  const data = [
    {
      image: card1,
      title: "Доставка по региону",
      desc: "Обеспечим быструю и надежную перевозку грузов любого объема.",
      price: "стоимость договорная",
    },
    {
      image: card2,
      title: "Грузчики",
      desc: "Профессиональная помощь в погрузке и разгрузке.",
      price: "350 сом/час",
    },
    {
      image: card3,
      title: "Разборка/сборка мебели",
      desc: "Выполняется качественно и быстро.",
      price: "стоимость договорная",
    },
    {
      image: card4,
      title: "Вывоз мусора",
      desc: "Избавим вас от строительного или бытового мусора оперативно.",
      price: "от 1500 сом",
    },
  ];
  return (
    <Box id="card" p="20px" mt={-20}>
      <div className="container">
        <Flex
          gap={4}
          justifyContent="center"
          flexDir={{ md: "row", base: "column" }}
        >
          {data.map((el, index) => (
            <Flex
              key={index}
              flexDirection="column"
              gap={2}
              w={{ md: 310, base: "100%" }}
              bg="white"
              borderRadius={10}
              p={4}
            >
              <Box h="112px" rounded="6px" overflow="hidden">
                <Image
                  style={{ width: "100%", height: "100%" }}
                  src={el.image}
                  alt="img"
                  className="full-image"
                />
              </Box>
              <Text color="black" fontSize={18} fontWeight={600}>
                {el.title}
              </Text>
              <Text color="gray" fontSize={16} fontWeight={400}>
                {el.desc}
              </Text>
              <Text color="#237B2F" fontSize={16} fontWeight={400} mt={1}>
                {el.price}
              </Text>
            </Flex>
          ))}
        </Flex>
      </div>
    </Box>
  );
};

export default Card;
