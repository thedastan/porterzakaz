"use client";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoCheckmarkCircle } from "react-icons/io5";
import { PHONE_NUMBER, WHATSAPP_LINK } from "@/constants/admin";
import { getService, SERVICES } from "@/constants/services";
import Advantages from "@/components/home/advantages";
import Contacts from "@/components/home/contacts";

export const CallButtons = () => (
  <Flex gap={3} flexWrap="wrap" justifyContent="center">
    <Link href={`tel:${PHONE_NUMBER.split(" ").join("")}`}>
      <Flex
        alignItems="center"
        gap={2}
        h="52px"
        px={6}
        borderRadius="10px"
        bg="#4762FF"
        color="white"
        fontSize={17}
        fontWeight={600}
      >
        <FaPhoneAlt /> Позвонить
      </Flex>
    </Link>
    <Link href={WHATSAPP_LINK} target="_blank">
      <Flex
        alignItems="center"
        gap={2}
        h="52px"
        px={6}
        borderRadius="10px"
        bg="#1FBF35"
        color="white"
        fontSize={17}
        fontWeight={600}
      >
        <IoLogoWhatsapp size={22} /> WhatsApp
      </Flex>
    </Link>
  </Flex>
);

export const PageHero = ({
  title,
  subtitle,
  price,
  bg,
}: {
  title: string;
  subtitle: string;
  price?: string;
  bg: string;
}) => (
  <Flex
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    p="20px"
    pt={{ base: "110px", md: "20px" }}
    w="100%"
    minH={{ md: "440px", base: "520px" }}
    bgSize="cover"
    bgPos="center"
    bgImage={`linear-gradient(to bottom, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.75)), url(${bg})`}
  >
    <div className="container">
      <Flex
        flexDirection="column"
        alignItems="center"
        gap={5}
        color="white"
        textAlign="center"
      >
        <Text as="h1" fontSize={{ md: 52, base: 30 }} fontWeight={700} lineHeight={1.15} maxW="900px">
          {title}
        </Text>
        <Text fontSize={{ md: 19, base: 16 }} maxW="720px" color="#EDEDED">
          {subtitle}
        </Text>
        {price && (
          <Text
            bg="white"
            color="#237B2F"
            fontWeight={700}
            fontSize={18}
            px={4}
            py={1.5}
            borderRadius="8px"
          >
            {price}
          </Text>
        )}
        <Text fontSize={14} textTransform="uppercase" letterSpacing="0.5px">
          С 8:00 до 22:00 • без выходных
        </Text>
        <CallButtons />
      </Flex>
    </div>
  </Flex>
);

export const OtherServices = ({ current }: { current?: string }) => (
  <Box py={{ md: 16, base: 10 }}>
    <div className="container">
      <Box px={{ md: "20px", base: "4" }}>
        <Text as="h2" fontSize={{ md: 34, base: 26 }} fontWeight={700} mb={6}>
          {current ? "Другие услуги" : "Наши услуги"}
        </Text>
        <Grid templateColumns={{ md: "repeat(auto-fill, minmax(220px, 1fr))", base: "1fr" }} gap={4}>
          {SERVICES.filter((s) => s.slug !== current).map((s) => (
            <Link key={s.slug} href={`/${s.slug}`}>
              <Flex
                flexDirection="column"
                bg="white"
                borderRadius={10}
                overflow="hidden"
                h="100%"
                transition="transform .2s"
                _hover={{ transform: "translateY(-3px)" }}
              >
                <Box h="120px" overflow="hidden">
                  <Image src={s.image} alt={s.menu} className="full-image" />
                </Box>
                <Box p={4}>
                  <Text fontSize={18} fontWeight={600} color="black">
                    {s.menu}
                  </Text>
                  <Text fontSize={15} color="#237B2F" mt={1}>
                    {s.price}
                  </Text>
                </Box>
              </Flex>
            </Link>
          ))}
        </Grid>
      </Box>
    </div>
  </Box>
);

const ServicePage = ({ slug }: { slug: string }) => {
  const s = getService(slug);
  if (!s) return null;

  return (
    <Box bg="#F4F4F4">
      <PageHero title={s.title} subtitle={s.subtitle} price={s.price} bg={s.image.src} />

      <Box pt={{ md: 16, base: 10 }}>
        <div className="container">
          <Grid
            templateColumns={{ md: "1fr 1fr", base: "1fr" }}
            gap={4}
            px={{ md: "20px", base: "4" }}
          >
            <Box bg="white" borderRadius={16} p={{ md: 8, base: 5 }}>
              <Text as="h2" fontSize={{ md: 28, base: 22 }} fontWeight={700} mb={5}>
                Что входит в услугу
              </Text>
              <Flex flexDirection="column" gap={3}>
                {s.includes.map((item) => (
                  <Flex key={item} gap={3} alignItems="center" fontSize={17}>
                    <Box color="#237B2F" flexShrink={0}>
                      <IoCheckmarkCircle size={22} />
                    </Box>
                    {item}
                  </Flex>
                ))}
              </Flex>
            </Box>

            <Box bg="white" borderRadius={16} p={{ md: 8, base: 5 }}>
              <Text as="h2" fontSize={{ md: 28, base: 22 }} fontWeight={700} mb={5}>
                Как заказать
              </Text>
              <Flex flexDirection="column" gap={4}>
                {s.steps.map((step, i) => (
                  <Flex key={step} gap={3} alignItems="center" fontSize={17}>
                    <Flex
                      flexShrink={0}
                      w="34px"
                      h="34px"
                      borderRadius="50%"
                      bg="#4762FF"
                      color="white"
                      fontWeight={700}
                      alignItems="center"
                      justifyContent="center"
                    >
                      {i + 1}
                    </Flex>
                    {step}
                  </Flex>
                ))}
              </Flex>
            </Box>
          </Grid>
        </div>
      </Box>

      <Advantages />
      <OtherServices current={s.slug} />
      <Contacts />
    </Box>
  );
};

export default ServicePage;
