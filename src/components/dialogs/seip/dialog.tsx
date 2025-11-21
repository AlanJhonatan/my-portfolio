'use client'

import { useSeipData } from '@/features/home/data/seip-data';
import SeipExperience from '@/markdown/experiences/seip7.mdx';
import { Box, CloseButton, Dialog, Heading, HStack, Text } from "@chakra-ui/react";
import { SeipDialogState } from "./store";

export const SeipDialog = ({ open, setOpen }: SeipDialogState) => {
    const { dialog } = useSeipData();

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
                    <SeipExperience />
                    <Dialog.CloseTrigger asChild marginBottom={4}>
                        <CloseButton size={['md', 'md', 'md']} />
                    </Dialog.CloseTrigger>
                </Dialog.Content>
            </Dialog.Positioner>
        </Dialog.Root>
    )
}