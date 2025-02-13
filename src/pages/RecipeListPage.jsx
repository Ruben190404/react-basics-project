import { Center, Heading, Box, For, Flex, Card, Image, Text, Input } from '@chakra-ui/react';
import { Tag } from '../components/ui/tag';
import { SearchInput } from '../components/ui/searchInput';
import { data } from '../utils/data';
import { useState } from 'react';

export const RecipeListPage = ({clickFn}) => {
  // You can play around with the console log, but ultimately remove it once you are done
  //console.log(data.hits[0].recipe.label);

  //console.log(data.hits);
  const [searchResults, setSearchResults] = useState([]);

  

  return (
    <Center minH={'100vh'} flexDir="column" gap={'40px'} alignContent={'center'} backgroundColor={'gray.100'}>
      <Heading>Your Recipe App</Heading>
      <SearchInput data={data} setSearchResults={setSearchResults}/>
      <Flex direction={'row'} wrap={'wrap'} maxW={'1340px'} gap={'20px'} marginBottom={'2rem'} justifyContent={'center'}>
        <For each={!searchResults.length > 0 ? data.hits : searchResults}>
            {(item, index) => (
              <Card.Root key={index} overflow={'hidden'} width={'clamp(50px, 80vw, 320px)'} height={'auto'} maxH={'500px'} cursor={'pointer'} onClick={() => clickFn(item.recipe)} borderRadius={'15px'} boxShadow={'lg'}>
                <Image src={item.recipe.image} maxH={'200px'}/>
                <Card.Body gap={2} alignItems='center'>
                  <Text textTransform='uppercase' fontSize={'clamp(5px, 5vw, 16px)'}>{item.recipe.mealType}</Text>
                  <Card.Title textAlign={'center'} fontSize={'clamp(12px, 5vw, 18px)'} lineHeight={'unset'}>{item.recipe.label}</Card.Title>
                  <Flex gap={1}>
                    {item.recipe.healthLabels.includes('Vegan') && <Tag backgroundColor="purple.200" fontWeight={'700'} color="purple.700" textTransform='uppercase'>Vegan</Tag>}
                    {item.recipe.healthLabels.includes('Vegetarian') && <Tag backgroundColor="purple.200" fontWeight={'700'} color="purple.700" textTransform='uppercase'>Vegetarian</Tag>}
                  </Flex>
                  {item.recipe.dietLabels.length > 0 && 
                  <Flex direction={'row'} gap={1} wrap={'wrap'} maxW={'100%'} justifyContent={'center'}>
                    <For each={item.recipe.dietLabels}>
                      {(item, index) => (
                        <Tag key={index} backgroundColor="green.200" fontWeight={'700'} color="green.700" textTransform='uppercase'>{item}</Tag>
                      )}
                    </For>
                  </Flex>
                  }
                    <Text fontSize={'clamp(9px, 5vw, 16px)'}>Dish: {item.recipe.dishType} </Text>
                  {item.recipe.cautions.length > 0 && 
                  <>
                    <Text fontSize={'clamp(9px, 5vw, 16px)'}>Cautions:</Text>
                    <Flex direction={'row'} gap={'5px'} wrap={'wrap'} maxW={'100%'} justifyContent={'center'}>
                      <For each={item.recipe.cautions}>
                        {(item, index) => (
                          <Tag key={index} backgroundColor="red.200" fontWeight={'700'} color="red.700" textTransform='uppercase'>{item}</Tag>
                        )}
                      </For>
                    </Flex>
                  </>
                  }
                </Card.Body>
              </Card.Root>
            )}
        </For>
        </Flex>
    </Center>
  );
};
