import React, { useState } from 'react';
import { Input, Flex, Text, Box, Icon } from '@chakra-ui/core';

const Preview = () => {
  const [input, setInput] = useState('');
  const [showHTML, setShowHTML] = useState(false);
  const [html, setHTML] = useState('');

  const inputChanged = async (e) => {
    setInput(e.target.value);
    setHTML('<div>Test HTML</div>');
  };

  return (
    <Flex justifyContent='space-around' h='95vh' mt={4}>
      <Flex direction='column'>
        <Text textAlign='left' color='gray.500'>
          MARKDOWN
        </Text>
        <Input
          w='45vw'
          h='100%'
          as='textarea'
          resize='none'
          value={input}
          onChange={inputChanged}
          p={4}
        />
      </Flex>
      <Box w='2px' backgroundColor='gray.300' mt={4}></Box>
      <Flex direction='column' w='45vw' alignItems='start'>
        <Flex justifyContent='space-between' w='100%' alignItems='center'>
          <Text color='gray.500'>{showHTML ? 'HTML' : 'PREVIEW'}</Text>
          <Icon
            name={showHTML ? 'view-off' : 'view'}
            onClick={() => setShowHTML((s) => !s)}
          />
        </Flex>
        <Box
          borderWidth={2}
          borderColor='gray.300'
          borderStyle='solid'
          w='100%'
          h='100%'
          maxH='100%'
          textAlign='left'
          p={4}
          pt={0}
          overflow='scroll'
        >
          {showHTML ? (
            <Text>{html}</Text>
          ) : (
            <div dangerouslySetInnerHTML={{ __html: html }} />
          )}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Preview;
