import { Input } from "@chakra-ui/react";

export const SearchInput = ({data, setSearchResults}) => {
    const handleInput = () => {
        const input = document.querySelector('input');
        const value = input.value
        setSearchResults(data.hits.filter((hit) => 
          hit.recipe.label.toLowerCase().includes(value.toLowerCase()) || 
          hit.recipe.healthLabels.some(label => label.toLowerCase().includes(value.toLowerCase()))
        ));
      }

      return (
        <Input placeholder='Look up a recipe...' maxW={'400px'} width={'95vw'} backgroundColor={'white'} onInput={handleInput}/>
      )
}