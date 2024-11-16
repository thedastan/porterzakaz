import { MOTION_WEB_LINK, WHATSAPP_LINK } from "@/constants/admin";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
	return (
		<Flex alignItems="center" bg="black" h={{ base: "100px", md: "50px" }}>
			<Link href={WHATSAPP_LINK} target={"_blank"}>
				<Text 
					zIndex={1}
					boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
					position="fixed"
					bottom={{ lg: "60px", base: "5px" }}
					right={{ lg: "65px", base: "5px" }}
					bg="white"
					borderRadius="50%"
					color="#1FBF35"
					fontSize="40px"
					p={4}>
					<IoLogoWhatsapp />
				</Text>
			</Link>

			<div className="container">
				<Flex gap={2} flexDirection={{ base: "column", md: "row" }} alignItems="center" justifyContent="space-between" color="grey">
					<Text>© 2024 «Портер Такси». Все права защищены</Text>
					<Link href={MOTION_WEB_LINK} target={"_blank"}>
						<Text>Разработал Motion Web LLC</Text>
					</Link>
				</Flex>
			</div>
		</Flex>
	);
};

export default Footer;
