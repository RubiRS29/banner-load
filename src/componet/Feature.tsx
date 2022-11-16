import { Stack, Flex, Text} from "@chakra-ui/react";
import { ReactElement } from "react";

interface FeatureProps {
    field: string;
    iconBg: string;
    icon?: ReactElement;
    text: string;
}

export const Feature = ({ field, icon, iconBg, text }: FeatureProps) => {
    return (
        <Stack direction={'row'} align={'center'}>
            <Flex
                w={8}
                h={8}
                align={'center'}
                justify={'center'}
                rounded={'full'}
                bg={iconBg}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{field} </Text>
            <Text as='samp' fontSize='sm'> {text} </Text>
        </Stack>
    );
};