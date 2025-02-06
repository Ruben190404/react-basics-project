import { Card, Center, Image, Text, Flex, For, Button, Box} from '@chakra-ui/react';
import { Tag } from '../components/ui/tag.jsx';

export const RecipePage = ({recipe, clickFn}) => {
    //recipe = recipe.recipe;
    return(
        <Center height={'100vh'} gap={4} backgroundColor={'gray.100'}>
            <Card.Root width={'1000px'} overflow={'hidden'} height={'95vh'} borderRadius={'20px'} boxShadow={'lg'} margin={'0 1rem'}>
                <Image src={recipe.image} height={'300px'}/>
                <Card.Body gap={2} overflow={'auto'}>
                    <Flex flexDirection={'column'}  gap={'1rem'} md={{ flexDirection: 'row', gap: '0rem' }}>
                        <Box width={'50%'} spaceY={'1rem'}>
                            <Box>
                                <Text textTransform={'uppercase'} fontSize={'14px'}>{recipe.mealType} - {recipe.dishType}</Text>
                                <Card.Title fontSize={'22px'} fontWeight={'500'}>{recipe.label}</Card.Title>
                            </Box>
                            
                            <Box>
                                <Flex gap={'0.5rem'}>
                                    <Text>Total cooking time:</Text>
                                    <Text>{recipe.totalTime} minutes</Text>
                                </Flex>
                                <Flex gap={'0.5rem'}>
                                    <Text>Servings:</Text> 
                                    <Text>{recipe.yield}</Text>
                                </Flex>
                            </Box>

                            <Box spaceY={'0.5rem'}>
                                <Text fontSize={'20px'}>Ingredients: </Text>
                                {recipe.ingredientLines.length > 0 && 
                                <Flex direction={'column'} gap={'5px'}>
                                    <For each={recipe.ingredientLines}>
                                    {(item, index) => (
                                        <Text key={index}>{item}</Text>
                                    )}
                                    </For>
                                </Flex>
                            }
                            </Box>
                        </Box>
                        <Box width={'50%'} spaceY={'1rem'}>
                            <Box spaceY={'5px'}>
                                <Text>Health labels:</Text>
                                {recipe.healthLabels.length > 0 && 
                                    <Flex direction={'row'} gap={'5px'} wrap={'wrap'} maxW={'100%'}>
                                        <For each={recipe.healthLabels}>
                                        {(item, index) => (
                                            <Tag key={index} backgroundColor="purple.200" fontWeight={'700'} color="purple.700" textTransform="uppercase">{item}</Tag>
                                        )}
                                        </For>
                                    </Flex>
                                }
                            </Box>
                            
                            <Box spaceY={'5px'}>
                                <Text>Diet:</Text>
                                {recipe.dietLabels.length > 0 && 
                                    <Flex direction={'row'} gap={'5px'} wrap={'wrap'} maxW={'100%'}>
                                    <For each={recipe.dietLabels}>
                                        {(item, index) => (
                                        <Tag key={index} backgroundColor="green.200" fontWeight={'700'} color="green.700" textTransform='uppercase'>{item}</Tag>
                                        )}
                                    </For>
                                    </Flex>
                                }
                            </Box>
                           
                            <Box spaceY={'5px'}>
                                <Text>Cautions:</Text>
                                {recipe.cautions.length > 0 && 
                                    <Flex direction={'row'} gap={'5px'} wrap={'wrap'} maxW={'100%'}>
                                        <For each={recipe.cautions}>
                                        {(item, index) => (
                                            <Tag key={index} backgroundColor="red.200" fontWeight={'700'} color="red.700" textTransform='uppercase'>{item}</Tag>
                                        )}
                                        </For>
                                    </Flex>
                                }
                            </Box>
                            <Box spaceY={'2px'}>
                                <Text>Total nutrients:</Text>
                                <Flex gap={'1rem'} flexWrap={'wrap'} width={'75%'}>
                                    <Box>
                                        <Text color={'gray.500'} fontWeight={'600'} fontSize={'14px'}>{Math.round(recipe.calories)}</Text>
                                        <Text textTransform={'uppercase'} fontWeight={'700'} color={'gray.600'} fontSize={'15px'}>calories</Text>
                                    </Box>
                                    <Box>
                                        <Text color={'gray.500'} fontWeight={'600'} fontSize={'14px'}>{Math.round(recipe.totalNutrients.PROCNT.quantity)} g</Text>
                                        <Text textTransform={'uppercase'} fontWeight={'700'} color={'gray.600'} fontSize={'15px'}>protein</Text>
                                    </Box>
                                    <Box>
                                        <Text color={'gray.500'} fontWeight={'600'} fontSize={'14px'}>{Math.round(recipe.totalNutrients.FAT.quantity)} g</Text>
                                        <Text textTransform={'uppercase'} fontWeight={'700'} color={'gray.600'} fontSize={'15px'}>fat</Text>
                                    </Box>
                                    <Box>
                                        <Text color={'gray.500'} fontWeight={'600'} fontSize={'14px'}>{Math.round(recipe.totalNutrients.CHOCDF.quantity)} g</Text>
                                        <Text textTransform={'uppercase'} fontWeight={'700'} color={'gray.600'} fontSize={'15px'}>carbs</Text>
                                    </Box>
                                    <Box>
                                        <Text color={'gray.500'} fontWeight={'600'} fontSize={'14px'}>{Math.round(recipe.totalNutrients.CHOLE.quantity)} mg</Text>
                                        <Text textTransform={'uppercase'} fontWeight={'700'} color={'gray.600'} fontSize={'15px'}>cholesterol</Text>
                                    </Box>
                                    <Box>
                                        <Text color={'gray.500'} fontWeight={'600'} fontSize={'14px'}>{Math.round(recipe.totalNutrients.NA.quantity)} mg</Text>
                                        <Text textTransform={'uppercase'} fontWeight={'700'} color={'gray.600'} fontSize={'15px'}>sodium</Text>
                                    </Box>
                                </Flex>
                            </Box>
                        </Box>
                    </Flex>
                </Card.Body>
                <Card.Footer>
                <Button onClick={() => clickFn('')}>Go back</Button>
                </Card.Footer>
            </Card.Root>
        </Center>
    );
}