'use client'

import { useGftData } from '@/features/home/data/gft-data';
import GFTExperience from '@/markdown/experiences/gft.mdx';
import { Box, CloseButton, Dialog, Heading, HStack, Text } from "@chakra-ui/react";
import { GFTDialogState } from "./store";

export const GFTDialog = ({ open, setOpen }: GFTDialogState) => {
    const { dialog } = useGftData();

    return (
        <Dialog.Root open={open} onOpenChange={(details) => setOpen(details.open)} placement={'center'} size={'lg'}>
            <Dialog.Backdrop />
            <Dialog.Positioner>
                <Dialog.Content padding={'2rem'}>
                    <HStack w={'100%'} justifyContent={'space-between'} mb={'1rem'}>
                        <Box>
                            <Heading size={'lg'}>{dialog.company}</Heading>
                            <Text fontStyle={['italic']}>{dialog.role}</Text>
                        </Box>
                        <Box>
                            <Text fontStyle={['italic']} fontSize={['sm', 'sm', 'md']}>{dialog.period}</Text>
                        </Box>
                    </HStack>
                    <GFTExperience />
                    <Dialog.CloseTrigger asChild>
                        <CloseButton size="sm" />
                    </Dialog.CloseTrigger>
                </Dialog.Content>
            </Dialog.Positioner>
        </Dialog.Root>
    )
}