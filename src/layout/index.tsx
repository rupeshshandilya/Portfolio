import { Container, Flex, VStack, chakra } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import Header from "./header";
type Props = PropsWithChildren<{}>;

const Layout = ({ children }: Props) => {
    return (
        <>
        <Container display="flex">
            <VStack flex={1}>
                <Header />
                {children}
            </VStack>
        </Container>
        </>
    );
};

export default Layout;