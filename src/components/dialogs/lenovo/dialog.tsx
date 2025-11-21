'use client'

import { useLenovoData } from '@/features/home/data/lenovo-data';
import LenovoExperience from '@/markdown/experiences/lenovo.mdx';
import { Box, CloseButton, Dialog, Heading, HStack, Text } from "@chakra-ui/react";
import { LenovoDialogState } from "./store";

export const LenovoDialog = ({ open, setOpen }: LenovoDialogState) => {
    const { dialog } = useLenovoData();

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
                    <LenovoExperience />
                    <Dialog.CloseTrigger asChild>
                        <CloseButton size="sm" />
                    </Dialog.CloseTrigger>
                </Dialog.Content>
            </Dialog.Positioner>
        </Dialog.Root>
    )
}