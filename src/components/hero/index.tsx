import {
  Stack,
  VStack,
  Heading,
  Text,
  Button,
  Icon,
  Link,
  Grid,
  HStack,
} from '@chakra-ui/react';
import { FiArrowUpRight } from 'react-icons/fi';
import HeroImage from './hero-image';
import { Link as LinkType } from "@/types/link";
import {
  GITHUB_PROFILE,
  INSTAGRAM_PROFILE,
} from "../../constants";
import ExternalLink from "../external-link";

type SocialLink = LinkType & { color?: string };

const socialLinks: SocialLink[] = [
  {
    href: GITHUB_PROFILE,
    label: "GitHub",
  },
  {
    href: INSTAGRAM_PROFILE,
    label: 'Instagram',
    color: 'purple.500',
  },
 
];
const Hero = () => {
  return (
    <>
   <HStack w='full' spacing={8}  align='flex-start'>
    <Stack
      as="section"
      alignItems="center"
      direction={{ base: 'column-reverse', md: 'row' }}
      w="full"
      spacing={12}
    >
      <VStack alignItems="flex-start" w="full" spacing={3}>
        <Stack
          alignItems="center"
          justifyContent={{ base: 'center', md: 'flex-start' }}
          direction={{ base: 'column', md: 'row' }}
          w="full"
          spacing={3}
        >
          <Heading as="h1" size="lg">
            Hi, I’m Rupesh 👋
          </Heading>
        </Stack>
        <Text as="h2" lineHeight="175%">
        I’m a full-stack Web Developer and Android Developer. I work
        as a  <strong>Developer</strong>, at <ExternalLink href="https://landingpage-fizmo.vercel.app/">PolarsDev</ExternalLink>{' '}.
        </Text>
        <Grid gap={{ base: 3, lg: 6 }}
                templateColumns={{
                  base: "repeat(2, 1fr)",
                  md: "repeat(4, 1fr)",
                }}
                width={{ base: "100%" }}>
          {socialLinks.map(({ href, label, color }) => (
            <Button
              key={href}
              as={Link}
              variant="ghost"
              color={color}
              href={href}
              target="_blank"
              px={4}
              justifyContent={{ base: "center", md: "center" }}
              rightIcon={<Icon as={FiArrowUpRight} />}
            >
              {label}
            </Button>
          ))}
        </Grid>
      </VStack>
      <HeroImage />
    </Stack>
    </HStack>
    </>
  );
};

export default Hero;
