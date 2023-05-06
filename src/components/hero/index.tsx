import {
    Stack,
    VStack,
    Heading,
    HStack,
} from '@chakra-ui/react';

import { Link as LinkType } from "@/types/link";
import {
    GITHUB_PROFILE, INSTAGRAM_PROFILE,
  } from "../../constants";
  
  type SocialLink = LinkType & { color?: string };
  
  const socialLinks: SocialLink[] = [
    {
      href: INSTAGRAM_PROFILE,
      label: "Twitter",
      color: "twitter",
    },
    {
      href: GITHUB_PROFILE,
      label: "GitHub",
    },   
  ];

  const Hero = () => {
    return (
      <>
     <HStack>
      <Stack>
        <VStack>
          <Stack>
            <Heading>
              Hi, Im Rupesh 👋
            </Heading>
          </Stack>
        </VStack>
      </Stack>
      </HStack>
      </>
    );
  };
  
  export default Hero;
  