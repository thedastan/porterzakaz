import { Flex, Text } from "@chakra-ui/react";
import fon from "@/assets/img/fon.png";
import Link from "next/link";
import { PHONE_NUMBER } from "@/constants/admin";

const Services = () => {
  return (
    <Flex
      id="#services"
      flexDirection="column"
      justifyContent={{ md: "start", base: "center" }}
      alignItems="center"
      p="20px"
      w="100%"
      bgSize="cover"
      minH={{ md: "481px", base: "550px" }}
      bgPos="center"
      bgImage={`linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${fon.src})`}
    >
      <div className="container">
        <Flex
          flexDirection="column"
          alignItems="center"
          mt={20}
          gap={6}
          w="100%"
          color="white"
          textAlign="center"
        >
          <Text fontSize={{ md: 60, base: 32 }} fontWeight={700}>
            Быстрая услуга портера!
          </Text>
          <Flex
            textTransform="uppercase"
            gap={4}
            justifyContent="center"
            alignItems="center"
          >
            <Text fontSize={14} fontWeight={500}>
              быстро
            </Text>
            <Text fontSize={16} fontWeight={900}>
              •
            </Text>
            <Text fontSize={14} fontWeight={500}>
              выгодно
            </Text>
            <Text fontSize={16} fontWeight={900}>
              •
            </Text>
            <Text fontSize={14} fontWeight={500}>
              надежно
            </Text>
          </Flex>
          <Link href={`tel:${PHONE_NUMBER}`}>
            <Flex
              alignItems="center"
              justifyContent="center"
              mt={2}
              fontSize={18}
              fontWeight={600}
              maxW="196px"
              w="100%"
              px="6"
              h="52px"
              borderRadius={{ md: "10px", base: "8px" }}
              bg="#4762FF"
            >
              Вызвать Портер
            </Flex>
          </Link>
        </Flex>
      </div>
    </Flex>
  );
};

export default Services;
