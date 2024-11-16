import React, { useState } from "react";
import { Box, Flex, IconButton, Link, Text } from "@chakra-ui/react";
import { IoClose, IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import {
	PHONE_NUMBER,
	PHONE_NUMBER_BILAIN,
	PHONE_NUMBER_MEGACOM,
	WHATSAPP_LINK,
} from "@/constants/admin";
import Image from "next/image";

import img1 from "@/assets/img/oshka.png";
import img2 from "@/assets/img/bilain.png";
import img3 from "@/assets/img/megacom.png";
import img4 from "@/assets/img/whatsapp.png";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => setIsOpen(!isOpen);

	const nav = [
		{
			name: "Услуги",
			path: "#card",
		},
		{
			name: "Преимущества",
			path: "#advantages",
		},
		{
			name: "Контакты",
			path: "#contact",
		},
	];

	const num = [
		{
			image: img1,
			tel: PHONE_NUMBER,
			link: PHONE_NUMBER,
		},
		{
			image: img2,
			tel: PHONE_NUMBER_BILAIN,
			link: PHONE_NUMBER_BILAIN,
		},
		{
			image: img3,
			tel: PHONE_NUMBER_MEGACOM,
			link: PHONE_NUMBER_MEGACOM,
		},
		{
			image: img4,
			tel: PHONE_NUMBER,
			link: WHATSAPP_LINK,
		},
	];

	return (
		<Box position={{ base: "absolute", md: "relative" }} w="100%" bg={{ base: isOpen ? "none" : "none", md: "white" }} py={4}>
			<div className="container">
				<Flex
					p={{ base: isOpen ? "0 " : "0 20px", md: "0 20px" }}
					justify="space-between"
					align="center">

					<Flex w="250px" gap={2} color={{ base: "white", md: "black" }}>
						<Text fontSize={20}>
							<MdAccessTimeFilled />
						</Text>
						<Box>
							<Text
								color={{ base: "white", md: "grey" }}
								fontSize={14}
								fontWeight={400}>
								График работы:
							</Text>
							<Text
								color={{ base: "white", md: "black" }}
								fontSize={14}
								fontWeight={400}>
								С 8:00 до 22:00 без выходных
							</Text>
						</Box>
					</Flex>

					<IconButton
						display={{ base: "block", md: "none" }}
						aria-label="Toggle Navigation"
						variant="outline"
						color="white"
						borderColor="white"
						border="none"
						onClick={toggleMenu}
						as={isOpen ? IoClose : RxHamburgerMenu}
					/>

					<Flex
						justifyContent="center"
						alignItems="end"
						direction={{ base: "column", md: "row" }}
						display={{ base: isOpen ? "flex" : "none", md: "flex" }}
						gap={{ base: 4, md: 8 }}
						position={{ base: "absolute", md: "static" }}
						p={4}
						bg={{ md: "white", base: "#EFEFEF" }}
						w={{ base: "100%", md: "50%" }}
						top="0"
						zIndex={1}>
						<IconButton
							display={{ base: "block", md: "none" }}
							aria-label="Toggle Navigation"
							variant="outline"
							color="black"
							borderColor="white"
							border="none"
							left={0}
							onClick={toggleMenu}
							as={isOpen ? IoCloseOutline : RxHamburgerMenu}
						/>
						<Box
							display={{ base: "none", md: "flex" }}
							gap="30px"
							border="none">
							{nav.map((el, index) => (
								<Link
									key={index}
									href={el.path}
									border="none"
									textDecor="none">
									{el.name}
								</Link>
							))}
						</Box>

						<Box
							mt={4}
							py={4}
							w="100%"
							display={{ base: "flex", md: "none" }}
							flexDirection="column"
							gap={5}>
							{num.map((el, index) => (
								<Link key={index} href={`tel:${el.link}`} textDecor="none">
									<Flex
										borderRadius={10}
										gap={4}
										bg="white"
										p={4}
										w="100%"
										alignItems="center"
										justifyContent="center">
										<Image
											style={{ height: "35px", width: "40px" }}
											src={el.image}
											alt="img"
										/>
										<Text fontSize={16} fontWeight={400}>
											{el.tel}
										</Text>
									</Flex>
								</Link>
							))}
						</Box>
					</Flex>

					<Box
						display={{ md: "flex", base: "none" }}
						w="160px"
						gap={2}
						color="black">
						<Text mt={1} fontSize={16}>
							<FaPhoneAlt />
						</Text>
						<Box>
							<Link href={`tel:${PHONE_NUMBER}`} target={"_blank"}>
								<Text color="black" fontSize={14} fontWeight={400}>
									+996 (705) 856 575
								</Text>
							</Link>
							<Link href={`tel:${PHONE_NUMBER_BILAIN}`} target={"_blank"}>
								<Text color="black" fontSize={14} fontWeight={400}>
									+996 (774) 856 575
								</Text>
							</Link>
						</Box>
					</Box>
				</Flex>
			</div>
		</Box>
	);
};

export default Header;
