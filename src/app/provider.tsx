"use client";
import Footer from "@/components/navbar/footer";
import Header from "@/components/navbar/header";
import { Box, ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface LayoutPageProps {
	children: ReactNode;
}

const Providers: FC<LayoutPageProps> = ({ children }) => {
	return (
		<div>
			<ChakraProvider value={defaultSystem}>
				<Header />
				{children}
				<Footer />
			</ChakraProvider>
		</div>
	);
};

export default Providers;
