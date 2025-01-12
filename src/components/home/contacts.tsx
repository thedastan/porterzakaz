"use client";
import { Box, Button, Flex, Input, Text, Textarea } from "@chakra-ui/react";
import Image from "next/image";
import oshka from "@/assets/img/oshka.png";
import bilain from "@/assets/img/bilain.png";
import mega from "@/assets/img/megacom.png";
import { useState } from "react";
import {
  PHONE_NUMBER,
  PHONE_NUMBER_2,
  PHONE_NUMBER_BILAIN,
} from "@/constants/admin";
import Link from "next/link";

const Contacts = () => {
  const [value, setValue] = useState("+996");
  const [isFocused, setIsFocused] = useState(false);

  const data = [
    {
      image: oshka,
      number: PHONE_NUMBER,
    },
    {
      image: oshka,
      number: PHONE_NUMBER_2,
    },
  ];

  return (
    <Box id="contact" p="20px" bg="#333333">
      <div className="container">
        {/* <Container maxW={CONTAINER_WIDTH}>  */}
        <Flex
          flexDir={{ md: "row", base: "column" }}
          py={{ md: 20, base: 10 }}
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex flexDir={{ md: "column", base: "column-reverse" }}>
            <Box mt={{ md: 0, base: 10 }}>
              <Text
                color="white"
                fontSize={{ md: 60, base: 32 }}
                fontWeight={700}
              >
                Оставьте заявку
              </Text>
              <Text
                mt={{ md: 0, base: 1 }}
                color="#FAFAFA"
                fontSize={18}
                fontWeight={400}
              >
                Закажите услуги портера быстро и удобно!
              </Text>
            </Box>

            <Flex
              justifyContent="space-between"
              mt={{ md: 12, base: 0 }}
              gap={{ md: 4, base: 1 }}
            >
              {data.map((el, index) => (
                <Link key={index} href={`tel:${el.number}`}>
                  <Flex
                    gap={{ md: 4, base: 2 }}
                    justifyContent="center"
                    alignItems="center"
                    bg="white"
                    w={{ md: 223, base: 160 }}
                    h={{ md: "52px", base: "30px" }}
                    borderRadius={{ md: "10px", base: "5px" }}
                  >
                    <Box
                      w={{ md: "35px", base: "20px" }}
                      h={{ md: "32px", base: "20px" }}
                    >
                      <Image
                        style={{ width: "100%", height: "100%" }}
                        src={el.image}
                        alt=""
                      />
                    </Box>
                    <Text fontSize={{ md: 16, base: 11 }}>{el.number}</Text>
                  </Flex>
                </Link>
              ))}
            </Flex>
            <Text
              mt="3"
              textTransform="uppercase"
              color="#FAFAFA"
              fontSize={18}
              fontWeight={400}
              py={2}
            >
              • Арген
            </Text>
          </Flex>
          <Flex
            mt={{ md: 0, base: 10 }}
            w={{ md: 407, base: "100%" }}
            flexDirection="column"
            gap={4}
            color="white"
          >
            <Box>
              <Text fontSize={14} fontWeight={500} ml={4} py={1}>
                Имя
              </Text>
              <Input
                borderRadius={{ md: "10px", base: "8px" }}
                _placeholder={{ color: "gray.400" }}
                w={{ md: 407, base: "100%" }}
                h="52px"
                border="none"
                color="white"
                bg="#FFFFFF14"
                p="0 15px"
                type="text"
                placeholder="Введте имя"
              />
            </Box>

            <Box>
              <Text fontSize={14} fontWeight={500} ml={4} py={1}>
                Номер
              </Text>
              <Input
                borderRadius={{ md: "10px", base: "8px" }}
                _placeholder={{ color: "gray.400" }}
                w={{ md: 407, base: "100%" }}
                h="52px"
                border="none"
                bg="#FFFFFF14"
                p="0 15px"
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(value === "+996" ? false : true)}
                color={isFocused || value !== "+996" ? "white" : "gray.400"} // Цвет текста
              />
            </Box>

            <Box>
              <Text fontSize={14} fontWeight={500} ml={4} py={1}>
                Сообщение
              </Text>
              <Textarea
                borderRadius={{ md: "10px", base: "8px" }}
                _placeholder={{ color: "gray.400" }}
                w={{ md: 407, base: "100%" }}
                h="84px"
                border="none"
                color="white"
                bg="#FFFFFF14"
                p="8px 15px"
                placeholder="Текст..."
              />
            </Box>

            <Button
              mt={2}
              w={{ md: 407, base: "100%" }}
              h="57px"
              borderRadius={{ md: "10px", base: "8px" }}
              bg="#4762FF"
            >
              Отправить
            </Button>
          </Flex>
        </Flex>
        {/* </Container> */}
      </div>
    </Box>
  );
};

export default Contacts;
