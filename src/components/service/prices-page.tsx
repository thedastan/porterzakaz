"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import fon from "@/assets/img/fon.png";
import { PRICES } from "@/constants/services";
import Contacts from "@/components/home/contacts";
import { OtherServices, PageHero } from "./service-page";

const PricesPage = () => (
  <Box bg="#F4F4F4">
    <PageHero
      title="Цены на услуги"
      subtitle="Точную стоимость перевозки, переезда и сборки мебели назовём по телефону или в WhatsApp — зависит от объёма и расстояния."
      bg={fon.src}
    />

    <Box pt={{ md: 16, base: 10 }}>
      <div className="container">
        <Box px={{ md: "20px", base: "4" }}>
          <Box bg="white" borderRadius={16} p={{ md: 8, base: 5 }} maxW="860px" mx="auto">
            <Text as="h2" fontSize={{ md: 28, base: 22 }} fontWeight={700} mb={4}>
              Прайс-лист
            </Text>
            {PRICES.map((p, i) => (
              <Link key={p.slug} href={`/${p.slug}`}>
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  gap={4}
                  py={4}
                  borderTop={i === 0 ? "none" : "1px solid #EAEAEA"}
                  _hover={{ color: "#4762FF" }}
                >
                  <Text fontSize={{ md: 18, base: 16 }}>{p.name}</Text>
                  <Text
                    fontSize={{ md: 18, base: 16 }}
                    fontWeight={700}
                    color="#237B2F"
                    whiteSpace="nowrap"
                  >
                    {p.price}
                  </Text>
                </Flex>
              </Link>
            ))}
          </Box>
        </Box>
      </div>
    </Box>

    <OtherServices />
    <Contacts />
  </Box>
);

export default PricesPage;
