import { useGFTDialog } from "@/components/dialogs/gft/store";
import { useLenovoDialog } from "@/components/dialogs/lenovo/store";
import { useSeipDialog } from "@/components/dialogs/seip/store";
import { useSmilesDialog } from "@/components/dialogs/smiles/store";
import { Avatar, Box, Button, Card, Flex, Grid } from "@chakra-ui/react";
import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";
import { useGftData } from "../data/gft-data";
import { useLenovoData } from "../data/lenovo-data";
import { useSeipData } from "../data/seip-data";
import { useSmilesData } from "../data/smiles-data";

export function ExperiencesSection() {
    const smilesData = useSmilesData();
    const gftData = useGftData();
    const lenovoData = useLenovoData();
    const seipData = useSeipData();

    const experiencesData: ExperienceType[] = [
        smilesData, gftData, lenovoData, seipData,
    ]

    const smilesDialogOpen = useSmilesDialog((s) => s.setOpen);
    const gftDialogOpen = useGFTDialog((s) => s.setOpen);
    const lenovoDialogOpen = useLenovoDialog((s) => s.setOpen);
    const seipDialogOpen = useSeipDialog((s) => s.setOpen);

    const dialogs: Array<(open: boolean) => void> = [
        smilesDialogOpen, gftDialogOpen, lenovoDialogOpen, seipDialogOpen,
    ]

    return (
        <Grid templateColumns={{
            sm: '1fr',
            md: '1fr',
            lg: 'repeat(2, 1fr)'
        }} width={{ sm: '100%', md: '100%', lg: '100%' }} rowGap={6} columnGap={4}>
            {
                experiencesData.map((experience, idx) => (
                    <Card.Root key={experience.card.title} maxWidth={{ sm: '100%', md: '100%', lg: '300px' }} >
                        <Card.Body gap="2">
                            <Flex direction={'row'} justify={'space-between'} align={'center'}>
                                <Box>
                                    <Avatar.Root size="lg" shape="rounded">
                                        <Avatar.Image src={experience.image.path} objectFit={'cover'} />
                                        <Avatar.Fallback name={experience.image.alt} />
                                    </Avatar.Root>
                                </Box>

                                <Box>
                                    <Link href={experience.webpage} target="_blank" color="gray.400">
                                        <LuExternalLink />
                                    </Link>
                                </Box>
                            </Flex>
                            <Card.Title mt="2">{experience.card.title}</Card.Title>
                            <Card.Description>
                                <strong>{experience.card.descriptionTitle}</strong>
                            </Card.Description>
                            <Card.Description>
                                {experience.card.description}
                            </Card.Description>
                        </Card.Body>

                        <Card.Footer justifyContent="flex-end">
                            <Button onClick={() => dialogs[idx](true)}>Read more</Button>
                        </Card.Footer>
                    </Card.Root>
                ))
            }
        </Grid>
    )
}